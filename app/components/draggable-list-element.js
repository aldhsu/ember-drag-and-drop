import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  attributeBindings: ["draggable"],
  draggable: true,
  dragStart(event) {
    this.attrs.dragStartAction(this.get("model"));
  },
  dragEnd(event) {
    // debugger
  },
  dragEnter(e) {
    e.preventDefault();
  }, 
  dragLeave(e) {
    e.preventDefault();
  },
  dragOver(e) {
    e.preventDefault();
  },
  drop(event) {
    this.attrs.dropAction(this.get("model"));
  },
});
