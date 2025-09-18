(function () {

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

})()
