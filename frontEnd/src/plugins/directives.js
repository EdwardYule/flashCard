export default {
  install(Vue){
    Vue.directive('draggable', {
      inserted(el){
        el.draggable = true;
      }
    })
  }
}