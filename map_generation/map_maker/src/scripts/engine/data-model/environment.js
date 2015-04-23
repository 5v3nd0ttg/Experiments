// Begin the actual module by importing its requirements
import { jQuery } from 'vendor/jquery-2.1.3.min';
import { loader } from 'engine/controllers/components/loader';

// Declare that the module loaded and its imports
$('.rollbar').append('<br/>loading data-model/environment.js [::jQuery,loader]');

// Export the environment which is asynchronously loaded from the server
var environment = function(){};
$.ajax('http://localhost:5000/world/environments/')
  .done(function(res,status){
    if(status==='success'){
      environment.data = res;
      loader.environments.done(res); //pass response obj to loader
    }else{
      console.log('Environment resource error: ',arguments);
    } //end if
  });
export { environment };
