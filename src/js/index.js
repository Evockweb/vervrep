let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const container = document.querySelector('.custom-scroll__line');
const content = document.querySelector('.custom-scroll');
const scroll = document.querySelector('.custom-scroll__line-tracker');
const adv = document.querySelector('.adv');
const heightLineTracker = adv.clientHeight / content.scrollHeight * 100;
scroll.style.height = `${heightLineTracker}%`;

scroll.addEventListener('mousedown', function(start){
  start.preventDefault();
  var y = scroll.offsetTop;
  var onMove = function(end){
    var delta = end.pageY - start.pageY;
    let somePx = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
    scroll.style.top = somePx;
    content.style.transform = 'translateY(-'+ (somePx) +')';
  };
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', function(){
    document.removeEventListener('mousemove', onMove);
  });
});
