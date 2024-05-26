const paragraph = document.querySelector('p');
const alternativeText = document.querySelector('.alternative-text');

paragraph.addEventListener('mouseover', () => {
  paragraph.classList.add('hidden');
  alternativeText.classList.add('visible');
});

paragraph.addEventListener('mouseout', () => {
  paragraph.classList.remove('hidden');
  alternativeText.classList.remove('visible');
});