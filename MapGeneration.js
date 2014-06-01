var v,w=function(){var e=window,a='inner';if(!(e.innerWidth)){a='client';e=document.documentElement||document.body;}return {w:e[a+'Width'],h:e[a+'Height']};},v=w();
var $=function(o){return document.getElementById(o);};
var sa=function(o,a){for(var i=0;i<a.length;i++){$(o).setAttribute(a[i][0],a[i][1]);}};
var ctx,r=function(){ctx=$('canvas').getContext("2d");},q=function(){sa('canvas',[['width',v.w+'px'],['height',v.h+'px']]);};q();r();
window.onresize=function(){v=w();r();q();core.map.draw();};
var r=function(n,m){return Math.random()*n|0+(m||0);};
var core=new (function(){ //call new so we're not building on the window scope
	var _=this; //retain core scope through the underscore
	_.sector=function(x,y){
		this.wall= Math.random()<0.25?1:0;
		this.floor=Math.random()<0.90?1:0;
		if(this.floor==0){
			(function(){
				var startColor=100+r(105);
				_.water.push({x:x,y:y,cur:startColor,max:startColor,dir:r(2)});
			})();
		} //end if
	};
	_.water=[];
	_.map={
		width:30,
		height:25,
		sector:[],
		generate:function(){
			for(var i=0;i<_.map.width;i++){
				_.map.sector[i]=[];
				for(var j=0;j<_.map.height;j++){
					_.map.sector[i][j]=new _.sector(i,j);
				} //end for
			} //end for
		}, //end generate()
		draw:function(){
			for(var i=0;i<_.map.width;i++){
				for(var j=0;j<_.map.height;j++){
					if(_.map.sector[i][j].wall){ctx.fillStyle="#333";
					}else if(_.map.sector[i][j].floor){ctx.fillStyle="#0"+r(4,6)+"0";
					}else{ctx.fillStyle="#00F";}
					ctx.fillRect(i*v.w/_.map.width,j*v.h/_.map.height,v.w/_.map.width+1,v.h/_.map.height+1);
					if(_.map.sector[i][j].wall){
						ctx.fillStyle="#888";
						ctx.fillRect(i*v.w/_.map.width+v.w/_.map.width*.1,j*v.h/_.map.height+v.h/_.map.height*.1,v.w/_.map.width*.8,v.h/_.map.height*.8);
					} //end if
				} //end for
			} //end for
		} //end draw()
	}; //end map
	return this;
})();
(function(){
	core.map.generate();
	core.map.draw();
	setInterval(function(){
		var water=core.water; //grab an easier reference to the water
		for(var i=0;i<water.length;i++){
			if(water[i].dir==0){core.water[i].cur--;}else{water[i].cur++;}
			if(water[i].max-50==water[i].cur||water[i].max+50==water[i].cur)water[i].dir^=1;
			ctx.fillStyle="rgb(0,0,"+water[i].cur+')';
			ctx.fillRect(water[i].x*v.w/core.map.width,water[i].y*v.h/core.map.height,v.w/core.map.width+1,v.h/core.map.height+1);
		} //end for
	},10);
})();