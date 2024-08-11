export default {
  install(Vue){
    Vue.directive('draggable', {
      inserted(el){
        return;
        // 在这里实现拖拽的功能
        // 鼠标按下的时候，应该先记住当前的位置
        // 然后在鼠标移动的时候，让元素跟着做相应的位移
        // 在鼠标松开的时候，就应该做判断，是否满足了某些条件，比如距离原来的位置超过一定距离，或者在某些元素上方，如果满足条件，就做哪些事情，不满足条件，就做另外的事情
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