import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Import only Turkish translations
import tr from '../locales/tr.json';

i18n.translations = {
  tr,
};

const deviceLanguage = Localization.locale.split('-')[0];

// If device language is Turkish (tr), switch automatically
i18n.locale = deviceLanguage === 'tr' ? 'tr' : 'en';

// English is default fallback
i18n.fallbacks = true;

export default i18n;
