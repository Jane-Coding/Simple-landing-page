const header = document.getElementById('header')

const styles = getComputedStyle(document.body)
const headerBackground = styles.getPropertyValue('--color-background-dark')

document.addEventListener('scroll', ()=> {
    if ( window.scrollY  <= 50 ) {
        header.style.backgroundColor = "transparent";
    } else {
        header.style.backgroundColor = headerBackground;
      }

})