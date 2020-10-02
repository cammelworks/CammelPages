var works = new Vue({
  el: '#works',
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
      if (!e.target.classList.contains("woksPanel")){
        this.upperRow = false;
        this.lowerRow = false;
      }
    }.bind(this))
  },
  methods:{
    clickedUpperImg: function(e){
      switch (e.currentTarget.id){
        case "CodeTyper":
          this.imgSrc = "figs/works/CodeTyperIcon.png";
          this.name = e.currentTarget.id;
          this.info = `
プログラミンで使うキーは、”＃”だったり”;”だったり普通のタイピングソフトでは習えない…
CodeTyperではそのようなキーも実際にプログラムを写経をしながら学べます！
`;
          break
        case "DoubleEdged":
          this.imgSrc = "figs/works/DoubleEdgedIcon.png";
          this.name = e.currentTarget.id;
          this.info = `
さくっと終わるリバーシ！オンラインプレイ！
宝石を取ってかわいいキャラたちの間で行われる戦いに勝とう！
`;
          break;
        case "MikkaBozu":
          this.imgSrc = "figs/works/MikkaBozuIcon.png";
          this.name = "三日坊主の四日目";
          this.info = `
一人ではダイエットが続かない…3日坊主のあなたへ
チームで目標を共有して乗り越えてみませんか？
`;
          break;
        default:
          this.imgSrc = "figs/members/default.png";
          this.name = e.currentTarget.id;
          this.info = "";
          break;
      }
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