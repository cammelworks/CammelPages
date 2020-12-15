var works = new Vue({
  el: '#works',
  data: {
    upperRow: false,
    lowerRow: false,
    imgSrc: "",
    name: "",
    info: "",
    appStoreUrl: "",
    googlePlayUrl: "",
    webUrl: "",
    appStoreApp: false,
    googlePlayApp: false,
    webApp: false,
  },
  mounted: function () {
    //画面内のクリック判定
    window.addEventListener("click", function (e) {
      //メンバーの画像と詳細パネル以外なら詳細パネルを閉じる
      if (!e.target.classList.contains("worksPanel")) {
        this.upperRow = false;
        this.lowerRow = false;
      }
    }.bind(this))
  },
  methods: {
    clickedUpperImg: function (e) {
      switch (e.currentTarget.id) {
        case "CodeTyper":
          this.imgSrc = "figs/works/CodeTyperIcon.png";
          this.name = e.currentTarget.id;
          this.info = `
プログラミングで使うキーは、”＃”だったり”;”だったり普通のタイピングゲームでは習えない…
CodeTyperではそのようなキーも実際にプログラムを写経をしながら学べます！
`
          this.appStoreUrl = ""
          this.googlePlayUrl = ""
          this.webUrl = "https://codetyper-cc5b6.web.app/index.html";
          this.appStoreApp = false,
          this.googlePlayApp = false,
          this.webApp = true;
          break
        case "DoubleEdged":
          this.imgSrc = "figs/works/DoubleEdgedIcon.png";
          this.name = e.currentTarget.id;
          this.info = `
さくっと終わるリバーシ！オンラインプレイ！
宝石を取ってかわいいキャラたちの間で行われる戦いに勝とう！
`
          this.appStoreUrl = ""
          this.googlePlayUrl = ""
          this.webUrl = ""
          this.appStoreApp = true,
          this.googlePlayApp = true,
          this.webApp = false;
          break;
        case "MikkaBozu":
          this.imgSrc = "figs/works/MikkaBozuIcon.png";
          this.name = "三日坊主の四日目";
          this.info = `
一人ではダイエットが続かない…三日坊主のあなたへ
チームで目標を共有して乗り越えてみませんか？
`
          this.appStoreUrl = "https://apps.apple.com/us/app/%E4%B8%89%E6%97%A5%E5%9D%8A%E4%B8%BB%E3%81%AE%E5%9B%9B%E6%97%A5%E7%9B%AE/id1524952040?itsct=apps_box&itscg=30200"
          this.googlePlayUrl = "https://play.google.com/store/apps/details?id=com.cammel.the4thdayofmikkabozu"
          this.webUrl = ""
          this.appStoreApp = true,
          this.googlePlayApp = true,
          this.webApp = false;
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
    clickedLowerImg: function (e) {
      switch (e.currentTarget.id) {
        case "ARBeats":
          this.imgSrc = "figs/works/AR-BeatsIcon.png";
          this.name = "AR-Beats!";
          this.info = `
現実のものをカメラで映してドラムに変えよう！
ARで広々と楽器を演奏しましょう！
`
          this.appStoreUrl = ""
          this.googlePlayUrl = "https://play.google.com/store/apps/details?id=com.Cammel.ARBeats"
          this.webUrl = ""
          this.appStoreApp = false,
          this.googlePlayApp = true,
          this.webApp = false;
          break;
        case "ByeByeVirus":
          this.imgSrc = "figs/works/ByeByeVirusIcon.png";
          this.name = e.currentTarget.id;
          this.info = `
外出自粛中に溜まったストレスをたったの15秒で発散できます！
みんなとたくさんウイルスを消そう！
`
          this.appStoreUrl = ""
          this.googlePlayUrl = ""
          this.webUrl = "https://byebyevirus-bfa26.firebaseapp.com/"
          this.appStoreApp = false,
          this.googlePlayApp = false,
          this.webApp = true;
          break;
        case "NameIt":
          this.imgSrc = "figs/works/name_itIcon.png";
          this.name = "name_it";
          this.info = `
            開発中に変数名を決めてもモヤモヤするときありませんか？
            このサイトでは自分が悩んでいる変数名を投稿し、 みんながアンケートに投票や更なる選択肢の追加などを行って よりよいネーミングを共有していくエンジニア支援サイトです。
  `
          this.appStoreUrl = ""
          this.googlePlayUrl = ""
          this.webUrl = "https://name-it-38fb8.web.app/#/"
          this.appStoreApp = false,
          this.googlePlayApp = false,
          this.webApp = true;
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