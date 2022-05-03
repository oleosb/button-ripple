let btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
        let x = e.clientX
        let y = e.clientY
        
        let btnTop = e.target.offsetTop
        let btnLeft = e.target.offsetLeft

        let xPos = x - btnLeft
        let yPos = y - btnTop

        let ripple = document.createElement('span')
        ripple.classList.add('ripple')
        ripple.style.top = yPos + 'px'
        ripple.style.left = xPos + 'px'
        btn.appendChild(ripple)
})