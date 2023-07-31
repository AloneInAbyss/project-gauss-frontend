import {
  TranslocoTestingModule,
  TranslocoTestingOptions
} from '@ngneat/transloco';
import en from '../../../assets/i18n/en.json';
import pt from '../../../assets/i18n/pt.json';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { en, pt },
    translocoConfig: {
      availableLangs: ['en', 'pt'],
      defaultLang: 'en'
    },
    preloadLangs: true,
    ...options
  });
}
