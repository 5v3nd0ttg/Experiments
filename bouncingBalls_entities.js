/* Utility Functions */
var $=function(o){return document.getElementById(o);}; //JQuery X-Lite
var r=function(n){return Math.random()*n|0;}; //random number function
/* Variable Declarations */
var main={
	total:500, //total number of balls we'll draw
	ball:[], //holds all of the balls
	type:function(startX,startY){
		this.that=this; //retain this scope in 'that' variable
		this.id=main.ball.length;
		this.x=startX||0; //takes startX or 0 if it's not provided
		this.y=startY||0; //takes startY or 0 if it's not provided
		this.dx=r(2); //0 for leftwards or 1 for rightwards
		this.dy=r(2); //0 for upwards and 1 for downwards
		this.sx=1+r(5); //the speed of sx between 1 & 5
		this.sy=1+r(5); //the speed of sy between 1 & 5
	}
};
main.type.prototype.checkBounce=function(){
	for(var i=0;i<main.total;i++){ //test for collision
		if(i!=this.id&&
		   Math.abs(main.ball[i].x-this.x)<1&&
		   Math.abs(main.ball[i].y-this.y)<1){
			if(main.ball[i].dx!=this.dx==1&&main.ball[i].dy!=this.dy){
				this.dx^=1;main.ball[i].dx^=1;this.dy^=1;main.ball[i].dy^=1;
			}else if(main.ball[i].dx==this.dx&&main.ball[i].dy!=this.dy){
				this.dy^=1;main.ball[i].dy^=1;
			}else if(main.ball[i].dx!=this.dx&&main.ball[i].dy==this.dy){
				this.dx^=1;main.ball[i].dx^=1;}
			i=main.total; //collision occured, exit tester
		} //end if
	} //end for
}; //end checkBounce()
main.type.prototype.move=function(){
	this.checkBounce();
	if(this.dx==0){this.x-=this.sx/10;}else{this.x+=this.sx/10;}
	if(this.dy==0){this.y-=this.sy/10;}else{this.y+=this.sy/10;}
	if((this.x|0)%99==0){this.dx^=1;if(this.x<1)this.x=1;if(this.x>99)this.x=99;} //if 0 or 99, flip horizontal direction
	if((this.y|0)%99==0){this.dy^=1;if(this.y<1)this.y=1;if(this.x>99)this.x=99;} //if 0 or 99, flip vertical direction
	$('b'+this.id).style.left=this.x+"%"; //update x display
	$('b'+this.id).style.top=this.y+"%"; //update y display
}; //end move()
/* Initializing function */
(function(){
	var data=""; //this will hold all the created divs
	for(var i=0;i<main.total;i++){ //create the balls
		main.ball.push(new main.type(1+r(98),1+r(98)));
		data+="<div id='b"+i+"' style='left:"+main.ball[i].x+
			  "%;top:"+main.ball[i].y+"%;width:1%;height:1%;background-color:#F00;'></div>";
	} //end for
	$('container').innerHTML=data; //give the balls to the display container
	var redraw=function(){
		for(var i=0;i<main.total;i++)main.ball[i].move();
		setTimeout(function(){redraw()},10);
	};
	redraw();
})();