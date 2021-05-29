function font () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 12.8 + 'px'
 }
 
 font()
 
 window.onresize = font