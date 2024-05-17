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
$padding: 16px;
.card {
  perspective: 1000px;
  width: 320px;
  height: 480px;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  box-shadow: 0 0 10px gray;
  background-color: white;
  cursor: pointer;
  padding: $padding;
  box-sizing: border-box;
  user-select: none;
  &.flip{
    transform: rotateY(180deg);
  }
  .front,.back {
    width: calc(100% - $padding * 2);
    height: calc(100% - $padding * 2);
    backface-visibility: hidden;
    position: absolute;
    top: $padding;
    left: $padding;
    background-color: lightcyan;
  }
  .front{
    z-index: 1;
  }
  .back{
    transform: rotateY(180deg);
  }
}
</style>