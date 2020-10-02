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
          this.imgSrc = "figs/works/noimage.png";
          this.name = e.currentTarget.id;
          this.info = "";
          break;
      }
      this.upperRow = true;
      this.lowerRow = false;
    },
    clickedLowerImg: function(e){
      switch (e.currentTarget.id){
        case "ARBeats":
          this.imgSrc = "figs/works/noimage.png";
          this.name = "AR-Beats!";
          this.info = `
現実のものをカメラで映してドラムに変えよう！
ARで広々と楽器を演奏しましょう！
`;
          break;
        case "ByeByeVirus":
          this.imgSrc = "figs/works/noimage.png";
          this.name = e.currentTarget.id;
          this.info = `
外出自粛中に溜まったストレスをたったの15秒で発散できます！
みんなとたくさんウイルスを消しましょう！
`;
          break;
        default:
          this.imgSrc = "figs/works/noimage.png"
          this.name = e.currentTarget.id;
          this.info = ""
          break
      }
      this.upperRow = false;
      this.lowerRow = true;
    }
  }
})