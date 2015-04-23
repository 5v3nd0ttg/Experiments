// Begin the actual module by importing the requirements for the module
import { components } from 'engine/data-model/components';
import { button     } from 'engine/controllers/components/button';
import { combobox   } from 'engine/controllers/components/combobox';

// Declare that the module loaded and its imports that will occur
$('.rollbar').append('<br/>loading controllers/input/mousemove.js [::components,button,combobox]');

// Keep track of the mouse location on the canvas
export function mousemove(e){
  e.x = e.x || e.clientX || e.offsetX;
  e.y = e.y || e.clientY || e.offsetY;
  components.forEach(function(c,i){
    var r=c();
    if(e.x>r.x&&e.y>r.y&&e.x<r.x+r.w&&e.y<r.y+r.h){
      if(!c.v){
        c.v=r.v=true;
        if(r.type=='button')button.draw(r);
        if(r.type=='combobox')combobox.draw(r);
      } //end if
    }else if(c.v){
      c.v=r.v=false;
      if(r.type=='button')button.draw(r);
      if(r.type=='combobox')combobox.draw(r);
    }
  });
}
