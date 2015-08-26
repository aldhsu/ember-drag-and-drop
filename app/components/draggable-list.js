import Ember from 'ember';

export default Ember.Component.extend({
  models: undefined,
  tagName: "ul",
  actions: {
    dragStartAction(model) {
      this.set("sendingCollection", this.get("models"));
      this.set("movingModel", model);
    },
    dropAction(model) {
      const models = this.get("models");
      const movingModel = this.get("movingModel");

      const position = models.indexOf(model);
      this.get("sendingCollection").removeObject(movingModel);
      models.insertAt(position, movingModel);
      this.set("sendingCollection", undefined);
      this.set("movingModel", undefined);
    }
  }
});
