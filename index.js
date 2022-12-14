let slide1 = document.querySelector('#slide01');
let slide2 = document.querySelector('#slide02');
let slide3 = document.querySelector('#slide03');
let slideList = document.querySelector('.slide-list');
slide1.addEventListener('click',function(){
    slideList.style.transform = "translateX(0)";
    slide1.style.background = 'var(--color-blue)';
    slide2.style.background = '#727272';
    slide3.style.background = '#727272';
});
slide2.addEventListener('click',function(){
    console.log(window.innerWidth);
    if(window.innerWidth<768){
        slideList.style.transform = `translateX(-${window.innerWidth}px)`;
    }
    else slideList.style.transform = "translateX(-550px)";
    slide2.style.background = "var(--color-blue)";
    slide3.style.background = '#727272';
    slide1.style.background = '#727272';
});
slide3.addEventListener('click',function(){
    if(window.innerWidth<768){
        slideList.style.transform = `translateX(-${window.innerWidth * 2}px)`;
    }
    else slideList.style.transform = "translateX(-1100px)";
    slide3.style.background = 'var(--color-blue)';
    slide1.style.background = '#727272';
    slide2.style.background = '#727272';
});
// 메인 버튼 슬라이드
const clickMenu = document.querySelector('.hamburger');
const mobileGnb = document.querySelector(".mobile");

clickMenu.addEventListener('click',()=>{
   mobileGnb.classList.toggle('on');
   clickMenu.classList.toggle('on');
});
//모바일 클릭 메뉴

let boardTitles = document.querySelectorAll('.board-title');

for(var i=0 ; i<boardTitles.length ; i++) {
    boardTitles[i].addEventListener('click',function(){
        boardTitle = ['공지사항', '채용공고', '입찰용역', '현장조사보고','기타 알림사항'];
        var idx = boardTitle.indexOf(this.innerText);
        for(var j=0; j<5; j++)
            boardTitles[j].classList.remove('active');
            boardTitles[idx].classList.add('active');
        for(var j=1 ; j<=5 ; j++) {
            if(idx+1 == j) document.getElementsByClassName(`item${j}`)[0].style.display = 'block';
            else document.getElementsByClassName(`item${j}`)[0].style.display = 'none';
        }
    });

};

//공지사항

const slides = document.querySelector(".department-list");
const slide = document.querySelectorAll(".department-list li");
let currentIdx = 0;
const slideCount = slide.length;
const slideWidth = 230;
const slideMargin = 30;
const preBtn = document.querySelector('.pre');
const nextBtn = document.querySelector('.next');

slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

function moveSlide(num){
    console.log(num);
    slides.style.left = -num * 260 + 'px';
    currentIdx = num;
};

function showSlide(){
    let windowWidth = window.innerWidth;
    if(windowWidth<500){
        return 1;
    }else if(windowWidth<768){
        return 2;
    }else if(windowWidth<1010){
        return 3;
    }else if(windowWidth<1280){
        return 4;
    }else{
        return 5;
    }
}

preBtn.addEventListener('click',function(){
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
    }else{
        moveSlide(slideCount -showSlide());
    }
   
});

nextBtn.addEventListener('click',function(){
    if(currentIdx < slideCount - showSlide()){
        moveSlide(currentIdx + 1);
    }else{
        moveSlide(0);
    }
});
//1280px 4개 1010px 3개 768px 2개 500px 1개
//부서안내 슬라이드
const goTop = document.querySelector('.go-top');

goTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
//gotop 버튼