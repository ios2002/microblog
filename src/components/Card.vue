<template>
  <div class="card">
      <div class="title">
          <!-- {{obj.name}} -->
          <slot name="title"/>
      </div>
      <div class="content">
          <!-- <img :src="obj.sprite" alt=""> -->
       <slot name="img"/>
      </div>
      <div class="desc" >
          <!-- v-html="obj.types.map(a => `<p>${a}</p>`).join('')"  -->
      <slot name="desc"/>
      </div>
  </div>
</template>

<script>
export default {
// props: ['post']
}
</script>

<style scoped>
  .card{
      margin: 0 5px;
      color: gray;
      border: 1px silver solid;
      border-radius: 8px;
      max-width: 200px;
      cursor: pointer;
      transition: .2s;
      box-shadow: 0px 4px 10px silver;
  }
  .card:hover{
      opacity: 1;
  }
  .title, .content, .desc{
      text-align: center;
      text-transform: capitalize;
      padding: 17px;;
  }
  .title, .content{
      border-bottom: silver solid 1px;
  }

  img{
      width: 100%;
  }
</style>