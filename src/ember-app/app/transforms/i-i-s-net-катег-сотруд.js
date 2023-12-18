import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КатегСотрудEnum from '../enums/i-i-s-net-катег-сотруд';

export default FlexberryEnum.extend({
  enum: КатегСотрудEnum,
  sourceType: 'IIS.Net.КатегСотруд'
});
