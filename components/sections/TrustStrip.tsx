import { RenderIcon } from '@/components/ui/Icon';
import { trustItems } from '@/lib/content/home';

export function TrustStrip(): JSX.Element {
  return (
    <div className="trust-strip">
      <div className="wrap trust-strip-inner">
        <div className="trust-label">// O que você pode esperar</div>
        <div className="trust-items">
          {trustItems.map((item) => (
            <div className="trust-item" key={item.label}>
              <RenderIcon name={item.iconKey} width={16} height={16} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
