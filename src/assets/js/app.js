/*
Template Name: Chatvia - Responsive Bootstrap 5 Chat App
Author: Themesbrand
Version: 2.5.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Main Js File
*/


(function ($) {

    'use strict';

    function initDropdownMenu() {
        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
            if (!$(this).next().hasClass('show')) {
              $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');
    
            return false;
        });   
    }
    
    function initComponents() {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        })

        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
        })
    }


    function initSettings() {
        var body = document.getElementsByTagName("body")[0];
        var lightDarkBtn = document.querySelectorAll(".light-dark-mode");
        if (lightDarkBtn && lightDarkBtn.length) {
          lightDarkBtn.forEach(function (item) {
            item.addEventListener("click", function (event) {
              if (
                body.hasAttribute("data-bs-theme") &&
                body.getAttribute("data-bs-theme") == "dark"
              ) {
                document.body.setAttribute("data-bs-theme", "light");
              } else {
                document.body.setAttribute("data-bs-theme", "dark");
              }
            });
          });
        }
      }

    function init() {
        initDropdownMenu();
        initComponents();
        initSettings();
        Waves.init();
    }

    init();

})(jQuery)