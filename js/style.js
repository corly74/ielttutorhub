
// <!-- Initialize Swiper -->


$(function () {


    var swiper1 = new Swiper('#video_swiper', {
        // autoplay: {
        //     delay: 6000,
        // },
        autoplay: stop,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 15,
        speed: 2000,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,

            }


        },


        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },



    });

    var swiper2 = new Swiper('#student_swiper', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 3,
        spaceBetween: 15,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,

            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15,

            }

        },


        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },



    });



    var mySwiper3 = new Swiper('#bannar_slider', {
        spaceBetween: 30,
        effect: 'fade',

        autoplay: true,
        autoplay: {
            speed: 1500,
            pause: 6000,
            delay: 3000, // 3秒切換一次
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })



});
