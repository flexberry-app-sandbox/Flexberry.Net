import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВозрастEnum from '../enums/i-i-s-net-возраст';

export default FlexberryEnum.extend({
  enum: ВозрастEnum,
  sourceType: 'IIS.Net.Возраст'
});
