<template>
  <div class="card" :class="isFlip ? 'flip' : ''" @click="flip">
    <div class="front">
      <slot name="front" />
    </div>
    <div class="back">
      <slot name="back" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data(){
    return {
      isFlip: false,
    }
  },
  methods: {
    flip(){
      this.isFlip = !this.isFlip;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  perspective: 1000px;
  width: 320px;
  height: 480px;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  &.flip{
    transform: rotateY(180deg);
  }
  .front,.back {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .front{
    background-color: lightblue;
    z-index: 1;
  }
  .back{
    background-color: lightcoral;
    transform: rotateY(180deg);
  }
}
</style>