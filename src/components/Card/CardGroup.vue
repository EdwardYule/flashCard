<template>
  <div class="card-group">
    <Card
      v-for="(card, i) of cards"
      :key="i"
      class="grouped-card"
      :style="_cardStyle(i)"
      v-draggable
    >
      <template v-slot:front>
        front
      </template>
      <template v-slot:back>
        back
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "CardGroup",
  components: {
    Card,
  },
  props: {
    cards: {
      type: Array,
      default(){
        return [];
      }
    }
  },
  methods: {
    _cardStyle(i){
      return {
        zIndex: this.cards.length - i,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-group{
  position: relative;
  .grouped-card{
    position: absolute;
    left: 0;
    top: 0;
    $offset: 8px;
    &:nth-child(3){
      left: $offset;
      top: $offset;
    }
    &:nth-child(n + 4){
      left: $offset * 2;
      top: $offset * 2;
    }
  }
}
</style>