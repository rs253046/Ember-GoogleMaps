import Ember from 'ember';

export default Ember.Controller.extend({

 drectionDisplay:null,
 directionsService: new google.maps.DirectionsService(),
 map: null,
 actions: {
     transit (par) {
     	this.transitionToRoute('destinaion', par);
     }


 }
});
