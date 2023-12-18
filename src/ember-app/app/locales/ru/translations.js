import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Net',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Net',
          title: 'Net'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
