'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Parallax, reveal on scroll, lightbox, clocks, countdowns, schedule progress, mobile menu, invite form.
// Plain DOM code so the markup stays simple JSX with data-attributes.
export default function Interactions() {
  const pathname = usePathname();
  useEffect(() => {
    const cleanups = [];
    const on = (t, ev, fn, o) => { t.addEventListener(ev, fn, o); cleanups.push(() => t.removeEventListener(ev, fn, o)); };
    const every = (fn, ms) => { const id = setInterval(fn, ms); cleanups.push(() => clearInterval(id)); };
    run(on, every);
    return () => cleanups.forEach((f) => f());
  }, [pathname]);
  return null;
}

function run(on, every) {

    var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    function $(s,r){return (r||document).querySelector(s)}
    function $$(s,r){return [].slice.call((r||document).querySelectorAll(s))}

    /* header */
    var h=$('.hdr'),bg=$('.burger'),m=$('.mnav');
    on(window,'scroll',function(){h&&h.classList.toggle('scrolled',scrollY>10)},{passive:true});
    if(bg)on(bg,'click',function(){var o=m.classList.toggle('open');bg.classList.toggle('open',o);bg.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''});
    $$('.mnav a').forEach(function(a){on(a,'click',function(){m.classList.remove('open');bg&&bg.classList.remove('open');document.body.style.overflow=''})});

    /* mobile sticky CTA: only after the hero, hidden near the invite form */
    var sticky=$('.m-sticky'),inv=$('#invite');
    function stk(){if(!sticky)return;var r=inv?inv.getBoundingClientRect():null;var nearForm=r&&r.top<innerHeight&&r.bottom>0;sticky.classList.toggle('show',scrollY>innerHeight*.7&&!nearForm)}
    on(window,'scroll',stk,{passive:true});stk();

    /* reveal */
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    $$('.rv,.tour').forEach(function(el){io.observe(el)});

    /* parallax: [data-speed] moves relative to viewport centre */
    var px=$$('[data-speed]');
    function para(){
      if(!reduce){var vh=innerHeight;
        px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();var c=r.top+r.height/2-vh/2;var s=parseFloat(el.dataset.speed);
          var x=el.dataset.axis==='x';el.style.transform=x?'translate3d('+(-c*s)+'px,0,0)':'translate3d(0,'+(c*s)+'px,0)'});}
      schedProg();
    }
    on(window,'scroll',function(){requestAnimationFrame(para)},{passive:true});on(window,'resize',para);para();

    /* schedule progress */
    function schedProg(){var F=$('.flowline');if(F){var fr=F.getBoundingClientRect();var fp=Math.max(0,Math.min(1,(innerHeight*.75-fr.top)/(fr.height+innerHeight*.3)));$('.fl-track i',F).style.width=(fp*100)+'%';$$('.fl-step',F).forEach(function(st,i,a){st.classList.toggle('on',fp>=i/a.length)})}
      var L=$('.sched-list');if(!L)return;var r=L.getBoundingClientRect(),mid=innerHeight*.55;
      var p=Math.max(0,Math.min(1,(mid-r.top)/r.height));$('.prog',L).style.height=(p*(r.height-20))+'px';
      $$('li',L).forEach(function(li){var t=li.getBoundingClientRect().top;li.classList.toggle('on',t<mid&&t>mid-li.offsetHeight-40)})}

    /* manifesto: words light up as the block scrolls through the viewport */
    $$('[data-lit]').forEach(function(p){if(p.dataset.ready)return;p.dataset.ready=1;
      p.innerHTML=p.textContent.trim().split(/\s+/).map(function(w){return '<span>'+w+'</span>'}).join(' ')});
    function lit(){$$('[data-lit]').forEach(function(p){var r=p.getBoundingClientRect(),ws=$$('span',p);
      var k=Math.max(0,Math.min(1,(innerHeight*.85-r.top)/(r.height+innerHeight*.35)));var n=Math.round(k*ws.length);
      ws.forEach(function(w,i){w.classList.toggle('on',i<n)})})}
    on(window,'scroll',function(){requestAnimationFrame(lit)},{passive:true});lit();
    /* count-up numbers */
    var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;cio.unobserve(e.target);var el=e.target,to=+el.dataset.to,t0=performance.now();
      function st(t){var k=Math.min(1,(t-t0)/1200),v=Math.round(to*(1-Math.pow(1-k,3)));el.textContent=v+(el.dataset.plus!==undefined&&k===1?'+':'');if(k<1)requestAnimationFrame(st)}requestAnimationFrame(st)})},{threshold:.6});
    $$('[data-to]').forEach(function(el){cio.observe(el)});

    /* live local clocks */
    function clocks(){$$('[data-tz]').forEach(function(el){try{el.textContent=new Intl.DateTimeFormat('en-GB',{timeZone:el.dataset.tz,hour:'2-digit',minute:'2-digit'}).format(new Date())}catch(e){}})}
    clocks();every(clocks,20000);

    /* countdowns */
    function cds(){$$('[data-count]').forEach(function(el){var d=Math.max(0,new Date(el.dataset.count)-Date.now());
      var v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60];
      $$('b',el).forEach(function(b,i){var t=String(v[i]).padStart(2,'0');if(b.textContent!==t)b.textContent=t})});
      $$('[data-days]').forEach(function(el){el.textContent=Math.max(0,Math.ceil((new Date(el.dataset.days)-Date.now())/864e5))})}
    cds();every(cds,1000);

    /* lightbox */
    var items=$$('[data-lb]'),lb=$('.lb'),st=$('.lb-stage'),ct=$('.lb .ct'),cur=0;
    function show(i){cur=(i+items.length)%items.length;var it=items[cur],src=it.dataset.lb;
      st.innerHTML=it.dataset.type==='video'?'<video src="'+src+'" controls autoplay playsinline></video>':'<img src="'+src+'" alt="">';
      ct.textContent=(cur+1)+' / '+items.length}
    function open(i){show(i);lb.classList.add('open');document.body.style.overflow='hidden'}
    function close(){lb.classList.remove('open');st.innerHTML='';document.body.style.overflow=''}
    items.forEach(function(it,i){on(it,'click',function(){open(i)})});
    if(lb){$('.lb .x').onclick=close;$('.lb .pv').onclick=function(){show(cur-1)};$('.lb .nx').onclick=function(){show(cur+1)};
      on(lb,'click',function(e){if(e.target===lb)close()});
      on(window,'keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)})}

    /* invite form (prototype) */

}
