const $resBtn = document.querySelector("header .mypage li:last-child");
const $menu = document.querySelector("header .menu");


$resBtn.addEventListener('click', (e) => {
    e.preventDefault();
    $menuActive = $menu.classList.contains("active");
    if(!$menuActive){
        $menu.classList.add("active");
    }else{
        $menu.classList.remove("active");
    }
});

const $scrollIcon = document.querySelector("main img");



document.addEventListener('scroll', function() {
    $scrollIcon.style.display = "none";
});


