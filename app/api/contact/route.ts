import { NextResponse } from 'next/server';
import { forwardContactToBackend, validateContact } from '@/lib/api/contact';
import type { ContactFormData } from '@/lib/types';

/**
 * POST /api/contact
 *
 * Recebe o formulário, valida no servidor (importante: nunca confie só no client),
 * e encaminha pro backend via forwardContactToBackend.
 *
 * Se NEXT_PUBLIC_API_URL estiver vazio, o forward só loga no console — útil
 * em dev. Quando o backend FastAPI existir, basta preencher a env.
 */
export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Corpo inválido: esperado JSON' },
      { status: 400 },
    );
  }

  if (!isContactFormData(body)) {
    return NextResponse.json(
      { error: 'Campos obrigatórios ausentes ou em formato inválido' },
      { status: 400 },
    );
  }

  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: 'Dados inválidos', errors },
      { status: 422 },
    );
  }

  try {
    await forwardContactToBackend(body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/contact] Falha ao processar lead:', err);
    return NextResponse.json(
      {
        error:
          'Não conseguimos processar agora. Tenta de novo em alguns minutos.',
      },
      { status: 502 },
    );
  }
}

/**
 * Type guard que verifica se o body recebido tem o shape de ContactFormData.
 * Importante pra não confiar cegamente em payload externo.
 */
function isContactFormData(value: unknown): value is ContactFormData {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.nome === 'string' &&
    typeof v.empresa === 'string' &&
    typeof v.email === 'string' &&
    typeof v.telefone === 'string' &&
    typeof v.servico === 'string' &&
    typeof v.mensagem === 'string'
  );
}
