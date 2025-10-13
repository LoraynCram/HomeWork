(function () {
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1000) return

        if (!document.body.classList.contains('body--open--menu')) {
            document.body.classList.add('body--open--menu')
        } else {
            document.body.classList.remove('body--open--menu')
        }
    }


    // Swiper products


    new Swiper('.swiper', {
        direction: 'vertical',
        spaceBetween: 30,
        initialSlide: 2,
        mousewheel: false,
        allowTouchMove: false,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });

    // tab-about

    const tabControlsAbout = document.querySelector('.tab-controls')

    tabControlsAbout.addEventListener('click', toggleTab)

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
    // tab-timetable

    const tabControlsTimetable = document.querySelector('.timetable__tab-controls')

    tabControlsTimetable.addEventListener('click', toggleTabTimetable)

    function toggleTabTimetable(e) {

        const tabControl = e.target.closest('.timetable__tab-control__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('timetable__tab-control__link--active')) return



        const tabContentID = tabControl.getAttribute('href')

        document.querySelector('.timetable__tab-content--show').classList.remove('timetable__tab-content--show')
        document.querySelector(tabContentID).classList.add('timetable__tab-content--show')

        document.querySelector('.timetable__tab-control__link--active').classList.remove('timetable__tab-control__link--active')
        tabControl.classList.add('timetable__tab-control__link--active')
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
            e.preventDefault()

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

})()