<template>
  <div class="card-group">
    <Card>
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
        return [
          {}
        ];
      }
    }
  }
}
</script>

<style>

</style>