export default {
  install(Vue){
    Vue.directive('draggable', {
      inserted(el){
        el.onmousedown = (event) => {
          const shiftX = event.clientX - el.getBoundingClientRect().left;
          const shiftY = event.clientY - el.getBoundingClientRect().top;
          const onMouseMove = (event) => {
            el.style.left = event.pageX - shiftX + 'px';
            el.style.top = event.pageY - shiftY + 'px';
          }
          el.style.position = 'absolute';
          el.style.zIndex = 1000;
          document.body.append(el);
          onMouseMove(event);
          document.addEventListener('mousemove', onMouseMove);
          el.onmouseup = () => {
            document.removeEventListener('mousemove', onMouseMove);
            el.onmouseup = null;
          };
        };
        el.ondragstart = () => false;
      }
    })
  }
}