import { Meteor } from 'meteor/meteor';
import publications from './publications';
import methods from './methods';
publications();
methods();

Meteor.startup(() => {
  // code to run on server at startup
});
// import publications from './publications';
// import methods from '.methods';

// publications ();
//methods ();
