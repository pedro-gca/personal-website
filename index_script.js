const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const bg1 = document.querySelector('#b')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
            // bg1.style.background = "linear-gradient(2, #fff, #000)"
            // bg1.style.animation = 'mmmove 2s 2'
            // bg1.style.background = 'linear-gradient(70deg, #fff, #000);'
            // console.log(index)
        })
        target.classList.add('active')
    })
})


const bg = document.querySelector('body')

bg.addEventListener('click', () => {
    document.getElementsByName(body).style.background = "linear-gradient(140, #fff, #000)"
})


bg1.addEventListener('click', () => {
})


