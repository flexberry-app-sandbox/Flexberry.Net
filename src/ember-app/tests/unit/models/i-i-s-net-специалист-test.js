import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-net-специалист', 'Unit | Model | i-i-s-net-специалист', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-net-анкеты',
    'model:i-i-s-net-оцен-прич-увольн',
    'model:i-i-s-net-причин-увольн',
    'model:i-i-s-net-рекомендац',
    'model:i-i-s-net-специалист',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
