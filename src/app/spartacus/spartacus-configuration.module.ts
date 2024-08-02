import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://localhost:9002',
      }
    },
    context: {
      urlParameters: ['baseSite', 'language', 'currency'],
      baseSite: ['electronics-spa', 'apparel-uk-spa'],
      currency: ['USD', 'GBP',]
    },
    pwa: {
      enabled: true,
      addToHomeScreen: true,
    }
  }), provideConfig(<SiteContextConfig>{
    context: {},
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '2211.25'
    }
  }), provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://localhost:9002',
      }
    },
  })]
})
export class SpartacusConfigurationModule { }
