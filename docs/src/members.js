var members = new Vue({
  el: '#members',
  data:{
    upperRow: false,
    lowerRow: false,
    imgSrc: "",
    name: "",
    info: "",
    githubUrl: "",
    twitterUrl: "",
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
`
this.githubUrl = ""
this.twitterUrl = "";
          break
        case "kugi":
          this.imgSrc = "figs/members/kugi.jpg";
          this.info = `
M2
「スクラムマスター」のような立ち位置、プログラマー
CG、ゲーム開発に興味があります
`
this.githubUrl = "https://github.com/kugimasa"
this.twitterUrl = "https://twitter.com/kugi_masa";
          break;
        case "yamakatsu":
          this.imgSrc = "figs/members/yamakatsu.jpg";
          this.info = `
M1
プログラマー
フロントエンドを中心に、フルスタック目指してます
`
this.githubUrl = "https://github.com/Yamakatsu63"
this.twitterUrl = "https://twitter.com/yamakatsu1217";
          break;
        case "inami":
          this.imgSrc = "figs/members/inami.jpg";
          this.info = `
M1
見習い
電気系
電力について研究しています
`
this.githubUrl = ""
this.twitterUrl = "";
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
`
this.githubUrl = "https://github.com/daigo0907?tab=repositories"
this.twitterUrl = "https://twitter.com/DaigoDesign02";
          break;
        case "Takeda":
          this.imgSrc = "figs/members/takeda.jpg";
          this.info = `
M1
プログラマー
面白いプラットフォームを作りたい
`
this.githubUrl = ""
this.twitterUrl = "";
          break;
        case "Nishida":
          this.imgSrc = "figs/members/nishida.jpg";
          this.info = `
B4
したっぱ社員
`
this.githubUrl = ""
this.twitterUrl = "";
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