<template>
  <div class="home">
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
import Card from "@/components/Card.vue";
export default {
  name: 'HomeView',
  components: {
    Card,
  }
}
</script>
