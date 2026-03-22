/* --- スライドショー（3枚対応版） --- */
const slides = document.querySelectorAll('.hero-slides .slide');
let currentIndex = 0;

function nextSlide() {
    // スライドが正しく取得できているかチェック（念のため）
    if (slides.length === 0) return;

    // 現在の画像の active クラスを消す
    slides[currentIndex].classList.remove('active');
    
    // 次の画像のインデックスを計算
    currentIndex = (currentIndex + 1) % slides.length; 
    
    // 次の画像に active クラスをつける
    slides[currentIndex].classList.add('active');
}

// 5秒ごとに切り替え
setInterval(nextSlide, 5000);

// ★ 存在しなかった showSlides(); は削除しました ★

/* --- スクロールアニメーション（何度もふわっと版） --- */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom;

        // 画面内に入ったら表示（activeを追加）
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            reveals[i].classList.add("active");
        } 
        // 画面外に出たら非表示（何度も動かすためにactiveを削除）
        else {
            reveals[i].classList.remove("active");
        }
    }
}

// スクロール時だけでなく、読み込み直後にも実行して文字を出す
window.addEventListener("scroll", reveal);
reveal();