(function () {
    // Burger
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--open--menu')) {
            document.body.classList.add('body--open--menu')
        } else {
            document.body.classList.remove('body--open--menu')
        }
    }

    // var Modal
    // document.addEventListener('click', modalInite)

    // function modalInite(e) {

    //     const aboutBtn = e.target.closest('.about__img-button')
    //     const modalWindow = e.target.closest('.modal')

    //     if (!aboutBtn && !modalWindow) return

    //     if (!document.body.classList.contains('body--open--modal' || target.closest('.modal__cancel'))) {
    //         document.body.classList.add('body--open--modal')
    //     } else {
    //         document.body.classList.remove('body--open--modal')
    //     }
    // }

    // Modal
    const btnOpenModal = document.querySelector('.about__img-button')
    const modal = document.querySelector('.modal')
    const body = document.body

    const openModal = () => {
        body.classList.add('body--open--modal')
    }

    const closeModal = () => {
        body.classList.remove('body--open--modal')
    }

    btnOpenModal.addEventListener('click', openModal)

    modal.addEventListener('click', event => {
        const target = event.target
        if (target && target.classList.contains('modal') || target.closest('.modal__cancel')) {
            body.classList.remove('body--open--modal')
        }
    })

    // Tab

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-control__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-control__link--active')) return



        const tabContentID = tabControl.getAttribute('href')

        document.querySelector('.tab-content--show').classList.remove('tab-content--show')
        document.querySelector(tabContentID).classList.add('tab-content--show')

        document.querySelector('.tab-control__link--active').classList.remove('tab-control__link--active')
        tabControl.classList.add('tab-control__link--active')
    }

    // Accordion

    const accordionList = document.querySelectorAll('.accordion-list');

    accordionList.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

            const accordionControl = e.target.closest('.accordion-list__control');

            if (!accordionControl) return

            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }



            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }



        });
    });

    // Slider-gallery

    const swiper = new Swiper('.gallary__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallary__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallary__button-next',
            prevEl: '.gallary__button-prev',
        },

        breakpoints: {
            451: {
                slidesPerView: 2,
            },
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            },

        }
    });
    // Slider-tastimonials
    new Swiper('.tastimonials__slider', {
        slidesPerView: 1,
        centeredSlides: true,

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        navigation: {
            nextEl: '.tastimonials__button-next',
            prevEl: '.tastimonials__button-prev',
        },
        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }

        }
        
    });


})()
