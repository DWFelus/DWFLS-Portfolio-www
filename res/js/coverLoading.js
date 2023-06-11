window.addEventListener('load', function() {
  const cover = document.getElementById('cover');
  const arrowQuiver = document.getElementById('arrow-quiver');

  const boxes = document.getElementsByClassName('box');
  const headlineWrappers = document.getElementsByClassName('headline-wrapper');

  cover.addEventListener('transitionend', function() {
    arrowQuiver.classList.add('show');

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].classList.add('show');
    }

    for (let i = 0; i < headlineWrappers.length; i++) {
      const headline = headlineWrappers[i].querySelector('.headline');
      headline.classList.add('show');
    }
  });

  cover.classList.add('loaded');
});
