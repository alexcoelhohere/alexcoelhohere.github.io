const root=document.documentElement;
const saved=localStorage.getItem('theme');
if(saved) root.dataset.theme=saved;
const toggle=document.getElementById('themeToggle');
toggle.addEventListener('click',()=>{
  const next=root.dataset.theme==='dark'?'light':'dark';
  root.dataset.theme=next; localStorage.setItem('theme',next);
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}});
},{threshold:.08});
document.querySelectorAll('.project,.experience,.cap,.edu-card,.about-grid').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
