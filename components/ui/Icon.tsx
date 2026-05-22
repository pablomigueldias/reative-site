import type { SVGProps } from 'react';
import type { IconKey } from '@/lib/types';

/**
 * Ícones SVG inline. Todos aceitam `width`/`height` via props.
 *
 * Por que SVG inline e não <Image>?
 * - Estes são ícones de UI (16-24px), trocam cor por currentColor
 * - <Image> seria overkill (rede + cache) pra ícones decorativos
 * - Tree-shakeable: o bundler descarta os não usados
 */

type IconProps = SVGProps<SVGSVGElement>;

const baseStrokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const Icon: Record<IconKey, (props: IconProps) => JSX.Element> = {
  Arrow: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  ArrowUpRight: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  ),
  WhatsApp: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  ),
  Calendar: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  Mail: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
  Check: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} strokeWidth={2.5} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  Plus: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} strokeWidth={2.5} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Shield: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Clock: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  Zap: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
  Heart: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <path d="M19 14c1.5-1.5 3-3.5 3-6a4 4 0 0 0-7-2.7A4 4 0 0 0 8 5c-2.5 0-4.5 1.5-6 3a8 8 0 0 0 0 11l9 9 9-9c1.5-1.5 3-3.5 3-6" />
    </svg>
  ),
  Code: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
    </svg>
  ),
  Workflow: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h6a3 3 0 0 1 3 3v6" />
      <path d="M15 18H9a3 3 0 0 1-3-3V9" />
    </svg>
  ),
  Headset: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <path d="M3 12a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2v-7h5" />
      <path d="M3 18v-6h5v7H6a3 3 0 0 1-3-3z" />
    </svg>
  ),
  Compass: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z" />
    </svg>
  ),
  Phone: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Linkedin: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  ),
  Instagram: (props) => (
    <svg viewBox="0 0 24 24" {...baseStrokeProps} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
};

/**
 * Componente helper: renderiza ícone pela chave (útil pra dados vindos de content).
 *
 * @example
 * <RenderIcon name="WhatsApp" width={20} height={20} />
 */
export function RenderIcon({
  name,
  ...props
}: { name: IconKey } & IconProps): JSX.Element {
  const Component = Icon[name];
  return <Component {...props} />;
}
