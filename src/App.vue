<template>

  <div class="cards">

  <Card 
   v-for="i in store.state.posts" :key="i"
   @click="fetchEvalotion(i)">
    <template v-slot:title>
        {{i.title}} 
    </template>

    <template v-slot:img>
      {{i.content}}
    </template>
    <template v-slot:desc >
  <Controls :post="i">
       <template v-slot:Cnt>tikks</template>
      </Controls>     
    </template>
  </Card>
  </div>

 
 
</template>

<script>
import {store} from './Store';
import Card from './components/Card';
import Controls from './components/Controls.vue';
export default {
    components:{
        Card,
        Controls
    },
    setup(){
        return{
            store
        }
    }
}
</script>

<style>

</style>