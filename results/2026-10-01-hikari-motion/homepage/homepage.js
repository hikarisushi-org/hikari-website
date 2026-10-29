(() => {
  // A single, short light accent when the story enters view; no looping or reveal gates.
  const drawing=document.querySelector('.light-drawing');
  if(!document.documentElement.dataset.style && 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    const lightObserver=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){drawing.classList.add('illuminate');lightObserver.disconnect();}},{threshold:.6});
    lightObserver.observe(drawing);
  }
  const menu = document.querySelector('.mobile-nav');
  menu.addEventListener('click', event => {if(event.target.closest('a')) menu.open=false;});
  document.addEventListener('keydown', event => {if(event.key==='Escape' && menu.open){menu.open=false;menu.querySelector('summary').focus();}});
  document.addEventListener('click', event => {if(menu.open && !menu.contains(event.target)) menu.open=false;});
  const bar=document.querySelector('.mobile-order');
  if('IntersectionObserver' in window) new IntersectionObserver(([entry])=>{bar.hidden=entry.isIntersecting;},{threshold:0}).observe(document.querySelector('.hero'));
  const deck=document.querySelector('.deck-stage');
  if(deck){
    if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
      const deckObserver=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){deck.classList.add('is-visible');deckObserver.disconnect();}},{threshold:.35});
      deckObserver.observe(deck);
    }else deck.classList.add('is-visible');
  }
  document.querySelectorAll('[data-spotlight]').forEach(spotlight=>{
    const buttons=[...spotlight.querySelectorAll('.spotlight-menu button')];
    const slides=[...spotlight.querySelectorAll('.spotlight-slide')];
    const stage=spotlight.querySelector('.spotlight-stage');
    const mobile=matchMedia('(max-width:760px)');
    const controls=document.createElement('div');
    controls.className='spotlight-controls';
    controls.innerHTML='<span class="browse-hint">Swipe to explore</span><div class="browse-actions"><button type="button" aria-label="Previous sushi roll">←</button><output aria-live="polite" aria-atomic="true">1 of 5</output><button type="button" aria-label="Next sushi roll">→</button></div>';
    spotlight.append(controls);
    const [previous,next]=controls.querySelectorAll('button');
    const counter=controls.querySelector('output');
    let active=0;
    const select=index=>{
      active=index;
      buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
      slides.forEach((slide,i)=>slide.classList.toggle('is-active',i===index));
      counter.textContent=`${index+1} of ${slides.length}`;
      previous.disabled=index===0;next.disabled=index===slides.length-1;
    };
    const position=index=>slides[index].offsetLeft-slides[0].offsetLeft;
    const go=index=>{
      const target=Math.max(0,Math.min(slides.length-1,index));
      stage.scrollTo({left:position(target),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    };
    previous.addEventListener('click',()=>go(active-1));
    next.addEventListener('click',()=>go(active+1));
    stage.addEventListener('scroll',()=>{
      if(!mobile.matches)return;
      const nearest=slides.reduce((best,_,i)=>Math.abs(position(i)-stage.scrollLeft)<Math.abs(position(best)-stage.scrollLeft)?i:best,0);
      if(nearest!==active)select(nearest);
    },{passive:true});
    stage.addEventListener('keydown',event=>{
      if(!mobile.matches||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
      event.preventDefault();go(event.key==='Home'?0:event.key==='End'?slides.length-1:active+(event.key==='ArrowRight'?1:-1));
    });
    const sync=()=>{
      stage.tabIndex=mobile.matches?0:-1;
      stage.setAttribute('aria-label',mobile.matches?'Most ordered sushi. Swipe or use arrow keys to browse.':'Most ordered sushi');
      if(mobile.matches)requestAnimationFrame(()=>stage.scrollTo({left:position(active),behavior:'instant'}));
      else stage.scrollLeft=0;
    };
    mobile.addEventListener('change',sync);
    select(0);sync();
    buttons.forEach(button=>button.addEventListener('click',()=>{
      select(buttons.indexOf(button));
    }));
  });
})();
