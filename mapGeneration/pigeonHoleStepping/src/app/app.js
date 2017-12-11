import {Easel} from './vendor/easel';
import {PHS} from './pigeonHoleStepping';

let noscript = document.getElementById('noscript');

if(!Easel.activated){
  noscript.innerHTML = `
  <p class="browsehappy">
    You are using an outdated browser. Please
    <a href="http://browsehappy.com/"> upgrade your browser</a>
    to improve your experience.
    <span style="color:red;"><br/>Canvas isn't supported in your browser.</span>
  </p>`;
}else{
  let map = new Map(41,41);

  PHS(map); //perform pigeon hole stepping
  Easel.onDraw = function(){
    let rh = v.h/map.height, rw = v.w/map.width;

    map.sectors.forEach((row,y)=>{
      row.forEach((sector,x)=>{
        if(sector.isEmpty()){
          ctx.fillStyle='#000';
        }else if(sector.isWall()){
          ctx.fillStyle='#333';
        }else if(sector.isDoor()){
          ctx.fillStyle='#f84';
        }else if(sector.isCorridor()){
          ctx.fillStyle='#883';
        }else{ //floor
          ctx.fillStyle='#383';
        } //end if

        // the -0.4 & +0.8 is to remove sub-pixel issues
        // that might cause lines to appear between cells
        ctx.fillRect(x*rw-0.4,y*rh-0.4,rw+0.8,rh+0.8);
      });
    });
  };
  Easel.redraw();
} //end if
