(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{110:function(n,e,t){(function(n){/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(){if(n&&n.fn&&n.fn.select2&&n.fn.select2.amd)var e=n.fn.select2.amd;e.define("select2/i18n/ru",[],(function(){function n(n,e,t,u){return n%10<5&&n%10>0&&n%100<5||n%100>20?n%10>1?t:e:u}return{errorLoading:function(){return"Невозможно загрузить результаты"},inputTooLong:function(e){var t=e.input.length-e.maximum,u="Пожалуйста, введите на "+t+" символ";return(u+=n(t,"","a","ов"))+" меньше"},inputTooShort:function(e){var t=e.minimum-e.input.length;return"Пожалуйста, введите ещё хотя бы "+t+" символ"+n(t,"","a","ов")},loadingMore:function(){return"Загрузка данных…"},maximumSelected:function(e){return"Вы можете выбрать не более "+e.maximum+" элемент"+n(e.maximum,"","a","ов")},noResults:function(){return"Совпадений не найдено"},searching:function(){return"Поиск…"},removeAllItems:function(){return"Удалить все элементы"}}})),e.define,e.require}()}).call(this,t(0))}}]);