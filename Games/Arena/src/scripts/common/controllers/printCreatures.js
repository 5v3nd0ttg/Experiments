/**
 * The printCreatures function is a utility function that prints the creatures
 *
 * @return {VOID} the printCreatures function returns no value
 */
function printCreatures(c1,c2) {
  "use strict";

  // Variable Initialization and Dimensioning
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, v.w, v.h);
  var top = 100;
  var left = 100;
  var right = v.w - left;
  var nextOffset = window.scrollOffset;
  var fontSize = window.fontSize;

  // Display center messaging if there are any messages in the cache
  for(var i=0,j=0;i<outputCache.length;i++){
    if(outputCache[i] instanceof Array){
      for(var k=0;k<outputCache[i].length;k++){
        prettyPrint(outputCache[i][k],fontSize,10+fontSize+fontSize*i+fontSize*j-window.scrollOffset);
        if(10+fontSize+fontSize*i+fontSize*j-nextOffset>v.h/5*4)nextOffset+=fontSize;
        j++;
      } //end for
      j--;
    }else{
      prettyPrint(outputCache[i],fontSize,10+fontSize+fontSize*i+fontSize*j-window.scrollOffset);
      if(10+fontSize+fontSize*i+fontSize*j-nextOffset>v.h/5*4)nextOffset+=fontSize;
    }
  } //end for
  window.scrollOffset = nextOffset; //apply scroll

  ctx.fillStyle='#000';
  ctx.fillRect(v.w/4*3,0,v.w/4,v.h); //clean the right side so text doesn't accidentally flow into characters
  ctx.fillStyle='#333';
  ctx.fillRect(v.w/4*3,0,10,v.h); //vertical separator
  ctx.fillRect(v.w/4*3,v.h/2,v.w/4,10); //horizontal separator
  // Display Creature One
  ctx.fillStyle='#400';
  ctx.fillRect(v.w/4*3+10,fontSize+10,v.w/4,fontSize);
  ctx.fillRect(v.w/4*3+10,fontSize+20+v.h/2,v.w/4,fontSize);
  ctx.fillStyle='#F00';
  ctx.fillRect(v.w/4*3+10,fontSize+10,      v.w/4/c1.healthMax*(c1.health<0?0:c1.health),fontSize);
  ctx.fillRect(v.w/4*3+10,fontSize+20+v.h/2,v.w/4/c2.healthMax*(c2.health<0?0:c2.health),fontSize);
  ctx.fillStyle='#FFF';

  prettyPrint(c1.name, v.w-v.w/8, fontSize);
  prettyPrint('Weight    {C|: |}{W|' + c1.weight, v.w-v.w/4+20, 10 + fontSize * 3);
  prettyPrint('Height    {C|: |}{W|' + c1.height, v.w-v.w/4+20, 10 + fontSize * 4);
  prettyPrint('Health    {C|: |}{W|' + c1.health+'/'+c1.healthMax, v.w-v.w/4+20, 10 + fontSize * 5);
  prettyPrint('Damage    {C|: |}{W|' + c1.damage, v.w-v.w/4+20, 10 + fontSize * 6);
  prettyPrint('Symbol    {C|: |}{W|' + c1.symbol, v.w-v.w/4+20, 10 + fontSize * 7);
  prettyPrint('Class     {C|: |}{W|' + c1.class.name, v.w-v.w/4+20, 10 + fontSize * 8);
  prettyPrint('Specialty {C|: |}{W|' + c1.class.specialty, v.w-v.w/4+20, 10 + fontSize * 9);
  prettyPrint('Affects   {C|: ', v.w-v.w/4+20, 10 + fontSize * 10);
  //Print all of the effects for the first creature
  (function(c,l){
    for(var effect in c.effects){
      if(c.effects[effect].stacks){
        prettyPrint(effect+'{R|('+c.effects[effect].stacks+'){c|: {W|'+c.effects[effect].timer,v.w-v.w/4+40,10+fontSize*++l);
      }else{
        prettyPrint(effect+'{c|: {W|'+c.effects[effect].timer,v.w-v.w/4+40,10+fontSize*++l);
      } //end if
    } //end for
  })(c1,10);

  // Display Creature Two
  prettyPrint(c2.name, v.w-v.w/8, v.h/2+10+fontSize);
  prettyPrint('Weight    {C|: |}{W|' + c2.weight, v.w-v.w/4+20, 20+v.h/2 + fontSize * 3);
  prettyPrint('Height    {C|: |}{W|' + c2.height, v.w-v.w/4+20, 20+v.h/2 + fontSize * 4);
  prettyPrint('Health    {C|: |}{W|' + c2.health+'/'+c2.healthMax, v.w-v.w/4+20, 20+v.h/2 + fontSize * 5);
  prettyPrint('Damage    {C|: |}{W|' + c2.damage, v.w-v.w/4+20, 20+v.h/2 + fontSize * 6);
  prettyPrint('Symbol    {C|: |}{W|' + c2.symbol, v.w-v.w/4+20, 20+v.h/2 + fontSize * 7);
  prettyPrint('Class     {C|: |}{W|' + c1.class.name, v.w-v.w/4+20, 20+v.h/2 + fontSize * 8);
  prettyPrint('Specialty {C|: |}{W|' + c1.class.specialty, v.w-v.w/4+20, 20+v.h/2 + fontSize * 9);
  prettyPrint('Affects   {C|: ', v.w-v.w/4+20, 20+v.h/2 + fontSize * 10);
  //Print all of the effects for the first creature
  (function(c,l){
    for(var effect in c.effects){
      if(c.effects[effect].stacks){
        prettyPrint(effect+'{R|('+c.effects[effect].stacks+'){c|: {W|'+c.effects[effect].timer,v.w-v.w/4+40,20+v.h/2+fontSize*++l);
      }else{
        prettyPrint(effect+'{c|: {W|'+c.effects[effect].timer,v.w-v.w/4+40,20+v.h/2+fontSize*++l);
      } //end if
    } //end for
  })(c2,10);

  Database.images.draw('SpriteSheet',9*32,0*32,32,32,0,0,360,360);
  setTimeout(function(){printCreatures(c1,c2);},100);
} //end printCreatures()