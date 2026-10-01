
export default function Gallery() {
  return (
    <>
      <section className="sec" id="gallery" style={{paddingTop:"0"}}><div className="wrap">
      <div className="row-head"><div className="sec-head rv"><span className="kicker">Experience behind the format</span><h2 className="h2">Shaped by 80+ private gatherings</h2></div></div>
      <div className="mgal rv">
       <button className="v" data-lb="https://belegends.club/assets/site-loop.webm" data-type="video" aria-label="Watch the highlights">
         <video autoPlay muted loop playsInline poster="https://belegends.club/assets/site-loop-poster.jpg"><source src="https://belegends.club/assets/site-loop.webm" type="video/webm" /></video>
         <span className="play"><i><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg></i>Watch the highlights</span></button>
       <button style={{backgroundImage:"url(/gallery/evening-5.jpg)"}} data-lb="/gallery/evening-5.jpg" aria-label="Open photo"><span className="zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></span></button><button style={{backgroundImage:"url(https://belegends.club/assets/block-6-1.jpg)"}} data-lb="https://belegends.club/assets/block-6-1.jpg" aria-label="Open photo"><span className="zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></span></button><button style={{backgroundImage:"url(/gallery/evening-3.jpg)"}} data-lb="/gallery/evening-3.jpg" aria-label="Open photo"><span className="zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></span></button><button style={{backgroundImage:"url(/gallery/evening-4.jpg)"}} data-lb="/gallery/evening-4.jpg" aria-label="Open photo"><span className="zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></span></button>
      </div>
      <div className="gal-sub rv"><p>Different formats and audiences taught us one thing: smaller groups create better conversations.</p><p>So every Legends dinner is built the same way: 10 active investors, one table, one evening.</p></div>
      </div></section>
      <div className="lb" role="dialog" aria-modal="true"><div className="lb-stage"></div>
      <button className="x" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <button className="pv" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6"/></svg></button>
      <button className="nx" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg></button><span className="ct"></span></div>
    </>
  );
}
