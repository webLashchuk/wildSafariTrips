import Swiper, { Navigation, Pagination } from 'swiper';

const swiperPortfolio = new Swiper('.portfolio-slider', {
  spaceBetween: 20,

  modules: [Navigation, Pagination],
  slidesPerView: 1,
  pagination: {
    clickable: true,
    el: '.portfolio-slider__pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoHeight: true,
  draggable: true,
  grabCursor: true,
  breakpoints: {
    320: {
    },
    768: {
    },
    991: {
    },
  },
});

const swiperAffairs = new Swiper('.affairs-slider', {
  spaceBetween: 20,

  modules: [Navigation, Pagination],
  slidesPerView: 1,
  pagination: {
    clickable: true,
    el: '.affairs-slider__pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoHeight: true,
  draggable: true,
  grabCursor: true,
  breakpoints: {
    320: {
    },
    768: {
    },
    991: {
    },
  },
});

const swiperBlog = new Swiper('.blog-slider', {
  spaceBetween: 20,

  modules: [Navigation, Pagination],
  slidesPerView: 1,
  pagination: {
    clickable: true,
    el: '.blog-slider__pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  draggable: true,
  grabCursor: true,
  breakpoints: {
    320: {
    },
    768: {
    },
    991: {
    },
  },
});

const swiperStyle = new Swiper('.style-slider', {
  slidesPerView: 3.5,
  spaceBetween: 32,
  initialSlide: 1,

  modules: [Navigation, Pagination],
  pagination: {
    clickable: true,
    el: '.style-slider__pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  draggable: true,
  grabCursor: true,
  breakpoints: {
    320: {
    },
    768: {
    },
    991: {
    },
  },
});

const swiperGalleryImg = new Swiper('.gallery-slider', {

  initialSlide: 1,

  modules: [Navigation, Pagination],
  pagination: {
    clickable: true,
    el: '.gallery-slider__pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  draggable: true,
  grabCursor: true,
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 64,
    },
  },
});

