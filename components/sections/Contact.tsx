'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Icon } from '@/components/ui/Icon';
import { submitContact } from '@/lib/api/contact';
import { config, whatsappUrl } from '@/lib/config';
import type { ContactFormData, ContactFormErrors } from '@/lib/types';

const INITIAL_FORM: ContactFormData = {
  nome: '',
  empresa: '',
  email: '',
  telefone: '',
  servico: '',
  mensagem: '',
};

export function Contact(): JSX.Element {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const update =
    (field: keyof ContactFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    const result = await submitContact(form);

    setSubmitting(false);

    if (result.ok) {
      setSent(true);
      setErrors({});
    } else {
      setErrors(result.errors ?? {});
      setSubmitError(result.error);
    }
  };

  return (
    <section className="contact-section" id="contato">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <span className="eyebrow">Bora conversar</span>
            <h2>Conta o que está dando trabalho.</h2>
            <p className="lede">
              Mande mensagem do jeito que for mais fácil. A primeira conversa é
              gratuita, dura 30 minutos e a gente já sai dela com uma direção
              pra você seguir — contratando ou não.
            </p>

            <div className="contact-channels">
              <a
                href={whatsappUrl(
                  'Oi! Quero saber mais sobre a Reative Systems',
                )}
                className="contact-channel primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-channel-icon">
                  <Icon.WhatsApp width={22} height={22} />
                </div>
                <div className="contact-channel-text">
                  <strong>WhatsApp · resposta em até 4h úteis</strong>
                  <span>{config.contact.phone} · seg a sex, 8h às 18h</span>
                </div>
                <div className="contact-channel-arrow">
                  <Icon.Arrow />
                </div>
              </a>
              <a href="#agendar" id="agendar" className="contact-channel">
                <div className="contact-channel-icon">
                  <Icon.Calendar />
                </div>
                <div className="contact-channel-text">
                  <strong>Agendar reunião de 30 min</strong>
                  <span>Quartas e sextas · video-call gratuita</span>
                </div>
                <div className="contact-channel-arrow">
                  <Icon.Arrow />
                </div>
              </a>
              <a
                href={`mailto:${config.contact.email}`}
                className="contact-channel"
              >
                <div className="contact-channel-icon">
                  <Icon.Mail />
                </div>
                <div className="contact-channel-text">
                  <strong>{config.contact.email}</strong>
                  <span>Pra propostas, RFP e parcerias</span>
                </div>
                <div className="contact-channel-arrow">
                  <Icon.Arrow />
                </div>
              </a>
              <a href={`tel:${config.contact.phoneDigits}`} className="contact-channel">
                <div className="contact-channel-icon">
                  <Icon.Phone />
                </div>
                <div className="contact-channel-text">
                  <strong>{config.contact.phone}</strong>
                  <span>Telefone fixo · horário comercial</span>
                </div>
                <div className="contact-channel-arrow">
                  <Icon.Arrow />
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {sent ? (
              <div className="form-success">
                <strong>Mensagem enviada ✓</strong>
                Obrigado, {form.nome.split(' ')[0]}! A gente responde no
                e-mail {form.email} em até 4 horas úteis. Se for urgente, manda
                no WhatsApp.
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="nome">Seu nome *</label>
                    <input
                      id="nome"
                      value={form.nome}
                      onChange={update('nome')}
                      placeholder="Como te chamamos"
                      autoComplete="name"
                    />
                    {errors.nome && <span className="form-error">{errors.nome}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="empresa">Empresa</label>
                    <input
                      id="empresa"
                      value={form.empresa}
                      onChange={update('empresa')}
                      placeholder="Nome do seu negócio"
                      autoComplete="organization"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="voce@empresa.com.br"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <span className="form-error">{errors.email}</span>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="telefone">WhatsApp</label>
                    <input
                      id="telefone"
                      value={form.telefone}
                      onChange={update('telefone')}
                      placeholder="(00) 00000-0000"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="servico">Sobre o que é? *</label>
                  <select
                    id="servico"
                    value={form.servico}
                    onChange={update('servico')}
                  >
                    <option value="">Selecione...</option>
                    <option>Site ou sistema novo</option>
                    <option>Automação de processo</option>
                    <option>Suporte de TI mensal</option>
                    <option>Consultoria / diagnóstico</option>
                    <option>Outro / não sei ainda</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="mensagem">Conta um pouco *</label>
                  <textarea
                    id="mensagem"
                    value={form.mensagem}
                    onChange={update('mensagem')}
                    placeholder="Pode ser direto: 'meu site tá lento', 'preciso parar de copiar pedido na mão', etc."
                    rows={4}
                  />
                  {errors.mensagem && (
                    <span className="form-error">{errors.mensagem}</span>
                  )}
                </div>

                {submitError && (
                  <div className="form-error" style={{ marginBottom: 12 }}>
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ justifyContent: 'center', width: '100%' }}
                  disabled={submitting}
                >
                  {submitting ? 'Enviando…' : 'Enviar mensagem'}
                  <Icon.Arrow className="btn-icon" />
                </button>
                <p className="form-disclosure">
                  Ao enviar, você concorda em ser contatado pela Reative Systems.
                  A gente não envia spam, juramos.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
