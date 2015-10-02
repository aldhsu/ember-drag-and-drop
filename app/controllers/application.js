import Ember from 'ember';

export default Ember.Controller.extend({
  models: [{value: "world1"}, {value: "hello1"}],
  models2: [{value: "world2"}, {value: "hello2"}],
  sendingCollection: undefined
});
