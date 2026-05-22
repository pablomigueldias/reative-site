'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { faqItems } from '@/lib/content/home';

export function FAQ(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq">
      <div className="wrap" style={{ maxWidth: 920 }}>
        <div className="section-head" style={{ gridTemplateColumns: '1fr' }}>
          <div>
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>O que a gente já ouviu antes — e a resposta clara.</h2>
          </div>
        </div>
        <div className="faq-grid">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.question}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq-toggle">
                    <Icon.Plus />
                  </span>
                </button>
                <div className="faq-a">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
