const navHomeEl = document.querySelector('#nav-home');
const navAboutEl = document.querySelector('#nav-about');
const navExperienceEl = document.querySelector('#nav-experience');
const navContactEl = document.querySelector('#nav-contact');

navHomeEl.addEventListener('click', () => {
  navHomeEl.style.color = 'white';
  navHomeEl.style.background = '#1f1f38'

  navAboutEl.style.color = 'rgba(255, 255, 255, 0.6)'
  navAboutEl.style.background = 'rgba(0, 0, 0, 0.3)'

  navExperienceEl.style.color = 'rgba(255, 255, 255, 0.6)'
  navExperienceEl.style.background = 'rgba(0, 0, 0, 0.3)'

  navContactEl.style.color = 'rgba(255, 255, 255, 0.6)'
  navContactEl.style.background = 'rgba(0, 0, 0, 0.3)'
});

navAboutEl.addEventListener('click', () => {
  navAboutEl.style.color = 'white';
  navAboutEl.style.background = '#1f1f38';

  navHomeEl.style.color = 'rgba(255, 255, 255, 0.6)'
  navHomeEl.style.background = 'rgba(0, 0, 0, 0.3)'

  navExperienceEl.style.color = 'rgba(255, 255, 255, 0.6)'
  navExperienceEl.style.background = 'rgba(0, 0, 0, 0.3)'

  navContactEl.style.color = 'rgba(255, 255, 255, 0.6)'
  navContactEl.style.background = 'rgba(0, 0, 0, 0.3)'
});

navExperienceEl.addEventListener('click', () => {
  navExperienceEl.style.color = 'white';
  navExperienceEl.style.background = '#1f1f38';
  
  navAboutEl.style.color = 'rgba(255, 255, 255, 0.6)'
  navAboutEl.style.background = 'rgba(0, 0, 0, 0.3)'

  navHomeEl.style.color = 'rgba(255, 255, 255, 0.6)'
  navHomeEl.style.background = 'rgba(0, 0, 0, 0.3)'
  
  navContactEl.style.color = 'rgba(255, 255, 255, 0.6)'
  navContactEl.style.background = 'rgba(0, 0, 0, 0.3)'
});

navContactEl.addEventListener('click', () => {
  navContactEl.style.color = 'white';
  navContactEl.style.background = '#1f1f38';

  navAboutEl.style.color = 'rgba(255, 255, 255, 0.6)'
  navAboutEl.style.background = 'rgba(0, 0, 0, 0.3)'

  navExperienceEl.style.color = 'rgba(255, 255, 255, 0.6)'
  navExperienceEl.style.background = 'rgba(0, 0, 0, 0.3)'

  navHomeEl.style.color = 'rgba(255, 255, 255, 0.6)'
  navHomeEl.style.background = 'rgba(0, 0, 0, 0.3)'
});



