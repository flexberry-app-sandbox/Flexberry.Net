import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-net-анкеты-l');
  this.route('i-i-s-net-анкеты-e',
  { path: 'i-i-s-net-анкеты-e/:id' });
  this.route('i-i-s-net-анкеты-e.new',
  { path: 'i-i-s-net-анкеты-e/new' });
  this.route('i-i-s-net-причин-увольн-l');
  this.route('i-i-s-net-причин-увольн-e',
  { path: 'i-i-s-net-причин-увольн-e/:id' });
  this.route('i-i-s-net-причин-увольн-e.new',
  { path: 'i-i-s-net-причин-увольн-e/new' });
  this.route('i-i-s-net-специалист-l');
  this.route('i-i-s-net-специалист-e',
  { path: 'i-i-s-net-специалист-e/:id' });
  this.route('i-i-s-net-специалист-e.new',
  { path: 'i-i-s-net-специалист-e/new' });
});

export default Router;
