import { ContactForm } from '../ContactForm';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

export default function ContactFormExample() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="p-8 max-w-2xl">
        <ContactForm />
      </div>
    </I18nextProvider>
  );
}
