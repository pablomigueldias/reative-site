# Reative Systems — Site institucional

Site oficial da Reative Systems, construído em **Next.js 14 (App Router) + TypeScript**.

Originalmente desenhado em HTML + CSS + React-via-Babel-no-navegador, foi migrado para
uma arquitetura Next.js profissional, com camada de conteúdo separada da camada de
apresentação e preparada para integração com backend (FastAPI, CMS, etc).

---

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Copiar variáveis de ambiente (opcional para dev)
cp .env.example .env.local

# 3. Subir em modo dev (http://localhost:3000)
npm run dev

# 4. Build de produção
npm run build
npm start

# 5. Outros comandos úteis
npm run lint         # ESLint
npm run type-check   # TypeScript sem emitir
```

**Requisitos:** Node.js ≥ 18.17

---

## 📁 Estrutura

```
reative-systems/
│
├── app/                          # Rotas (App Router do Next.js 14)
│   ├── layout.tsx                # Root layout (next/font, metadata global)
│   ├── page.tsx                  # Homepage (compõe todas as seções)
│   ├── not-found.tsx             # Página 404 customizada
│   ├── globals.css               # Design system completo (CSS variables + classes)
│   │
│   ├── servicos/[slug]/page.tsx  # Rota dinâmica de serviço (gera 4 páginas estáticas)
│   ├── blog/[slug]/page.tsx      # Rota dinâmica de blog post
│   ├── privacidade/page.tsx      # /privacidade
│   ├── termos/page.tsx           # /termos
│   │
│   └── api/contact/route.ts      # POST /api/contact (recebe form e encaminha)
│
├── components/
│   ├── ui/                       # Atômicos (Icon, BrandMark)
│   ├── layout/                   # Nav, Footer (compartilhados em todas as páginas)
│   ├── sections/                 # Seções da home (Hero, Pricing, FAQ, Contact, etc.)
│   ├── service/ServicePage.tsx   # Layout de uma página de serviço
│   ├── legal/LegalPage.tsx       # Layout das páginas legais
│   └── post/PostPage.tsx         # Layout de um post de blog
│
├── lib/
│   ├── config.ts                 # Configuração central tipada (env vars)
│   ├── types.ts                  # Tipos de domínio compartilhados
│   ├── text.tsx                  # renderAccented — parser do marker [[...]]
│   │
│   ├── content/                  # 🔑 Camada de conteúdo (separada da apresentação)
│   │   ├── services.ts           # Conteúdo das 4 páginas de serviço
│   │   ├── home.ts               # Trust, Method, Valores, Stack, Pricing, FAQ, Blog
│   │   ├── legal.tsx             # Privacidade e Termos
│   │   └── posts.tsx             # Conteúdo dos posts de blog
│   │
│   └── api/                      # 🔌 Camada de API (preparada pro backend)
│       ├── client.ts             # Cliente HTTP tipado com hasBackend()
│       └── contact.ts            # Validação + envio do formulário
│
├── next.config.mjs               # Headers de segurança + redirects de URLs antigas
├── tsconfig.json                 # TypeScript strict mode + paths @/* alias
├── .eslintrc.json
├── .env.example                  # Documentação das envs esperadas
└── .gitignore
```

---

## 🎨 Design system

O CSS em `app/globals.css` é um **design system completo**, preservado do projeto
original. Trabalha com:

- **OKLCH color space** — mais consistente perceptualmente que HSL/RGB
- **CSS variables** para tudo (cores, tipografia, raios, sombras)
- **Cor de marca:** `--brand: oklch(0.68 0.19 38)` (laranja)
- **Tipografia:** Space Grotesk (display) + Manrope (body) + JetBrains Mono (mono)

Os fontes são carregados via **`next/font/google`** (auto-otimização, zero layout shift,
auto-self-host em produção). Cada um exporta uma CSS var (`--font-display-loaded`, etc.)
que é consumida em `globals.css`.

### Por que não Tailwind?
O CSS existente já era um design system maduro e coerente. Reescrever em Tailwind seria
demolir trabalho bem feito. Convive bem com Next.js — global CSS é importado uma vez no
layout raiz.

---

## 🧱 Padrões arquiteturais

### 1. Conteúdo separado de apresentação

Toda a copy do site mora em `lib/content/`. Componentes em `components/` só fazem
**renderização**, nunca conhecem o texto. Isso garante que:

- **Trocar texto não exige tocar em componente.**
- **Quando vier um CMS (Sanity, Strapi, Notion API),** os módulos `lib/content/*.ts` viram
  funções `async` que fazem fetch — mas os componentes não mudam.
- **Toda copy é tipada** — adicionar um campo novo no conteúdo gera erro de tipo nos
  componentes que precisam exibir, te avisando.

### 2. Marker `[[texto]]` para destaques

Em vez de hardcodar JSX no conteúdo (`<>Sites que <span class="accent">vendem</span></>`),
os textos usam strings com marker:

```ts
title: 'Sites que [[vendem]] de verdade'
```

E o helper `renderAccented()` em `lib/text.tsx` transforma em `<span class="accent">vendem</span>`.

**Por quê?** Porque CMS devolvem strings, não JSX. Quando migrar a copy pro CMS, nada
muda no componente.

### 3. Camada de API preparada para backend

Em `lib/api/client.ts`:

```ts
// Se NEXT_PUBLIC_API_URL estiver vazio, hasBackend() → false (modo mock)
// Quando preencher, todas as chamadas vão pro backend
export function hasBackend(): boolean { ... }
export async function apiRequest<T>(path, opts): Promise<T> { ... }
```

O formulário de contato hoje:

1. Cliente faz `POST /api/contact` (rota interna do Next.js).
2. O route handler em `app/api/contact/route.ts` valida e chama `forwardContactToBackend()`.
3. `forwardContactToBackend()` — se houver backend, faz `POST /leads`. Senão, só loga.

**Para ligar no backend:**
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.reativesystems.com.br
```
E a função vai começar a chamar `POST $API_URL/leads`. Zero refactor.

### 4. Server Components por default, Client só onde precisa

Componentes que **precisam de estado/hooks** (Nav scroll, Pricing toggle, FAQ accordion,
Contact form) têm `'use client'` no topo. Todo o resto é Server Component (mais leve,
faz menos JS chegar no cliente).

### 5. Rotas dinâmicas com SSG

`/servicos/[slug]` e `/blog/[slug]` usam `generateStaticParams()` — no build, o Next.js
**pré-renderiza HTML estático** pra cada slug existente. Carrega instantâneo, SEO
perfeito, escala sem servidor.

---

## ➕ Como adicionar conteúdo

### Novo serviço

1. Adicione a chave em `lib/types.ts`:
   ```ts
   export type ServiceSlug = 'automacao' | 'sites' | 'suporte' | 'consultoria' | 'novo-servico';
   ```
2. Adicione o objeto em `lib/content/services.ts`:
   ```ts
   'novo-servico': {
     slug: 'novo-servico',
     eyebrow: 'Serviço · Novo',
     // ... (TypeScript vai te guiar)
   }
   ```
3. Adicione o card em `homeServiceCards` (mesmo arquivo).
4. Pronto — a rota `/servicos/novo-servico` existe automaticamente.

### Novo post de blog

1. Adicione no `blogPosts` (em `lib/content/home.ts`) o resumo que aparece na home.
2. Adicione o post completo em `lib/content/posts.tsx` no `blogPostsFull`.
3. A rota `/blog/<slug>` é gerada automaticamente.

### Mudar texto da home

Edite o objeto correspondente em `lib/content/home.ts`. Componentes consomem direto.

### Mudar uma FAQ ou plano

`lib/content/home.ts` → `faqItems[]` ou `pricingPlans[]`.

---

## 🔌 Conectando o backend (futuro)

Quando o backend FastAPI estiver pronto:

### 1. Defina o endpoint de leads

```python
# FastAPI exemplo
@app.post("/leads")
def create_lead(data: ContactFormData):
    # ... salva no banco
    return {"id": "abc123"}
```

### 2. Configure a env

```bash
NEXT_PUBLIC_API_URL=https://api.reativesystems.com.br
```

### 3. Restart o Next.js

`forwardContactToBackend()` em `lib/api/contact.ts` já está pronto pra chamar
`POST $API_URL/leads`. Nada mais precisa mudar.

### Para outros recursos (ex: lista de serviços vinda do CMS)

1. Crie `lib/api/services.ts` que use `apiRequest('/services')`.
2. Em vez de importar de `lib/content/services.ts`, importe da API.
3. Use Server Components com `await` direto, sem `useEffect`.

---

## 🌐 SEO e performance

- ✅ **SSG** em todas as páginas estáticas e dinâmicas (HTML pronto no build)
- ✅ **Metadata** dinâmico por página (`generateMetadata`) com OG e Twitter Cards
- ✅ **next/font** com `display: swap` e self-host automático (sem FOUT)
- ✅ **Headers de segurança** (`X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`) configurados em `next.config.mjs`
- ✅ **Redirects 301** das URLs antigas (`.html`) pras novas — preserva SEO
- ✅ **`prefers-reduced-motion`** respeitado no CSS

Build atual roda em ~7 segundos e produz First Load JS de ~100kb gzip — bem dentro
do orçamento moderno.

---

## 📞 Variáveis de ambiente

Veja `.env.example`. As principais:

| Variável | Obrigatória | Descrição |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | sim em prod | URL pública (sem barra final) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | sim | Número WhatsApp Business, formato `5511999999999` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | sim | E-mail de contato |
| `NEXT_PUBLIC_API_URL` | quando houver backend | URL da API (vazio = modo mock) |
| `API_SECRET` | quando houver backend | Token server-only (nunca prefixe `NEXT_PUBLIC_`) |
| `NEXT_PUBLIC_GA_ID` | opcional | ID Google Analytics |
| `NEXT_PUBLIC_META_PIXEL_ID` | opcional | ID Pixel do Meta |

⚠️ **Regra de ouro:** tudo que tem `NEXT_PUBLIC_` vai pro bundle do cliente.
Tokens secretos vão **sem** o prefixo (ficam só no servidor).

---

## 🚢 Deploy

Recomendado: **Vercel** (deploy automático em cada push, edge network, zero config).

```bash
# Vercel CLI
npm i -g vercel
vercel
```

Outras opções: AWS (Amplify ou EC2 + PM2), Railway, Fly.io, Cloudflare Pages.

No Vercel, configure as env vars no painel. Em ambiente local, use `.env.local`.

---

## 🧪 Próximos passos sugeridos

1. **Imagens** — substituir os `post-cover-*` (CSS gradient) por imagens reais usando
   `next/image` (otimização automática, lazy loading).
2. **Sitemap** — adicionar `app/sitemap.ts` pra gerar `/sitemap.xml` automaticamente.
3. **Robots.txt** — adicionar `app/robots.ts`.
4. **Analytics** — wire `NEXT_PUBLIC_GA_ID` numa lib `lib/analytics.ts`.
5. **Testes** — Vitest + Testing Library pros componentes interativos (FAQ, Pricing,
   Contact form).
6. **CMS** — quando o conteúdo crescer, migrar `lib/content/` pra Sanity/Strapi/Notion.

---

© Reative Systems · Reativando seu negócio
