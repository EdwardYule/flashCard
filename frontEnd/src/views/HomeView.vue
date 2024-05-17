<template>
  <div class="home">
    <CardGroup :cards="cards" />
  </div>
</template>

<script>
import CardGroup from "@/components/Card/CardGroup.vue";
export default {
  name: 'HomeView',
  components: {
    CardGroup,
  },
  data(){
    return {
      cards: [],
    }
  }
}
</script>
