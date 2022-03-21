let lienA=document.querySelectorAll('.das-btn')
console.log(lienA)
for (var i = 0; i < lienA   .length; i++) {
    lienA[i].addEventListener("click", (e)=>{
        let lienAParent=e.target.parentElement.parentElement
        lienAParent.classList.toggle("show")

    });
    
}
let sidebarEL = document.querySelector('.side-bar')
let menueEL = document.querySelector('.fa-align-justify')
const inpuEl = document.querySelector('input')


menueEL.addEventListener("click", ()=>{
    sidebarEL.classList.toggle("close")

})
const divEl=document.querySelector('.side-bar')
 const ulEl=document.createElement('ul')
ulEl.setAttribute('class', 'nav-links')

const liEl=document.createElement('li')
const a=document.createElement('a')
a.setAttribute('class', 'das-btn')
const i1=document.createElement('i')
i1.setAttribute('class', 'fa fa-dashboard')
const span=document.createElement('span')
span.setAttribute('class', 'logo_name')
span.innerHTML='Dashboard'
const i2=document.createElement('i')
i2.setAttribute('class', 'fa fa-angle-left')

const ul=document.createElement('ul')
ul.setAttribute('class', 'show')
const liA=document.createElement('li')
const i3A=document.createElement('i')
i3A.setAttribute('class', 'bx bx-circle')
const liB=document.createElement('li')
const i3B=document.createElement('i')
i3B.setAttribute('class', 'bx bx-circle')
const liC=document.createElement('li')
const i3C=document.createElement('i')
i3C.setAttribute('class', 'bx bx-circle')

liA.appendChild(i3A)
liA.innerHTML='Dashboard v1'
ul.appendChild(liA)
liB.appendChild(i3B)
liB.innerHTML='Dashboard v2'
ul.appendChild(liB)
liC.appendChild(i3C)
liC.innerHTML='Dashboard v3'
ul.appendChild(liC)

a.appendChild(i1)
a.appendChild(span)
a.appendChild(i2)


liEl.appendChild(a)
liEl.appendChild(ul)
ulEl.appendChild(liEl)
divEl.appendChild(ulEl)
/////////////////////////////////////////////////////

const liEl1=document.createElement('li')
const a1=document.createElement('a')
a1.setAttribute('class', 'das-btn')
const i11=document.createElement('i')
i11.setAttribute('class', 'fa fa-copy')
const span1=document.createElement('span')
span1.setAttribute('class', 'logo_name')
span1.innerHTML='Layout Option'
const i21=document.createElement('i')
i21.setAttribute('class', 'fa fa-angle-left')

const ul1=document.createElement('ul')
ul1.setAttribute('class', 'show')
const liA1=document.createElement('li')
const i3A1=document.createElement('i')
i3A1.setAttribute('class', 'bx bx-circle')
const liB1=document.createElement('li')
const i3B1=document.createElement('i')
i3B1.setAttribute('class', 'bx bx-circle')
const liC1=document.createElement('li')
const i3C1=document.createElement('i')
i3C1.setAttribute('class', 'bx bx-circle')
const liD1=document.createElement('li')
const i3D1=document.createElement('i')
i3D1.setAttribute('class', 'bx bx-circle')

liA1.appendChild(i3A1)
liA1.innerHTML='Top Navigation'
ul1.appendChild(liA1)
liB1.appendChild(i3B1)
liB1.innerHTML='Top Navigation+Sedebar'
ul1.appendChild(liB1)
liC1.appendChild(i3C1)
liC1.innerHTML='Boxed'
ul1.appendChild(liC1)
liD1.appendChild(i3D1)
liD1.innerHTML='ixed Sidebar'
ul1.appendChild(liD1)

a1.appendChild(i11)
a1.appendChild(span1)
a1.appendChild(i21)

liEl1.appendChild(a1)
liEl1.appendChild(ul1)
ulEl.appendChild(liEl1)
divEl.appendChild(ulEl)
console.log(ulEl)
