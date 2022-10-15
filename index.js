//hamburger 버튼 클릭 시 navbar 보이기 함수
    const toggleBtn = document.querySelector(".navbar_toggle");
    const menu = document.querySelector(".navbar_menu");

    toggleBtn.addEventListener("click", () => {
        menu.classList.toggle('active');
    });

//타이핑 효과 함수
const text = document.querySelector(".typing");
const content = "Hello, \n I'm Na Jeong"
let contentIdx = 0;

const typing = function () {
    text.innerHTML += content[contentIdx];
    contentIdx++;
    
    if(content[contentIdx] === "\n") {
        text.innerHTML += "<br />";
        contentIdx++;
    }
    if(contentIdx > content.length) {
        text.textContent = "";
        contentIdx = 0;
    }
};

setInterval(typing, 300);


//모달창 함수
const modals = document.getElementsByClassName("modal_back");
const openBtn = document.getElementsByClassName("modal_btn");
const closeBtn = document.getElementsByClassName("close_btn");

for(let i = 0; i < openBtn.length; i ++) {
    modal(i);
}

function modal(num) {
    openBtn[num].addEventListener("click", () => {
        modals[num].style.display = "flex";
        document.body.style.overflow = "hidden";
    });
    closeBtn[num].addEventListener("click", () => {
        modals[num].style.display = "none";
        document.body.style.overflow = "unset";
    });
};