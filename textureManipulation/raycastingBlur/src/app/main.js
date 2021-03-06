import {easel} from './app';

// Execute the main function, blurring the textures
export function main() {
  let img1,img2,blend,t1,t2,
      sx = Math.floor(v.w/5),
      sy = Math.floor(v.h/5),
      w = Math.floor(v.w/5*3),
      h = Math.floor(v.h/5*3),
      s = w/4, //spread radius
      r = w/2; //blur radius

  ctx.fillStyle = '#f00';
  ctx.fillRect(sx,sy,w,h);
  img1 = ctx.getImageData(sx,sy,w,h);
  ctx.fillStyle = '#00f';
  ctx.fillRect(sx,sy,w,h);
  img2 = ctx.getImageData(sx,sy,w,h);
  blend = ctx.getImageData(sx,sy,w,h);
  t1 = performance.now();
  for(let i=0,x,y,bk,ox=sx+w/2,oy=sy+h/2;i<blend.data.length;i++){
    if(i%4===0){ //limit needless calculations to per pixel distance
      x = Math.floor(i/4)%w; //image data contains 4 entries per pixel: r,g,b,a
      y = Math.floor(Math.floor(i/4)/w);
      bk = (Math.sqrt(Math.pow(ox-x-sx,2)+Math.pow(oy-y-sy,2))-s)/(r-s);
    } //end if
    blend.data[i] = img1.data[i]*(1-bk)+img2.data[i]*bk;
  } //end for
  t2 = performance.now();
  ctx.putImageData(blend,sx,sy);
  console.info(`Image processed in ${t2-t1} ms`);
} //end main()
