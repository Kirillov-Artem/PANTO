const Btns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");
//Клмк по кнопке с подсказками
for (let btn of Btns) {
    btn.addEventListener("click", showHint);
}
function showHint(event) {
    event.stopPropagation();

    // Hide all hints
    for (let hint of infoHints) {
        hint.classList.add("none");
    }
    // Show all hints

    this.parentNode.querySelector(".info-hint").classList.toggle("none");
}

// Закрытие подсказок при клике в люой части страницы

document.addEventListener("click", closeHints);

function closeHints() {
    for (let hint of infoHints) {
        hint.classList.add("none");
    }
}

// Запрещаем всплытие события клика наверх при клике на подсказки

for (let hint of infoHints) {
    hint.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}

// acive btns tabs

const tabBtns = document.querySelectorAll(".tab-controls__btn");
const tabProducts = document.querySelectorAll("[data-value]");

for (let btnOfTab of tabBtns) {
    btnOfTab.addEventListener("click", function () {
        // Убираем активные классы у всех кнопок
        for (let btnOfTab of tabBtns) {
            btnOfTab.classList.remove("active");
        }

        // Добавляем активный класс к текущей кнопке
        this.classList.add("active");

        // Отобразить нужные товары и Скрыть ненужные товары
        for (let product of tabProducts) {
            console.log(product);
            // Проверка на отображение всех слайдов
            if (this.dataset.tab === "all") {
                product.classList.remove("none");
            } else {
                if (product.dataset.value === this.dataset.tab) {
                    product.classList.remove("none");
                } else {
                    product.classList.add("none");
                }
            }
        }

        // Обновление Swiper
        swiper.update();
    });
}

// Мой скрипт

// const tabBtn1 = document.querySelector(".tab-controls__btn-1");
// const tabBtn2 = document.querySelector(".tab-controls__btn-2");
// const tabBtn3 = document.querySelector(".tab-controls__btn-3");
// const tabBtn4 = document.querySelector(".tab-controls__btn-4");

// tabBtn1.addEventListener("click", btn1);
// tabBtn2.addEventListener("click", btn2);
// tabBtn3.addEventListener("click", btn3);
// tabBtn4.addEventListener("click", btn4);

// function btn1() {
//     tabBtn1.classList.add("active");
//     tabBtn2.classList.remove("active");
//     tabBtn3.classList.remove("active");
//     tabBtn4.classList.remove("active");
// }

// function btn2() {
//     tabBtn1.classList.remove("active");
//     tabBtn2.classList.add("active");
//     tabBtn3.classList.remove("active");
//     tabBtn4.classList.remove("active");
// }

// function btn3() {
//     tabBtn1.classList.remove("active");
//     tabBtn2.classList.remove("active");
//     tabBtn3.classList.add("active");
//     tabBtn4.classList.remove("active");
// }

// function btn4() {
//     tabBtn1.classList.remove("active");
//     tabBtn2.classList.remove("active");
//     tabBtn3.classList.remove("active");
//     tabBtn4.classList.add("active");
// }

// Мой скрипт

// TABS

// const tabsbtns = document.querySelectorAll("[data-tab]");
// console.log(tabsbtns);

// for (let btn of tabsbtns) {
//     console.log(btn);

//     btn.addEventListener("click", () => {
//         console.log("click");
//     });
// }

//SLIDER Swiper

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    //loop: true,

    //freeMode: true,

    slidesPerView: 1,
    spaceBetween: 42,

    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1230: {
            slidesPerView: 4,
            spaceBetween: 40,
        },

        1440: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },

    // Navigation arrows

    navigation: {
        nextEl: "#sliderNext",
        prevEl: "#sliderPrev",
    },
});

// Mobile Navigation

const mobileNavOpen = document.querySelector("#open-mobile-nav-btn");
const mobileNavClose = document.querySelector("#close-mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav__wrapper");

mobileNavOpen.addEventListener("click", function () {
    mobileNav.classList.add("mobile-nav__wrapper--open");
});

mobileNavClose.addEventListener("click", function () {
    mobileNav.classList.remove("mobile-nav__wrapper--open");
});
