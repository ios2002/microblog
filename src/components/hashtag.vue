<template>
        <span >
          #{{hashtag}}</span>
</template>

<script>
export default {
  props: {
      hashtag: {
          type: String
      },
  },

  setup(props,ctx){
    // console.warn(props.hashtag);
      const setHashtag= ()=> {
        ctx.emit('sethashtag',props.hashtag);
        
      }

    return {
      setHashtag,
    }

  }
}
</script>

<style lang="scss" scoped>
   span{
 text-decoration: underline;
     &:hover{
       color:cornflowerblue;
     }
   }
</style>