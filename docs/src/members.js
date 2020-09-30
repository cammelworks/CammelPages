var members = new Vue({
  el: '#members',
  data:{
    upperRow: false,
    lowerRow: false,
    imgSrc: "",
    name: "",
    info: "",
  },
  mounted:function(){
    //画面内のクリック判定
    window.addEventListener("click",function(e){
      console.log(e.target.id)
      if (checkHasListener(e.target.id)){
        this.upperRow = false;
        this.lowerRow = false;
      }
    }.bind(this))
  },
  methods:{
    clickedUpperImg: function(e){
      switch (e.currentTarget.id){
        case "tyanio":
          this.imgSrc = "figs/members/tyanio.jpg";
          this.info = `
M1
しゃっちょさん
POとして企画やユーザーに実際に意見をもらってきています
開発もできる企画家になりたい！
`;
          break
        case "kugi":
          this.imgSrc = "figs/members/kugi.jpg";
          this.info = `
M2
「スクラムマスター」のような立ち位置、プログラマー
CG、ゲーム開発に興味があります
`;
          break;
        case "yamakatsu":
          this.imgSrc = "figs/members/yamakatsu.jpg";
          this.info = `
M1
プログラマー
フロントエンドを中心に、フルスタック目指してます
`;
          break;
        case "inami":
          this.imgSrc = "figs/members/default.png";
          this.info = "";
          break;
        default:
          this.imgSrc = "figs/members/default.png";
          this.info = "";
          break;
      }
      console.log(e.currentTarget.id);
      this.name = e.currentTarget.id;
      this.upperRow = true;
      this.lowerRow = false;
    },
    clickedLowerImg: function(e){
      switch (e.currentTarget.id){
        case "daigo":
          this.imgSrc = "figs/members/daigo.png";
          this.info = `
M1
夢は、UIデザイナー
好きな食べ物はお刺身
心霊など、オカルト、好きです
`;
          break;
        case "takeda":
          this.imgSrc = "figs/members/default.png";
          this.info = "";
          break;
        case "nishida":
          this.imgSrc = "figs/members/nishida.jpg";
          this.info = `
B4
したっぱ社員
`;
          break;
        default:
          this.imgSrc = "figs/members/default.png"
          this.info = ""
          break
      }
      this.name = e.currentTarget.id;
      this.upperRow = false;
      this.lowerRow = true;
    }
  }
})

function checkHasListener(target) {
  if(target != "tyanio" && target != "kugi" && target != "yamakatsu" && target != "inami" && target != "daigo" && target != "takeda" && target != "nishida"){
    return true
  }
  return false;
};