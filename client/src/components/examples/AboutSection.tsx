import { AboutSection } from '../AboutSection';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

export default function AboutSectionExample() {
  return (
    <I18nextProvider i18n={i18n}>
      <AboutSection />
    </I18nextProvider>
  );
}
