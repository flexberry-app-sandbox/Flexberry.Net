import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.net.caption'),
          title: i18n.t('forms.application.sitemap.net.title'),
          children: [{
            link: 'i-i-s-net-анкеты-l',
            caption: i18n.t('forms.application.sitemap.net.i-i-s-net-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.net.i-i-s-net-анкеты-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-net-причин-увольн-l',
            caption: i18n.t('forms.application.sitemap.net.i-i-s-net-причин-увольн-l.caption'),
            title: i18n.t('forms.application.sitemap.net.i-i-s-net-причин-увольн-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-net-специалист-l',
            caption: i18n.t('forms.application.sitemap.net.i-i-s-net-специалист-l.caption'),
            title: i18n.t('forms.application.sitemap.net.i-i-s-net-специалист-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})