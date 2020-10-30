<template>
  
  <div class="cards">

  <Card 
  :class="{ opace : selectedId && selectedId !=i.id && begginers.includes(i.id)}"
  v-for="(i,ind) in list" :obj="i" :key="ind"
   @click="fetchEvalotion(i)">
    <template v-slot:title>
        {{i.name}} # {{i.id}}
    </template>

    <template v-slot:img>
      <img :src="i.sprite" alt="">
    </template>
    <template v-slot:desc >
      <div v-html="i.types.map(a => `<p>${a}</p>`).join('')">

      </div>
    </template>
  </Card>
  </div>
</template>

<script>
import Card from './Card';
 
export default {
    components: {
        Card,
    },
  props: {
      selectedId : null,
      list: {
          type: Array, 
      },
      begginers: {
          type: Array, 
      },
       
  },
  methods: {
      fetchEvalotion(poke) {
          this.$emit('fetch',poke);
      }
  },
}
</script>

<style>
 
</style>