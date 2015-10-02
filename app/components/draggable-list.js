import Ember from 'ember';

export default Ember.Component.extend({
  models: undefined,
  tagName: "ul",
  dragEnter(e) {
    e.preventDefault();
  }, 
  dragLeave(e) {
    e.preventDefault();
  },
  dragOver(e) {
    e.preventDefault();
  },
  drop() {
    this.send("dropOnList");
  },
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
    },

    dropOnList() {
      const models = this.get("models");
      const movingModel = this.get("movingModel");

      if (this.get("sendingCollection")) { 
        this.get("sendingCollection").removeObject(movingModel);
      }
      models.pushObject(movingModel);
    }
  }
});
