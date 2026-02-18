import { NewsletterSection } from '../NewsletterSection';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

export default function NewsletterSectionExample() {
  return (
    <I18nextProvider i18n={i18n}>
      <NewsletterSection />
    </I18nextProvider>
  );
}
