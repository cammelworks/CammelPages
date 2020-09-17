var header = new Vue({
  el: '#header',
  data: {
    scrollY: 0
  },
  mounted() {
    //スクロール位置を監視
    window.addEventListener('scroll', this.calculateHeaderTop);
    this.calculateHeaderTop();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.calculateHeaderTop);
  },
  methods: {
    calculateHeaderTop() {
      this.scrollY = window.scrollY;
      //スクロール位置が画像の縦サイズより大きくなったらヘッダーを固定
      if(this.scrollY >= topSplash.splashHeight){
        this.$el.style.position = "fixed";
        this.$el.style.top = "0";
      } else {
        this.$el.style.position = "relative";
      }
    }
  }
})

var topSplash = new Vue({
  el: '#topSplash',
  data:{
    splashHeight: 0
  },
  mounted() {
    //画面サイズが変わるたびに画像の縦サイズを取得
    window.addEventListener('resize', this.calculateSplashSize);
    this.calculateSplashSize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateSplashSize);
  },
  methods: {
    calculateSplashSize() {
      //画像の縦サイズを取得
      this.splashHeight = this.$refs.img.clientHeight
    }
  }
})
