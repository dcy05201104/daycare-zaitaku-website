/* --- クロスフェード・スライドショーの制御 --- */
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    // すべての画像から active クラスを消す
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // 次の画像へ
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // 現在の画像に active クラスをつけて「じわーと」出す
    slides[slideIndex - 1].classList.add("active");
    
    // 5秒ごとに実行（2秒かけて重なり、3秒静止するイメージ）
    setTimeout(showSlides, 5000);
}

// ページ読み込み時にスタート
showSlides();

/* --- スクロールアニメーション（修正版） --- */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom; // 下端も取得

        // 画面内に入ったら表示
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            reveals[i].classList.add("active");
        } 
        // ★ここを追加：画面外（上か下）に出たら非表示にしてリセット
        else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();