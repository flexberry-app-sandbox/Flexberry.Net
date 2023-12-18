import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтажEnum from '../enums/i-i-s-net-стаж';

export default FlexberryEnum.extend({
  enum: СтажEnum,
  sourceType: 'IIS.Net.Стаж'
});
