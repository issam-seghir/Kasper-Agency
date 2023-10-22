const navToggle = document.querySelector(".nav__toggle");
const navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
    if (navWrapper.classList.contains("active")) {
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
    } else {
        navWrapper.classList.add("active");
        this.setAttribute("aria-label", "close menu");
        this.setAttribute("aria-expanded", "true");
        searchForm.classList.remove("active");
    }
});

const searchToggle = document.querySelector(".search__toggle");
const searchForm = document.querySelector(".search__form");

searchToggle.addEventListener("click", showSearch);

function showSearch() {
    searchForm.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
}

// portfolio gallery filter

const list = document.querySelectorAll(".list");
const itemBox = document.querySelectorAll(".itemBox");

for (const elementI of list) {
    elementI.addEventListener("click", function () {
        for (const elementJ of list) {
            elementJ.classList.remove("active");
        }
        this.classList.add("active");

        const dataFilter = this.getAttribute("data-filter");

        for (const elementK of itemBox) {
            elementK.classList.remove("active");
            elementK.classList.add("hide");

            if (
                elementK.getAttribute("data-item") === dataFilter ||
                dataFilter === "all"
            ) {
                elementK.classList.remove("hide");
                elementK.classList.add("active");
            }
        }
    });
}

// Animated Counter on Scroll-down(only)

let isAlreadyRun = false;

$(window).scroll(() => {
    $(".about").each(function (i) {
        const bottomOfObject =
            $(this).position().top + $(this).outerHeight() / 2;
        const bottomOfWindow = $(window).scrollTop() + $(window).height();

        if (bottomOfWindow > bottomOfObject + 20) {
            if (!isAlreadyRun) {
                $(".js-count-up").each(function () {
                    $(this)
                        .prop("col", 0)
                        .animate(
                            {
                                Counter: $(this).text(),
                            },
                            {
                                duration: 3500,
                                easing: "swing",
                                step(now) {
                                    $(this).text(Math.ceil(now));
                                },
                            }
                        );
                });
            }
            isAlreadyRun = true;
        }
    });
});

// subscribe animation

document.querySelector(".form__button").addEventListener("mousedown", (e) => {
    e.preventDefault();
    document.querySelector(".subscribe").classList.add("done");
});

// feedback animation
