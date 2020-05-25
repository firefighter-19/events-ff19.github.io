const changeBg = () => {
  const background = document.querySelector('.wrapper__background__left');
  const background2 = document.querySelector('.wrapper__background__right')
  const hoverChange = document.querySelector('.nav__menu__list-item');
  const hoverChangeTwo = document.querySelector('.nav__menu__list-item');
  const hoverBarChange = document.querySelector('.header__border');

    hoverChange.addEventListener('mouseover', handle);
    hoverChange.addEventListener('mouseleave', handle2);
    hoverChangeTwo.addEventListener('mouseover', handle3);
    hoverChangeTwo.addEventListener('mouseleave', handle4);
    hoverChange.addEventListener('mouseover',()=> {
      hoverBarChange.classList.toggle('active');
    });
    hoverChange.addEventListener('mouseleave', ()=> {
      hoverBarChange.classList.remove('active')
    });

  function handle() {
    background.style.background = 'url(../source/vectors/violet.svg) bottom left/auto 50% no-repeat';
  }

  function handle2() {
    background.style.background = '';
  }

  function handle3() {
    background2.style.background = 'url(../source/vectors/orangeNew.svg) bottom right/auto 100% no-repeat';
  }

  function handle4() {
    background2.style.background = '';
  }

}
changeBg ();

const burgerSlide = () => {
  const burger = document.querySelector('.nav__container__burger');
  let nav = document.querySelector ('.header__container');
  let navLinks = document.querySelectorAll ('.nav__menu__list-item li');
  const lock = document.querySelector ('body');
  let border = document.querySelector ('.header__border');

  burger.addEventListener('click',()=> {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    lock.classList.toggle('lock');
    border.classList.toggle('active');


      navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
   });
};

burgerSlide();

$(".nav__menu__list-item li a").click(function(){
$(".header__container").removeClass('active')
$("body").removeClass('lock')
$(".header__border").removeClass('active')
$(".nav__container__burger").removeClass('active')
$('.nav__menu__list-item li').removeAttr( 'style' );

})

const button1 = document.querySelector('.button')
const button2 = document.querySelector('.button-two')
const button3 = document.querySelector('.button-three')
const button4 = document.querySelector('.button-partner-study')

//================BUTTON-OPEN-BLOCK==============
  const showHiddenText = () => {
    const hiddenText = document.querySelector('.hidden-description');

      button1.addEventListener('click',()=> {
        hiddenText.classList.toggle('active');
      });
};

showHiddenText();

const showHiddenTextThree = () => {

  const hiddenText3 = document.querySelector('.hidden-description-three');
      button3.addEventListener('click',()=> {
          hiddenText3.classList.toggle('active');
      });
};
showHiddenTextThree();

const showHiddenTextPartnerStudy = () => {

  const hiddenText4 = document.querySelector('.hidden-description-partn-study ');
      button4.addEventListener('click',()=> {
          hiddenText4.classList.toggle('active');
      });
};
showHiddenTextPartnerStudy();
//================BUTTON-HIDE-BLOCK==============

// const hideText = () => {
//   const text = document.querySelector('.description-preview');
//
//     button1.addEventListener('click',()=> {
//       text.classList.toggle('active');
//   });
// };
// hideText();


// const hideTextThree = () => {
//   const text = document.querySelector('.description-preview-three');
//
//     button3.addEventListener('click',()=> {
//       text.classList.toggle('active');
//   });
// };
//
// hideTextThree();
