import type {
  ContactFormData,
  ContactFormErrors,
  ContactSubmitResult,
} from '@/lib/types';
import { apiRequest, hasBackend } from './client';

/**
 * Valida os campos do formulário de contato.
 * Devolve um objeto de erros vazio se tudo OK.
 */
export function validateContact(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.nome.trim()) {
    errors.nome = 'Como podemos te chamar?';
  }
  if (!data.email.includes('@') || !data.email.includes('.')) {
    errors.email = 'E-mail inválido';
  }
  if (!data.mensagem.trim()) {
    errors.mensagem = 'Conte um pouco do que precisa';
  } else if (data.mensagem.trim().length < 10) {
    errors.mensagem = 'Pode dar uns detalhes a mais? Pelo menos 10 caracteres.';
  }

  return errors;
}

/**
 * Envia o formulário de contato.
 *
 * Estratégia atual:
 * 1. Sempre chama o endpoint interno `/api/contact` do Next.js (sem CORS).
 * 2. Esse endpoint, por sua vez, decide:
 *    - Se houver backend (FastAPI), repassa pra lá
 *    - Se não houver, salva log no servidor e retorna ok
 *
 * Isso permite trocar destino sem mexer no componente.
 */
export async function submitContact(
  data: ContactFormData,
): Promise<ContactSubmitResult> {
  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return { ok: false, error: 'Dados inválidos', errors };
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      return {
        ok: false,
        error:
          (typeof body?.error === 'string' && body.error) ||
          'Não conseguimos enviar agora. Tenta de novo em alguns minutos?',
      };
    }

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error:
        'Não conseguimos enviar agora. Tenta de novo ou fala com a gente no WhatsApp.',
    };
  }
}

/**
 * Função usada APENAS pelo servidor (route handler) pra encaminhar
 * a submissão pro backend, quando ele existir.
 */
export async function forwardContactToBackend(
  data: ContactFormData,
): Promise<void> {
  if (!hasBackend()) {
    // Em desenvolvimento, sem backend: só loga e segue.
    // Quando backend existir, esse caminho fica obsoleto.
    console.log('[contact:mock] Lead recebido:', data);
    return;
  }

  await apiRequest<{ id: string }>('/leads', {
    method: 'POST',
    body: data,
  });
}
