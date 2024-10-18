function inputEffects(inputClass, addClass) {
  for (let a = 0; a < inputClass.length; a++) {
    inputClass[a].addEventListener('change', function (e) {
      inputClass[a].classList.add(addClass);
    })
  }
}


const icon = document.getElementsByClassName('icon');
const search = document.getElementsByClassName('header__search');
search[0].addEventListener('change', function (e) {
  const icon = document.getElementsByClassName('icon');
  icon[0].classList.add('icon__purple');
})


let input = document.getElementsByClassName('form__search');

if (input.length === 0) {
  input = document.getElementsByClassName('choose__input');
  inputEffects(input, 'choose--active');
} else {
  inputEffects(input, 'input--active');
}
