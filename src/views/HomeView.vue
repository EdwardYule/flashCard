<template>
  <div class="home">
    <!-- <CardGroup :cards="cards" /> -->
    <CardEditor v-model="card" />
    <CardGroup :cards="[card]" />
  </div>
</template>

<script>
import CardGroup from "@/components/Card/CardGroup.vue";
import CardEditor from "@/components/Card/CardEditor.vue";
export default {
  name: 'HomeView',
  components: {
    CardGroup,
    CardEditor,
  },
  data(){
    return {
      cards: [
        {},
        {},
        {},
        {},
      ],
    }
  }
}
</script>
