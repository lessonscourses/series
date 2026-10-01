'use client';
import { useEffect, useRef } from 'react';
import { LAND } from '@/data/land';

// Hero backdrop: gold-dot globe with the 8 cities, travelling arcs and date tags.
// Edit CITIES / ROUTES / TAGS below. Tags never cover the hero text.
export default function Globe() {
  const ref = useRef(null);
  useEffect(() => run(ref.current), []);
  return (
    <div ref={ref} aria-hidden="true">
      <canvas className="s-globe" />
      <div className="s-tags" />
    </div>
  );
}

function run(root) {
var $$=function(s){return [].slice.call(document.querySelectorAll(s))};
/* ===== globe ===== */
var CITIES={singapore:[1.35,103.8,'Singapore'],dubai:[25.2,55.3,'Dubai'],abudhabi:[24.45,54.4,'Abu Dhabi'],riyadh:[24.7,46.7,'Riyadh'],london:[51.5,-0.1,'London'],zurich:[47.4,8.5,'Zurich'],newyork:[40.7,-74,'New York'],palmbeach:[26.7,-80,'Palm Beach']};
var ROUTES=[['singapore','dubai'],['dubai','london'],['london','newyork'],['newyork','palmbeach'],['zurich','riyadh'],['abudhabi','london'],['riyadh','singapore'],['zurich','newyork'],['dubai','abudhabi']];
var TAGS=[['singapore','Singapore','8 October · Milken week'],['dubai','Dubai · Abu Dhabi','14 & 21 October'],['riyadh','Riyadh','28 October · FII10 week'],['london','London','12 November · 1 December'],['zurich','Zurich','10 November'],['newyork','New York','4 November · ILPA week'],['palmbeach','Palm Beach','18 November']];
var rad=Math.PI/180;function toV(la,lo){return [Math.cos(la*rad)*Math.cos(lo*rad),Math.sin(la*rad),Math.cos(la*rad)*Math.sin(lo*rad)]}
function slerp(a,b,t){var d=Math.acos(Math.min(1,a[0]*b[0]+a[1]*b[1]+a[2]*b[2]))||1e-6,s=Math.sin(d),k1=Math.sin((1-t)*d)/s,k2=Math.sin(t*d)/s;return [a[0]*k1+b[0]*k2,a[1]*k1+b[1]*k2,a[2]*k1+b[2]*k2]}
var c=root.querySelector('.s-globe'),ctx=c.getContext('2d'),tagBox=root.querySelector('.s-tags');tagBox.innerHTML='';
var land=LAND.split(';').map(function(p){var q=p.split(',');return toV(q[0]/10,q[1]/10)});
var city={};Object.keys(CITIES).forEach(function(k){city[k]=toV(CITIES[k][0],CITIES[k][1])});
var routes=ROUTES.map(function(r,i){return {a:city[r[0]],b:city[r[1]],off:i*.37}});
var tagEls=TAGS.map(function(t){var el=document.createElement('div');el.className='gl-tag';el.innerHTML='<i></i><span><b>'+t[1]+'</b><small>'+t[2]+'</small></span>';tagBox.appendChild(el);return el});
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var w,hh,dpr,cx,cy,R,rot=20*rad,tilt=28*rad,stt=Math.sin(tilt),ctt=Math.cos(tilt),avoid=[],mobile;
function size(){dpr=Math.min(2,devicePixelRatio||1);w=c.clientWidth;hh=c.clientHeight;c.width=w*dpr;c.height=hh*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);mobile=w<760;
  if(mobile){R=w*.74;cx=w*.5;cy=hh*.44}else{R=Math.min(hh*.48,w*.29);cx=w*.75;cy=hh*.56}
  avoid=[].slice.call(document.querySelectorAll('.s-hero-in > *, .s-hero-in .c-facts, .s-hero-in .ctas')).map(function(e){var r=e.getBoundingClientRect(),hr=c.getBoundingClientRect();return [r.left-hr.left-16,r.top-hr.top-12,r.right-hr.left+16,r.bottom-hr.top+12]})}
function proj(v,r,wn){r=r||R;var x1=v[0]*Math.cos(rot)-v[2]*Math.sin(rot),z1=v[0]*Math.sin(rot)+v[2]*Math.cos(rot),y2=v[1]*ctt-z1*stt,z2=v[1]*stt+z1*ctt;return wn?[cx-x1*r,cy-y2*r,z2,[-x1,y2,z2]]:[cx-x1*r,cy-y2*r,z2]}
function hits(x,y,el){var bw=el.offsetWidth,bh=el.offsetHeight,l=x-bw/2,t=y-22-bh;if(l<8||l+bw>w-8||t<70)return true;return avoid.some(function(a){return l<a[2]&&l+bw>a[0]&&t<a[3]&&t+bh>a[1]})}
var L=[-.45,.55,.7];
function frame(t){
  ctx.clearRect(0,0,w,hh);
  var g=ctx.createRadialGradient(cx,cy,R*.96,cx,cy,R*1.2);g.addColorStop(0,'rgba(236,214,170,.2)');g.addColorStop(.25,'rgba(210,190,150,.07)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(cx,cy,R*1.2,0,7);ctx.fill();
  var b=ctx.createRadialGradient(cx-R*.42,cy-R*.5,R*.05,cx,cy,R*1.02);b.addColorStop(0,'#2a2c31');b.addColorStop(.45,'#15171b');b.addColorStop(1,'#07080a');ctx.fillStyle=b;ctx.beginPath();ctx.arc(cx,cy,R,0,7);ctx.fill();
  ctx.lineWidth=1;var la,lo,on,p;
  for(la=-60;la<=75;la+=15){ctx.beginPath();on=false;for(lo=-180;lo<=180;lo+=4){p=proj(toV(la,lo));if(p[2]>0){on?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]);on=true}else on=false}ctx.strokeStyle='rgba(255,255,255,.035)';ctx.stroke()}
  for(lo=-180;lo<180;lo+=15){ctx.beginPath();on=false;for(la=-80;la<=80;la+=4){p=proj(toV(la,lo));if(p[2]>0){on?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]);on=true}else on=false}ctx.strokeStyle='rgba(255,255,255,.03)';ctx.stroke()}
  var ds=Math.max(1.2,R/380);
  for(var i=0;i<land.length;i++){var q=proj(land[i],R,true);if(q[2]<=0)continue;var n=q[3],lit=Math.max(0,n[0]*L[0]+n[1]*L[1]+n[2]*L[2]);
    ctx.fillStyle='rgba('+(190+lit*60|0)+','+(150+lit*75|0)+','+(80+lit*90|0)+','+Math.min(1,.18+q[2]*.4+lit*.6).toFixed(3)+')';ctx.fillRect(q[0]-ds/2,q[1]-ds/2,ds,ds)}
  var sh=ctx.createRadialGradient(cx-R*.55,cy-R*.6,R*.2,cx,cy,R*1.05);sh.addColorStop(0,'rgba(255,245,225,.06)');sh.addColorStop(.55,'rgba(0,0,0,0)');sh.addColorStop(1,'rgba(0,0,0,.55)');ctx.fillStyle=sh;ctx.beginPath();ctx.arc(cx,cy,R,0,7);ctx.fill();
  var rim=ctx.createLinearGradient(cx-R,cy-R,cx+R,cy);rim.addColorStop(0,'rgba(245,228,190,.55)');rim.addColorStop(.5,'rgba(212,173,90,.25)');rim.addColorStop(1,'rgba(212,173,90,.06)');ctx.strokeStyle=rim;ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(cx,cy,R,0,7);ctx.stroke();
  routes.forEach(function(r){if(proj(r.a)[2]<.08||proj(r.b)[2]<.08)return;var pts=[];for(var k=0;k<=40;k++){var f=k/40;pts.push(proj(slerp(r.a,r.b,f),R*(1+Math.sin(Math.PI*f)*.08)))}
    ctx.beginPath();pts.forEach(function(q,j){j?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1])});ctx.strokeStyle='rgba(226,190,112,.22)';ctx.lineWidth=1;ctx.stroke();
    var pp=(t/4200+r.off)%1,ii=Math.floor(pp*40),tr=pts.slice(Math.max(0,ii-7),ii+1);ctx.beginPath();tr.forEach(function(q,j){j?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1])});ctx.strokeStyle='rgba(255,222,150,.85)';ctx.lineWidth=1.6;ctx.stroke();
    ctx.beginPath();ctx.arc(pts[ii][0],pts[ii][1],2.4,0,7);ctx.fillStyle='#ffe6ad';ctx.fill()});
  var pos={};Object.keys(city).forEach(function(k){var q=proj(city[k]);pos[k]=q;if(q[2]<=.05)return;var pu=(t/1600+k.length*.13)%1;
    ctx.beginPath();ctx.arc(q[0],q[1],3+pu*14,0,7);ctx.strokeStyle='rgba(226,190,112,'+((1-pu)*.55*q[2])+')';ctx.stroke();ctx.beginPath();ctx.arc(q[0],q[1],3.2,0,7);ctx.fillStyle='rgba(255,232,180,'+(.5+q[2]*.5)+')';ctx.fill()});
  var slot=2000,n2=TAGS.length;tagEls.forEach(function(el,i){var ph=((t-i*slot)%(slot*n2)+slot*n2)%(slot*n2)/(slot*3),q=pos[TAGS[i][0]];
    var vis=ph<1&&q[2]>.15&&!hits(q[0],q[1],el)?Math.min(1,Math.sin(Math.PI*ph)*2.2):0;el.style.opacity=vis.toFixed(2);el.style.transform='translate('+q[0].toFixed(1)+'px,'+(q[1]-16-vis*6).toFixed(1)+'px) translate(-50%,-100%)'});
  if(!reduce)rot=(20+Math.sin(t/9000)*55)*rad;
  raf=requestAnimationFrame(frame)}
size();var to=setTimeout(size,800);addEventListener('resize',size);var raf=requestAnimationFrame(frame);
return function(){cancelAnimationFrame(raf);clearTimeout(to);removeEventListener('resize',size)};
}
