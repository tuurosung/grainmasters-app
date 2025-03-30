/*
Template Name: STUDIO - Responsive Bootstrap 5 Admin Template
Version: 4.2.0
Author: Sean Ngu
  ----------------------------
    APPS CONTENT TABLE
  ----------------------------

  <!-- ======== GLOBAL SCRIPT SETTING ======== -->
  01. Global Variable
  02. Handle Scrollbar
  03. Handle Sidebar Menu
  04. Handle Sidebar Minify
  05. Handle Sidebar Minify Float Menu
  06. Handle Dropdown Close Option
  07. Handle Card - Remove / Reload / Collapse / Expand
  08. Handle Tooltip & Popover Activation
  09. Handle Scroll to Top Button Activation
  10. Handle hexToRgba
  11. Handle Scroll to
  12. Handle Theme Panel Expand
  13. Handle Theme Page Control
  14. Handle Enable Tooltip & Popover
  15. Handle Top Nav - Unlimited Nav Render
  16. Handle Top Nav - Submenu Toggle
  17. Handle Top Nav - Mobile Toggle

  <!-- ======== APPLICATION SETTING ======== -->
  Application Controller
*/



/* 01. Global Variable
------------------------------------------------ */
var app = {
    class: 'app',
    isMobile: ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || window.innerWidth < 992),
    header: {
        class: 'app-header'
    },
    sidebar: {
        class: 'app-sidebar',
        menuClass: 'menu',
        menuItemClass: 'menu-item',
        menuItemHasSubClass: 'has-sub',
        menuLinkClass: 'menu-link',
        menuSubmenuClass: 'menu-submenu',
        menuExpandClass: 'expand',
        minify: {
            toggledClass: 'app-sidebar-minified',
            localStorage: 'appSidebarMinified',
            toggleAttr: 'data-toggle="sidebar-minify"'
        },
        mobile: {
            toggledClass: 'app-sidebar-mobile-toggled',
            closedClass: 'app-sidebar-mobile-closed',
            dismissAttr: 'data-dismiss="sidebar-mobile"',
            toggleAttr: 'data-toggle="sidebar-mobile"',
        },
        scrollBar: {
            localStorage: 'appSidebarScrollPosition',
            dom: '',
        }
    },
    floatSubmenu: {
        id: 'app-float-submenu',
        dom: '',
        timeout: '',
        class: 'app-float-submenu',
        container: {
            class: 'app-float-submenu-container'
        },
        overflow: {
            class: 'overflow-scroll mh-100vh'
        }
    },
    topNav: {
        id: '#top-nav',
        class: 'app-top-nav',
        mobile: {
            toggleAttr: 'data-toggle="top-nav-mobile"'
        },
        menu: {
            class: 'menu',
            itemClass: 'menu-item',
            itemLinkClass: 'menu-link',
            activeClass: 'active',
            hasSubClass: 'has-sub',
            expandClass: 'expand',
            submenu: {
                class: 'menu-submenu'
            }
        },
        control: {
            class: 'menu-control',
            startClass: 'menu-control-start',
            endClass: 'menu-control-end',
            showClass: 'show',
            buttonPrev: {
                class: 'menu-control-start',
                toggleAttr: 'data-toggle="top-nav-prev"'
            },
            buttonNext: {
                class: 'menu-control-end',
                toggleAttr: 'data-toggle="top-nav-next"'
            }
        }
    },
    themePanel: {
        class: 'theme-panel',
        toggleAttr: 'data-click="theme-panel-expand"',
        expandCookie: 'theme-panel',
        expandCookieValue: 'expand',
        activeClass: 'active',
        themeList: {
            class: 'theme-list',
            toggleAttr: 'data-theme',
            activeClass: 'active',
            cookieName: 'theme',
            onChangeEvent: 'theme-reload'
        },
        darkMode: {
            class: 'dark-mode',
            inputName: 'app-theme-dark-mode',
            cookieName: 'dark-mode'
        }
    },
    animation: {
        speed: 300
    },
    scrollBar: {
        attr: 'data-scrollbar="true"',
        heightAttr: 'data-height',
        skipMobileAttr: 'data-skip-mobile="true"',
        wheelPropagationAttr: 'data-wheel-propagation'
    },
    scrollTo: {
        toggleAttr: 'data-toggle="scroll-to"',
        targetAttr: 'data-target'
    },
    scrollTopButton: {
        toggleAttr: 'data-click="scroll-top"',
        showClass: 'show'
    },
    card: {
        class: 'card',
        expand: {
            toggleAttr: 'data-toggle="card-expand"',
            status: false,
            class: 'card-expand',
            tooltipText: 'Expand / Compress'
        }
    },
    tooltip: {
        toggleAttr: 'data-bs-toggle="tooltip"'
    },
    popover: {
        toggleAttr: 'data-bs-toggle="popover"'
    },
    dismissClass: {
        toggleAttr: 'data-dismiss-class',
        targetAttr: 'data-dismiss-target'
    },
    toggleClass: {
        toggleAttr: 'data-toggle-class',
        targetAttr: 'data-toggle-target'
    },
    font: {},
    color: {},
    variablePrefix: 'bs-',
    variableFontList: ['body-font-family', 'body-font-size', 'body-font-weight', 'body-line-height'],
    variableColorList: [
        'theme', 'theme-rgb', 'theme-color', 'theme-color-rgb',
        'default', 'default-rgb',
        'primary', 'primary-rgb', 'primary-bg-subtle', 'primary-text', 'primary-border-subtle',
        'secondary', 'secondary-rgb', 'secondary-bg-subtle', 'secondary-text', 'secondary-border-subtle',
        'success', 'success-rgb', 'success-bg-subtle', 'success-text', 'success-border-subtle',
        'warning', 'warning-rgb', 'warning-bg-subtle', 'warning-text', 'warning-border-subtle',
        'info', 'info-rgb', 'info-bg-subtle', 'info-text', 'info-border-subtle',
        'danger', 'danger-rgb', 'danger-bg-subtle', 'danger-text', 'danger-border-subtle',
        'light', 'light-rgb', 'light-bg-subtle', 'light-text', 'light-border-subtle',
        'dark', 'dark-rgb', 'dark-bg-subtle', 'dark-text', 'dark-border-subtle',
        'white', 'white-rgb',
        'black', 'black-rgb',
        'teal', 'teal-rgb',
        'indigo', 'indigo-rgb',
        'purple', 'purple-rgb',
        'yellow', 'yellow-rgb',
        'pink', 'pink-rgb',
        'cyan', 'cyan-rgb',
        'gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-500', 'gray-600', 'gray-700', 'gray-800', 'gray-900',
        'gray-100-rgb', 'gray-200-rgb', 'gray-300-rgb', 'gray-400-rgb', 'gray-500-rgb', 'gray-600-rgb', 'gray-700-rgb', 'gray-800-rgb', 'gray-900-rgb',
        'muted', 'muted-rgb', 'emphasis-color', 'emphasis-color-rgb',
        'component-bg', 'component-bg-rgb', 'component-color', 'component-color-rgb',
        'body-bg', 'body-bg-rgb', 'body-color', 'body-color-rgb',
        'heading-color',
        'secondary-color', 'secondary-color-rgb', 'secondary-bg', 'secondary-bg-rgb',
        'tertiary-color', 'tertiary-color-rgb', 'tertiary-bg', 'tertiary-bg-rgb',
        'link-color', 'link-color-rgb', 'link-hover-color', 'link-hover-color-rgb',
        'border-color', 'border-color-translucent'
    ],
}

var slideUp = function (elm, duration = app.animation.speed) {
    if (!elm.classList.contains('transitioning')) {
        elm.classList.add('transitioning');
        elm.style.transitionProperty = 'height, margin, padding';
        elm.style.transitionDuration = duration + 'ms';
        elm.style.boxSizing = 'border-box';
        elm.style.height = elm.offsetHeight + 'px';
        elm.offsetHeight;
        elm.style.overflow = 'hidden';
        elm.style.height = 0;
        elm.style.paddingTop = 0;
        elm.style.paddingBottom = 0;
        elm.style.marginTop = 0;
        elm.style.marginBottom = 0;
        window.setTimeout(() => {
            elm.style.display = 'none';
            elm.style.removeProperty('height');
            elm.style.removeProperty('padding-top');
            elm.style.removeProperty('padding-bottom');
            elm.style.removeProperty('margin-top');
            elm.style.removeProperty('margin-bottom');
            elm.style.removeProperty('overflow');
            elm.style.removeProperty('transition-duration');
            elm.style.removeProperty('transition-property');
            elm.classList.remove('transitioning');
        }, duration);
    }
};

var slideDown = function (elm, duration = app.animation.speed) {
    if (!elm.classList.contains('transitioning')) {
        elm.classList.add('transitioning');
        elm.style.removeProperty('display');
        let display = window.getComputedStyle(elm).display;
        if (display === 'none') display = 'block';
        elm.style.display = display;
        let height = elm.offsetHeight;
        elm.style.overflow = 'hidden';
        elm.style.height = 0;
        elm.style.paddingTop = 0;
        elm.style.paddingBottom = 0;
        elm.style.marginTop = 0;
        elm.style.marginBottom = 0;
        elm.offsetHeight;
        elm.style.boxSizing = 'border-box';
        elm.style.transitionProperty = "height, margin, padding";
        elm.style.transitionDuration = duration + 'ms';
        elm.style.height = height + 'px';
        elm.style.removeProperty('padding-top');
        elm.style.removeProperty('padding-bottom');
        elm.style.removeProperty('margin-top');
        elm.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            elm.style.removeProperty('height');
            elm.style.removeProperty('overflow');
            elm.style.removeProperty('transition-duration');
            elm.style.removeProperty('transition-property');
            elm.classList.remove('transitioning');
        }, duration);
    }
};

var slideToggle = function (elm, duration = app.animation.speed) {
    if (window.getComputedStyle(elm).display === 'none') {
        return slideDown(elm, duration);
    } else {
        return slideUp(elm, duration);
    }
};

var setCookie = function (cookieName, cookieValue) {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 36000;
    now.setTime(expireTime);
    document.cookie = cookieName + '=' + cookieValue + ';expires=' + now.toUTCString() + ';path=/';
};

var getCookie = function (cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};


/* 02. Handle Scrollbar
------------------------------------------------ */
var handleScrollbar = function () {
    "use strict";

    var elms = document.querySelectorAll('[' + app.scrollBar.attr + ']');

    for (var i = 0; i < elms.length; i++) {
        generateScrollbar(elms[i])
    }
};
var generateScrollbar = function (elm) {
    "use strict";

    if (elm.scrollbarInit || (app.isMobile && elm.getAttribute(app.scrollBar.skipMobileAttr))) {
        return;
    }
    var dataHeight = (!elm.getAttribute(app.scrollBar.heightAttr)) ? elm.offsetHeight : elm.getAttribute(app.scrollBar.heightAttr);

    elm.style.height = dataHeight;
    elm.scrollbarInit = true;

    if (app.isMobile || !PerfectScrollbar) {
        elm.style.overflowX = 'scroll';
    } else {
        var dataWheelPropagation = (elm.getAttribute(app.scrollBar.wheelPropagationAttr)) ? elm.getAttribute(app.scrollBar.wheelPropagationAttr) : false;

        if (PerfectScrollbar) {
            if (elm.closest('.' + app.sidebar.class)) {
                app.sidebar.scrollBarDom = new PerfectScrollbar(elm, {
                    wheelPropagation: dataWheelPropagation
                });
            } else {
                new PerfectScrollbar(elm, {
                    wheelPropagation: dataWheelPropagation
                });
            }
        }
    }
};


/* 03. Handle Sidebar Menu
------------------------------------------------ */
var handleSidebarMenuToggle = function (menus) {
    menus.map(function (menu) {
        menu.onclick = function (e) {
            e.preventDefault();

            var target = this.nextElementSibling;

            if (!document.querySelector('.' + app.sidebar.minify.toggledClass) || window.innerWidth < 992) {
                slideToggle(target);

                menus.map(function (m) {
                    var otherTarget = m.nextElementSibling;
                    if (otherTarget !== target) {
                        slideUp(otherTarget);
                        otherTarget.closest('.' + app.sidebar.menuItemClass).classList.remove(app.sidebar.menuExpandClass);
                    }
                });

                var targetElm = target.closest('.' + app.sidebar.menuItemClass);
                if (targetElm.classList.contains(app.sidebar.menuExpandClass)) {
                    targetElm.classList.remove(app.sidebar.menuExpandClass);
                } else {
                    targetElm.classList.add(app.sidebar.menuExpandClass);
                }
            }
        }
    });
};
var handleSidebarMenu = function () {
    "use strict";

    var menus = [].slice.call(document.querySelectorAll('.' + app.sidebar.class + ' .' + app.sidebar.menuClass + ' > .' + app.sidebar.menuItemClass + '.' + app.sidebar.menuItemHasSubClass + ' > .' + app.sidebar.menuLinkClass + ''));
    handleSidebarMenuToggle(menus);

    var menus = [].slice.call(document.querySelectorAll('.' + app.sidebar.class + ' .' + app.sidebar.menuClass + ' > .' + app.sidebar.menuItemClass + '.' + app.sidebar.menuItemHasSubClass + ' .' + app.sidebar.menuSubmenuClass + ' .' + app.sidebar.menuItemClass + '.' + app.sidebar.menuItemHasSubClass + ' > .' + app.sidebar.menuLinkClass + ''));
    handleSidebarMenuToggle(menus);
};


/* 04. Handle Sidebar Scroll Memory
------------------------------------------------ */
var handleSidebarScrollMemory = function () {
    if (!app.isMobile) {
        try {
            if (typeof (Storage) !== 'undefined' && typeof (localStorage) !== 'undefined') {
                var elm = document.querySelector('.' + app.sidebar.class + ' [' + app.scrollBar.attr + ']');

                if (elm) {
                    elm.onscroll = function () {
                        localStorage.setItem(app.sidebar.scrollBar.localStorage, this.scrollTop);
                    }
                    var defaultScroll = localStorage.getItem(app.sidebar.scrollBar.localStorage);
                    if (defaultScroll) {
                        document.querySelector('.' + app.sidebar.class + ' [' + app.scrollBar.attr + ']').scrollTop = defaultScroll;
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
};


/* 05. Handle Sidebar Minify
------------------------------------------------ */
var handleSidebarMinify = function () {
    var elms = [].slice.call(document.querySelectorAll('[' + app.sidebar.minify.toggleAttr + ']'));
    elms.map(function (elm) {
        elm.onclick = function (e) {
            e.preventDefault();

            var targetElm = document.querySelector('.' + app.class);

            if (targetElm) {
                if (targetElm.classList.contains(app.sidebar.minify.toggledClass)) {
                    targetElm.classList.remove(app.sidebar.minify.toggledClass);
                    localStorage.removeItem(app.sidebar.minify.localStorage);
                } else {
                    targetElm.classList.add(app.sidebar.minify.toggledClass);
                    localStorage.setItem(app.sidebar.minify.localStorage, true);
                }
            }
        };
    });

    if (typeof (Storage) !== 'undefined') {
        if (localStorage[app.sidebar.minify.localStorage]) {
            var targetElm = document.querySelector('.' + app.class);

            if (targetElm) {
                targetElm.classList.add(app.sidebar.minify.toggledClass);
            }
        }
    }
};
var handleSidebarMobileToggle = function () {
    var elms = [].slice.call(document.querySelectorAll('[' + app.sidebar.mobile.toggleAttr + ']'));

    elms.map(function (elm) {
        elm.onclick = function (e) {
            e.preventDefault();

            var targetElm = document.querySelector('.' + app.class)

            if (targetElm) {
                targetElm.classList.remove(app.sidebar.mobile.closedClass);
                targetElm.classList.add(app.sidebar.mobile.toggledClass);
            }
        };
    });
};
var handleSidebarMobileDismiss = function () {
    var elms = [].slice.call(document.querySelectorAll('[' + app.sidebar.mobile.dismissAttr + ']'));

    elms.map(function (elm) {
        elm.onclick = function (e) {
            e.preventDefault();

            var targetElm = document.querySelector('.' + app.class)

            if (targetElm) {
                targetElm.classList.remove(app.sidebar.mobile.toggledClass);
                targetElm.classList.add(app.sidebar.mobile.closedClass);

                setTimeout(function () {
                    targetElm.classList.remove(app.sidebar.mobile.closedClass);
                }, app.animation.speed);
            }
        };
    });
};


/* 06. Handle Sidebar Minify Float Menu
------------------------------------------------ */
var handleGetHiddenMenuHeight = function (elm) {
    elm.setAttribute('style', 'position: absolute; visibility: hidden; display: block !important');
    var targetHeight = elm.clientHeight;
    elm.removeAttribute('style');
    return targetHeight;
}
var handleSidebarMinifyFloatMenuClick = function () {
    var elms = [].slice.call(document.querySelectorAll('.' + app.floatSubmenu.class + ' .' + app.sidebar.menuItemClass + '.' + app.sidebar.menuItemHasSubClass + ' > .' + app.sidebar.menuLinkClass));
    if (elms) {
        elms.map(function (elm) {
            elm.onclick = function (e) {
                e.preventDefault();
                var targetItem = this.closest('.' + app.sidebar.menuItemClass);
                var target = targetItem.querySelector('.' + app.sidebar.menuSubmenuClass);
                var targetStyle = getComputedStyle(target);
                var close = (targetStyle.getPropertyValue('display') != 'none') ? true : false;
                var expand = (targetStyle.getPropertyValue('display') != 'none') ? false : true;

                slideToggle(target);

                var loopHeight = setInterval(function () {
                    var targetMenu = document.querySelector(app.floatSubmenu.id);
                    var targetMenuArrow = document.querySelector(app.floatSubmenu.arrow.id);
                    var targetMenuLine = document.querySelector(app.floatSubmenu.line.id);
                    var targetHeight = targetMenu.clientHeight;
                    var targetOffset = targetMenu.getBoundingClientRect();
                    var targetOriTop = targetMenu.getAttribute('data-offset-top');
                    var targetMenuTop = targetMenu.getAttribute('data-menu-offset-top');
                    var targetTop = targetOffset.top;
                    var windowHeight = document.body.clientHeight;
                    if (close) {
                        if (targetTop > targetOriTop) {
                            targetTop = (targetTop > targetOriTop) ? targetOriTop : targetTop;
                            targetMenu.style.top = targetTop + 'px';
                            targetMenu.style.bottom = 'auto';
                            targetMenuArrow.style.top = '20px';
                            targetMenuArrow.style.bottom = 'auto';
                            targetMenuLine.style.top = '20px';
                            targetMenuLine.style.bottom = 'auto';
                        }
                    }
                    if (expand) {
                        if ((windowHeight - targetTop) < targetHeight) {
                            var arrowBottom = (windowHeight - targetMenuTop) - 22;
                            targetMenu.style.top = 'auto';
                            targetMenu.style.bottom = 0;
                            targetMenuArrow.style.top = 'auto';
                            targetMenuArrow.style.bottom = arrowBottom + 'px';
                            targetMenuLine.style.top = '20px';
                            targetMenuLine.style.bottom = arrowBottom + 'px';
                        }
                        var floatSubmenuElm = document.querySelector(app.floatSubmenu.id + ' .' + app.floatSubmenu.class);
                        if (targetHeight > windowHeight) {
                            if (floatSubmenuElm) {
                                var splitClass = (app.floatSubmenu.overflow.class).split(' ');
                                for (var i = 0; i < splitClass.length; i++) {
                                    floatSubmenuElm.classList.add(splitClass[i]);
                                }
                            }
                        }
                    }
                }, 1);
                setTimeout(function () {
                    clearInterval(loopHeight);
                }, app.animation.speed);
            }
        });
    }
}
var handleSidebarMinifyFloatMenu = function () {
    var elms = [].slice.call(document.querySelectorAll('.' + app.sidebar.class + ' .' + app.sidebar.menuClass + ' > .' + app.sidebar.menuItemClass + '.' + app.sidebar.menuItemHasSubClass + ' > .' + app.sidebar.menuLinkClass + ''));
    if (elms) {
        elms.map(function (elm) {
            elm.onmouseenter = function () {
                var appElm = document.querySelector('.' + app.class);

                if (appElm && appElm.classList.contains(app.sidebar.minify.toggledClass) && window.innerWidth >= 992) {
                    clearTimeout(app.floatSubmenu.timeout);

                    var targetMenu = this.closest('.' + app.sidebar.menuItemClass).querySelector('.' + app.sidebar.menuSubmenuClass);
                    if (app.floatSubmenu.dom == this && document.querySelector(app.floatSubmenu.class)) {
                        return;
                    } else {
                        app.floatSubmenu.dom = this;
                    }
                    var targetMenuHtml = targetMenu.innerHTML;
                    if (targetMenuHtml) {
                        var bodyStyle = getComputedStyle(document.body);
                        var sidebarOffset = document.querySelector('.' + app.sidebar.class).getBoundingClientRect();
                        var sidebarWidth = parseInt(document.querySelector('.' + app.sidebar.class).clientWidth);
                        var sidebarX = (bodyStyle.getPropertyValue('direction') != 'rtl') ? (sidebarOffset.left + sidebarWidth) : (document.body.clientWidth - sidebarOffset.left);
                        var targetHeight = handleGetHiddenMenuHeight(targetMenu);
                        var targetOffset = this.getBoundingClientRect();
                        var targetTop = targetOffset.top;
                        var targetLeft = (bodyStyle.getPropertyValue('direction') != 'rtl') ? sidebarX : 'auto';
                        var targetRight = (bodyStyle.getPropertyValue('direction') != 'rtl') ? 'auto' : sidebarX;
                        var windowHeight = document.body.clientHeight;

                        if (!document.querySelector('#' + app.floatSubmenu.id)) {
                            var overflowClass = '';
                            if (targetHeight > windowHeight) {
                                overflowClass = app.floatSubmenu.overflow.class;
                            }
                            var html = document.createElement('div');
                            html.setAttribute('id', app.floatSubmenu.id);
                            html.setAttribute('class', app.floatSubmenu.class);
                            html.setAttribute('data-offset-top', targetTop);
                            html.setAttribute('data-menu-offset-top', targetTop);
                            html.innerHTML = '' +
                                '	<div class="' + app.floatSubmenu.container.class + ' ' + overflowClass + '">' + targetMenuHtml + '</div>';
                            appElm.appendChild(html);

                            var elm = document.getElementById(app.floatSubmenu.id);
                            elm.onmouseover = function () {
                                clearTimeout(app.floatSubmenu.timeout);
                            };
                            elm.onmouseout = function () {
                                app.floatSubmenu.timeout = setTimeout(() => {
                                    document.querySelector('#' + app.floatSubmenu.id).remove();
                                }, app.animation.speed);
                            };
                        } else {
                            var floatSubmenu = document.querySelector('#' + app.floatSubmenu.id);
                            var floatSubmenuElm = document.querySelector('#' + app.floatSubmenu.id + ' .' + app.floatSubmenu.container.class);

                            if (targetHeight > windowHeight) {
                                if (floatSubmenuElm) {
                                    var splitClass = (app.floatSubmenu.overflow.class).split(' ');
                                    for (var i = 0; i < splitClass.length; i++) {
                                        floatSubmenuElm.classList.add(splitClass[i]);
                                    }
                                }
                            }
                            floatSubmenu.setAttribute('data-offset-top', targetTop);
                            floatSubmenu.setAttribute('data-menu-offset-top', targetTop);
                            floatSubmenuElm.innerHTML = targetMenuHtml;
                        }

                        var targetHeight = document.querySelector('#' + app.floatSubmenu.id).clientHeight;
                        var floatSubmenuElm = document.querySelector('#' + app.floatSubmenu.id);
                        if ((windowHeight - targetTop) > targetHeight) {
                            if (floatSubmenuElm) {
                                floatSubmenuElm.style.top = targetTop + 'px';
                                floatSubmenuElm.style.left = targetLeft + 'px';
                                floatSubmenuElm.style.bottom = 'auto';
                                floatSubmenuElm.style.right = targetRight + 'px';
                            }
                        } else {
                            var arrowBottom = (windowHeight - targetTop) - 21;
                            if (floatSubmenuElm) {
                                floatSubmenuElm.style.top = 'auto';
                                floatSubmenuElm.style.left = targetLeft + 'px';
                                floatSubmenuElm.style.bottom = 0;
                                floatSubmenuElm.style.right = targetRight + 'px';
                            }
                        }
                        handleSidebarMinifyFloatMenuClick();
                    } else {
                        document.querySelector('#' + app.floatSubmenu.id).remove();
                        app.floatSubmenu.dom = '';
                    }
                }
            }
            elm.onmouseleave = function () {
                var elm = document.querySelector('.' + app.class);
                if (elm && elm.classList.contains(app.sidebar.minify.toggledClass)) {
                    app.floatSubmenu.timeout = setTimeout(() => {
                        document.querySelector('#' + app.floatSubmenu.id).remove();
                        app.floatSubmenu.dom = '';
                    }, 250);
                }
            }
        });
    }
};


/* 07. Handle Card - Expand
------------------------------------------------ */
var handleCardAction = function () {
    "use strict";

    if (app.card.expand.status) {
        return false;
    }
    app.card.expandStatus = true;

    // expand
    var expandTogglerList = [].slice.call(document.querySelectorAll('[' + app.card.expand.toggleAttr + ']'));
    var expandTogglerTooltipList = expandTogglerList.map(function (expandTogglerEl) {
        expandTogglerEl.onclick = function (e) {
            e.preventDefault();

            var target = this.closest('.' + app.card.class);
            var targetClass = app.card.expand.class;

            if (document.body.classList.contains(targetClass) && target.classList.contains(targetClass)) {
                target.removeAttribute('style');
                target.classList.remove(targetClass);
                document.body.classList.remove(targetClass);
            } else {
                document.body.classList.add(targetClass);
                target.classList.add(targetClass);
            }

            window.dispatchEvent(new Event('resize'));
        };

        return new bootstrap.Tooltip(expandTogglerEl, {
            title: app.card.expand.tooltipText,
            placement: 'bottom',
            trigger: 'hover',
            container: 'body'
        });
    });
};


/* 08. Handle Tooltip & Popover Activation
------------------------------------------------ */
var handelTooltipPopoverActivation = function () {
    "use strict";
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[' + app.tooltip.toggleAttr + ']'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[' + app.popover.toggleAttr + ']'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
};


/* 09. Handle Scroll to Top Button Activation
------------------------------------------------ */
var handleScrollToTopButton = function () {
    "use strict";
    var elmTriggerList = [].slice.call(document.querySelectorAll('[' + app.scrollTopButton.toggleAttr + ']'));

    document.onscroll = function () {
        var doc = document.documentElement;
        var totalScroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        var elmList = elmTriggerList.map(function (elm) {
            if (totalScroll >= 200) {
                if (!elm.classList.contains(app.scrollTopButton.showClass)) {
                    elm.classList.add(app.scrollTopButton.showClass);
                }
            } else {
                elm.classList.remove(app.scrollTopButton.showClass);
            }
        });
    }

    var elmList = elmTriggerList.map(function (elm) {
        elm.onclick = function (e) {
            e.preventDefault();

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
};


/* 10. Handle Scroll to
------------------------------------------------ */
var handleScrollTo = function () {
    var elmTriggerList = [].slice.call(document.querySelectorAll('[' + app.scrollTo.toggleAttr + ']'));
    var elmList = elmTriggerList.map(function (elm) {
        elm.onclick = function (e) {
            e.preventDefault();

            var targetAttr = (elm.getAttribute(app.scrollTo.targetAttr)) ? this.getAttribute(app.scrollTo.targetAttr) : this.getAttribute('href');
            var targetElm = document.querySelectorAll(targetAttr)[0];
            var targetHeader = document.querySelectorAll('.' + app.header.class)[0];
            var targetHeight = targetHeader.offsetHeight;
            if (targetElm) {
                var targetTop = targetElm.offsetTop - targetHeight + 36;
                window.scrollTo({ top: targetTop, behavior: 'smooth' });
            }
        }
    });
};


/* 11. Handle Theme Panel Expand
------------------------------------------------ */
var handleThemePanelExpand = function () {
    var elmList = [].slice.call(document.querySelectorAll('[' + app.themePanel.toggleAttr + ']'));

    elmList.map(function (elm) {
        elm.onclick = function (e) {
            e.preventDefault();

            var targetContainer = document.querySelector('.' + app.themePanel.class);
            var targetExpand = false;

            if (targetContainer.classList.contains(app.themePanel.activeClass)) {
                targetContainer.classList.remove(app.themePanel.activeClass);
                setCookie(app.themePanel.expandCookie, '');
            } else {
                targetContainer.classList.add(app.themePanel.activeClass);
                setCookie(app.themePanel.expandCookie, app.themePanel.expandCookieValue);
            }
        }
    });

    if (getCookie(app.themePanel.expandCookie) && getCookie(app.themePanel.expandCookie) == app.themePanel.expandCookieValue) {
        var elm = document.querySelector('[' + app.themePanel.toggleAttr + ']');
        if (elm) {
            elm.click();
        }
    }
};


/* 12. Handle Theme Page Control
------------------------------------------------ */
var handleThemePageControl = function () {
    // Theme Click
    var elms = [].slice.call(document.querySelectorAll('.' + app.themePanel.themeList.class + ' [' + app.themePanel.themeList.toggleAttr + ']'));
    elms.map(function (elm) {
        elm.onclick = function () {
            var targetThemeClass = this.getAttribute(app.themePanel.themeList.toggleAttr);
            for (var x = 0; x < document.body.classList.length; x++) {
                var targetClass = document.body.classList[x];
                if (targetClass.search('theme-') > -1) {
                    document.body.classList.remove(targetClass);
                }
            }
            if (targetThemeClass) {
                document.body.classList.add(targetThemeClass);
            }

            var togglers = [].slice.call(document.querySelectorAll('.' + app.themePanel.themeList.class + ' [' + app.themePanel.themeList.toggleAttr + ']'));
            togglers.map(function (toggler) {
                if (toggler != elm) {
                    toggler.closest('li').classList.remove(app.themePanel.themeList.activeClass);
                } else {
                    toggler.closest('li').classList.add(app.themePanel.themeList.activeClass);
                }
            });
            handleCssVariable();
            setCookie(app.themePanel.themeList.cookieName, targetThemeClass);
            document.dispatchEvent(new CustomEvent(app.themePanel.themeList.onChangeEvent));
        }
    });

    // Theme Cookie
    if (getCookie(app.themePanel.themeList.cookieName) && document.querySelector('.' + app.themePanel.themeList.class)) {
        var targetElm = document.querySelector('.' + app.themePanel.themeList.class + ' [' + app.themePanel.themeList.toggleAttr + '="' + getCookie(app.themePanel.themeList.cookieName) + '"]');
        if (targetElm) {
            targetElm.click();
        }
    }

    // Dark Mode Click
    var elms = [].slice.call(document.querySelectorAll('.' + app.themePanel.class + ' [name="' + app.themePanel.darkMode.inputName + '"]'));
    elms.map(function (elm) {
        elm.onchange = function () {
            var targetCookie = '';

            if (this.checked) {
                document.documentElement.setAttribute('data-bs-theme', 'dark');
                targetCookie = 'dark-mode';
            } else {
                document.documentElement.removeAttribute('data-bs-theme');
            }
            handleCssVariable();
            setCookie(app.themePanel.darkMode.cookieName, targetCookie);
            document.dispatchEvent(new CustomEvent(app.themePanel.themeList.onChangeEvent));
        }
    });

    // Dark Mode Cookie
    if (getCookie(app.themePanel.darkMode.cookieName) && document.querySelector('.' + app.themePanel.class + ' [name="' + app.themePanel.darkMode.inputName + '"]')) {
        var elm = document.querySelector('.' + app.themePanel.class + ' [name="' + app.themePanel.darkMode.inputName + '"]');
        if (elm) {
            elm.checked = true;
            elm.onchange();
        }
    }
};


/* 13. Handle CSS Variable
------------------------------------------------ */
var handleCssVariable = function () {
    var rootStyle = getComputedStyle(document.body);

    // font
    if (app.variableFontList && app.variablePrefix) {
        for (var i = 0; i < (app.variableFontList).length; i++) {
            app.font[app.variableFontList[i].replace(/-([a-z|0-9])/g, (match, letter) => letter.toUpperCase())] = rootStyle.getPropertyValue('--' + app.variablePrefix + app.variableFontList[i]).trim();
        }
    }

    // color
    if (app.variableColorList && app.variablePrefix) {
        for (var i = 0; i < (app.variableColorList).length; i++) {
            app.color[app.variableColorList[i].replace(/-([a-z|0-9])/g, (match, letter) => letter.toUpperCase())] = rootStyle.getPropertyValue('--' + app.variablePrefix + app.variableColorList[i]).trim();
        }
    }
};


/* 14. Handle Toggle Class
------------------------------------------------ */
var handleToggleClass = function () {
    var elmList = [].slice.call(document.querySelectorAll('[' + app.toggleClass.toggleAttr + ']'));

    elmList.map(function (elm) {
        elm.onclick = function (e) {
            e.preventDefault();

            var targetToggleClass = this.getAttribute(app.toggleClass.toggleAttr);
            var targetDismissClass = this.getAttribute(app.dismissClass.toggleAttr);
            var targetToggleElm = document.querySelector(this.getAttribute(app.toggleClass.targetAttr));

            if (!targetDismissClass) {
                if (targetToggleElm.classList.contains(targetToggleClass)) {
                    targetToggleElm.classList.remove(targetToggleClass);
                } else {
                    targetToggleElm.classList.add(targetToggleClass);
                }
            } else {
                if (!targetToggleElm.classList.contains(targetToggleClass) && !targetToggleElm.classList.contains(targetDismissClass)) {
                    if (targetToggleElm.classList.contains(targetToggleClass)) {
                        targetToggleElm.classList.remove(targetToggleClass);
                    } else {
                        targetToggleElm.classList.add(targetToggleClass);
                    }
                } else {
                    if (targetToggleElm.classList.contains(targetToggleClass)) {
                        targetToggleElm.classList.remove(targetToggleClass);
                    } else {
                        targetToggleElm.classList.add(targetToggleClass);
                    }
                    if (targetToggleElm.classList.contains(targetDismissClass)) {
                        targetToggleElm.classList.remove(targetDismissClass);
                    } else {
                        targetToggleElm.classList.add(targetDismissClass);
                    }
                }
            }
        }
    });
}


/* 15. Handle Top Menu - Unlimited Nav Render
------------------------------------------------ */
var handleUnlimitedTopNavRender = function () {
    "use strict";
    // function handle menu button action - next / prev
    function handleMenuButtonAction(element, direction) {
        var obj = element.closest('.' + app.topNav.menu.class);
        var objStyle = window.getComputedStyle(obj);
        var bodyStyle = window.getComputedStyle(document.querySelector('body'));
        var targetCss = (bodyStyle.getPropertyValue('direction') == 'rtl') ? 'margin-right' : 'margin-left';
        var marginLeft = parseInt(objStyle.getPropertyValue(targetCss));
        var containerWidth = document.querySelector('.' + app.topNav.class).clientWidth - document.querySelector('.' + app.topNav.class).clientHeight * 2;
        var totalWidth = 0;
        var finalScrollWidth = 0;
        var controlPrevObj = obj.querySelector('.menu-control-start');
        var controlPrevWidth = (controlPrevObj) ? controlPrevObj.clientWidth : 0;
        var controlNextObj = obj.querySelector('.menu-control-end');
        var controlNextWidth = (controlPrevObj) ? controlNextObj.clientWidth : 0;
        var controlWidth = controlPrevWidth + controlNextWidth;

        var elms = [].slice.call(obj.querySelectorAll('.' + app.topNav.menu.itemClass));
        if (elms) {
            elms.map(function (elm) {
                if (!elm.classList.contains(app.topNav.control.class)) {
                    totalWidth += elm.clientWidth;
                }
            });
        }

        switch (direction) {
            case 'next':
                var widthLeft = totalWidth + marginLeft - containerWidth;
                if (widthLeft <= containerWidth) {
                    finalScrollWidth = widthLeft - marginLeft - controlWidth;
                    setTimeout(function () {
                        obj.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonNext.class).classList.remove('show');
                    }, app.animation.speed);
                } else {
                    finalScrollWidth = containerWidth - marginLeft - controlWidth;
                }

                if (finalScrollWidth !== 0) {
                    obj.style.transitionProperty = 'height, margin, padding';
                    obj.style.transitionDuration = app.animation.speed + 'ms';
                    if (bodyStyle.getPropertyValue('direction') != 'rtl') {
                        obj.style.marginLeft = '-' + finalScrollWidth + 'px';
                    } else {
                        obj.style.marginRight = '-' + finalScrollWidth + 'px';
                    }
                    setTimeout(function () {
                        obj.style.transitionProperty = '';
                        obj.style.transitionDuration = '';
                        obj.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonPrev.class).classList.add('show');
                    }, app.animation.speed);
                }
                break;
            case 'prev':
                var widthLeft = -marginLeft;

                if (widthLeft <= containerWidth) {
                    obj.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonPrev.class).classList.remove('show');
                    finalScrollWidth = 0;
                } else {
                    finalScrollWidth = widthLeft - containerWidth + controlWidth;
                }

                obj.style.transitionProperty = 'height, margin, padding';
                obj.style.transitionDuration = app.animation.speed + 'ms';

                if (bodyStyle.getPropertyValue('direction') != 'rtl') {
                    obj.style.marginLeft = '-' + finalScrollWidth + 'px';
                } else {
                    obj.style.marginRight = '-' + finalScrollWidth + 'px';
                }

                setTimeout(function () {
                    obj.style.transitionProperty = '';
                    obj.style.transitionDuration = '';
                    obj.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonNext.class).classList.add('show');
                }, app.animation.speed);
                break;
        }
    }

    // handle page load active menu focus
    function handlePageLoadMenuFocus() {
        var targetMenu = document.querySelector('.' + app.topNav.class + ' .' + app.topNav.menu.class);
        if (!targetMenu) {
            return;
        }
        var targetMenuStyle = window.getComputedStyle(targetMenu);
        var bodyStyle = window.getComputedStyle(document.body);
        var targetCss = (bodyStyle.getPropertyValue('direction') == 'rtl') ? 'margin-right' : 'margin-left';
        var marginLeft = parseInt(targetMenuStyle.getPropertyValue(targetCss));
        var viewWidth = document.querySelector('.' + app.topNav.class + '').clientWidth;
        var prevWidth = 0;
        var speed = 0;
        var fullWidth = 0;
        var controlPrevObj = targetMenu.querySelector('.menu-control-start');
        var controlPrevWidth = (controlPrevObj) ? controlPrevObj.clientWidth : 0;
        var controlNextObj = targetMenu.querySelector('.menu-control-end');
        var controlNextWidth = (controlPrevObj) ? controlNextObj.clientWidth : 0;
        var controlWidth = 0;

        var elms = [].slice.call(document.querySelectorAll('.' + app.topNav.class + ' .' + app.topNav.menu.class + ' > .' + app.topNav.menu.itemClass + ''));
        if (elms) {
            var found = false;
            elms.map(function (elm) {
                if (!elm.classList.contains('menu-control')) {
                    fullWidth += elm.clientWidth;
                    if (!found) {
                        prevWidth += elm.clientWidth;
                    }
                    if (elm.classList.contains('active')) {
                        found = true;
                    }
                }
            });
        }

        var elm = targetMenu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonNext.class);
        if (prevWidth != fullWidth && fullWidth >= viewWidth) {
            elm.classList.add(app.topNav.control.showClass);
            controlWidth += controlNextWidth;
        } else {
            elm.classList.remove(app.topNav.control.showClass);
        }

        var elm = targetMenu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonPrev.class);
        if (prevWidth >= viewWidth && fullWidth >= viewWidth) {
            elm.classList.add(app.topNav.control.showClass);
        } else {
            elm.classList.remove(app.topNav.control.showClass);
        }

        if (prevWidth >= viewWidth) {
            var finalScrollWidth = prevWidth - viewWidth + controlWidth;
            if (bodyStyle.getPropertyValue('direction') != 'rtl') {
                targetMenu.style.marginLeft = '-' + finalScrollWidth + 'px';
            } else {
                targetMenu.style.marginRight = '-' + finalScrollWidth + 'px';
            }
        }
    }

    // handle menu next button click action
    var elm = document.querySelector('[' + app.topNav.control.buttonNext.toggleAttr + ']');
    if (elm) {
        elm.onclick = function (e) {
            e.preventDefault();
            handleMenuButtonAction(this, 'next');
        };
    }

    // handle menu prev button click action
    var elm = document.querySelector('[' + app.topNav.control.buttonPrev.toggleAttr + ']');
    if (elm) {
        elm.onclick = function (e) {
            e.preventDefault();
            handleMenuButtonAction(this, 'prev');
        };
    }

    function enableFluidContainerDrag(containerClassName) {
        const container = document.querySelector(containerClassName);
        if (!container) {
            return;
        }
        const menu = container.querySelector('.menu');
        const menuItem = menu.querySelectorAll('.menu-item:not(.menu-control)');

        let startX, scrollLeft, mouseDown;
        let menuWidth = 0;
        let maxScroll = 0;

        menuItem.forEach((element) => {
            menuWidth += element.offsetWidth;
        });

        container.addEventListener('mousedown', (e) => {
            mouseDown = true;
            startX = e.pageX;
            scrollLeft = (menu.style.marginLeft) ? parseInt(menu.style.marginLeft) : 0;
            maxScroll = container.offsetWidth - menuWidth;
        });

        container.addEventListener('touchstart', (e) => {
            mouseDown = true;
            const touch = e.targetTouches[0];
            startX = touch.pageX;
            scrollLeft = (menu.style.marginLeft) ? parseInt(menu.style.marginLeft) : 0;
            maxScroll = container.offsetWidth - menuWidth;
        });

        container.addEventListener('mouseup', () => {
            mouseDown = false;
        });

        container.addEventListener('touchend', () => {
            mouseDown = false;
        });

        container.addEventListener('mousemove', (e) => {
            if (!startX || !mouseDown) return;
            if (window.innerWidth < 992) return;
            e.preventDefault();
            const x = e.pageX;
            const walkX = (x - startX) * 1;
            var totalMarginLeft = scrollLeft + walkX;
            if (totalMarginLeft <= maxScroll) {
                totalMarginLeft = maxScroll;
                menu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonNext.class).classList.remove('show');
            } else {
                menu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonNext.class).classList.add('show');
            }
            if (menuWidth < container.offsetWidth) {
                menu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonPrev.class).classList.remove('show');
            }
            if (maxScroll > 0) {
                menu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonNext.class).classList.remove('show');
            }
            if (totalMarginLeft > 0) {
                totalMarginLeft = 0;
                menu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonPrev.class).classList.remove('show');
            } else {
                menu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonPrev.class).classList.add('show');
            }
            menu.style.marginLeft = totalMarginLeft + 'px';
        });

        container.addEventListener('touchmove', (e) => {
            if (!startX || !mouseDown) return;
            if (window.innerWidth < 992) return;
            e.preventDefault();
            const touch = e.targetTouches[0];
            const x = touch.pageX;
            const walkX = (x - startX) * 1;
            var totalMarginLeft = scrollLeft + walkX;
            if (totalMarginLeft <= maxScroll) {
                totalMarginLeft = maxScroll;
                menu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonNext.class).classList.remove('show');
            } else {
                menu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonNext.class).classList.add('show');
            }
            if (menuWidth < container.offsetWidth) {
                menu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonPrev.class).classList.remove('show');
            }
            if (maxScroll > 0) {
                menu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonNext.class).classList.remove('show');
            }
            if (totalMarginLeft > 0) {
                totalMarginLeft = 0;
                menu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonPrev.class).classList.remove('show');
            } else {
                menu.querySelector('.' + app.topNav.control.class + '.' + app.topNav.control.buttonPrev.class).classList.add('show');
            }
            menu.style.marginLeft = totalMarginLeft + 'px';
        });
    }



    window.addEventListener('resize', function () {
        if (window.innerWidth >= 992) {
            var targetElm = document.querySelector('.' + app.topNav.class);
            if (targetElm) {
                targetElm.removeAttribute('style');
            }
            var targetElm2 = document.querySelector('.' + app.topNav.class + ' .' + app.topNav.menu.class);
            if (targetElm2) {
                targetElm2.removeAttribute('style');
            }
            var targetElm3 = document.querySelectorAll('.' + app.topNav.class + ' .' + app.topNav.menu.submenu.class);
            if (targetElm3) {
                targetElm3.forEach((elm3) => {
                    elm3.removeAttribute('style');
                });
            }
            handlePageLoadMenuFocus();
        }
        enableFluidContainerDrag('.' + app.topNav.class);
    });


    if (window.innerWidth >= 992) {
        handlePageLoadMenuFocus();
        enableFluidContainerDrag('.' + app.topNav.class);
    }
};


/* 16. Handle Top Nav - Submenu Toggle
------------------------------------------------ */
var handleTopNavToggle = function (menus, forMobile = false) {
    menus.map(function (menu) {
        menu.onclick = function (e) {
            e.preventDefault();

            if (!forMobile || (forMobile && document.body.clientWidth < 992)) {
                var target = this.nextElementSibling;
                menus.map(function (m) {
                    var otherTarget = m.nextElementSibling;
                    if (otherTarget !== target) {
                        slideUp(otherTarget);
                        otherTarget.closest('.' + app.topNav.menu.itemClass).classList.remove(app.topNav.menu.expandClass);
                        otherTarget.closest('.' + app.topNav.menu.itemClass).classList.add(app.topNav.menu.closedClass);
                    }
                });

                slideToggle(target);
            }
        }
    });
};
var handleTopNavSubMenu = function () {
    "use strict";

    var menuBaseSelector = '.' + app.topNav.class + ' .' + app.topNav.menu.class + ' > .' + app.topNav.menu.itemClass + '.' + app.topNav.menu.hasSubClass;
    var submenuBaseSelector = ' > .' + app.topNav.menu.submenu.class + ' > .' + app.topNav.menu.itemClass + '.' + app.topNav.menu.hasSubClass;

    // 14.1 Menu - Toggle / Collapse
    var menuLinkSelector = menuBaseSelector + ' > .' + app.topNav.menu.itemLinkClass;
    var menus = [].slice.call(document.querySelectorAll(menuLinkSelector));
    handleTopNavToggle(menus, true);

    // 14.2 Menu - Submenu lvl 1
    var submenuLvl1Selector = menuBaseSelector + submenuBaseSelector;
    var submenusLvl1 = [].slice.call(document.querySelectorAll(submenuLvl1Selector + ' > .' + app.topNav.menu.itemLinkClass));
    handleTopNavToggle(submenusLvl1);

    // 14.3 submenu lvl 2
    var submenuLvl2Selector = menuBaseSelector + submenuBaseSelector + submenuBaseSelector;
    var submenusLvl2 = [].slice.call(document.querySelectorAll(submenuLvl2Selector + ' > .' + app.topNav.menu.itemLinkClass));
    handleTopNavToggle(submenusLvl2);
};


/* 17. Handle Top Nav - Mobile Toggle
------------------------------------------------ */
var handleTopNavMobileToggle = function () {
    "use strict";

    var elm = document.querySelector('[' + app.topNav.mobile.toggleAttr + ']');
    if (elm) {
        elm.onclick = function (e) {
            e.preventDefault();
            slideToggle(document.querySelector('.' + app.topNav.class));
            window.scrollTo(0, 0);
        }
    }
};


/* Application Controller
------------------------------------------------ */
var App = function () {
    "use strict";

    return {
        //main function
        init: function () {
            this.initComponent();
            this.initSidebar();
            this.initTopNav();
        },
        initSidebar: function () {
            handleSidebarScrollMemory();
            handleSidebarMinifyFloatMenu();
            handleSidebarMenu();
            handleSidebarMinify();
            handleSidebarMobileToggle();
            handleSidebarMobileDismiss();
        },
        initTopNav: function () {
            handleUnlimitedTopNavRender();
            handleTopNavSubMenu();
            handleTopNavMobileToggle();
        },
        initComponent: function () {
            handleScrollbar();
            handleCardAction();
            handelTooltipPopoverActivation();
            handleScrollToTopButton();
            handleScrollTo();
            handleThemePanelExpand();
            handleThemePageControl();
            handleCssVariable();
            handleToggleClass();
        },
        scrollTop: function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
}();

document.addEventListener('DOMContentLoaded', function () {
    App.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAubWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRlbXBsYXRlIE5hbWU6IFNUVURJTyAtIFJlc3BvbnNpdmUgQm9vdHN0cmFwIDUgQWRtaW4gVGVtcGxhdGVcblZlcnNpb246IDQuMi4wXG5BdXRob3I6IFNlYW4gTmd1XG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBBUFBTIENPTlRFTlQgVEFCTEVcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIDwhLS0gPT09PT09PT0gR0xPQkFMIFNDUklQVCBTRVRUSU5HID09PT09PT09IC0tPlxuICAwMS4gR2xvYmFsIFZhcmlhYmxlXG4gIDAyLiBIYW5kbGUgU2Nyb2xsYmFyXG4gIDAzLiBIYW5kbGUgU2lkZWJhciBNZW51XG4gIDA0LiBIYW5kbGUgU2lkZWJhciBNaW5pZnlcbiAgMDUuIEhhbmRsZSBTaWRlYmFyIE1pbmlmeSBGbG9hdCBNZW51XG4gIDA2LiBIYW5kbGUgRHJvcGRvd24gQ2xvc2UgT3B0aW9uXG4gIDA3LiBIYW5kbGUgQ2FyZCAtIFJlbW92ZSAvIFJlbG9hZCAvIENvbGxhcHNlIC8gRXhwYW5kXG4gIDA4LiBIYW5kbGUgVG9vbHRpcCAmIFBvcG92ZXIgQWN0aXZhdGlvblxuICAwOS4gSGFuZGxlIFNjcm9sbCB0byBUb3AgQnV0dG9uIEFjdGl2YXRpb25cbiAgMTAuIEhhbmRsZSBoZXhUb1JnYmFcbiAgMTEuIEhhbmRsZSBTY3JvbGwgdG9cbiAgMTIuIEhhbmRsZSBUaGVtZSBQYW5lbCBFeHBhbmRcbiAgMTMuIEhhbmRsZSBUaGVtZSBQYWdlIENvbnRyb2xcbiAgMTQuIEhhbmRsZSBFbmFibGUgVG9vbHRpcCAmIFBvcG92ZXJcbiAgMTUuIEhhbmRsZSBUb3AgTmF2IC0gVW5saW1pdGVkIE5hdiBSZW5kZXJcbiAgMTYuIEhhbmRsZSBUb3AgTmF2IC0gU3VibWVudSBUb2dnbGVcbiAgMTcuIEhhbmRsZSBUb3AgTmF2IC0gTW9iaWxlIFRvZ2dsZVxuXHRcbiAgPCEtLSA9PT09PT09PSBBUFBMSUNBVElPTiBTRVRUSU5HID09PT09PT09IC0tPlxuICBBcHBsaWNhdGlvbiBDb250cm9sbGVyXG4qL1xuXG5cblxuLyogMDEuIEdsb2JhbCBWYXJpYWJsZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgYXBwID0ge1xuXHRjbGFzczogJ2FwcCcsXG5cdGlzTW9iaWxlOiAoKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkgfHwgd2luZG93LmlubmVyV2lkdGggPCA5OTIpLFxuXHRoZWFkZXI6IHtcblx0XHRjbGFzczogJ2FwcC1oZWFkZXInXG5cdH0sXG5cdHNpZGViYXI6IHtcblx0XHRjbGFzczogJ2FwcC1zaWRlYmFyJyxcblx0XHRtZW51Q2xhc3M6ICdtZW51Jyxcblx0XHRtZW51SXRlbUNsYXNzOiAnbWVudS1pdGVtJyxcblx0XHRtZW51SXRlbUhhc1N1YkNsYXNzOiAnaGFzLXN1YicsXG5cdFx0bWVudUxpbmtDbGFzczogJ21lbnUtbGluaycsXG5cdFx0bWVudVN1Ym1lbnVDbGFzczogJ21lbnUtc3VibWVudScsXG5cdFx0bWVudUV4cGFuZENsYXNzOiAnZXhwYW5kJyxcblx0XHRtaW5pZnk6IHtcblx0XHRcdHRvZ2dsZWRDbGFzczogJ2FwcC1zaWRlYmFyLW1pbmlmaWVkJyxcblx0XHRcdGxvY2FsU3RvcmFnZTogJ2FwcFNpZGViYXJNaW5pZmllZCcsXG5cdFx0XHR0b2dnbGVBdHRyOiAnZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1pbmlmeVwiJ1xuXHRcdH0sXG5cdFx0bW9iaWxlOiB7XG5cdFx0XHR0b2dnbGVkQ2xhc3M6ICdhcHAtc2lkZWJhci1tb2JpbGUtdG9nZ2xlZCcsXG5cdFx0XHRjbG9zZWRDbGFzczogJ2FwcC1zaWRlYmFyLW1vYmlsZS1jbG9zZWQnLFxuXHRcdFx0ZGlzbWlzc0F0dHI6ICdkYXRhLWRpc21pc3M9XCJzaWRlYmFyLW1vYmlsZVwiJyxcblx0XHRcdHRvZ2dsZUF0dHI6ICdkYXRhLXRvZ2dsZT1cInNpZGViYXItbW9iaWxlXCInLFxuXHRcdH0sXG5cdFx0c2Nyb2xsQmFyOiB7XG5cdFx0XHRsb2NhbFN0b3JhZ2U6ICdhcHBTaWRlYmFyU2Nyb2xsUG9zaXRpb24nLFxuXHRcdFx0ZG9tOiAnJyxcblx0XHR9XG5cdH0sXG5cdGZsb2F0U3VibWVudToge1xuXHRcdGlkOiAnYXBwLWZsb2F0LXN1Ym1lbnUnLFxuXHRcdGRvbTogJycsXG5cdFx0dGltZW91dDogJycsXG5cdFx0Y2xhc3M6ICdhcHAtZmxvYXQtc3VibWVudScsXG5cdFx0Y29udGFpbmVyOiB7XG5cdFx0XHRjbGFzczogJ2FwcC1mbG9hdC1zdWJtZW51LWNvbnRhaW5lcidcblx0XHR9LFxuXHRcdG92ZXJmbG93OiB7XG5cdFx0XHRjbGFzczogJ292ZXJmbG93LXNjcm9sbCBtaC0xMDB2aCdcblx0XHR9XG5cdH0sXG5cdHRvcE5hdjoge1xuXHRcdGlkOiAnI3RvcC1uYXYnLFxuXHRcdGNsYXNzOiAnYXBwLXRvcC1uYXYnLFxuXHRcdG1vYmlsZToge1xuXHRcdFx0dG9nZ2xlQXR0cjogJ2RhdGEtdG9nZ2xlPVwidG9wLW5hdi1tb2JpbGVcIidcblx0XHR9LFxuXHRcdG1lbnU6IHtcblx0XHRcdGNsYXNzOiAnbWVudScsXG5cdFx0XHRpdGVtQ2xhc3M6ICdtZW51LWl0ZW0nLFxuXHRcdFx0aXRlbUxpbmtDbGFzczogJ21lbnUtbGluaycsXG5cdFx0XHRhY3RpdmVDbGFzczogJ2FjdGl2ZScsXG5cdFx0XHRoYXNTdWJDbGFzczogJ2hhcy1zdWInLFxuXHRcdFx0ZXhwYW5kQ2xhc3M6ICdleHBhbmQnLFxuXHRcdFx0c3VibWVudToge1xuXHRcdFx0XHRjbGFzczogJ21lbnUtc3VibWVudSdcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbnRyb2w6IHtcblx0XHRcdGNsYXNzOiAnbWVudS1jb250cm9sJyxcblx0XHRcdHN0YXJ0Q2xhc3M6ICdtZW51LWNvbnRyb2wtc3RhcnQnLFxuXHRcdFx0ZW5kQ2xhc3M6ICdtZW51LWNvbnRyb2wtZW5kJyxcblx0XHRcdHNob3dDbGFzczogJ3Nob3cnLFxuXHRcdFx0YnV0dG9uUHJldjoge1xuXHRcdFx0XHRjbGFzczogJ21lbnUtY29udHJvbC1zdGFydCcsXG5cdFx0XHRcdHRvZ2dsZUF0dHI6ICdkYXRhLXRvZ2dsZT1cInRvcC1uYXYtcHJldlwiJ1xuXHRcdFx0fSxcblx0XHRcdGJ1dHRvbk5leHQ6IHtcblx0XHRcdFx0Y2xhc3M6ICdtZW51LWNvbnRyb2wtZW5kJyxcblx0XHRcdFx0dG9nZ2xlQXR0cjogJ2RhdGEtdG9nZ2xlPVwidG9wLW5hdi1uZXh0XCInXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHR0aGVtZVBhbmVsOiB7XG5cdFx0Y2xhc3M6ICd0aGVtZS1wYW5lbCcsXG5cdFx0dG9nZ2xlQXR0cjogJ2RhdGEtY2xpY2s9XCJ0aGVtZS1wYW5lbC1leHBhbmRcIicsXG5cdFx0ZXhwYW5kQ29va2llOiAndGhlbWUtcGFuZWwnLFxuXHRcdGV4cGFuZENvb2tpZVZhbHVlOiAnZXhwYW5kJyxcblx0XHRhY3RpdmVDbGFzczogJ2FjdGl2ZScsXG5cdFx0dGhlbWVMaXN0OiB7XG5cdFx0XHRjbGFzczogJ3RoZW1lLWxpc3QnLFxuXHRcdFx0dG9nZ2xlQXR0cjogJ2RhdGEtdGhlbWUnLFxuXHRcdFx0YWN0aXZlQ2xhc3M6ICdhY3RpdmUnLFxuXHRcdFx0Y29va2llTmFtZTogJ3RoZW1lJyxcblx0XHRcdG9uQ2hhbmdlRXZlbnQ6ICd0aGVtZS1yZWxvYWQnXG5cdFx0fSxcblx0XHRkYXJrTW9kZToge1xuXHRcdFx0Y2xhc3M6ICdkYXJrLW1vZGUnLFxuXHRcdFx0aW5wdXROYW1lOiAnYXBwLXRoZW1lLWRhcmstbW9kZScsXG5cdFx0XHRjb29raWVOYW1lOiAnZGFyay1tb2RlJ1xuXHRcdH1cblx0fSxcblx0YW5pbWF0aW9uOiB7IFxuXHRcdHNwZWVkOiAzMDAgXG5cdH0sXG5cdHNjcm9sbEJhcjoge1xuXHRcdGF0dHI6ICdkYXRhLXNjcm9sbGJhcj1cInRydWVcIicsXG5cdFx0aGVpZ2h0QXR0cjogJ2RhdGEtaGVpZ2h0Jyxcblx0XHRza2lwTW9iaWxlQXR0cjogJ2RhdGEtc2tpcC1tb2JpbGU9XCJ0cnVlXCInLFxuXHRcdHdoZWVsUHJvcGFnYXRpb25BdHRyOiAnZGF0YS13aGVlbC1wcm9wYWdhdGlvbidcblx0fSxcblx0c2Nyb2xsVG86IHtcblx0XHR0b2dnbGVBdHRyOiAnZGF0YS10b2dnbGU9XCJzY3JvbGwtdG9cIicsXG5cdFx0dGFyZ2V0QXR0cjogJ2RhdGEtdGFyZ2V0J1xuXHR9LFxuXHRzY3JvbGxUb3BCdXR0b246IHtcblx0XHR0b2dnbGVBdHRyOiAnZGF0YS1jbGljaz1cInNjcm9sbC10b3BcIicsXG5cdFx0c2hvd0NsYXNzOiAnc2hvdydcblx0fSxcblx0Y2FyZDogeyBcblx0XHRjbGFzczogJ2NhcmQnLFxuXHRcdGV4cGFuZDoge1xuXHRcdFx0dG9nZ2xlQXR0cjogJ2RhdGEtdG9nZ2xlPVwiY2FyZC1leHBhbmRcIicsXG5cdFx0XHRzdGF0dXM6IGZhbHNlLFxuXHRcdFx0Y2xhc3M6ICdjYXJkLWV4cGFuZCcsXG5cdFx0XHR0b29sdGlwVGV4dDogJ0V4cGFuZCAvIENvbXByZXNzJ1xuXHRcdH1cblx0fSxcblx0dG9vbHRpcDoge1xuXHRcdHRvZ2dsZUF0dHI6ICdkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIidcblx0fSxcblx0cG9wb3Zlcjoge1xuXHRcdHRvZ2dsZUF0dHI6ICdkYXRhLWJzLXRvZ2dsZT1cInBvcG92ZXJcIidcblx0fSxcblx0ZGlzbWlzc0NsYXNzOiB7XG5cdFx0dG9nZ2xlQXR0cjogJ2RhdGEtZGlzbWlzcy1jbGFzcycsXG5cdFx0dGFyZ2V0QXR0cjogJ2RhdGEtZGlzbWlzcy10YXJnZXQnXG5cdH0sXG5cdHRvZ2dsZUNsYXNzOiB7XG5cdFx0dG9nZ2xlQXR0cjogJ2RhdGEtdG9nZ2xlLWNsYXNzJyxcblx0XHR0YXJnZXRBdHRyOiAnZGF0YS10b2dnbGUtdGFyZ2V0J1xuXHR9LFxuXHRmb250OiB7IH0sXG5cdGNvbG9yOiB7IH0sXG5cdHZhcmlhYmxlUHJlZml4OiAnYnMtJyxcblx0dmFyaWFibGVGb250TGlzdDogWydib2R5LWZvbnQtZmFtaWx5JywgJ2JvZHktZm9udC1zaXplJywgJ2JvZHktZm9udC13ZWlnaHQnLCAnYm9keS1saW5lLWhlaWdodCddLFxuXHR2YXJpYWJsZUNvbG9yTGlzdDogW1xuXHRcdCd0aGVtZScsICd0aGVtZS1yZ2InLCAndGhlbWUtY29sb3InLCAndGhlbWUtY29sb3ItcmdiJyxcblx0XHQnZGVmYXVsdCcsICdkZWZhdWx0LXJnYicsXG5cdFx0J3ByaW1hcnknLCAncHJpbWFyeS1yZ2InLCAncHJpbWFyeS1iZy1zdWJ0bGUnLCAncHJpbWFyeS10ZXh0JywgJ3ByaW1hcnktYm9yZGVyLXN1YnRsZScsXG5cdFx0J3NlY29uZGFyeScsICdzZWNvbmRhcnktcmdiJywgJ3NlY29uZGFyeS1iZy1zdWJ0bGUnLCAnc2Vjb25kYXJ5LXRleHQnLCAnc2Vjb25kYXJ5LWJvcmRlci1zdWJ0bGUnLFxuXHRcdCdzdWNjZXNzJywgJ3N1Y2Nlc3MtcmdiJywgJ3N1Y2Nlc3MtYmctc3VidGxlJywgJ3N1Y2Nlc3MtdGV4dCcsICdzdWNjZXNzLWJvcmRlci1zdWJ0bGUnLFxuXHRcdCd3YXJuaW5nJywgJ3dhcm5pbmctcmdiJywgJ3dhcm5pbmctYmctc3VidGxlJywgJ3dhcm5pbmctdGV4dCcsICd3YXJuaW5nLWJvcmRlci1zdWJ0bGUnLFxuXHRcdCdpbmZvJywgJ2luZm8tcmdiJywgJ2luZm8tYmctc3VidGxlJywgJ2luZm8tdGV4dCcsICdpbmZvLWJvcmRlci1zdWJ0bGUnLFxuXHRcdCdkYW5nZXInLCAnZGFuZ2VyLXJnYicsICdkYW5nZXItYmctc3VidGxlJywgJ2Rhbmdlci10ZXh0JywgJ2Rhbmdlci1ib3JkZXItc3VidGxlJyxcblx0XHQnbGlnaHQnLCAnbGlnaHQtcmdiJywgJ2xpZ2h0LWJnLXN1YnRsZScsICdsaWdodC10ZXh0JywgJ2xpZ2h0LWJvcmRlci1zdWJ0bGUnLFxuXHRcdCdkYXJrJywgJ2RhcmstcmdiJywgJ2RhcmstYmctc3VidGxlJywgJ2RhcmstdGV4dCcsICdkYXJrLWJvcmRlci1zdWJ0bGUnLFxuXHRcdCd3aGl0ZScsICd3aGl0ZS1yZ2InLFxuXHRcdCdibGFjaycsICdibGFjay1yZ2InLFxuXHRcdCd0ZWFsJywgJ3RlYWwtcmdiJyxcblx0XHQnaW5kaWdvJywgJ2luZGlnby1yZ2InLCBcblx0XHQncHVycGxlJywgJ3B1cnBsZS1yZ2InLFxuXHRcdCd5ZWxsb3cnLCAneWVsbG93LXJnYicsXG5cdFx0J3BpbmsnLCAncGluay1yZ2InLFxuXHRcdCdjeWFuJywgJ2N5YW4tcmdiJyxcblx0XHQnZ3JheS0xMDAnLCAnZ3JheS0yMDAnLCAnZ3JheS0zMDAnLCAnZ3JheS00MDAnLCAnZ3JheS01MDAnLCAgJ2dyYXktNjAwJywgJ2dyYXktNzAwJywgJ2dyYXktODAwJywgJ2dyYXktOTAwJywgXG5cdFx0J2dyYXktMTAwLXJnYicsICdncmF5LTIwMC1yZ2InLCAnZ3JheS0zMDAtcmdiJywgJ2dyYXktNDAwLXJnYicsICdncmF5LTUwMC1yZ2InLCAgJ2dyYXktNjAwLXJnYicsICdncmF5LTcwMC1yZ2InLCAnZ3JheS04MDAtcmdiJywgJ2dyYXktOTAwLXJnYicsIFxuXHRcdCdtdXRlZCcsICdtdXRlZC1yZ2InLCAnZW1waGFzaXMtY29sb3InLCAnZW1waGFzaXMtY29sb3ItcmdiJyxcblx0XHQnY29tcG9uZW50LWJnJywgJ2NvbXBvbmVudC1iZy1yZ2InLCAnY29tcG9uZW50LWNvbG9yJywgJ2NvbXBvbmVudC1jb2xvci1yZ2InLFxuXHRcdCdib2R5LWJnJywgJ2JvZHktYmctcmdiJywgJ2JvZHktY29sb3InLCAnYm9keS1jb2xvci1yZ2InLFxuXHRcdCdoZWFkaW5nLWNvbG9yJywgXG5cdFx0J3NlY29uZGFyeS1jb2xvcicsICdzZWNvbmRhcnktY29sb3ItcmdiJywgJ3NlY29uZGFyeS1iZycsICdzZWNvbmRhcnktYmctcmdiJyxcblx0XHQndGVydGlhcnktY29sb3InLCAndGVydGlhcnktY29sb3ItcmdiJywgJ3RlcnRpYXJ5LWJnJywgJ3RlcnRpYXJ5LWJnLXJnYicsXG5cdFx0J2xpbmstY29sb3InLCAnbGluay1jb2xvci1yZ2InLCAnbGluay1ob3Zlci1jb2xvcicsICdsaW5rLWhvdmVyLWNvbG9yLXJnYicsIFxuXHRcdCdib3JkZXItY29sb3InLCAnYm9yZGVyLWNvbG9yLXRyYW5zbHVjZW50J1xuXHRdLFxufVxuXG52YXIgc2xpZGVVcCA9IGZ1bmN0aW9uKGVsbSwgZHVyYXRpb24gPSBhcHAuYW5pbWF0aW9uLnNwZWVkKSB7XG5cdGlmICghZWxtLmNsYXNzTGlzdC5jb250YWlucygndHJhbnNpdGlvbmluZycpKSB7XG5cdFx0ZWxtLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb25pbmcnKTtcblx0XHRlbG0uc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcblx0XHRlbG0uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuXHRcdGVsbS5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cdFx0ZWxtLnN0eWxlLmhlaWdodCA9IGVsbS5vZmZzZXRIZWlnaHQgKyAncHgnO1xuXHRcdGVsbS5vZmZzZXRIZWlnaHQ7XG5cdFx0ZWxtLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0ZWxtLnN0eWxlLmhlaWdodCA9IDA7XG5cdFx0ZWxtLnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xuXHRcdGVsbS5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcblx0XHRlbG0uc3R5bGUubWFyZ2luVG9wID0gMDtcblx0XHRlbG0uc3R5bGUubWFyZ2luQm90dG9tID0gMDtcblx0XHR3aW5kb3cuc2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0ZWxtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRlbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuXHRcdFx0ZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xuXHRcdFx0ZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuXHRcdFx0ZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XG5cdFx0XHRlbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcblx0XHRcdGVsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcblx0XHRcdGVsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xuXHRcdFx0ZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XG5cdFx0XHRlbG0uY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbmluZycpO1xuXHRcdH0sIGR1cmF0aW9uKTtcblx0fVxufTtcblxudmFyIHNsaWRlRG93biA9IGZ1bmN0aW9uKGVsbSwgZHVyYXRpb24gPSBhcHAuYW5pbWF0aW9uLnNwZWVkKSB7XG5cdGlmICghZWxtLmNsYXNzTGlzdC5jb250YWlucygndHJhbnNpdGlvbmluZycpKSB7XG5cdFx0ZWxtLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb25pbmcnKTtcblx0XHRlbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcblx0XHRsZXQgZGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsbSkuZGlzcGxheTtcblx0XHRpZiAoZGlzcGxheSA9PT0gJ25vbmUnKSBkaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRlbG0uc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG5cdFx0bGV0IGhlaWdodCA9IGVsbS5vZmZzZXRIZWlnaHQ7XG5cdFx0ZWxtLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0ZWxtLnN0eWxlLmhlaWdodCA9IDA7XG5cdFx0ZWxtLnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xuXHRcdGVsbS5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcblx0XHRlbG0uc3R5bGUubWFyZ2luVG9wID0gMDtcblx0XHRlbG0uc3R5bGUubWFyZ2luQm90dG9tID0gMDtcblx0XHRlbG0ub2Zmc2V0SGVpZ2h0O1xuXHRcdGVsbS5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cdFx0ZWxtLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdcIjtcblx0XHRlbG0uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuXHRcdGVsbS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXHRcdGVsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcblx0XHRlbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XG5cdFx0ZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XG5cdFx0ZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdGVsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG5cdFx0XHRlbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG5cdFx0XHRlbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcblx0XHRcdGVsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xuXHRcdFx0ZWxtLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb25pbmcnKTtcblx0XHR9LCBkdXJhdGlvbik7XG5cdH1cbn07XG5cbnZhciBzbGlkZVRvZ2dsZSA9IGZ1bmN0aW9uKGVsbSwgZHVyYXRpb24gPSBhcHAuYW5pbWF0aW9uLnNwZWVkKSB7XG5cdGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbG0pLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdHJldHVybiBzbGlkZURvd24oZWxtLCBkdXJhdGlvbik7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHNsaWRlVXAoZWxtLCBkdXJhdGlvbik7XG5cdH1cbn07XG5cbnZhciBzZXRDb29raWUgPSBmdW5jdGlvbihjb29raWVOYW1lLCBjb29raWVWYWx1ZSkge1xuXHR2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBub3cuZ2V0VGltZSgpO1xuICB2YXIgZXhwaXJlVGltZSA9IHRpbWUgKyAxMDAwKjM2MDAwO1xuICBub3cuc2V0VGltZShleHBpcmVUaW1lKTtcbiAgZG9jdW1lbnQuY29va2llID0gY29va2llTmFtZSArICc9JysgY29va2llVmFsdWUgKyc7ZXhwaXJlcz0nK25vdy50b1VUQ1N0cmluZygpKyc7cGF0aD0vJztcbn07XG5cbnZhciBnZXRDb29raWUgPSBmdW5jdGlvbihjb29raWVOYW1lKSB7XG4gIGxldCBuYW1lID0gY29va2llTmFtZSArIFwiPVwiO1xuICBsZXQgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xuICBsZXQgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGMgPSBjYVtpXTtcbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XG4gICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xuICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBcIlwiO1xufTtcblxuXG4vKiAwMi4gSGFuZGxlIFNjcm9sbGJhclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgaGFuZGxlU2Nyb2xsYmFyID0gZnVuY3Rpb24oKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0dmFyIGVsbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbJysgYXBwLnNjcm9sbEJhci5hdHRyICsnXScpO1xuXHRcdFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVsbXMubGVuZ3RoOyBpKyspIHtcblx0XHRnZW5lcmF0ZVNjcm9sbGJhcihlbG1zW2ldKVxuXHR9XG59O1xudmFyIGdlbmVyYXRlU2Nyb2xsYmFyID0gZnVuY3Rpb24oZWxtKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXHRcblx0aWYgKGVsbS5zY3JvbGxiYXJJbml0IHx8IChhcHAuaXNNb2JpbGUgJiYgZWxtLmdldEF0dHJpYnV0ZShhcHAuc2Nyb2xsQmFyLnNraXBNb2JpbGVBdHRyKSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIGRhdGFIZWlnaHQgPSAoIWVsbS5nZXRBdHRyaWJ1dGUoYXBwLnNjcm9sbEJhci5oZWlnaHRBdHRyKSkgPyBlbG0ub2Zmc2V0SGVpZ2h0IDogZWxtLmdldEF0dHJpYnV0ZShhcHAuc2Nyb2xsQmFyLmhlaWdodEF0dHIpO1xuXHRcblx0ZWxtLnN0eWxlLmhlaWdodCA9IGRhdGFIZWlnaHQ7XG5cdGVsbS5zY3JvbGxiYXJJbml0ID0gdHJ1ZTtcblx0XG5cdGlmKGFwcC5pc01vYmlsZSB8fCAhUGVyZmVjdFNjcm9sbGJhcikge1xuXHRcdGVsbS5zdHlsZS5vdmVyZmxvd1ggPSAnc2Nyb2xsJztcblx0fSBlbHNlIHtcblx0XHR2YXIgZGF0YVdoZWVsUHJvcGFnYXRpb24gPSAoZWxtLmdldEF0dHJpYnV0ZShhcHAuc2Nyb2xsQmFyLndoZWVsUHJvcGFnYXRpb25BdHRyKSkgPyBlbG0uZ2V0QXR0cmlidXRlKGFwcC5zY3JvbGxCYXIud2hlZWxQcm9wYWdhdGlvbkF0dHIpIDogZmFsc2U7XG5cdFx0XG5cdFx0aWYgKFBlcmZlY3RTY3JvbGxiYXIpIHtcblx0XHRcdGlmIChlbG0uY2xvc2VzdCgnLicrIGFwcC5zaWRlYmFyLmNsYXNzICkpIHtcblx0XHRcdFx0YXBwLnNpZGViYXIuc2Nyb2xsQmFyRG9tID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoZWxtLCB7XG5cdFx0XHRcdFx0d2hlZWxQcm9wYWdhdGlvbjogZGF0YVdoZWVsUHJvcGFnYXRpb25cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXcgUGVyZmVjdFNjcm9sbGJhcihlbG0sIHtcblx0XHRcdFx0XHR3aGVlbFByb3BhZ2F0aW9uOiBkYXRhV2hlZWxQcm9wYWdhdGlvblxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cblxuLyogMDMuIEhhbmRsZSBTaWRlYmFyIE1lbnVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZVNpZGViYXJNZW51VG9nZ2xlID0gZnVuY3Rpb24obWVudXMpIHtcblx0bWVudXMubWFwKGZ1bmN0aW9uKG1lbnUpIHtcblx0XHRtZW51Lm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcblx0XHRcdHZhciB0YXJnZXQgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcblx0XHRcdFxuXHRcdFx0aWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJysgYXBwLnNpZGViYXIubWluaWZ5LnRvZ2dsZWRDbGFzcykgfHwgd2luZG93LmlubmVyV2lkdGggPCA5OTIpIHtcblx0XHRcdFx0c2xpZGVUb2dnbGUodGFyZ2V0KTtcblx0XHRcdFx0XG5cdFx0XHRcdG1lbnVzLm1hcChmdW5jdGlvbihtKSB7XG5cdFx0XHRcdFx0dmFyIG90aGVyVGFyZ2V0ID0gbS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0XHRcdFx0aWYgKG90aGVyVGFyZ2V0ICE9PSB0YXJnZXQpIHtcblx0XHRcdFx0XHRcdHNsaWRlVXAob3RoZXJUYXJnZXQpO1xuXHRcdFx0XHRcdFx0b3RoZXJUYXJnZXQuY2xvc2VzdCgnLicrIGFwcC5zaWRlYmFyLm1lbnVJdGVtQ2xhc3MpLmNsYXNzTGlzdC5yZW1vdmUoYXBwLnNpZGViYXIubWVudUV4cGFuZENsYXNzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdFx0dmFyIHRhcmdldEVsbSA9IHRhcmdldC5jbG9zZXN0KCcuJysgYXBwLnNpZGViYXIubWVudUl0ZW1DbGFzcyk7XG5cdFx0XHRcdGlmICh0YXJnZXRFbG0uY2xhc3NMaXN0LmNvbnRhaW5zKGFwcC5zaWRlYmFyLm1lbnVFeHBhbmRDbGFzcykpIHtcblx0XHRcdFx0XHR0YXJnZXRFbG0uY2xhc3NMaXN0LnJlbW92ZShhcHAuc2lkZWJhci5tZW51RXhwYW5kQ2xhc3MpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhcmdldEVsbS5jbGFzc0xpc3QuYWRkKGFwcC5zaWRlYmFyLm1lbnVFeHBhbmRDbGFzcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufTtcbnZhciBoYW5kbGVTaWRlYmFyTWVudSA9IGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdHZhciBtZW51cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrIGFwcC5zaWRlYmFyLmNsYXNzICsnIC4nKyBhcHAuc2lkZWJhci5tZW51Q2xhc3MgKycgPiAuJysgYXBwLnNpZGViYXIubWVudUl0ZW1DbGFzcyArJy4nKyBhcHAuc2lkZWJhci5tZW51SXRlbUhhc1N1YkNsYXNzICsnID4gLicrIGFwcC5zaWRlYmFyLm1lbnVMaW5rQ2xhc3MgKycnKSk7XG5cdGhhbmRsZVNpZGViYXJNZW51VG9nZ2xlKG1lbnVzKTtcblx0XG5cdHZhciBtZW51cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrIGFwcC5zaWRlYmFyLmNsYXNzICsnIC4nKyBhcHAuc2lkZWJhci5tZW51Q2xhc3MgKycgPiAuJysgYXBwLnNpZGViYXIubWVudUl0ZW1DbGFzcyArJy4nKyBhcHAuc2lkZWJhci5tZW51SXRlbUhhc1N1YkNsYXNzICsnIC4nKyBhcHAuc2lkZWJhci5tZW51U3VibWVudUNsYXNzICsnIC4nKyBhcHAuc2lkZWJhci5tZW51SXRlbUNsYXNzICsnLicrIGFwcC5zaWRlYmFyLm1lbnVJdGVtSGFzU3ViQ2xhc3MgKycgPiAuJysgYXBwLnNpZGViYXIubWVudUxpbmtDbGFzcyArJycpKTtcblx0aGFuZGxlU2lkZWJhck1lbnVUb2dnbGUobWVudXMpO1xufTtcblxuXG4vKiAwNC4gSGFuZGxlIFNpZGViYXIgU2Nyb2xsIE1lbW9yeVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgaGFuZGxlU2lkZWJhclNjcm9sbE1lbW9yeSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIWFwcC5pc01vYmlsZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAodHlwZW9mKFN0b3JhZ2UpICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YobG9jYWxTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0dmFyIGVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAuc2lkZWJhci5jbGFzcyArJyBbJysgYXBwLnNjcm9sbEJhci5hdHRyICsnXScpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKGVsbSkge1xuXHRcdFx0XHRcdGVsbS5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oYXBwLnNpZGViYXIuc2Nyb2xsQmFyLmxvY2FsU3RvcmFnZSwgdGhpcy5zY3JvbGxUb3ApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgZGVmYXVsdFNjcm9sbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFwcC5zaWRlYmFyLnNjcm9sbEJhci5sb2NhbFN0b3JhZ2UpO1xuXHRcdFx0XHRcdGlmIChkZWZhdWx0U2Nyb2xsKSB7XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJysgYXBwLnNpZGViYXIuY2xhc3MgKycgWycrIGFwcC5zY3JvbGxCYXIuYXR0ciArJ10nKS5zY3JvbGxUb3AgPSBkZWZhdWx0U2Nyb2xsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xuXG5cbi8qIDA1LiBIYW5kbGUgU2lkZWJhciBNaW5pZnlcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZVNpZGViYXJNaW5pZnkgPSBmdW5jdGlvbigpIHtcblx0dmFyIGVsbXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1snKyBhcHAuc2lkZWJhci5taW5pZnkudG9nZ2xlQXR0ciArJ10nKSk7XG5cdGVsbXMubWFwKGZ1bmN0aW9uKGVsbSkge1xuXHRcdGVsbS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFxuXHRcdFx0dmFyIHRhcmdldEVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAuY2xhc3MpO1xuXHRcdFx0XG5cdFx0XHRpZiAodGFyZ2V0RWxtKSB7XG5cdFx0XHRcdGlmICh0YXJnZXRFbG0uY2xhc3NMaXN0LmNvbnRhaW5zKGFwcC5zaWRlYmFyLm1pbmlmeS50b2dnbGVkQ2xhc3MpKSB7XG5cdFx0XHRcdFx0dGFyZ2V0RWxtLmNsYXNzTGlzdC5yZW1vdmUoYXBwLnNpZGViYXIubWluaWZ5LnRvZ2dsZWRDbGFzcyk7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYXBwLnNpZGViYXIubWluaWZ5LmxvY2FsU3RvcmFnZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGFyZ2V0RWxtLmNsYXNzTGlzdC5hZGQoYXBwLnNpZGViYXIubWluaWZ5LnRvZ2dsZWRDbGFzcyk7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oYXBwLnNpZGViYXIubWluaWZ5LmxvY2FsU3RvcmFnZSwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9KTtcblx0XG5cdGlmICh0eXBlb2YoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYgKGxvY2FsU3RvcmFnZVthcHAuc2lkZWJhci5taW5pZnkubG9jYWxTdG9yYWdlXSkge1xuXHRcdFx0dmFyIHRhcmdldEVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAuY2xhc3MpO1xuXHRcdFx0XG5cdFx0XHRpZiAodGFyZ2V0RWxtKSB7XG5cdFx0XHRcdHRhcmdldEVsbS5jbGFzc0xpc3QuYWRkKGFwcC5zaWRlYmFyLm1pbmlmeS50b2dnbGVkQ2xhc3MpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcbnZhciBoYW5kbGVTaWRlYmFyTW9iaWxlVG9nZ2xlID0gZnVuY3Rpb24oKSB7XG5cdHZhciBlbG1zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbJysgYXBwLnNpZGViYXIubW9iaWxlLnRvZ2dsZUF0dHIgKyddJykpO1xuXHRcblx0ZWxtcy5tYXAoZnVuY3Rpb24oZWxtKSB7XG5cdFx0ZWxtLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcblx0XHRcdHZhciB0YXJnZXRFbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJysgYXBwLmNsYXNzKVxuXHRcdFx0XG5cdFx0XHRpZiAodGFyZ2V0RWxtKSB7XG5cdFx0XHRcdHRhcmdldEVsbS5jbGFzc0xpc3QucmVtb3ZlKGFwcC5zaWRlYmFyLm1vYmlsZS5jbG9zZWRDbGFzcyk7XG5cdFx0XHRcdHRhcmdldEVsbS5jbGFzc0xpc3QuYWRkKGFwcC5zaWRlYmFyLm1vYmlsZS50b2dnbGVkQ2xhc3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufTtcbnZhciBoYW5kbGVTaWRlYmFyTW9iaWxlRGlzbWlzcyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZWxtcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnWycrIGFwcC5zaWRlYmFyLm1vYmlsZS5kaXNtaXNzQXR0ciArJ10nKSk7XG5cdFxuXHRlbG1zLm1hcChmdW5jdGlvbihlbG0pIHtcblx0XHRlbG0ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFxuXHRcdFx0dmFyIHRhcmdldEVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAuY2xhc3MpXG5cdFx0XHRcblx0XHRcdGlmICh0YXJnZXRFbG0pIHtcblx0XHRcdFx0dGFyZ2V0RWxtLmNsYXNzTGlzdC5yZW1vdmUoYXBwLnNpZGViYXIubW9iaWxlLnRvZ2dsZWRDbGFzcyk7XG5cdFx0XHRcdHRhcmdldEVsbS5jbGFzc0xpc3QuYWRkKGFwcC5zaWRlYmFyLm1vYmlsZS5jbG9zZWRDbGFzcyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRhcmdldEVsbS5jbGFzc0xpc3QucmVtb3ZlKGFwcC5zaWRlYmFyLm1vYmlsZS5jbG9zZWRDbGFzcyk7XG5cdFx0XHRcdH0sIGFwcC5hbmltYXRpb24uc3BlZWQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufTtcblxuXG4vKiAwNi4gSGFuZGxlIFNpZGViYXIgTWluaWZ5IEZsb2F0IE1lbnVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZUdldEhpZGRlbk1lbnVIZWlnaHQgPSBmdW5jdGlvbihlbG0pIHtcblx0ZWxtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246IGFic29sdXRlOyB2aXNpYmlsaXR5OiBoaWRkZW47IGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQnKTtcblx0dmFyIHRhcmdldEhlaWdodCAgPSBlbG0uY2xpZW50SGVpZ2h0O1xuXHRlbG0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXHRyZXR1cm4gdGFyZ2V0SGVpZ2h0O1xufVxudmFyIGhhbmRsZVNpZGViYXJNaW5pZnlGbG9hdE1lbnVDbGljayA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZWxtcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrIGFwcC5mbG9hdFN1Ym1lbnUuY2xhc3MgKycgLicrIGFwcC5zaWRlYmFyLm1lbnVJdGVtQ2xhc3MgKycuJysgYXBwLnNpZGViYXIubWVudUl0ZW1IYXNTdWJDbGFzcyArJyA+IC4nKyBhcHAuc2lkZWJhci5tZW51TGlua0NsYXNzKSk7XG5cdGlmIChlbG1zKSB7XG5cdFx0ZWxtcy5tYXAoZnVuY3Rpb24oZWxtKSB7XG5cdFx0XHRlbG0ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR2YXIgdGFyZ2V0SXRlbSA9IHRoaXMuY2xvc2VzdCgnLicgKyBhcHAuc2lkZWJhci5tZW51SXRlbUNsYXNzKTtcblx0XHRcdFx0dmFyIHRhcmdldCA9IHRhcmdldEl0ZW0ucXVlcnlTZWxlY3RvcignLicgKyBhcHAuc2lkZWJhci5tZW51U3VibWVudUNsYXNzKTtcblx0XHRcdFx0dmFyIHRhcmdldFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xuXHRcdFx0XHR2YXIgY2xvc2UgPSAodGFyZ2V0U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpICE9ICdub25lJykgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRcdHZhciBleHBhbmQgPSAodGFyZ2V0U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpICE9ICdub25lJykgPyBmYWxzZSA6IHRydWU7XG5cdFx0XHRcdFxuXHRcdFx0XHRzbGlkZVRvZ2dsZSh0YXJnZXQpO1xuXHRcdFx0XHRcblx0XHRcdFx0dmFyIGxvb3BIZWlnaHQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgdGFyZ2V0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXBwLmZsb2F0U3VibWVudS5pZCk7XG5cdFx0XHRcdFx0dmFyIHRhcmdldE1lbnVBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXBwLmZsb2F0U3VibWVudS5hcnJvdy5pZCk7XG5cdFx0XHRcdFx0dmFyIHRhcmdldE1lbnVMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhcHAuZmxvYXRTdWJtZW51LmxpbmUuaWQpO1xuXHRcdFx0XHRcdHZhciB0YXJnZXRIZWlnaHQgPSB0YXJnZXRNZW51LmNsaWVudEhlaWdodDtcblx0XHRcdFx0XHR2YXIgdGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0TWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHR2YXIgdGFyZ2V0T3JpVG9wID0gdGFyZ2V0TWVudS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2Zmc2V0LXRvcCcpO1xuXHRcdFx0XHRcdHZhciB0YXJnZXRNZW51VG9wID0gdGFyZ2V0TWVudS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWVudS1vZmZzZXQtdG9wJyk7XG5cdFx0XHRcdFx0dmFyIHRhcmdldFRvcCBcdCA9IHRhcmdldE9mZnNldC50b3A7XG5cdFx0XHRcdFx0dmFyIHdpbmRvd0hlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRcdGlmIChjbG9zZSkge1xuXHRcdFx0XHRcdFx0aWYgKHRhcmdldFRvcCA+IHRhcmdldE9yaVRvcCkge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRUb3AgPSAodGFyZ2V0VG9wID4gdGFyZ2V0T3JpVG9wKSA/IHRhcmdldE9yaVRvcCA6IHRhcmdldFRvcDtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0TWVudS5zdHlsZS50b3AgPSB0YXJnZXRUb3AgKyAncHgnO1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRNZW51LnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcblx0XHRcdFx0XHRcdFx0dGFyZ2V0TWVudUFycm93LnN0eWxlLnRvcCA9ICcyMHB4Jztcblx0XHRcdFx0XHRcdFx0dGFyZ2V0TWVudUFycm93LnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcblx0XHRcdFx0XHRcdFx0dGFyZ2V0TWVudUxpbmUuc3R5bGUudG9wID0gJzIwcHgnO1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRNZW51TGluZS5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChleHBhbmQpIHtcblx0XHRcdFx0XHRcdGlmICgod2luZG93SGVpZ2h0IC0gdGFyZ2V0VG9wKSA8IHRhcmdldEhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgYXJyb3dCb3R0b20gPSAod2luZG93SGVpZ2h0IC0gdGFyZ2V0TWVudVRvcCkgLSAyMjtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0TWVudS5zdHlsZS50b3AgPSAnYXV0byc7XG5cdFx0XHRcdFx0XHRcdHRhcmdldE1lbnUuc3R5bGUuYm90dG9tID0gMDtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0TWVudUFycm93LnN0eWxlLnRvcCA9ICdhdXRvJztcblx0XHRcdFx0XHRcdFx0dGFyZ2V0TWVudUFycm93LnN0eWxlLmJvdHRvbSA9IGFycm93Qm90dG9tICsgJ3B4Jztcblx0XHRcdFx0XHRcdFx0dGFyZ2V0TWVudUxpbmUuc3R5bGUudG9wID0gJzIwcHgnO1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRNZW51TGluZS5zdHlsZS5ib3R0b20gPSBhcnJvd0JvdHRvbSArICdweCc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR2YXIgZmxvYXRTdWJtZW51RWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhcHAuZmxvYXRTdWJtZW51LmlkICsgJyAuJysgYXBwLmZsb2F0U3VibWVudS5jbGFzcyk7XG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0SGVpZ2h0ID4gd2luZG93SGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdGlmIChmbG9hdFN1Ym1lbnVFbG0pIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgc3BsaXRDbGFzcyA9IChhcHAuZmxvYXRTdWJtZW51Lm92ZXJmbG93LmNsYXNzKS5zcGxpdCgnICcpO1xuXHRcdFx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3BsaXRDbGFzcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXRTdWJtZW51RWxtLmNsYXNzTGlzdC5hZGQoc3BsaXRDbGFzc1tpXSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCAxKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKGxvb3BIZWlnaHQpO1xuXHRcdFx0XHR9LCBhcHAuYW5pbWF0aW9uLnNwZWVkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxudmFyIGhhbmRsZVNpZGViYXJNaW5pZnlGbG9hdE1lbnUgPSBmdW5jdGlvbigpIHtcblx0dmFyIGVsbXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgYXBwLnNpZGViYXIuY2xhc3MgKyAnIC4nKyBhcHAuc2lkZWJhci5tZW51Q2xhc3MgKycgPiAuJysgYXBwLnNpZGViYXIubWVudUl0ZW1DbGFzcyArJy4nKyBhcHAuc2lkZWJhci5tZW51SXRlbUhhc1N1YkNsYXNzICsnID4gLicrIGFwcC5zaWRlYmFyLm1lbnVMaW5rQ2xhc3MgKycnKSk7XG5cdGlmIChlbG1zKSB7XG5cdFx0ZWxtcy5tYXAoZnVuY3Rpb24oZWxtKSB7XG5cdFx0XHRlbG0ub25tb3VzZWVudGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBhcHBFbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGFwcC5jbGFzcyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoYXBwRWxtICYmIGFwcEVsbS5jbGFzc0xpc3QuY29udGFpbnMoYXBwLnNpZGViYXIubWluaWZ5LnRvZ2dsZWRDbGFzcykgJiYgd2luZG93LmlubmVyV2lkdGggPj0gOTkyKSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KGFwcC5mbG9hdFN1Ym1lbnUudGltZW91dCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dmFyIHRhcmdldE1lbnUgPSB0aGlzLmNsb3Nlc3QoJy4nKyBhcHAuc2lkZWJhci5tZW51SXRlbUNsYXNzKS5xdWVyeVNlbGVjdG9yKCcuJyArIGFwcC5zaWRlYmFyLm1lbnVTdWJtZW51Q2xhc3MpO1xuXHRcdFx0XHRcdGlmIChhcHAuZmxvYXRTdWJtZW51LmRvbSA9PSB0aGlzICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXBwLmZsb2F0U3VibWVudS5jbGFzcykpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YXBwLmZsb2F0U3VibWVudS5kb20gPSB0aGlzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgdGFyZ2V0TWVudUh0bWwgPSB0YXJnZXRNZW51LmlubmVySFRNTDtcblx0XHRcdFx0XHRpZiAodGFyZ2V0TWVudUh0bWwpIHtcblx0XHRcdFx0XHRcdHZhciBib2R5U3R5bGUgICAgID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcblx0XHRcdFx0XHRcdHZhciBzaWRlYmFyT2Zmc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrIGFwcC5zaWRlYmFyLmNsYXNzKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHRcdHZhciBzaWRlYmFyV2lkdGggID0gcGFyc2VJbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrIGFwcC5zaWRlYmFyLmNsYXNzKS5jbGllbnRXaWR0aCk7XG5cdFx0XHRcdFx0XHR2YXIgc2lkZWJhclggICAgICA9IChib2R5U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgIT0gJ3J0bCcpID8gKHNpZGViYXJPZmZzZXQubGVmdCArIHNpZGViYXJXaWR0aCkgOiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtIHNpZGViYXJPZmZzZXQubGVmdCk7XG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0SGVpZ2h0ICA9IGhhbmRsZUdldEhpZGRlbk1lbnVIZWlnaHQodGFyZ2V0TWVudSk7XG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0T2Zmc2V0ICA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0VG9wICAgICA9IHRhcmdldE9mZnNldC50b3A7XG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0TGVmdCAgICA9IChib2R5U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgIT0gJ3J0bCcpID8gc2lkZWJhclggOiAnYXV0byc7XG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0UmlnaHQgICA9IChib2R5U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgIT0gJ3J0bCcpID8gJ2F1dG8nIDogc2lkZWJhclg7XG5cdFx0XHRcdFx0XHR2YXIgd2luZG93SGVpZ2h0ICA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnKyBhcHAuZmxvYXRTdWJtZW51LmlkKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgb3ZlcmZsb3dDbGFzcyA9ICcnO1xuXHRcdFx0XHRcdFx0XHRpZiAodGFyZ2V0SGVpZ2h0ID4gd2luZG93SGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3dDbGFzcyA9IGFwcC5mbG9hdFN1Ym1lbnUub3ZlcmZsb3cuY2xhc3M7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dmFyIGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0XHRcdFx0aHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYXBwLmZsb2F0U3VibWVudS5pZCk7XG5cdFx0XHRcdFx0XHRcdGh0bWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGFwcC5mbG9hdFN1Ym1lbnUuY2xhc3MpO1xuXHRcdFx0XHRcdFx0XHRodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1vZmZzZXQtdG9wJywgdGFyZ2V0VG9wKTtcblx0XHRcdFx0XHRcdFx0aHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWVudS1vZmZzZXQtdG9wJywgdGFyZ2V0VG9wKTtcblx0XHRcdFx0XHRcdFx0aHRtbC5pbm5lckhUTUwgPSAnJytcblx0XHRcdFx0XHRcdFx0J1x0PGRpdiBjbGFzcz1cIicrIGFwcC5mbG9hdFN1Ym1lbnUuY29udGFpbmVyLmNsYXNzICsnICcrIG92ZXJmbG93Q2xhc3MgKydcIj4nKyB0YXJnZXRNZW51SHRtbCArICc8L2Rpdj4nO1xuXHRcdFx0XHRcdFx0XHRhcHBFbG0uYXBwZW5kQ2hpbGQoaHRtbCk7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwLmZsb2F0U3VibWVudS5pZCk7XG5cdFx0XHRcdFx0XHRcdGVsbS5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dChhcHAuZmxvYXRTdWJtZW51LnRpbWVvdXQpO1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRlbG0ub25tb3VzZW91dCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdGFwcC5mbG9hdFN1Ym1lbnUudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycrIGFwcC5mbG9hdFN1Ym1lbnUuaWQpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdH0sIGFwcC5hbmltYXRpb24uc3BlZWQpO1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIGZsb2F0U3VibWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnKyBhcHAuZmxvYXRTdWJtZW51LmlkKTtcblx0XHRcdFx0XHRcdFx0dmFyIGZsb2F0U3VibWVudUVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnKyBhcHAuZmxvYXRTdWJtZW51LmlkICsgJyAuJysgYXBwLmZsb2F0U3VibWVudS5jb250YWluZXIuY2xhc3MpO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKHRhcmdldEhlaWdodCA+IHdpbmRvd0hlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChmbG9hdFN1Ym1lbnVFbG0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBzcGxpdENsYXNzID0gKGFwcC5mbG9hdFN1Ym1lbnUub3ZlcmZsb3cuY2xhc3MpLnNwbGl0KCcgJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNwbGl0Q2xhc3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXRTdWJtZW51RWxtLmNsYXNzTGlzdC5hZGQoc3BsaXRDbGFzc1tpXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGZsb2F0U3VibWVudS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2Zmc2V0LXRvcCcsIHRhcmdldFRvcCk7XG5cdFx0XHRcdFx0XHRcdGZsb2F0U3VibWVudS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWVudS1vZmZzZXQtdG9wJywgdGFyZ2V0VG9wKTtcblx0XHRcdFx0XHRcdFx0ZmxvYXRTdWJtZW51RWxtLmlubmVySFRNTCA9IHRhcmdldE1lbnVIdG1sO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0XHRcdHZhciB0YXJnZXRIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJysgYXBwLmZsb2F0U3VibWVudS5pZCkuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRcdFx0dmFyIGZsb2F0U3VibWVudUVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnKyBhcHAuZmxvYXRTdWJtZW51LmlkKTtcblx0XHRcdFx0XHRcdGlmICgod2luZG93SGVpZ2h0IC0gdGFyZ2V0VG9wKSA+IHRhcmdldEhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoZmxvYXRTdWJtZW51RWxtKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZmxvYXRTdWJtZW51RWxtLnN0eWxlLnRvcCA9IHRhcmdldFRvcCArICdweCc7XG5cdFx0XHRcdFx0XHRcdFx0ZmxvYXRTdWJtZW51RWxtLnN0eWxlLmxlZnQgPSB0YXJnZXRMZWZ0ICsgJ3B4Jztcblx0XHRcdFx0XHRcdFx0XHRmbG9hdFN1Ym1lbnVFbG0uc3R5bGUuYm90dG9tID0gJ2F1dG8nO1xuXHRcdFx0XHRcdFx0XHRcdGZsb2F0U3VibWVudUVsbS5zdHlsZS5yaWdodCA9IHRhcmdldFJpZ2h0ICsgJ3B4Jztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIGFycm93Qm90dG9tID0gKHdpbmRvd0hlaWdodCAtIHRhcmdldFRvcCkgLSAyMTtcblx0XHRcdFx0XHRcdFx0aWYgKGZsb2F0U3VibWVudUVsbSkge1xuXHRcdFx0XHRcdFx0XHRcdGZsb2F0U3VibWVudUVsbS5zdHlsZS50b3AgPSAnYXV0byc7XG5cdFx0XHRcdFx0XHRcdFx0ZmxvYXRTdWJtZW51RWxtLnN0eWxlLmxlZnQgPSB0YXJnZXRMZWZ0ICsgJ3B4Jztcblx0XHRcdFx0XHRcdFx0XHRmbG9hdFN1Ym1lbnVFbG0uc3R5bGUuYm90dG9tID0gMDtcblx0XHRcdFx0XHRcdFx0XHRmbG9hdFN1Ym1lbnVFbG0uc3R5bGUucmlnaHQgPSB0YXJnZXRSaWdodCArICdweCc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGhhbmRsZVNpZGViYXJNaW5pZnlGbG9hdE1lbnVDbGljaygpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJysgYXBwLmZsb2F0U3VibWVudS5pZCkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRhcHAuZmxvYXRTdWJtZW51LmRvbSA9ICcnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxtLm9ubW91c2VsZWF2ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBhcHAuY2xhc3MpO1xuXHRcdFx0XHRpZiAoZWxtICYmIGVsbS5jbGFzc0xpc3QuY29udGFpbnMoYXBwLnNpZGViYXIubWluaWZ5LnRvZ2dsZWRDbGFzcykpIHtcblx0XHRcdFx0XHRhcHAuZmxvYXRTdWJtZW51LnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnKyBhcHAuZmxvYXRTdWJtZW51LmlkKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdGFwcC5mbG9hdFN1Ym1lbnUuZG9tID0gJyc7XG5cdFx0XHRcdFx0fSwgMjUwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59O1xuXG5cbi8qIDA3LiBIYW5kbGUgQ2FyZCAtIEV4cGFuZFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgaGFuZGxlQ2FyZEFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRpZiAoYXBwLmNhcmQuZXhwYW5kLnN0YXR1cykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRhcHAuY2FyZC5leHBhbmRTdGF0dXMgPSB0cnVlO1xuXG5cdC8vIGV4cGFuZFxuXHR2YXIgZXhwYW5kVG9nZ2xlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1snKyBhcHAuY2FyZC5leHBhbmQudG9nZ2xlQXR0ciArJ10nKSk7XG5cdHZhciBleHBhbmRUb2dnbGVyVG9vbHRpcExpc3QgPSBleHBhbmRUb2dnbGVyTGlzdC5tYXAoZnVuY3Rpb24gKGV4cGFuZFRvZ2dsZXJFbCkge1xuXHRcdGV4cGFuZFRvZ2dsZXJFbC5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFxuXHRcdFx0dmFyIHRhcmdldCA9IHRoaXMuY2xvc2VzdCgnLicrIGFwcC5jYXJkLmNsYXNzKTtcblx0XHRcdHZhciB0YXJnZXRDbGFzcyA9IGFwcC5jYXJkLmV4cGFuZC5jbGFzcztcblxuXHRcdFx0aWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHRhcmdldENsYXNzKSAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHRhcmdldENsYXNzKSkge1xuXHRcdFx0XHR0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSh0YXJnZXRDbGFzcyk7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0YXJnZXRDbGFzcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGFyZ2V0Q2xhc3MpO1xuXHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZCh0YXJnZXRDbGFzcyk7XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHR3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcblx0XHR9O1xuXHRcblx0XHRyZXR1cm4gbmV3IGJvb3RzdHJhcC5Ub29sdGlwKGV4cGFuZFRvZ2dsZXJFbCwge1xuXHRcdFx0dGl0bGU6IGFwcC5jYXJkLmV4cGFuZC50b29sdGlwVGV4dCxcblx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHR0cmlnZ2VyOiAnaG92ZXInLFxuXHRcdFx0Y29udGFpbmVyOiAnYm9keSdcblx0XHR9KTtcblx0fSk7XG59O1xuXG5cbi8qIDA4LiBIYW5kbGUgVG9vbHRpcCAmIFBvcG92ZXIgQWN0aXZhdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgaGFuZGVsVG9vbHRpcFBvcG92ZXJBY3RpdmF0aW9uID0gZnVuY3Rpb24oKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgdG9vbHRpcFRyaWdnZXJMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbJysgYXBwLnRvb2x0aXAudG9nZ2xlQXR0ciArJ10nKSlcblx0dmFyIHRvb2x0aXBMaXN0ID0gdG9vbHRpcFRyaWdnZXJMaXN0Lm1hcChmdW5jdGlvbiAodG9vbHRpcFRyaWdnZXJFbCkge1xuXHRcdHJldHVybiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbCk7XG5cdH0pO1xuXHRcblx0dmFyIHBvcG92ZXJUcmlnZ2VyTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnWycrIGFwcC5wb3BvdmVyLnRvZ2dsZUF0dHIgKyddJykpXG5cdHZhciBwb3BvdmVyTGlzdCA9IHBvcG92ZXJUcmlnZ2VyTGlzdC5tYXAoZnVuY3Rpb24gKHBvcG92ZXJUcmlnZ2VyRWwpIHtcblx0XHRyZXR1cm4gbmV3IGJvb3RzdHJhcC5Qb3BvdmVyKHBvcG92ZXJUcmlnZ2VyRWwpO1xuXHR9KTtcbn07XG5cblxuLyogMDkuIEhhbmRsZSBTY3JvbGwgdG8gVG9wIEJ1dHRvbiBBY3RpdmF0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVTY3JvbGxUb1RvcEJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGVsbVRyaWdnZXJMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbJysgYXBwLnNjcm9sbFRvcEJ1dHRvbi50b2dnbGVBdHRyICsnXScpKTtcblx0XG5cdGRvY3VtZW50Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHR2YXIgdG90YWxTY3JvbGwgPSAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApICAtIChkb2MuY2xpZW50VG9wIHx8IDApO1xuXHRcdHZhciBlbG1MaXN0ID0gZWxtVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uKGVsbSkge1xuXHRcdFx0aWYgKHRvdGFsU2Nyb2xsID49IDIwMCkge1xuXHRcdFx0XHRpZiAoIWVsbS5jbGFzc0xpc3QuY29udGFpbnMoYXBwLnNjcm9sbFRvcEJ1dHRvbi5zaG93Q2xhc3MpKSB7XG5cdFx0XHRcdFx0ZWxtLmNsYXNzTGlzdC5hZGQoYXBwLnNjcm9sbFRvcEJ1dHRvbi5zaG93Q2xhc3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbG0uY2xhc3NMaXN0LnJlbW92ZShhcHAuc2Nyb2xsVG9wQnV0dG9uLnNob3dDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0XG5cdHZhciBlbG1MaXN0ID0gZWxtVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uKGVsbSkge1xuXHRcdGVsbS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oe3RvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnfSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cblxuLyogMTAuIEhhbmRsZSBTY3JvbGwgdG9cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZVNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG5cdHZhciBlbG1UcmlnZ2VyTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnWycrIGFwcC5zY3JvbGxUby50b2dnbGVBdHRyICsnXScpKTtcblx0dmFyIGVsbUxpc3QgPSBlbG1UcmlnZ2VyTGlzdC5tYXAoZnVuY3Rpb24oZWxtKSB7XG5cdFx0ZWxtLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XG5cdFx0XHR2YXIgdGFyZ2V0QXR0ciA9IChlbG0uZ2V0QXR0cmlidXRlKGFwcC5zY3JvbGxUby50YXJnZXRBdHRyKSkgPyB0aGlzLmdldEF0dHJpYnV0ZShhcHAuc2Nyb2xsVG8udGFyZ2V0QXR0cikgOiB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXHRcdFx0dmFyIHRhcmdldEVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0QXR0cilbMF07XG5cdFx0XHR2YXIgdGFyZ2V0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrIGFwcC5oZWFkZXIuY2xhc3MpWzBdO1xuXHRcdFx0dmFyIHRhcmdldEhlaWdodCA9IHRhcmdldEhlYWRlci5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRpZiAodGFyZ2V0RWxtKSB7XG5cdFx0XHRcdHZhciB0YXJnZXRUb3AgPSB0YXJnZXRFbG0ub2Zmc2V0VG9wIC0gdGFyZ2V0SGVpZ2h0ICsgMzY7XG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbyh7dG9wOiB0YXJnZXRUb3AsIGJlaGF2aW9yOiAnc21vb3RoJ30pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59O1xuXG5cbi8qIDExLiBIYW5kbGUgVGhlbWUgUGFuZWwgRXhwYW5kXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVUaGVtZVBhbmVsRXhwYW5kID0gZnVuY3Rpb24oKSB7XG5cdHZhciBlbG1MaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbJysgYXBwLnRoZW1lUGFuZWwudG9nZ2xlQXR0ciArJ10nKSk7XG5cdFxuXHRlbG1MaXN0Lm1hcChmdW5jdGlvbihlbG0pIHtcblx0XHRlbG0ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFxuXHRcdFx0dmFyIHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAudGhlbWVQYW5lbC5jbGFzcyk7XG5cdFx0XHR2YXIgdGFyZ2V0RXhwYW5kID0gZmFsc2U7XG5cdFx0XG5cdFx0XHRpZiAodGFyZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhhcHAudGhlbWVQYW5lbC5hY3RpdmVDbGFzcykpIHtcblx0XHRcdFx0dGFyZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoYXBwLnRoZW1lUGFuZWwuYWN0aXZlQ2xhc3MpO1xuXHRcdFx0XHRzZXRDb29raWUoYXBwLnRoZW1lUGFuZWwuZXhwYW5kQ29va2llLCAnJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0YXJnZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChhcHAudGhlbWVQYW5lbC5hY3RpdmVDbGFzcyk7XG5cdFx0XHRcdHNldENvb2tpZShhcHAudGhlbWVQYW5lbC5leHBhbmRDb29raWUsIGFwcC50aGVtZVBhbmVsLmV4cGFuZENvb2tpZVZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXHRcblx0aWYgKGdldENvb2tpZShhcHAudGhlbWVQYW5lbC5leHBhbmRDb29raWUpICYmIGdldENvb2tpZShhcHAudGhlbWVQYW5lbC5leHBhbmRDb29raWUpID09IGFwcC50aGVtZVBhbmVsLmV4cGFuZENvb2tpZVZhbHVlKSB7XG5cdFx0dmFyIGVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1snKyBhcHAudGhlbWVQYW5lbC50b2dnbGVBdHRyICsnXScpO1xuXHRcdGlmIChlbG0pIHtcblx0XHRcdGVsbS5jbGljaygpO1xuXHRcdH1cblx0fVxufTtcblxuXG4vKiAxMi4gSGFuZGxlIFRoZW1lIFBhZ2UgQ29udHJvbFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgaGFuZGxlVGhlbWVQYWdlQ29udHJvbCA9IGZ1bmN0aW9uKCkge1xuXHQvLyBUaGVtZSBDbGlja1xuXHR2YXIgZWxtcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrIGFwcC50aGVtZVBhbmVsLnRoZW1lTGlzdC5jbGFzcyArJyBbJysgYXBwLnRoZW1lUGFuZWwudGhlbWVMaXN0LnRvZ2dsZUF0dHIgKyddJykpO1xuXHRlbG1zLm1hcChmdW5jdGlvbihlbG0pIHtcblx0XHRlbG0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRhcmdldFRoZW1lQ2xhc3MgPSB0aGlzLmdldEF0dHJpYnV0ZShhcHAudGhlbWVQYW5lbC50aGVtZUxpc3QudG9nZ2xlQXR0cik7XG5cdFx0XHRmb3IgKHZhciB4ID0gMDsgeCA8IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0Lmxlbmd0aDsgeCsrKSB7XG5cdFx0XHRcdHZhciB0YXJnZXRDbGFzcyA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0W3hdO1xuXHRcdFx0XHRpZiAodGFyZ2V0Q2xhc3Muc2VhcmNoKCd0aGVtZS0nKSA+IC0xKSB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRhcmdldENsYXNzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRhcmdldFRoZW1lQ2xhc3MpIHtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRhcmdldFRoZW1lQ2xhc3MpO1xuXHRcdFx0fVxuXHRcdFxuXHRcdFx0dmFyIHRvZ2dsZXJzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJysgYXBwLnRoZW1lUGFuZWwudGhlbWVMaXN0LmNsYXNzICsnIFsnKyBhcHAudGhlbWVQYW5lbC50aGVtZUxpc3QudG9nZ2xlQXR0ciArJ10nKSk7XG5cdFx0XHR0b2dnbGVycy5tYXAoZnVuY3Rpb24odG9nZ2xlcikge1xuXHRcdFx0XHRpZiAodG9nZ2xlciAhPSBlbG0pIHtcblx0XHRcdFx0XHR0b2dnbGVyLmNsb3Nlc3QoJ2xpJykuY2xhc3NMaXN0LnJlbW92ZShhcHAudGhlbWVQYW5lbC50aGVtZUxpc3QuYWN0aXZlQ2xhc3MpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRvZ2dsZXIuY2xvc2VzdCgnbGknKS5jbGFzc0xpc3QuYWRkKGFwcC50aGVtZVBhbmVsLnRoZW1lTGlzdC5hY3RpdmVDbGFzcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0aGFuZGxlQ3NzVmFyaWFibGUoKTtcblx0XHRcdHNldENvb2tpZShhcHAudGhlbWVQYW5lbC50aGVtZUxpc3QuY29va2llTmFtZSwgdGFyZ2V0VGhlbWVDbGFzcyk7XG5cdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChhcHAudGhlbWVQYW5lbC50aGVtZUxpc3Qub25DaGFuZ2VFdmVudCkpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQvLyBUaGVtZSBDb29raWVcblx0aWYgKGdldENvb2tpZShhcHAudGhlbWVQYW5lbC50aGVtZUxpc3QuY29va2llTmFtZSkgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrIGFwcC50aGVtZVBhbmVsLnRoZW1lTGlzdC5jbGFzcykpIHtcblx0XHR2YXIgdGFyZ2V0RWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrIGFwcC50aGVtZVBhbmVsLnRoZW1lTGlzdC5jbGFzcyArJyBbJysgYXBwLnRoZW1lUGFuZWwudGhlbWVMaXN0LnRvZ2dsZUF0dHIgKyc9XCInKyBnZXRDb29raWUoYXBwLnRoZW1lUGFuZWwudGhlbWVMaXN0LmNvb2tpZU5hbWUpICsnXCJdJyk7XG5cdFx0aWYgKHRhcmdldEVsbSkge1xuXHRcdFx0dGFyZ2V0RWxtLmNsaWNrKCk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvLyBEYXJrIE1vZGUgQ2xpY2tcblx0dmFyIGVsbXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nKyBhcHAudGhlbWVQYW5lbC5jbGFzcyArJyBbbmFtZT1cIicrIGFwcC50aGVtZVBhbmVsLmRhcmtNb2RlLmlucHV0TmFtZSArJ1wiXScpKTtcblx0ZWxtcy5tYXAoZnVuY3Rpb24oZWxtKSB7XG5cdFx0ZWxtLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGFyZ2V0Q29va2llID0gJyc7XG5cdFxuXHRcdFx0aWYgKHRoaXMuY2hlY2tlZCkge1xuXHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRoZW1lJywgJ2RhcmsnKTtcblx0XHRcdFx0dGFyZ2V0Q29va2llID0gJ2RhcmstbW9kZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWJzLXRoZW1lJyk7XG5cdFx0XHR9XG5cdFx0XHRoYW5kbGVDc3NWYXJpYWJsZSgpO1xuXHRcdFx0c2V0Q29va2llKGFwcC50aGVtZVBhbmVsLmRhcmtNb2RlLmNvb2tpZU5hbWUsIHRhcmdldENvb2tpZSk7XG5cdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChhcHAudGhlbWVQYW5lbC50aGVtZUxpc3Qub25DaGFuZ2VFdmVudCkpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQvLyBEYXJrIE1vZGUgQ29va2llXG5cdGlmIChnZXRDb29raWUoYXBwLnRoZW1lUGFuZWwuZGFya01vZGUuY29va2llTmFtZSkgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrIGFwcC50aGVtZVBhbmVsLmNsYXNzICsnIFtuYW1lPVwiJysgYXBwLnRoZW1lUGFuZWwuZGFya01vZGUuaW5wdXROYW1lICsnXCJdJykpIHtcblx0XHR2YXIgZWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrIGFwcC50aGVtZVBhbmVsLmNsYXNzICsnIFtuYW1lPVwiJysgYXBwLnRoZW1lUGFuZWwuZGFya01vZGUuaW5wdXROYW1lICsnXCJdJyk7XG5cdFx0aWYgKGVsbSkge1xuXHRcdFx0ZWxtLmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0ZWxtLm9uY2hhbmdlKCk7XG5cdFx0fVxuXHR9XG59O1xuXG5cbi8qIDEzLiBIYW5kbGUgQ1NTIFZhcmlhYmxlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVDc3NWYXJpYWJsZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgcm9vdFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcblx0XG5cdC8vIGZvbnRcblx0aWYgKGFwcC52YXJpYWJsZUZvbnRMaXN0ICYmIGFwcC52YXJpYWJsZVByZWZpeCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgKGFwcC52YXJpYWJsZUZvbnRMaXN0KS5sZW5ndGg7IGkrKykge1xuXHRcdFx0YXBwLmZvbnRbYXBwLnZhcmlhYmxlRm9udExpc3RbaV0ucmVwbGFjZSgvLShbYS16fDAtOV0pL2csIChtYXRjaCwgbGV0dGVyKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSldID0gcm9vdFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy0tJysgYXBwLnZhcmlhYmxlUHJlZml4ICsgYXBwLnZhcmlhYmxlRm9udExpc3RbaV0pLnRyaW0oKTtcblx0XHR9XG5cdH1cblx0XG5cdC8vIGNvbG9yXG5cdGlmIChhcHAudmFyaWFibGVDb2xvckxpc3QgJiYgYXBwLnZhcmlhYmxlUHJlZml4KSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAoYXBwLnZhcmlhYmxlQ29sb3JMaXN0KS5sZW5ndGg7IGkrKykge1xuXHRcdFx0YXBwLmNvbG9yW2FwcC52YXJpYWJsZUNvbG9yTGlzdFtpXS5yZXBsYWNlKC8tKFthLXp8MC05XSkvZywgKG1hdGNoLCBsZXR0ZXIpID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKV0gPSByb290U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS0nKyBhcHAudmFyaWFibGVQcmVmaXggKyBhcHAudmFyaWFibGVDb2xvckxpc3RbaV0pLnRyaW0oKTtcblx0XHR9XG5cdH1cbn07XG5cblxuLyogMTQuIEhhbmRsZSBUb2dnbGUgQ2xhc3Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZVRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBlbG1MaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbJysgYXBwLnRvZ2dsZUNsYXNzLnRvZ2dsZUF0dHIgKyddJykpO1xuXHRcblx0ZWxtTGlzdC5tYXAoZnVuY3Rpb24oZWxtKSB7XG5cdFx0ZWxtLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcblx0XHRcdHZhciB0YXJnZXRUb2dnbGVDbGFzcyA9IHRoaXMuZ2V0QXR0cmlidXRlKGFwcC50b2dnbGVDbGFzcy50b2dnbGVBdHRyKTtcblx0XHRcdHZhciB0YXJnZXREaXNtaXNzQ2xhc3MgPSB0aGlzLmdldEF0dHJpYnV0ZShhcHAuZGlzbWlzc0NsYXNzLnRvZ2dsZUF0dHIpO1xuXHRcdFx0dmFyIHRhcmdldFRvZ2dsZUVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoYXBwLnRvZ2dsZUNsYXNzLnRhcmdldEF0dHIpKTtcblx0XHRcblx0XHRcdGlmICghdGFyZ2V0RGlzbWlzc0NsYXNzKSB7XG5cdFx0XHRcdGlmICh0YXJnZXRUb2dnbGVFbG0uY2xhc3NMaXN0LmNvbnRhaW5zKHRhcmdldFRvZ2dsZUNsYXNzKSkge1xuXHRcdFx0XHRcdHRhcmdldFRvZ2dsZUVsbS5jbGFzc0xpc3QucmVtb3ZlKHRhcmdldFRvZ2dsZUNsYXNzKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXRUb2dnbGVFbG0uY2xhc3NMaXN0LmFkZCh0YXJnZXRUb2dnbGVDbGFzcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghdGFyZ2V0VG9nZ2xlRWxtLmNsYXNzTGlzdC5jb250YWlucyh0YXJnZXRUb2dnbGVDbGFzcykgJiYgIXRhcmdldFRvZ2dsZUVsbS5jbGFzc0xpc3QuY29udGFpbnModGFyZ2V0RGlzbWlzc0NsYXNzKSkge1xuXHRcdFx0XHRcdGlmICh0YXJnZXRUb2dnbGVFbG0uY2xhc3NMaXN0LmNvbnRhaW5zKHRhcmdldFRvZ2dsZUNsYXNzKSkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0VG9nZ2xlRWxtLmNsYXNzTGlzdC5yZW1vdmUodGFyZ2V0VG9nZ2xlQ2xhc3MpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRUb2dnbGVFbG0uY2xhc3NMaXN0LmFkZCh0YXJnZXRUb2dnbGVDbGFzcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICh0YXJnZXRUb2dnbGVFbG0uY2xhc3NMaXN0LmNvbnRhaW5zKHRhcmdldFRvZ2dsZUNsYXNzKSkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0VG9nZ2xlRWxtLmNsYXNzTGlzdC5yZW1vdmUodGFyZ2V0VG9nZ2xlQ2xhc3MpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRUb2dnbGVFbG0uY2xhc3NMaXN0LmFkZCh0YXJnZXRUb2dnbGVDbGFzcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0YXJnZXRUb2dnbGVFbG0uY2xhc3NMaXN0LmNvbnRhaW5zKHRhcmdldERpc21pc3NDbGFzcykpIHtcblx0XHRcdFx0XHRcdHRhcmdldFRvZ2dsZUVsbS5jbGFzc0xpc3QucmVtb3ZlKHRhcmdldERpc21pc3NDbGFzcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRhcmdldFRvZ2dsZUVsbS5jbGFzc0xpc3QuYWRkKHRhcmdldERpc21pc3NDbGFzcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cblxuXG4vKiAxNS4gSGFuZGxlIFRvcCBNZW51IC0gVW5saW1pdGVkIE5hdiBSZW5kZXJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZVVubGltaXRlZFRvcE5hdlJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0Ly8gZnVuY3Rpb24gaGFuZGxlIG1lbnUgYnV0dG9uIGFjdGlvbiAtIG5leHQgLyBwcmV2XG5cdGZ1bmN0aW9uIGhhbmRsZU1lbnVCdXR0b25BY3Rpb24oZWxlbWVudCwgZGlyZWN0aW9uKSB7XG5cdFx0dmFyIG9iaiA9IGVsZW1lbnQuY2xvc2VzdCgnLicgKyBhcHAudG9wTmF2Lm1lbnUuY2xhc3MpO1xuXHRcdHZhciBvYmpTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9iaik7XG5cdFx0dmFyIGJvZHlTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSk7XG5cdFx0dmFyIHRhcmdldENzcyA9IChib2R5U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT0gJ3J0bCcpID8gJ21hcmdpbi1yaWdodCcgOiAnbWFyZ2luLWxlZnQnO1xuXHRcdHZhciBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQob2JqU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSh0YXJnZXRDc3MpKTsgIFxuXHRcdHZhciBjb250YWluZXJXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAudG9wTmF2LmNsYXNzKS5jbGllbnRXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAudG9wTmF2LmNsYXNzKS5jbGllbnRIZWlnaHQgKiAyO1xuXHRcdHZhciB0b3RhbFdpZHRoID0gMDtcblx0XHR2YXIgZmluYWxTY3JvbGxXaWR0aCA9IDA7XG5cdFx0dmFyIGNvbnRyb2xQcmV2T2JqID0gb2JqLnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRyb2wtc3RhcnQnKTtcblx0XHR2YXIgY29udHJvbFByZXZXaWR0aCA9IChjb250cm9sUHJldk9iaikgPyBjb250cm9sUHJldk9iai5jbGllbnRXaWR0aCA6IDA7XG5cdFx0dmFyIGNvbnRyb2xOZXh0T2JqID0gb2JqLnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRyb2wtZW5kJyk7XG5cdFx0dmFyIGNvbnRyb2xOZXh0V2lkdGggPSAoY29udHJvbFByZXZPYmopID8gY29udHJvbE5leHRPYmouY2xpZW50V2lkdGggOiAwO1xuXHRcdHZhciBjb250cm9sV2lkdGggPSBjb250cm9sUHJldldpZHRoICsgY29udHJvbE5leHRXaWR0aDtcblx0XHRcblx0XHR2YXIgZWxtcyA9IFtdLnNsaWNlLmNhbGwob2JqLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgYXBwLnRvcE5hdi5tZW51Lml0ZW1DbGFzcykpO1xuXHRcdGlmIChlbG1zKSB7XG5cdFx0XHRlbG1zLm1hcChmdW5jdGlvbihlbG0pIHtcblx0XHRcdFx0aWYgKCFlbG0uY2xhc3NMaXN0LmNvbnRhaW5zKGFwcC50b3BOYXYuY29udHJvbC5jbGFzcykpIHtcblx0XHRcdFx0XHR0b3RhbFdpZHRoICs9IGVsbS5jbGllbnRXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0c3dpdGNoIChkaXJlY3Rpb24pIHtcblx0XHRcdGNhc2UgJ25leHQnOlxuXHRcdFx0XHR2YXIgd2lkdGhMZWZ0ID0gdG90YWxXaWR0aCArIG1hcmdpbkxlZnQgLSBjb250YWluZXJXaWR0aDtcblx0XHRcdFx0aWYgKHdpZHRoTGVmdCA8PSBjb250YWluZXJXaWR0aCkge1xuXHRcdFx0XHRcdGZpbmFsU2Nyb2xsV2lkdGggPSB3aWR0aExlZnQgLSBtYXJnaW5MZWZ0IC0gY29udHJvbFdpZHRoO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRvYmoucXVlcnlTZWxlY3RvcignLicrIGFwcC50b3BOYXYuY29udHJvbC5jbGFzcyArJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuYnV0dG9uTmV4dC5jbGFzcykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRcdFx0XHRcdH0sIGFwcC5hbmltYXRpb24uc3BlZWQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZpbmFsU2Nyb2xsV2lkdGggPSBjb250YWluZXJXaWR0aCAtIG1hcmdpbkxlZnQgLSBjb250cm9sV2lkdGg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZmluYWxTY3JvbGxXaWR0aCAhPT0gMCkge1xuXHRcdFx0XHRcdG9iai5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xuXHRcdFx0XHRcdG9iai5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBhcHAuYW5pbWF0aW9uLnNwZWVkICsgJ21zJztcblx0XHRcdFx0XHRpZiAoYm9keVN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpICE9ICdydGwnKSB7XG5cdFx0XHRcdFx0XHRvYmouc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIGZpbmFsU2Nyb2xsV2lkdGggKyAncHgnO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRvYmouc3R5bGUubWFyZ2luUmlnaHQgPSAnLScgKyBmaW5hbFNjcm9sbFdpZHRoICsgJ3B4Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdG9iai5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnJztcblx0XHRcdFx0XHRcdG9iai5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnJztcblx0XHRcdFx0XHRcdG9iai5xdWVyeVNlbGVjdG9yKCcuJysgYXBwLnRvcE5hdi5jb250cm9sLmNsYXNzICsnLicrIGFwcC50b3BOYXYuY29udHJvbC5idXR0b25QcmV2LmNsYXNzKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cdFx0XHRcdFx0fSwgYXBwLmFuaW1hdGlvbi5zcGVlZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdwcmV2Jzpcblx0XHRcdFx0dmFyIHdpZHRoTGVmdCA9IC1tYXJnaW5MZWZ0O1xuXG5cdFx0XHRcdGlmICh3aWR0aExlZnQgPD0gY29udGFpbmVyV2lkdGgpIHtcblx0XHRcdFx0XHRvYmoucXVlcnlTZWxlY3RvcignLicrIGFwcC50b3BOYXYuY29udHJvbC5jbGFzcyArJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuYnV0dG9uUHJldi5jbGFzcykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRcdFx0XHRcdGZpbmFsU2Nyb2xsV2lkdGggPSAwO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZpbmFsU2Nyb2xsV2lkdGggPSB3aWR0aExlZnQgLSBjb250YWluZXJXaWR0aCArIGNvbnRyb2xXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0b2JqLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XG5cdFx0XHRcdG9iai5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBhcHAuYW5pbWF0aW9uLnNwZWVkICsgJ21zJztcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChib2R5U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgIT0gJ3J0bCcpIHtcblx0XHRcdFx0XHRvYmouc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIGZpbmFsU2Nyb2xsV2lkdGggKyAncHgnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG9iai5zdHlsZS5tYXJnaW5SaWdodCA9ICctJyArIGZpbmFsU2Nyb2xsV2lkdGggKyAncHgnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG9iai5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnJztcblx0XHRcdFx0XHRvYmouc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG5cdFx0XHRcdFx0b2JqLnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuY2xhc3MgKycuJysgYXBwLnRvcE5hdi5jb250cm9sLmJ1dHRvbk5leHQuY2xhc3MpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0XHRcdFx0fSwgYXBwLmFuaW1hdGlvbi5zcGVlZCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8vIGhhbmRsZSBwYWdlIGxvYWQgYWN0aXZlIG1lbnUgZm9jdXNcblx0ZnVuY3Rpb24gaGFuZGxlUGFnZUxvYWRNZW51Rm9jdXMoKSB7XG5cdFx0dmFyIHRhcmdldE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJysgYXBwLnRvcE5hdi5jbGFzcyArJyAuJysgYXBwLnRvcE5hdi5tZW51LmNsYXNzKTtcblx0XHRpZiAoIXRhcmdldE1lbnUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIHRhcmdldE1lbnVTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldE1lbnUpO1xuXHRcdHZhciBib2R5U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcblx0XHR2YXIgdGFyZ2V0Q3NzID0gKGJvZHlTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PSAncnRsJykgPyAnbWFyZ2luLXJpZ2h0JyA6ICdtYXJnaW4tbGVmdCc7XG5cdFx0dmFyIG1hcmdpbkxlZnQgPSBwYXJzZUludCh0YXJnZXRNZW51U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSh0YXJnZXRDc3MpKTtcblx0XHR2YXIgdmlld1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrIGFwcC50b3BOYXYuY2xhc3MgKycnKS5jbGllbnRXaWR0aDtcblx0XHR2YXIgcHJldldpZHRoID0gMDtcblx0XHR2YXIgc3BlZWQgPSAwO1xuXHRcdHZhciBmdWxsV2lkdGggPSAwO1xuXHRcdHZhciBjb250cm9sUHJldk9iaiA9IHRhcmdldE1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY29udHJvbC1zdGFydCcpO1xuXHRcdHZhciBjb250cm9sUHJldldpZHRoID0gKGNvbnRyb2xQcmV2T2JqKSA/IGNvbnRyb2xQcmV2T2JqLmNsaWVudFdpZHRoIDogMDtcblx0XHR2YXIgY29udHJvbE5leHRPYmogPSB0YXJnZXRNZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRyb2wtZW5kJyk7XG5cdFx0dmFyIGNvbnRyb2xOZXh0V2lkdGggPSAoY29udHJvbFByZXZPYmopID8gY29udHJvbE5leHRPYmouY2xpZW50V2lkdGggOiAwO1xuXHRcdHZhciBjb250cm9sV2lkdGggPSAwO1xuXG5cdFx0dmFyIGVsbXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nKyBhcHAudG9wTmF2LmNsYXNzICsnIC4nKyBhcHAudG9wTmF2Lm1lbnUuY2xhc3MgKyAnID4gLicrIGFwcC50b3BOYXYubWVudS5pdGVtQ2xhc3MgKycnKSk7XG5cdFx0aWYgKGVsbXMpIHtcblx0XHRcdHZhciBmb3VuZCA9IGZhbHNlO1xuXHRcdFx0ZWxtcy5tYXAoZnVuY3Rpb24oZWxtKSB7XG5cdFx0XHRcdGlmICghZWxtLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1jb250cm9sJykpIHtcblx0XHRcdFx0XHRmdWxsV2lkdGggKz0gZWxtLmNsaWVudFdpZHRoO1xuXHRcdFx0XHRcdGlmICghZm91bmQpIHtcblx0XHRcdFx0XHRcdHByZXZXaWR0aCArPSBlbG0uY2xpZW50V2lkdGg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChlbG0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuXHRcdFx0XHRcdFx0Zm91bmQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBlbG0gPSB0YXJnZXRNZW51LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuY2xhc3MgKycuJysgYXBwLnRvcE5hdi5jb250cm9sLmJ1dHRvbk5leHQuY2xhc3MpO1xuXHRcdGlmIChwcmV2V2lkdGggIT0gZnVsbFdpZHRoICYmIGZ1bGxXaWR0aCA+PSB2aWV3V2lkdGgpIHtcblx0XHRcdGVsbS5jbGFzc0xpc3QuYWRkKGFwcC50b3BOYXYuY29udHJvbC5zaG93Q2xhc3MpO1xuXHRcdFx0Y29udHJvbFdpZHRoICs9IGNvbnRyb2xOZXh0V2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsbS5jbGFzc0xpc3QucmVtb3ZlKGFwcC50b3BOYXYuY29udHJvbC5zaG93Q2xhc3MpO1xuXHRcdH1cblxuXHRcdHZhciBlbG0gPSB0YXJnZXRNZW51LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuY2xhc3MgKycuJysgYXBwLnRvcE5hdi5jb250cm9sLmJ1dHRvblByZXYuY2xhc3MpO1xuXHRcdGlmIChwcmV2V2lkdGggPj0gdmlld1dpZHRoICYmIGZ1bGxXaWR0aCA+PSB2aWV3V2lkdGgpIHtcblx0XHRcdGVsbS5jbGFzc0xpc3QuYWRkKGFwcC50b3BOYXYuY29udHJvbC5zaG93Q2xhc3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbG0uY2xhc3NMaXN0LnJlbW92ZShhcHAudG9wTmF2LmNvbnRyb2wuc2hvd0NsYXNzKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKHByZXZXaWR0aCA+PSB2aWV3V2lkdGgpIHtcblx0XHRcdHZhciBmaW5hbFNjcm9sbFdpZHRoID0gcHJldldpZHRoIC0gdmlld1dpZHRoICsgY29udHJvbFdpZHRoO1xuXHRcdFx0aWYgKGJvZHlTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSAhPSAncnRsJykge1xuXHRcdFx0XHR0YXJnZXRNZW51LnN0eWxlLm1hcmdpbkxlZnQgPSAnLScgKyBmaW5hbFNjcm9sbFdpZHRoICsgJ3B4Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhcmdldE1lbnUuc3R5bGUubWFyZ2luUmlnaHQgPSAnLScgKyBmaW5hbFNjcm9sbFdpZHRoICsgJ3B4Jztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBoYW5kbGUgbWVudSBuZXh0IGJ1dHRvbiBjbGljayBhY3Rpb25cblx0dmFyIGVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1snKyBhcHAudG9wTmF2LmNvbnRyb2wuYnV0dG9uTmV4dC50b2dnbGVBdHRyICsnXScpO1xuXHRpZiAoZWxtKSB7XG5cdFx0ZWxtLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRoYW5kbGVNZW51QnV0dG9uQWN0aW9uKHRoaXMsJ25leHQnKTtcblx0XHR9O1xuXHR9XG5cdFxuXHQvLyBoYW5kbGUgbWVudSBwcmV2IGJ1dHRvbiBjbGljayBhY3Rpb25cblx0dmFyIGVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1snKyBhcHAudG9wTmF2LmNvbnRyb2wuYnV0dG9uUHJldi50b2dnbGVBdHRyICsnXScpO1xuXHRpZiAoZWxtKSB7XG5cdFx0ZWxtLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRoYW5kbGVNZW51QnV0dG9uQWN0aW9uKHRoaXMsJ3ByZXYnKTtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gZW5hYmxlRmx1aWRDb250YWluZXJEcmFnKGNvbnRhaW5lckNsYXNzTmFtZSkge1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyQ2xhc3NOYW1lKTtcblx0XHRpZiAoIWNvbnRhaW5lcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBtZW51ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5cdFx0Y29uc3QgbWVudUl0ZW0gPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW06bm90KC5tZW51LWNvbnRyb2wpJyk7XG5cblx0XHRsZXQgc3RhcnRYLCBzY3JvbGxMZWZ0LCBtb3VzZURvd247XG5cdFx0bGV0IG1lbnVXaWR0aCA9IDA7XG5cdFx0bGV0IG1heFNjcm9sbCA9IDA7XG5cblx0XHRtZW51SXRlbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRtZW51V2lkdGggKz0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblx0XHR9KTtcblxuXHRcdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0bW91c2VEb3duID0gdHJ1ZTtcblx0XHRcdHN0YXJ0WCA9IGUucGFnZVg7XG5cdFx0XHRzY3JvbGxMZWZ0ID0gKG1lbnUuc3R5bGUubWFyZ2luTGVmdCkgPyBwYXJzZUludChtZW51LnN0eWxlLm1hcmdpbkxlZnQpIDogMDtcblx0XHRcdG1heFNjcm9sbCA9IGNvbnRhaW5lci5vZmZzZXRXaWR0aCAtIG1lbnVXaWR0aDtcblx0XHR9KTtcblxuXHRcdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcblx0XHRcdG1vdXNlRG93biA9IHRydWU7XG5cdFx0XHRjb25zdCB0b3VjaCA9IGUudGFyZ2V0VG91Y2hlc1swXTtcblx0XHRcdHN0YXJ0WCA9IHRvdWNoLnBhZ2VYO1xuXHRcdFx0c2Nyb2xsTGVmdCA9IChtZW51LnN0eWxlLm1hcmdpbkxlZnQpID8gcGFyc2VJbnQobWVudS5zdHlsZS5tYXJnaW5MZWZ0KSA6IDA7XG5cdFx0XHRtYXhTY3JvbGwgPSBjb250YWluZXIub2Zmc2V0V2lkdGggLSBtZW51V2lkdGg7XG5cdFx0fSk7XG5cdFx0XG5cdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG5cdFx0XHRtb3VzZURvd24gPSBmYWxzZTtcblx0XHR9KTtcblxuXHRcdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHtcblx0XHRcdG1vdXNlRG93biA9IGZhbHNlO1xuXHRcdH0pO1xuXHRcdFxuXHRcdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuXHRcdFx0aWYgKCFzdGFydFggfHwgIW1vdXNlRG93bikgcmV0dXJuO1xuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyKSByZXR1cm47XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCB4ID0gZS5wYWdlWDtcblx0XHRcdGNvbnN0IHdhbGtYID0gKHggLSBzdGFydFgpICogMTtcblx0XHRcdHZhciB0b3RhbE1hcmdpbkxlZnQgPSBzY3JvbGxMZWZ0ICsgd2Fsa1g7XG5cdFx0XHRpZiAodG90YWxNYXJnaW5MZWZ0IDw9IG1heFNjcm9sbCkge1xuXHRcdFx0XHR0b3RhbE1hcmdpbkxlZnQgPSBtYXhTY3JvbGw7XG5cdFx0XHRcdG1lbnUucXVlcnlTZWxlY3RvcignLicrIGFwcC50b3BOYXYuY29udHJvbC5jbGFzcyArJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuYnV0dG9uTmV4dC5jbGFzcykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWVudS5xdWVyeVNlbGVjdG9yKCcuJysgYXBwLnRvcE5hdi5jb250cm9sLmNsYXNzICsnLicrIGFwcC50b3BOYXYuY29udHJvbC5idXR0b25OZXh0LmNsYXNzKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWVudVdpZHRoIDwgY29udGFpbmVyLm9mZnNldFdpZHRoKSB7XG5cdFx0XHRcdG1lbnUucXVlcnlTZWxlY3RvcignLicrIGFwcC50b3BOYXYuY29udHJvbC5jbGFzcyArJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuYnV0dG9uUHJldi5jbGFzcykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1heFNjcm9sbCA+IDApIHtcblx0XHRcdFx0bWVudS5xdWVyeVNlbGVjdG9yKCcuJysgYXBwLnRvcE5hdi5jb250cm9sLmNsYXNzICsnLicrIGFwcC50b3BOYXYuY29udHJvbC5idXR0b25OZXh0LmNsYXNzKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodG90YWxNYXJnaW5MZWZ0ID4gMCkge1xuXHRcdFx0XHR0b3RhbE1hcmdpbkxlZnQgPSAwO1xuXHRcdFx0XHRtZW51LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuY2xhc3MgKycuJysgYXBwLnRvcE5hdi5jb250cm9sLmJ1dHRvblByZXYuY2xhc3MpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lbnUucXVlcnlTZWxlY3RvcignLicrIGFwcC50b3BOYXYuY29udHJvbC5jbGFzcyArJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuYnV0dG9uUHJldi5jbGFzcykuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXHRcdFx0fVxuXHRcdFx0bWVudS5zdHlsZS5tYXJnaW5MZWZ0ID0gdG90YWxNYXJnaW5MZWZ0ICsgJ3B4Jztcblx0XHR9KTtcblx0XHRcblx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHtcblx0XHRcdGlmICghc3RhcnRYIHx8ICFtb3VzZURvd24pIHJldHVybjtcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MikgcmV0dXJuO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgdG91Y2ggPSBlLnRhcmdldFRvdWNoZXNbMF07XG5cdFx0XHRjb25zdCB4ID0gdG91Y2gucGFnZVg7XG5cdFx0XHRjb25zdCB3YWxrWCA9ICh4IC0gc3RhcnRYKSAqIDE7XG5cdFx0XHR2YXIgdG90YWxNYXJnaW5MZWZ0ID0gc2Nyb2xsTGVmdCArIHdhbGtYO1xuXHRcdFx0aWYgKHRvdGFsTWFyZ2luTGVmdCA8PSBtYXhTY3JvbGwpIHtcblx0XHRcdFx0dG90YWxNYXJnaW5MZWZ0ID0gbWF4U2Nyb2xsO1xuXHRcdFx0XHRtZW51LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuY2xhc3MgKycuJysgYXBwLnRvcE5hdi5jb250cm9sLmJ1dHRvbk5leHQuY2xhc3MpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lbnUucXVlcnlTZWxlY3RvcignLicrIGFwcC50b3BOYXYuY29udHJvbC5jbGFzcyArJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuYnV0dG9uTmV4dC5jbGFzcykuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lbnVXaWR0aCA8IGNvbnRhaW5lci5vZmZzZXRXaWR0aCkge1xuXHRcdFx0XHRtZW51LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuY2xhc3MgKycuJysgYXBwLnRvcE5hdi5jb250cm9sLmJ1dHRvblByZXYuY2xhc3MpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcblx0XHRcdH1cblx0XHRcdGlmIChtYXhTY3JvbGwgPiAwKSB7XG5cdFx0XHRcdG1lbnUucXVlcnlTZWxlY3RvcignLicrIGFwcC50b3BOYXYuY29udHJvbC5jbGFzcyArJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuYnV0dG9uTmV4dC5jbGFzcykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRvdGFsTWFyZ2luTGVmdCA+IDApIHtcblx0XHRcdFx0dG90YWxNYXJnaW5MZWZ0ID0gMDtcblx0XHRcdFx0bWVudS5xdWVyeVNlbGVjdG9yKCcuJysgYXBwLnRvcE5hdi5jb250cm9sLmNsYXNzICsnLicrIGFwcC50b3BOYXYuY29udHJvbC5idXR0b25QcmV2LmNsYXNzKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZW51LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAudG9wTmF2LmNvbnRyb2wuY2xhc3MgKycuJysgYXBwLnRvcE5hdi5jb250cm9sLmJ1dHRvblByZXYuY2xhc3MpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0XHRcdH1cblx0XHRcdG1lbnUuc3R5bGUubWFyZ2luTGVmdCA9IHRvdGFsTWFyZ2luTGVmdCArICdweCc7XG5cdFx0fSk7XG5cdH1cblx0XG5cdFxuXHRcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuXHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA5OTIpIHtcblx0XHRcdHZhciB0YXJnZXRFbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJysgYXBwLnRvcE5hdi5jbGFzcyk7XG5cdFx0XHRpZiAodGFyZ2V0RWxtKSB7XG5cdFx0XHRcdHRhcmdldEVsbS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdGFyZ2V0RWxtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nKyBhcHAudG9wTmF2LmNsYXNzICsnIC4nKyBhcHAudG9wTmF2Lm1lbnUuY2xhc3MpO1xuXHRcdFx0aWYgKHRhcmdldEVsbTIpIHtcblx0XHRcdFx0dGFyZ2V0RWxtMi5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdGFyZ2V0RWxtMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nKyBhcHAudG9wTmF2LmNsYXNzICsnIC4nKyBhcHAudG9wTmF2Lm1lbnUuc3VibWVudS5jbGFzcyk7XG5cdFx0XHRpZiAodGFyZ2V0RWxtMykge1xuXHRcdFx0XHR0YXJnZXRFbG0zLmZvckVhY2goKGVsbTMpID0+IHtcblx0XHRcdFx0XHRlbG0zLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRoYW5kbGVQYWdlTG9hZE1lbnVGb2N1cygpO1xuXHRcdH1cblx0XHRlbmFibGVGbHVpZENvbnRhaW5lckRyYWcoJy4nKyBhcHAudG9wTmF2LmNsYXNzKTtcblx0fSk7XG5cdFxuXHRcblx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk5Mikge1xuXHRcdGhhbmRsZVBhZ2VMb2FkTWVudUZvY3VzKCk7XG5cdFx0ZW5hYmxlRmx1aWRDb250YWluZXJEcmFnKCcuJysgYXBwLnRvcE5hdi5jbGFzcyk7XG5cdH1cbn07XG5cblxuLyogMTYuIEhhbmRsZSBUb3AgTmF2IC0gU3VibWVudSBUb2dnbGVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZVRvcE5hdlRvZ2dsZSA9IGZ1bmN0aW9uKG1lbnVzLCBmb3JNb2JpbGUgPSBmYWxzZSkge1xuXHRtZW51cy5tYXAoZnVuY3Rpb24obWVudSkge1xuXHRcdG1lbnUub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFxuXHRcdFx0aWYgKCFmb3JNb2JpbGUgfHwgKGZvck1vYmlsZSAmJiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgOTkyKSkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0XHRcdG1lbnVzLm1hcChmdW5jdGlvbihtKSB7XG5cdFx0XHRcdFx0dmFyIG90aGVyVGFyZ2V0ID0gbS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0XHRcdFx0aWYgKG90aGVyVGFyZ2V0ICE9PSB0YXJnZXQpIHtcblx0XHRcdFx0XHRcdHNsaWRlVXAob3RoZXJUYXJnZXQpO1xuXHRcdFx0XHRcdFx0b3RoZXJUYXJnZXQuY2xvc2VzdCgnLicrIGFwcC50b3BOYXYubWVudS5pdGVtQ2xhc3MpLmNsYXNzTGlzdC5yZW1vdmUoYXBwLnRvcE5hdi5tZW51LmV4cGFuZENsYXNzKTtcblx0XHRcdFx0XHRcdG90aGVyVGFyZ2V0LmNsb3Nlc3QoJy4nKyBhcHAudG9wTmF2Lm1lbnUuaXRlbUNsYXNzKS5jbGFzc0xpc3QuYWRkKGFwcC50b3BOYXYubWVudS5jbG9zZWRDbGFzcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0XHRzbGlkZVRvZ2dsZSh0YXJnZXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59O1xudmFyIGhhbmRsZVRvcE5hdlN1Yk1lbnUgPSBmdW5jdGlvbigpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHR2YXIgbWVudUJhc2VTZWxlY3RvciA9ICcuJysgYXBwLnRvcE5hdi5jbGFzcyArJyAuJysgYXBwLnRvcE5hdi5tZW51LmNsYXNzICsnID4gLicrIGFwcC50b3BOYXYubWVudS5pdGVtQ2xhc3MgKycuJysgYXBwLnRvcE5hdi5tZW51Lmhhc1N1YkNsYXNzO1xuXHR2YXIgc3VibWVudUJhc2VTZWxlY3RvciA9ICcgPiAuJysgYXBwLnRvcE5hdi5tZW51LnN1Ym1lbnUuY2xhc3MgKycgPiAuJysgYXBwLnRvcE5hdi5tZW51Lml0ZW1DbGFzcyArICcuJyArIGFwcC50b3BOYXYubWVudS5oYXNTdWJDbGFzcztcblx0XG5cdC8vIDE0LjEgTWVudSAtIFRvZ2dsZSAvIENvbGxhcHNlXG5cdHZhciBtZW51TGlua1NlbGVjdG9yID0gIG1lbnVCYXNlU2VsZWN0b3IgKyAnID4gLicrIGFwcC50b3BOYXYubWVudS5pdGVtTGlua0NsYXNzO1xuXHR2YXIgbWVudXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobWVudUxpbmtTZWxlY3RvcikpO1xuXHRoYW5kbGVUb3BOYXZUb2dnbGUobWVudXMsIHRydWUpO1xuXHRcblx0Ly8gMTQuMiBNZW51IC0gU3VibWVudSBsdmwgMVxuXHR2YXIgc3VibWVudUx2bDFTZWxlY3RvciA9IG1lbnVCYXNlU2VsZWN0b3IgKyBzdWJtZW51QmFzZVNlbGVjdG9yO1xuXHR2YXIgc3VibWVudXNMdmwxID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN1Ym1lbnVMdmwxU2VsZWN0b3IgKyAnID4gLicgKyBhcHAudG9wTmF2Lm1lbnUuaXRlbUxpbmtDbGFzcykpO1xuXHRoYW5kbGVUb3BOYXZUb2dnbGUoc3VibWVudXNMdmwxKTtcblx0XG5cdC8vIDE0LjMgc3VibWVudSBsdmwgMlxuXHR2YXIgc3VibWVudUx2bDJTZWxlY3RvciA9IG1lbnVCYXNlU2VsZWN0b3IgKyBzdWJtZW51QmFzZVNlbGVjdG9yICsgc3VibWVudUJhc2VTZWxlY3Rvcjtcblx0dmFyIHN1Ym1lbnVzTHZsMiA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdWJtZW51THZsMlNlbGVjdG9yICsgJyA+IC4nICsgYXBwLnRvcE5hdi5tZW51Lml0ZW1MaW5rQ2xhc3MpKTtcblx0aGFuZGxlVG9wTmF2VG9nZ2xlKHN1Ym1lbnVzTHZsMik7XG59O1xuXG5cbi8qIDE3LiBIYW5kbGUgVG9wIE5hdiAtIE1vYmlsZSBUb2dnbGVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZVRvcE5hdk1vYmlsZVRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdHZhciBlbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbJysgYXBwLnRvcE5hdi5tb2JpbGUudG9nZ2xlQXR0ciArJ10nKTtcblx0aWYgKGVsbSkge1xuXHRcdGVsbS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2xpZGVUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrIGFwcC50b3BOYXYuY2xhc3MpKTtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xuXHRcdH1cblx0fVxufTtcblxuXG4vKiBBcHBsaWNhdGlvbiBDb250cm9sbGVyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0cmV0dXJuIHtcblx0XHQvL21haW4gZnVuY3Rpb25cblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLmluaXRDb21wb25lbnQoKTtcblx0XHRcdHRoaXMuaW5pdFNpZGViYXIoKTtcblx0XHRcdHRoaXMuaW5pdFRvcE5hdigpO1xuXHRcdH0sXG5cdFx0aW5pdFNpZGViYXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aGFuZGxlU2lkZWJhclNjcm9sbE1lbW9yeSgpO1xuXHRcdFx0aGFuZGxlU2lkZWJhck1pbmlmeUZsb2F0TWVudSgpO1xuXHRcdFx0aGFuZGxlU2lkZWJhck1lbnUoKTtcblx0XHRcdGhhbmRsZVNpZGViYXJNaW5pZnkoKTtcblx0XHRcdGhhbmRsZVNpZGViYXJNb2JpbGVUb2dnbGUoKTtcblx0XHRcdGhhbmRsZVNpZGViYXJNb2JpbGVEaXNtaXNzKCk7XG5cdFx0fSxcblx0XHRpbml0VG9wTmF2OiBmdW5jdGlvbigpIHtcblx0XHRcdGhhbmRsZVVubGltaXRlZFRvcE5hdlJlbmRlcigpO1xuXHRcdFx0aGFuZGxlVG9wTmF2U3ViTWVudSgpO1xuXHRcdFx0aGFuZGxlVG9wTmF2TW9iaWxlVG9nZ2xlKCk7XG5cdFx0fSxcblx0XHRpbml0Q29tcG9uZW50OiBmdW5jdGlvbigpIHtcblx0XHRcdGhhbmRsZVNjcm9sbGJhcigpO1xuXHRcdFx0aGFuZGxlQ2FyZEFjdGlvbigpO1xuXHRcdFx0aGFuZGVsVG9vbHRpcFBvcG92ZXJBY3RpdmF0aW9uKCk7XG5cdFx0XHRoYW5kbGVTY3JvbGxUb1RvcEJ1dHRvbigpO1xuXHRcdFx0aGFuZGxlU2Nyb2xsVG8oKTtcblx0XHRcdGhhbmRsZVRoZW1lUGFuZWxFeHBhbmQoKTtcblx0XHRcdGhhbmRsZVRoZW1lUGFnZUNvbnRyb2woKTtcblx0XHRcdGhhbmRsZUNzc1ZhcmlhYmxlKCk7XG5cdFx0XHRoYW5kbGVUb2dnbGVDbGFzcygpO1xuXHRcdH0sXG5cdFx0c2Nyb2xsVG9wOiBmdW5jdGlvbigpIHtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbyh7dG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCd9KTtcblx0XHR9XG5cdH07XG59KCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcblx0QXBwLmluaXQoKTtcbn0pOyJdfQ==
