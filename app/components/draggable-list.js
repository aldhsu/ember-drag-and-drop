import Ember from 'ember';

export default Ember.Component.extend({
  models: ["world", "hello", "my", "first", "drag", "and", "drop"],
  tagname: "p",
  actions: {
    dragStartAction(model) {
      this.set("movingModel", model);
    },
    dropAction(model) {
      const models = this.get("models");
      const movingModel = this.get("movingModel");
      models.removeObject(movingModel);

      const position = models.indexOf(model);
      models.insertAt(position, movingModel);
      this.set("movingModel", undefined);
    }
  }
});
