(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{325:function(t,e,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("2199c282",content,!0,{sourceMap:!1})},326:function(t,e,r){"use strict";r(325)},327:function(t,e,r){var o=r(30)((function(i){return i[1]}));o.push([t.i,"#firework{left:0;top:0;right:0;bottom:0;z-index:10000}#firework,canvas{position:absolute}canvas{width:100%}.control{position:absolute}.control input{text-align:center}.control button,.control input{border:0;margin:0;padding:15px;outline:none}.control button{background:#333;color:#fff}.control button:focus,.control button:hover{background:#222}",""]),o.locals={},t.exports=o},329:function(t,e,r){"use strict";r.r(e);var o=r(139),n=r(140),c=(r(216),r(138),{data:function(){return{compHidden:!1}},mounted:function(){document.body.style.overflow="hidden";var t=document.createElement("canvas"),e=document.getElementById("firework");e.appendChild(t);var r,c,d=t.getContext("2d");function h(){t.width=window.innerWidth,t.height=window.innerHeight}function l(){d.fillStyle="rgba(0,0,0,0.5)",d.fillRect(0,0,t.width,t.height),d.fill()}window.onresize=function(){h()},h(),l();var i,x=function(){function t(e,r,n,c,d){Object(o.a)(this,t),this.pos=e,this.target=r,this.vel=n,this.color=c,this.radius=d,this.direction=0}return Object(n.a)(t,[{key:"set",value:function(t,e){this[t]=e}},{key:"update",value:function(){this.radius=2,this.vel.x=(this.pos.x-this.target.x)/50,this.vel.y=(this.pos.y-this.target.y)/50,this.pos.x-=this.vel.x,this.pos.y-=this.vel.y}},{key:"draw",value:function(){d.beginPath(),d.fillStyle=this.color,d.arc(this.pos.x,this.pos.y,this.radius,0,2*Math.PI),d.fill()}}]),t}(),f=[],w=["#bf1337","#f3f1f3","#084c8d","#f2d108","#efd282"];!function(text){var e,r,o,n=0;d.fillStyle="#fff",d.font="80px 楷体",d.fillText(text,.5*t.width-.5*d.measureText(text).width,.5*t.height+60);var data=d.getImageData(0,0,t.width,t.height).data;for(l(),i=0;i<data.length;i+=12)if(0!==data[i]&&10*Math.random()>=8.8){r=3-1*Math.random(),e={x:i/4%t.width,y:i/4/t.width},o=w[1];var p=new x(e,{x:i/4%t.width,y:i/4/t.width},{x:0,y:0},o,r);f.push(p),++n}f.splice(n,f.length-n)}("K哥技术博客");var v,y=0,k=new function(){var t=this,o=function(t,e){return~~(Math.random()*(e-t+1)+t)};t.init=function(){t.canvas=document.createElement("canvas"),t.canvas.width=t.cw=window.innerWidth,t.canvas.height=t.ch=window.innerHeight,t.particles=[],t.partCount=150,t.fireworks=[],t.mx=t.cw/2,t.my=t.ch/2,t.currentHue=30,t.partSpeed=5,t.partSpeedVariance=10,t.partWind=50,t.partFriction=5,t.partGravity=1,t.hueMin=0,t.hueMax=360,t.fworkSpeed=4,t.fworkAccel=10,t.hueVariance=30,t.flickerDensity=25,t.showShockwave=!0,t.showTarget=!1,t.clearAlpha=25,e.append(t.canvas),t.ctx=t.canvas.getContext("2d"),t.ctx.lineCap="round",t.ctx.lineJoin="round",t.lineWidth=1,t.bindEvents(),t.canvasLoop(),t.canvas.onselectstart=function(){return!1}},t.createFireworks=function(e,r,n,c){var d={x:e,y:r,startX:e,startY:r,hitX:!1,hitY:!1,coordLast:[{x:e,y:r},{x:e,y:r},{x:e,y:r}],targetX:n,targetY:c,speed:t.fworkSpeed,angle:Math.atan2(c-r,n-e),shockwaveAngle:Math.atan2(c-r,n-e)+Math.PI/180*90,acceleration:t.fworkAccel/100,hue:t.currentHue,brightness:o(50,80),alpha:o(50,100)/100,lineWidth:t.lineWidth};t.fireworks.push(d)},t.canvasLoop=function(){window.requestAnimationFrame(t.canvasLoop,t.canvas),t.ctx.globalCompositeOperation="destination-out",t.ctx.fillStyle="rgba(0,0,0,"+t.clearAlpha/100+")",t.ctx.fillRect(0,0,t.cw,t.ch),t.updateFireworks(),t.updateParticles(),t.drawFireworks(),t.drawParticles()},t.drawParticles=function(){for(var i=t.particles.length;i--;){var p=t.particles[i],e=o(1,3)-1;if(t.ctx.beginPath(),t.ctx.moveTo(Math.round(p.coordLast[e].x),Math.round(p.coordLast[e].y)),t.ctx.lineTo(Math.round(p.x),Math.round(p.y)),t.ctx.closePath(),t.ctx.strokeStyle="hsla("+p.hue+", 100%, "+p.brightness+"%, "+p.alpha+")",t.ctx.stroke(),t.flickerDensity>0){var r=50-t.flickerDensity;if(o(0,r)===r){t.ctx.beginPath(),t.ctx.arc(Math.round(p.x),Math.round(p.y),o(p.lineWidth,p.lineWidth+3)/2,0,2*Math.PI,!1),t.ctx.closePath();var n=o(50,100)/100;t.ctx.fillStyle="hsla("+p.hue+", 100%, "+p.brightness+"%, "+n+")",t.ctx.fill()}}}},t.drawFireworks=function(){var i=t.fireworks.length;for(t.ctx.globalCompositeOperation="lighter";i--;){var e=t.fireworks[i];t.ctx.lineWidth=e.lineWidth;var r=o(1,3)-1;t.ctx.beginPath(),t.ctx.moveTo(Math.round(e.coordLast[r].x),Math.round(e.coordLast[r].y)),t.ctx.lineTo(Math.round(e.x),Math.round(e.y)),t.ctx.closePath(),t.ctx.strokeStyle="hsla("+e.hue+", 100%, "+e.brightness+"%, "+e.alpha+")",t.ctx.stroke(),t.showTarget&&(t.ctx.save(),t.ctx.beginPath(),t.ctx.arc(Math.round(e.targetX),Math.round(e.targetY),o(1,8),0,2*Math.PI,!1),t.ctx.closePath(),t.ctx.lineWidth=1,t.ctx.stroke(),t.ctx.restore()),t.showShockwave&&(t.ctx.save(),t.ctx.translate(Math.round(e.x),Math.round(e.y)),t.ctx.rotate(e.shockwaveAngle),t.ctx.beginPath(),t.ctx.arc(0,0,e.speed/5*1,0,Math.PI,!0),t.ctx.strokeStyle="hsla("+e.hue+", 100%, "+e.brightness+"%, "+o(25,60)/100+")",t.ctx.lineWidth=e.lineWidth,t.ctx.stroke(),t.ctx.restore())}},t.updateFireworks=function(){for(var i=t.fireworks.length;i--;){var e=t.fireworks[i];t.ctx.lineWidth=e.lineWidth,r=Math.cos(e.angle)*e.speed,c=Math.sin(e.angle)*e.speed,e.speed*=1+e.acceleration,e.coordLast[2].x=e.coordLast[1].x,e.coordLast[2].y=e.coordLast[1].y,e.coordLast[1].x=e.coordLast[0].x,e.coordLast[1].y=e.coordLast[0].y,e.coordLast[0].x=e.x,e.coordLast[0].y=e.y,e.startX>=e.targetX?e.x+r<=e.targetX?(e.x=e.targetX,e.hitX=!0):e.x+=r:e.x+r>=e.targetX?(e.x=e.targetX,e.hitX=!0):e.x+=r,e.startY>=e.targetY?e.y+c<=e.targetY?(e.y=e.targetY,e.hitY=!0):e.y+=c:e.y+c>=e.targetY?(e.y=e.targetY,e.hitY=!0):e.y+=c,e.hitX&&e.hitY&&(t.createParticles(e.targetX,e.targetY,e.hue),t.fireworks.splice(i,1))}},t.createParticles=function(e,r,n){for(var c=t.partCount;c--;){var d={x:e,y:r,coordLast:[{x:e,y:r},{x:e,y:r},{x:e,y:r}],angle:o(0,360),speed:o(t.partSpeed-t.partSpeedVariance<=0?1:t.partSpeed-t.partSpeedVariance,t.partSpeed+t.partSpeedVariance),friction:1-t.partFriction/100,gravity:t.partGravity/2,hue:o(n-t.hueVariance,n+t.hueVariance),brightness:o(50,80),alpha:o(40,100)/100,decay:o(10,50)/1e3,wind:(o(0,t.partWind)-t.partWind/2)/25,lineWidth:t.lineWidth};t.particles.push(d)}},t.updateParticles=function(){for(var e,r,o,h1,n,c,d,h2,i=t.particles.length;i--;){var p=t.particles[i],h=p.angle*Math.PI/180,l=Math.cos(h)*p.speed,x=Math.sin(h)*p.speed;p.speed*=p.friction,p.coordLast[2].x=p.coordLast[1].x,p.coordLast[2].y=p.coordLast[1].y,p.coordLast[1].x=p.coordLast[0].x,p.coordLast[1].y=p.coordLast[0].y,p.coordLast[0].x=p.x,p.coordLast[0].y=p.y,p.x+=l,p.y+=x,p.y+=p.gravity,p.angle+=p.wind,p.alpha-=p.decay,e=0,r=0,o=t.cw,h1=t.ch,n=p.x-p.radius,c=p.y-p.radius,d=2*p.radius,h2=2*p.radius,(e+o<n||n+d<e||r+h1<c||c+h2<r||p.alpha<.05)&&t.particles.splice(i,1)}},t.bindEvents=function(){var e=function(e){t.mx=e.pageX-t.canvas.offsetLeft,t.my=e.pageY-t.canvas.offsetTop,t.currentHue=o(t.hueMin,t.hueMax),t.createFireworks(t.cw/2,t.ch,t.mx,t.my)};t.canvas.addEventListener("mousedown",e),t.canvas.addEventListener("mouseup",(function(r){t.canvas.removeEventListener("mousemovem",e)}))},t.init()};!function t(){var e,r,o;v=window.requestAnimationFrame(t),y>=f.length-1&&window.cancelAnimationFrame(v),e=f[y],d.beginPath(),d.arc(e.target.x,e.target.y,e.radius,0,2*Math.PI),d.fillStyle=e.color,d.fill(),++y%5==0&&(k.currentHue=(r=0,o=360,~~(Math.random()*(o-r+1)+r)),k.createFireworks(window.innerWidth/2,window.innerHeight,f[y].pos.x,f[y].pos.y))}()},methods:{toggle:function(){this.compHidden=!0,document.body.style.overflow="auto"}}}),d=(r(326),r(14)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return t.compHidden?t._e():e("div",{attrs:{id:"firework"},on:{dblclick:t.toggle}},[e("div",{staticClass:"control",staticStyle:{position:"absolute"}})])}),[],!1,null,null,null);e.default=component.exports}}]);