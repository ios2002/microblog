<template>
  <div>
      <button>{{ post.likes}}</button>
      <hashtag 
      v-for="h in post.hashtags" :key="h"
      :hashtag="h"
      @setHashtag="sethashtag"></hashtag>
  </div>
      
  
</template>

<script>
import { ref } from 'vue';
import hashtag from './hashtag'
export default {
    components: {
        hashtag,
    },
    props: {
        post: {
            type:Object
        },
    },
        setup(props){
         
         const sethashtag=(incoming )=>{
                console.warn("came here",incoming);
         };

         return {sethashtag};
        }
}
</script>

<style lang="scss" scoped>
p{
    color: red;
}
</style>
 