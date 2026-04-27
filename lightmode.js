 function switchTheme() {
 let lightmode = localStorage.getItem('lightmode');
 const themeSwitch = document.getElementById('theme-switch');
 const darkIcon = document.getElementById('dark-icon');
 const lightIcon = document.getElementById('light-icon');

 const enableLightmode = () => {
   document.body.classList.add('lightmode');
   localStorage.setItem('lightmode', 'active');
   darkIcon.style.display = 'none';
   lightIcon.style.display = 'inline';
 };

 const disableLightmode = () => {
   document.body.classList.remove('lightmode');
   localStorage.setItem('lightmode', null);
   darkIcon.style.display = 'inline';
   lightIcon.style.display = 'none';
 };

 if (lightmode === 'active') {
   enableLightmode();
 }

 themeSwitch.addEventListener('click', () => {
   lightmode = localStorage.getItem('lightmode');
   if (lightmode !== 'active') {
     enableLightmode();
   } else {
     disableLightmode();
  }
});
}
