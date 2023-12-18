import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNetАнкетыLForm from './forms/i-i-s-net-анкеты-l';
import IISNetПричинУвольнLForm from './forms/i-i-s-net-причин-увольн-l';
import IISNetСпециалистLForm from './forms/i-i-s-net-специалист-l';
import IISNetАнкетыEForm from './forms/i-i-s-net-анкеты-e';
import IISNetПричинУвольнEForm from './forms/i-i-s-net-причин-увольн-e';
import IISNetСпециалистEForm from './forms/i-i-s-net-специалист-e';
import IISNetАнкетыModel from './models/i-i-s-net-анкеты';
import IISNetОценПричУвольнModel from './models/i-i-s-net-оцен-прич-увольн';
import IISNetПричинУвольнModel from './models/i-i-s-net-причин-увольн';
import IISNetРекомендацModel from './models/i-i-s-net-рекомендац';
import IISNetСпециалистModel from './models/i-i-s-net-специалист';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-net-анкеты': IISNetАнкетыModel,
    'i-i-s-net-оцен-прич-увольн': IISNetОценПричУвольнModel,
    'i-i-s-net-причин-увольн': IISNetПричинУвольнModel,
    'i-i-s-net-рекомендац': IISNetРекомендацModel,
    'i-i-s-net-специалист': IISNetСпециалистModel
  },

  'application-name': 'Net',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Net',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Net',
          title: 'Net'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        net: {
          caption: 'Net',
          title: 'Net',
          'i-i-s-net-анкеты-l': {
            caption: 'Анкеты',
            title: ''
          },
          'i-i-s-net-причин-увольн-l': {
            caption: 'Причин увольн',
            title: ''
          },
          'i-i-s-net-специалист-l': {
            caption: 'Специалист',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-net-анкеты-l': IISNetАнкетыLForm,
    'i-i-s-net-причин-увольн-l': IISNetПричинУвольнLForm,
    'i-i-s-net-специалист-l': IISNetСпециалистLForm,
    'i-i-s-net-анкеты-e': IISNetАнкетыEForm,
    'i-i-s-net-причин-увольн-e': IISNetПричинУвольнEForm,
    'i-i-s-net-специалист-e': IISNetСпециалистEForm
  },

});

export default translations;
