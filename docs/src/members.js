var members = new Vue({
  el: '#members',
  data:{
    upperRow: false,
    lowerRow: false,
    imgSrc: "figs/members/default.png",
    info: "info",
  },
  methods:{
    clickedUpperImg: function(e){
      console.log(e.currentTarget.id);
      this.upperRow = true;
      this.lowerRow = false;
    },
    clickedLowerImg: function(e){
      console.log(e.currentTarget.id);
      this.upperRow = false;
      this.lowerRow = true;
    }
  }
})