// Vasyl Plaksiy
const testimonials = {
    activeSlide: 0,
    init: function () {
        if (!document.querySelector('.testimonials__carousel')) return;

        this.counter = document.querySelectorAll('.testimonials__carousel-slide').length;

        document.querySelector('.testimonials__carousel-track').style.width = `${this.counter * 100}%`;
        document.querySelector('.testimonials__carousel').classList.add('testimonials__carousel--init');

        this.pagination();
        this.controls();
    },
    pagination: function () {
        const obj = this;

        document.querySelectorAll(".testimonials__carousel-nav button").forEach(function (el) {
            el.addEventListener("click", function () {
                if (el.classList.contains("testimonials__carousel-nav--active")) return;
                const goToSlide = parseInt(el.getAttribute("data-slide-to"));
                obj.goTo(goToSlide);
            });
        });
    },
    controls: function () {
        const obj = this;

        document.querySelector(".testimonials__carousel-button--prev").addEventListener("click", function () {
            obj.goTo(obj.activeSlide == 0 ? 0 : obj.activeSlide - 1);
        });

        document.querySelector(".testimonials__carousel-button--next").addEventListener("click", function () {
            obj.goTo(obj.activeSlide == obj.counter - 1 ? obj.counter - 1 : obj.activeSlide + 1);
        });
    },
    goTo: function (index) {
        const newPos = index === 0 ? 0 : 100 / this.counter * index;
        this.activeSlide = index;
        document.querySelector('.testimonials__carousel-track').style.transform = `translateX(-${newPos}%)`;

        if (index === 0) {
            document.querySelector('.testimonials__carousel-button--prev').classList.add('testimonials__carousel-button--disabled');
        } else {
            document.querySelector('.testimonials__carousel-button--prev').classList.remove('testimonials__carousel-button--disabled');
        }

        if (index === this.counter - 1) {
            document.querySelector('.testimonials__carousel-button--next').classList.add('testimonials__carousel-button--disabled');
        } else {
            document.querySelector('.testimonials__carousel-button--next').classList.remove('testimonials__carousel-button--disabled');
        }

        document.querySelector(".testimonials__carousel-nav--active").classList.remove("testimonials__carousel-nav--active");
        document.querySelector(".testimonials__carousel-nav button[data-slide-to='" + index + "']").classList.add("testimonials__carousel-nav--active");
    }
}

testimonials.init();
// [END] Vasyl Plaksiy