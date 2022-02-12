import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper(".categories", {
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 10,
});

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}

document.querySelectorAll('.dropdown').forEach(function (dropdownWrapper) {
  const dropdownBtn = dropdownWrapper.querySelector('.dropdown__button');
  const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
  const dropdownItems = dropdownList.querySelectorAll('.dropdown__list-item');
  const dropdownActiveItem = dropdownList.querySelector('.dropdown__list-item.active');
  const dropdownInput = dropdownWrapper.querySelector('.dropdown__input_hidden');
  
  dropdownBtn.addEventListener('click', function () {
    dropdownList.classList.toggle('dropdown__list_visible');
    this.classList.toggle('dropdown__button_active');
  });
  
  dropdownItems.forEach(function(listItem) {
    listItem.addEventListener('click', function (e) {
      dropdownItems.forEach(function(el) {
        el.classList.remove('dropdown__list-item_active');
      })
      e.target.classList.add('dropdown__list-item_active');
      if(dropdownBtn.classList.contains('dropdown__button_sm-static')){
        if(window.innerWidth >= 576){
          dropdownBtn.innerText = this.innerText;
        }
      }else{
        dropdownBtn.innerText = this.innerText;
      }
      dropdownInput.value = this.dataset.value;
      dropdownList.classList.remove('dropdown__list_visible');
    })
  })

  window.addEventListener('resize', function(e) {
    if (dropdownBtn.classList.contains('dropdown__button_sm-static')){
      if(window.innerWidth <= 576){
        dropdownBtn.innerText = dropdownBtn.getAttribute('data-default');
      } else {
        if (dropdownList.querySelector('.dropdown__list-item_active')){
          dropdownBtn.innerText = dropdownList.querySelector('.dropdown__list-item_active').getAttribute('data-value');
        }
      }
    }
  })
  
  document.addEventListener('click', function (e) {
    if ( e.target !== dropdownBtn ){
      dropdownBtn.classList.remove('dropdown__button_active');
      dropdownList.classList.remove('dropdown__list_visible');
    }
  })
  
  document.addEventListener('keydown', function (e) {
    if( e.key === 'Tab' || e.key === 'Escape' ) {
      dropdownBtn.classList.remove('dropdown__button_active');
      dropdownList.classList.remove('dropdown__list_visible');
    }
  }) 
})

document.querySelectorAll('.dropdown_with-chk').forEach(function (dropdownWrapper) {
  const dropdownBtn = dropdownWrapper.querySelector('.dropdown_with-chk__button');
  const dropdownList = dropdownWrapper.querySelector('.dropdown_with-chk__list');
  const dropdownItems = dropdownList.querySelectorAll('.dropdown_with-chk__list-item');
  
  dropdownBtn.addEventListener('click', function () {
    dropdownList.classList.toggle('dropdown_with-chk__list_visible');
    this.classList.toggle('dropdown_with-chk__button_active');
  });
  
  dropdownItems.forEach(function(listItem) {
    listItem.addEventListener('click', function (e) {
      e.target.classList.toggle('dropdown_with-chk__list-item_active');
    })
  })
  
  document.addEventListener('click', function (e) {
    if ( e.target !== dropdownBtn && e.target !== dropdownItems && !e.target.classList.contains('dropdown_with-chk__list-item') && !e.target.classList.contains('dropdown_with-chk__list-item_label')){
      dropdownBtn.classList.remove('dropdown_with-chk__button_active');
      dropdownList.classList.remove('dropdown_with-chk__list_visible');
    }
  })
  
  document.addEventListener('keydown', function (e) {
    if( e.key === 'Tab' || e.key === 'Escape' ) {
      dropdownBtn.classList.remove('dropdown_with-chk__button_active');
      dropdownList.classList.remove('dropdown_with-chk__list_visible');
    }
  }) 
})

document.querySelectorAll('.info').forEach(function ( e ) {
  const infoBtn = e.querySelector('.info__expand');
  infoBtn.addEventListener('click', function (btn) {
    const info = btn.target.parentElement;
    const span = btn.target.querySelector('span');
    info.classList.toggle('expanded');
    if ( info.classList.contains('expanded') ){
      span.innerText = "Свернуть"
    }else {
      span.innerText = "Развернуть"
    }
  })
})

document.querySelectorAll('.categories__item').forEach(function ( e ) {
  e.addEventListener('click', function (e) {
    e.target.classList.toggle('categories__item_active');
  })
})

document.querySelectorAll('.sm-change').forEach(function ( e ) {
  window.addEventListener('resize', changeValue)
  window.addEventListener('DOMContentLoaded', changeValue)
  function changeValue () {
    if (window.innerWidth <= 576){
      e.innerText = e.getAttribute('data-sm-value');
    }else{
      e.innerText = e.getAttribute('data-value');
    }
  }
})

document.querySelectorAll('.filter').forEach(function ( ) {
  const filter = document.querySelector('.filter__content');
  const filterBtn = filter.querySelector('.filter__reset');
  const filterItems = filter.querySelectorAll('.dropdown__list-item');
  const filterDropdown = filter.querySelectorAll('.dropdown__button');
  const filterInputs = filter.querySelectorAll('.dropdown__input_hidden');
  const filterChecks = filter.querySelectorAll('.dropdown_with-chk__list-item_label');
  filterBtn.addEventListener('click', function () {
    filter.querySelector('.filter__item-input').value = "";
    filterDropdown.forEach(function (el) {
      el.innerText = el.getAttribute('data-default');
    })
    filterItems.forEach(function (el) {
      el.classList.remove('dropdown__list-item_active');
      if ( el.classList.contains('default') ) {
        el.classList.add('dropdown__list-item_active');
      }
    })
    filterInputs.forEach(function (el) {
      el.value = "";
    })
    filterChecks.forEach(function (el) {
      el.checked = false;
      el.classList.remove('dropdown_with-chk__list-item_active');
    })
  })
})

document.querySelector('.filter__show').addEventListener('click', function (  ) {
  document.querySelector('.filter__show').classList.toggle('active');
  const filter = document.querySelector('.filter__content');
  filter.classList.toggle('active');
})

document.querySelectorAll('.products__item').forEach(function ( el ) {
  const btn = el.querySelector('.products__item-expand');
  const content = el.querySelector('.products__item-content');
  const contentBtn = el.querySelectorAll('.products__item-content__btn');
  const items = el.querySelectorAll('.products__item-content__item');
  btn.addEventListener('click', function (  ) {
    btn.classList.toggle('active');
    content.classList.toggle('active');
  })
  contentBtn.forEach(function ( el ) {
    el.addEventListener('click', function (  ) {
      contentBtn.forEach(function ( el ) {
        el.classList.remove('active');
      })
      items.forEach(function ( el ) {
        el.classList.remove('active');
      })
      el.classList.add('active'); 
      const dataTarget = el.getAttribute('data-target');
      const target = content.querySelector('#'+dataTarget);
      target.classList.add('active');
    })
  })
})