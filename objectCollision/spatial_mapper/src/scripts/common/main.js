class Entity{
  constructor(x,y,id){
    this.id = id; //The main identifier of the entity (unchanging);
    this.iid = 0; //the location identifier (changes);
    this.x = x||0;
    this.y = y||0;
    this.w = 10;
    this.h = 10;
    this.dx = r(2,0,1); //direction of x axis movement
    this.dy = r(2,0,1); //direction of y axis movement
    this.sx = r(1,5); //speed of x value
    this.sy = r(1,5); //speed of y value
  }

  // Each entity blindly moves and knows not of other entities around
  // it. They are puppets where the SpatialMapper container is the
  // puppet master, computing the entities collisions.
  move(){
    this.x=this.dx?this.x+=this.sx:this.x-=this.sx;
    this.y=this.dy?this.y+=this.sy:this.y-=this.sy;
    if(this.x>v.w*0.99&&this.dx||this.x<v.w*0.01&&!this.dx)this.dx^=1;
    if(this.y>v.h*0.99&&this.dy||this.y<v.h*0.01&&!this.dy)this.dy^=1;
  }
}
class SpatialMapper{
  constructor(){
    this.total = 500; //total number of entities we'll draw
    this.collection = []; //holds all of the entities
    this.mapperSize = 100;
    this.mapper = (function(s){
      var m = [],i,j; //shorten variables for simplicity
      for(i=0;i<s;i++){m[i]=[];for(j=0;j<s;j++)m[i][j]=[];}
      return m; //return the structured array mapperSize^2 length
    })(this.mapperSize);
    this.start();
  }

  // Start by creating all of the entities that will be used in
  // the demonstration. When we create an entity, we get it's
  // coordinates and see if there exists an entity already in that
  // spatial cell, if it does we count the number of entities
  // in the cell and use that number as the index identification
  start(){
    for(let n=0;n<this.total;n++){
      let e = new Entity(r(v.w),r(v.h),n),
          i = this.getMapperIndex(e);

      i.push(e.id);
      e.iid = i.length;
      this.collection.push(e);
    } //end for
    this.loop();
  }

  // Loop through all of the entities in the collection, check to
  // see if they bounce with other entities in their spatial cell,
  // compute their movement, update their spatial index identifier.
  // We also draw each entity before their computation occurs
  loop(){
    ctx.fillStyle='#000';
    ctx.fillRect(0,0,v.w,v.h);
    ctx.fillStyle='#F00';
    this.collection.forEach((e)=>{
      ctx.fillRect(e.x,e.y,e.w,e.h);
      this.checkBounce(e);
      e.move();

      // Remove original mapper location and apply id
      // to the new coordinate location after updating it
      //remove location identifier
      this.getMapperIndex(e).splice(e.iid,1);
      e.iid = this.getMapperIndex(e).length;
      this.getMapperIndex(e).push(e.id);
    });
    setTimeout(()=>this.loop(),16);
  }

  // Acquire the spatial cell where this entity resides and return
  // it. It uses getXIndex and getYIndex as helper functions
  getMapperIndex(e){
    return this.mapper[this.getXIndex(e)][this.getYIndex(e)];
  }

  // Get the X spatial cell index by correlating the size of the
  // viewport width with the width of the mapper. It's important
  // to also make sure we don't exceed the constraints of the
  // array.
  getXIndex(e){
    let s = this.mapperSize;
    let i = M.floor(e.x/v.w*s);
    return i<0?0:i>s-1?s-1:i;
  }

  // Get the Y spatial cell index by correlating the size of the
  // viewport height wiht the height of the mapper. It's important
  // to also make sure we don't exceed the constraints of the array
  getYIndex(e){
    let s = this.mapperSize;
    let i = M.floor(e.y/v.h*s);
    return i<0?0:i>s-1?s-1:i;
  }

  // Check the current entities spatial cell to see if other
  // entities are there and thereby compute their collisions
  checkBounce(e){
    var i=0,c=e,t,gi = this.getMapperIndex, //shorten names
        sameCell=this.getMapperIndex(e);

    // Iterate through the nearby and occupied collections
    // and check for other entities. This will warrant a collision
    for(;i<sameCell.length;i++){
      t=this.collection[sameCell[i]];

      // Make sure target entity isn't current entity also
      if(i!==t.id&&M.abs(c.x-t.x)/10<1&&M.abs(c.y-t.y)/10<1){
        // We have a collision, detect which axis will be
        // repelled so we have a directional movement
        if(t.dx!=c.dx==1&&t.dy!=c.dy){
          c.dx^=1;t.dx^=1;c.dy^=1; //oblique collision
        }else if(t.dx==c.dx&&t.dy!=c.dy){
          c.dy^=1;t.dy^=1; //vertical collision
        }else if(t.dx!=c.dx&&t.dy==c.dy){
          c.dx^=1;t.dx^=1; //horizontal collision
        } //end if
        break; //prevents bouncing on two objects by leaving early
      } //end if
    } //end for
  }
}

/**
 * Main entry point to application
 */
function app() {
  "use strict";

  var scene = new SpatialMapper();
} //end app()
