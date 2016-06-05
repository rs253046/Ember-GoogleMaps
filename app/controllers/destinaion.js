import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  	addressSubmit: function() {
  		console.info('po',this.get('destination'), this.get('startPoint'));
  		console.info('po',this.get('intermediatePoint'));
  		return {start:this.get('startPoint'), waypoint:this.get('intermediatePoint'),end:this.get('destination')}
  	}
  }
});
