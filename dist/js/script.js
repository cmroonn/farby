"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var swiperDesigners = new Swiper('.team__designers', {
    slidesPerView: 1,
    spaceBetween: 25,
    // Navigation arrows
    navigation: {
      nextEl: '#nextDesigners',
      prevEl: '#prevDesigners'
    },
    breakpoints: {
      500: {
        slidesPerView: 4
      }
    }
  });
  var swiperCreate = new Swiper('.create__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
      nextEl: '#nextCreate',
      prevEl: '#prevCreate'
    }
  });
  var swiperMasters = new Swiper('.team__masters', {
    slidesPerView: 1,
    spaceBetween: 25,
    // Navigation arrows
    navigation: {
      nextEl: '#nextMasters',
      prevEl: '#prevMasters'
    },
    breakpoints: {
      500: {
        slidesPerView: 4
      }
    }
  });
  {
    var swiperGallery1 = new Swiper('.popup__gallery__slider-1', {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      centeredSlidesBounds: true,
      // Navigation arrows
      navigation: {
        nextEl: '#gallery-next-1',
        prevEl: '#gallery-prev-1'
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false
      }
    });
    var swiperGallery2 = new Swiper('.popup__gallery__slider-2', {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      centeredSlidesBounds: true,
      // Navigation arrows
      navigation: {
        nextEl: '#gallery-next-2',
        prevEl: '#gallery-prev-2'
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false
      }
    });
    var elements = document.querySelectorAll(".open-gallery");
    elements.forEach(function (elem) {
      elem.addEventListener("click", function () {
        var imgId = elem.dataset.id;
        var galleryId = elem.dataset.gallery;
        var gallery = document.getElementById("popup-gallery-".concat(galleryId));
        gallery.classList.add('active');
        if (galleryId == 1) {
          swiperGallery1.slideTo(imgId, 0, true);
          console.log(swiperGallery1);
        }
      });
    });
  }
  {
    var btns = document.querySelectorAll(".faq__btn");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        console.log('a');
        if (!btn.classList.contains("active")) {
          console.log('add');
          btns.forEach(function (btn2) {
            return btn2.classList.remove("active");
          });
          btn.classList.add("active");
        } else {
          console.log('aa');
          if (window.innerWidth <= 500) {
            console.log('remove');
            btn.classList.remove("active");
          }
        }
      });
    });
  }
  {
    var buttons = document.querySelectorAll(".portfolio__nav button");
    var items = document.querySelectorAll(".portfolio__body");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        items.forEach(function (item) {
          item.classList.remove("active");
          if (item.dataset.id === btn.dataset.id) {
            buttons.forEach(function (btn2) {
              return btn2.classList.remove("active");
            });
            item.classList.add("active");
            btn.classList.add("active");
          }
        });
      });
    });
  }
  {
    if (window.innerWidth > 500) {
      var _buttons = document.querySelectorAll(".faq__btn");
      var _items = document.querySelectorAll(".faq__text-area p");
      _buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          _items.forEach(function (item) {
            item.classList.remove("active");
            if (item.dataset.id === btn.dataset.id) {
              _buttons.forEach(function (btn2) {
                return btn2.classList.remove("active");
              });
              item.classList.add("active");
              btn.classList.add("active");
            }
          });
        });
      });
    }
  }
  {
    var openPopup = function openPopup(elemsClass, popupId) {
      var elems = document.querySelectorAll(".".concat(elemsClass));
      var popup = document.getElementById(popupId);
      var popups = document.querySelectorAll(".popup");
      elems.forEach(function (elem) {
        elem.addEventListener("click", function (e) {
          e.preventDefault();
          popups.forEach(function (popup) {
            popup.classList.remove("active");
          });
          popup.classList.add("active");
        });
      });
    };
    openPopup('open-popup-call', 'popupCall');
    openPopup('open-popup-calc', 'popupCalc');
    openPopup('open-popup-consult', 'popupConsult');
    openPopup('open-popup-smeta', 'popupSmeta');
    openPopup('open-popup-catalog', 'popupCatalog');
    var closeButtons = document.querySelectorAll(".popup__close");
    closeButtons.forEach(function (el) {
      el.addEventListener("click", function () {
        var parent = el.closest(".popup");
        parent.classList.remove("active");
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.keyCode === 27) {
        document.querySelector(".popup.active").classList.remove("active");
      }
    });
  }

  // $('.phone-mask').mask("+9(999) 999-99-99");

  {
    var popups = document.querySelectorAll(".popup");
    popups.forEach(function (el) {
      el.addEventListener("click", function (event) {
        var target = event.target;
        console.log(target, target.closest('.popup'));
        if (target === el) {
          el.classList.remove("active");
        }
      });
    });
  }
  {
    var arrowNext = document.querySelector(".portfolio__next");
    var arrowPrev = document.querySelector(".portfolio__prev");
    var elemsCount = document.querySelectorAll(".portfolio__body").length;
    console.log(elemsCount);
    arrowNext.addEventListener("click", function () {
      var activeEl = document.querySelector(".portfolio__body.active");
      var currentId = Number(activeEl.dataset.id);
      document.querySelector(".portfolio__nav button[data-id=\"".concat(currentId, "\"]")).classList.remove("active");
      if (elemsCount === currentId) {
        currentId = 0;
      }
      var nextEl = document.querySelector(".portfolio__body[data-id=\"".concat(currentId + 1, "\"]"));
      console.log(nextEl);
      activeEl.classList.remove("active");
      document.querySelector(".portfolio__nav button[data-id=\"".concat(currentId + 1, "\"]")).classList.add("active");
      nextEl.classList.add("active");
    });
    arrowPrev.addEventListener("click", function () {
      var activeEl = document.querySelector(".portfolio__body.active");
      var currentId = Number(activeEl.dataset.id);
      document.querySelector(".portfolio__nav button[data-id=\"".concat(currentId, "\"]")).classList.remove("active");
      if (1 === currentId) {
        currentId = elemsCount;
        var nextEl = document.querySelector(".portfolio__body[data-id=\"".concat(currentId, "\"]"));
        console.log(nextEl);
        activeEl.classList.remove("active");
        document.querySelector(".portfolio__nav button[data-id=\"".concat(currentId, "\"]")).classList.add("active");
        nextEl.classList.add("active");
      } else {
        var _nextEl = document.querySelector(".portfolio__body[data-id=\"".concat(currentId - 1, "\"]"));
        console.log(_nextEl);
        activeEl.classList.remove("active");
        document.querySelector(".portfolio__nav button[data-id=\"".concat(currentId - 1, "\"]")).classList.add("active");
        _nextEl.classList.add("active");
      }
    });
  }
  if (window.innerWidth <= 500) {
    document.querySelector(".faq__btn.active").classList.remove("active");
  }
  {
    var btn = document.getElementById('popupThanksClose');
    var popup = document.getElementById('thankyou');
    btn.addEventListener("click", function () {
      popup.classList.remove("active");
    });
  }
  {
    var element = document.querySelectorAll('.phone-mask');
    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    element.forEach(function (el) {
      IMask(el, maskOptions);
    });
  }
});