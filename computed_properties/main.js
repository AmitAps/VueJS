var app = new Vue({
  el: "#app",
  data:{
    first_name: "Amit",
    last_name: "Singh"
  },
    computed:{
      getRandomComputed(){
        return Math.random();
      },
      full_name(){
        return `${ this.first_name } ${ this.last_name}`;
      }
    },
    methods:{
      getRandomNumber(){
        return Math.random();
      }
    }
})
