import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-net-специалист', 'Unit | Serializer | i-i-s-net-специалист', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-net-специалист',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-net-возраст',
    'transform:i-i-s-net-катег-сотруд',
    'transform:i-i-s-net-стаж',
    'transform:i-i-s-net-факторы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
