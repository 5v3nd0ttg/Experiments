/* Utility Functions */
var $=function(o){return document.getElementById(o);}; //JQuery X-Lite
var r=function(n){return Math.random()*n|0;}; //random number function
/* Variable Declarations */
var main={
	total:500, //total number of balls we'll draw
	ball:[], //holds all of the balls
	map:(function(){
		theMap=[];
		for(var i=0;i<100;i++){
			theMap[i]=[];
			for(var j=0;j<100;j++){
				theMap[i][j]=[];
			} //end for
		} //end for
		return theMap; //return the map array
	})(),
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
	var that=this;
	var checkIndex=function(index){
		if(index.length==0)return false;
		for(var i=0;i<index.length;i++){ //test for collision
		if(index[i]!=that.id&&
			   Math.abs(main.ball[index[i]].x-that.x)<1&&
			   Math.abs(main.ball[index[i]].y-that.y)<1){
				if(main.ball[index[i]].dx!=that.dx==1&&main.ball[index[i]].dy!=that.dy){
					that.dx^=1;main.ball[index[i]].dx^=1;that.dy^=1;main.ball[index[i]].dy^=1;
				}else if(main.ball[index[i]].dx==that.dx&&main.ball[index[i]].dy!=that.dy){
					that.dy^=1;main.ball[index[i]].dy^=1;
				}else if(main.ball[index[i]].dx!=that.dx&&main.ball[index[i]].dy==that.dy){
					that.dx^=1;main.ball[index[i]].dx^=1;}
				return true; //collision occured, exit tester
			} //end if
		} //end for
		return false;
	};
	if(checkIndex(main.map[this.y|0][this.x|0]))return;
	if(this.y-1>0)if(checkIndex(main.map[-1+this.y|0][this.x|0]))return;
	if(this.y-1>0&&this.x-1>0)if(checkIndex(main.map[-1+this.y|0][-1+this.x|0]))return;
	if(this.x-1>0)if(checkIndex(main.map[this.y|0][-1+this.x|0]))return;
}; //end checkBounce()
main.type.prototype.move=function(){
	this.checkBounce();
	var mapIndex=main.map[this.y|0][this.x|0];
	for(var i=0;i<mapIndex.length;i++){
		if(mapIndex[i]==this.id){
			mapIndex.splice(i,1); //remove last entry for this object
			i=mapIndex.length; //exit for
		} //end for
	} //end for
	if(this.dx==0){this.x-=this.sx/10;}else{this.x+=this.sx/10;}
	if(this.dy==0){this.y-=this.sy/10;}else{this.y+=this.sy/10;}
	if((this.x|0)%99==0){this.dx^=1;} //if 0 or 99, flip horizontal direction
	if((this.y|0)%99==0){this.dy^=1;} //if 0 or 99, flip vertical direction
	if(this.x<1)this.x=1;if(this.x>99)this.x=99;
	if(this.y<1)this.y=1;if(this.y>99)this.y=99;
	main.map[this.y|0][this.x|0].push(this.id); //push to map array
	$('b'+this.id).style.left=this.x+"%"; //update x display
	$('b'+this.id).style.top=this.y+"%"; //update y display
}; //end move()
/* Initializing function */
(function(){
	var data=""; //this will hold all the created divs
	for(var i=0;i<main.total;i++){ //create the balls
		main.ball.push(new main.type(1+r(98),1+r(98)));
		data+="<div id='b"+i+"' style='left:"+main.ball[i].x+
			  "%;top:"+main.ball[i].y+"%;width:1%;height:1%;background-color:"+(i==0?"#FFF":"#F00")+";'></div>";
	} //end for
	$('container').innerHTML=data; //give the balls to the display container
	var redraw=function(){
		for(var i=0;i<main.total;i++)main.ball[i].move();
		setTimeout(function(){redraw()},10);
	};
	redraw();
})();