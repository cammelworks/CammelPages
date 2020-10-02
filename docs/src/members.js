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
      //メンバーの画像と詳細パネル以外なら詳細パネルを閉じる
      if (!e.target.classList.contains("memberPanel")){
        this.upperRow = false;
        this.lowerRow = false;
      }
    }.bind(this))
  },
  methods:{
    clickedUpperImg: function(e){
      switch (e.currentTarget.id){
        case "Tyanio":
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
      this.name = e.currentTarget.id;
      this.upperRow = true;
      this.lowerRow = false;
    },
    clickedLowerImg: function(e){
      switch (e.currentTarget.id){
        case "Daigo":
          this.imgSrc = "figs/members/daigo.png";
          this.info = `
M1
夢は、UIデザイナー
好きな食べ物はお刺身
心霊など、オカルト、好きです
`;
          break;
        case "Takeda":
          this.imgSrc = "figs/members/default.png";
          this.info = "";
          break;
        case "Nishida":
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