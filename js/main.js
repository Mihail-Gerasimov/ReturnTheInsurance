document.addEventListener('DOMContentLoaded', () => {
    const btnModal = document.querySelector('[data-modal]'),
        btnModalMob = document.querySelector('[data-modal-mob]'),
        cLosed = document.querySelector('.close'),
        modal = document.querySelector('.modal');

    btnModal.onclick = function () {
        modal.classList.toggle('modal-active');
    };

    btnModalMob.onclick = function () {
        modal.classList.toggle('modal-active');
    };

    cLosed.onclick = function () {
        modal.classList.remove('modal-active');
    };


    const btnGeneral = document.querySelector('.detail__btn'),
        btnMain = document.querySelector('.detail__main'),
        btnClose = document.querySelector('.detail__btn--close');

    btnGeneral.onclick = function () {
        btnGeneral.classList.add('detail__btn--active');
        btnMain.classList.add('detail__main--active');
    };

    btnClose.onclick = function () {
        btnGeneral.classList.remove('detail__btn--active');
        btnMain.classList.remove('detail__main--active');
    };
});

