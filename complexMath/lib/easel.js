var easel=function(a){return window.CanvasRenderingContext2D?(a.activated=!0,W=window,D=document,M=Math,C=D.createElement("canvas"),ctx=C.getContext("2d"),$=function(a){return D.getElementById(a)},q=function(){C.width=v.w,C.height=v.h},u=function(){ctx=C.getContext("2d")},w=function(){return d=W,b="inner",d.innerWidth||(b="client",d=D.documentElement||D.body),{w:d[b+"Width"],h:d[b+"Height"]}},v=w(),a.background="#000",a.redraw=function(){k=this,l=arguments,a.started||(a.config(),a.started=!0),requestAnimationFrame(function(){a.onDraw.apply(k,l)})},a.started=!1,a.config=function(){},a.onDraw=function(){ctx.fillStyle=a.background,ctx.fillRect(0,0,v.w,v.h)},W.r=function(a,b,c){return a=b?a>b?b+(d=a)-b:a:0*(b=a),c=c||0,b=M.random()*(b-a)+a,c?0|b:b},W.onresize=function(){W.v=w(),q(),a.config(),a.redraw()},D.body.insertBefore(C,D.body.firstChild),d=document.createElement("style"),d.type="text/css",d.rel="stylesheet",d.innerHTML="body{background-color:"+a.background+";margin:0;}canvas{position:fixed;left:0;top:0;right:0;bottom:0;}",D.getElementsByTagName("head")[0].appendChild(d),q(),a):!1}({});
