const menu=document.querySelector('.menu')
let lineTop=document.querySelector('.lineTop')
let lineCenter=document.querySelector('.lineCenter')
let lineLower=document.querySelector('.lineLower')
const navbar=document.querySelector('.navbar')
menu.addEventListener('click',()=>{
    lineTop.classList.toggle('Top')
    lineCenter.classList.toggle('Center')
    lineLower.classList.toggle('Lower')

    navbar.style.display=(navbar.style.display==='none' || navbar.style.display===''? 'flex':'none')
})
