var app = new Vue({
  el: "#app",
  data:{
    flag: true,
    styleObject:{
      backgroundColor: 'red',
      border: '5px solid orange'

    }
  },
  methods:{
    changeShape(){
      this.flag = !this.flag;
    }
  }
})
