/**
 * Cliente HTTP enxuto, tipado, preparado pro backend FastAPI/qualquer outro.
 *
 * Como funciona:
 * - Se `NEXT_PUBLIC_API_URL` estiver vazio, qualquer chamada retorna mock.
 * - Quando o backend existir, basta preencher a env e o app passa a chamar de verdade.
 *
 * Os módulos em `lib/api/<recurso>.ts` orquestram regras de negócio do recurso
 * (validação, formatação) antes de chamar o client.
 */

import { config } from '@/lib/config';

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public body?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
  /** Se true, retorna null silenciosamente caso não haja backend configurado. */
  allowOffline?: boolean;
}

/** Indica se há backend configurado neste ambiente. */
export function hasBackend(): boolean {
  return Boolean(config.api.baseUrl);
}

/**
 * Faz uma requisição HTTP ao backend. Lança `ApiError` em status != 2xx.
 *
 * @example
 * const data = await apiRequest<UserDTO>('/users/me');
 */
export async function apiRequest<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  if (!hasBackend()) {
    throw new ApiError(
      'Backend não configurado. Defina NEXT_PUBLIC_API_URL.',
      0,
    );
  }

  const url = `${config.api.baseUrl}${path}`;
  const { method = 'GET', body, headers = {} } = options;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await response.text();
  let payload: unknown = null;
  try {
    payload = text ? JSON.parse(text) : null;
  } catch {
    // Resposta não é JSON; mantém texto cru no payload pra debug
    payload = text;
  }

  if (!response.ok) {
    throw new ApiError(
      `Falha na requisição ${method} ${path}: HTTP ${response.status}`,
      response.status,
      payload,
    );
  }

  return payload as T;
}
