const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));

    function slideAnime(){
        //====左に動くアニメーションここから===
            $('.leftAnime').each(function(){ 
                var elemPos = $(this).offset().top-50;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll >= elemPos - windowHeight){
                    //左から右へ表示するクラスを付与
                    //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
                    $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
                    $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
                }else{
                    //左から右へ表示するクラスを取り除く
                    $(this).removeClass("slideAnimeLeftRight");
                    $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
                    
                }
            });
            
        }
        
        // 画面をスクロールをしたら動かしたい場合の記述
        $(window).scroll(function (){
            slideAnime();/* アニメーション用の関数を呼ぶ*/
        });// ここまで画面をスクロールをしたら動かしたい場合の記述
    
        // 画面が読み込まれたらすぐに動かしたい場合の記述
        $(window).on('load', function(){
            slideAnime();/* アニメーション用の関数を呼ぶ*/
        });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

        $(".openbtn").click(function () {//ボタンがクリックされたら
            $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
            $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
        });
        
        $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
            $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
            $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
        });