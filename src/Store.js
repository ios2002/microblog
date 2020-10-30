import { reactive } from 'vue';

 class Store{
     constructor(){
         this.state=reactive({
             posts: [{
                 id:1,
                 title :'Vuejs 3',
                 content :'learning vue 3 Composition API',
                 likes:3,
                 hashtags:[
                     'vue',
                     'api',
                     'javascript',
                     'composition'
                 ]
             },
             {
                id:2,
                title :'title 2',
                content :' this is content'
            },]
         });
     }
 }

 export const store =new Store();