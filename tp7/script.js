
// const divEl=document.querySelector('.side-bar')
//  const ulEl=document.createElement('ul')
// ulEl.setAttribute('class', 'nav-links')

// const liEl=document.createElement('li')
// const a=document.createElement('a')
// a.setAttribute('class', 'das-btn')
// const i1=document.createElement('i')
// i1.setAttribute('class', 'fa fa-dashboard')
// const span=document.createElement('span')
// span.setAttribute('class', 'logo_name')
// span.innerHTML='Dashboard'
// const i2=document.createElement('i')
// i2.setAttribute('class', 'fa fa-angle-left')

// const ul=document.createElement('ul')
// ul.setAttribute('class', 'show')
// const liA=document.createElement('li')
// const i3A=document.createElement('i')
// i3A.setAttribute('class', 'bx bx-circle')
// const liB=document.createElement('li')
// const i3B=document.createElement('i')
// i3B.setAttribute('class', 'bx bx-circle')
// const liC=document.createElement('li')
// const i3C=document.createElement('i')
// i3C.setAttribute('class', 'bx bx-circle')

// liA.appendChild(i3A)
// liA.innerHTML='Dashboard v1'
// ul.appendChild(liA)
// liB.appendChild(i3B)
// liB.innerHTML='Dashboard v2'
// ul.appendChild(liB)
// liC.appendChild(i3C)
// liC.innerHTML='Dashboard v3'
// ul.appendChild(liC)

// a.appendChild(i1)
// a.appendChild(span)
// a.appendChild(i2)


// liEl.appendChild(a)
// liEl.appendChild(ul)
// ulEl.appendChild(liEl)
// divEl.appendChild(ulEl)
// /////////////////////////////////////////////////////

// const liEl1=document.createElement('li')
// const a1=document.createElement('a')
// a1.setAttribute('class', 'das-btn')
// const i11=document.createElement('i')
// i11.setAttribute('class', 'fa fa-copy')
// const span1=document.createElement('span')
// span1.setAttribute('class', 'logo_name')
// span1.innerHTML='Layout Option'
// const i21=document.createElement('i')
// i21.setAttribute('class', 'fa fa-angle-left')

// const ul1=document.createElement('ul')
// ul1.setAttribute('class', 'show')
// const liA1=document.createElement('li')
// const i3A1=document.createElement('i')
// i3A1.setAttribute('class', 'bx bx-circle')
// const liB1=document.createElement('li')
// const i3B1=document.createElement('i')
// i3B1.setAttribute('class', 'bx bx-circle')
// const liC1=document.createElement('li')
// const i3C1=document.createElement('i')
// i3C1.setAttribute('class', 'bx bx-circle')
// const liD1=document.createElement('li')
// const i3D1=document.createElement('i')
// i3D1.setAttribute('class', 'bx bx-circle')

// liA1.appendChild(i3A1)
// liA1.innerHTML='Top Navigation'
// ul1.appendChild(liA1)
// liB1.appendChild(i3B1)
// liB1.innerHTML='Top Navigation+Sedebar'
// ul1.appendChild(liB1)
// liC1.appendChild(i3C1)
// liC1.innerHTML='Boxed'
// ul1.appendChild(liC1)
// liD1.appendChild(i3D1)
// liD1.innerHTML='ixed Sidebar'
// ul1.appendChild(liD1)

// a1.appendChild(i11)
// a1.appendChild(span1)
// a1.appendChild(i21)

// liEl1.appendChild(a1)
// liEl1.appendChild(ul1)
// ulEl.appendChild(liEl1)
// divEl.appendChild(ulEl)
// console.log(ulEl)


/////////////////////////////////////////////////////////////
// let lienA = document.querySelectorAll('.das-btn')
// for (var i = 0; i < lienA.length; i++) {
//     lienA[i].addEventListener("click", (e) => {
//         let lienAParent = e.target.parentElement.parentElement
//         lienAParent.classList.toggle("show")

//     });

// }
let sidebarEL = document.querySelector('.side-bar')
let menueEL = document.querySelector('.fa-align-justify')
const inpuEl = document.querySelector('input')
const sidbarEl = document.getElementById('sidbar')
const gggEl = document.getElementById('ggg')


// menueEL.addEventListener("click", ()=>{
//     sidebarEL.classList.toggle("close")

// })
menueEL.addEventListener("click", (e) => {
    sidebarEL.classList.toggle("close")
    

})


tab = [
    {
        icone1: "fa fa-dashboard",
        span: "Dashboard",
        icone3: "",
        icone2: "fa fa-angle-left",
        sousMenu:[
            {
                icone1: "bx bx-circle",
                b: "Dashboard v1",
                icone2: "",
            },
            {
                icone1: "bx bx-circle",
                b: "Dashboard v2",
                icone2: "",
            },
            {
                icone1: "bx bx-circle",
                b: "Dashboard v3",
                icone2: "",
            }
        ]
    },
    {
        icone1: "fa fa-th",
        span: "Widgets",
        icone3: "",
        icone2: "",
        sousMenu:[]
     },

    {
        icone1: "fa fa-copy",
        span: "Layout Option",
        icone3: "",
        icone2: "fa fa-angle-left",
        sousMenu:[
                    {
                        icone1: "bx bx-circle",
                        b: "Top Navigation",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Top Navigation+Sedebar",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Boxed",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Fixed Sidebar",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Fixed Sidebar + Custom",
                        icone2: "",
                    }
                ]
    },

    {
        icone1: "fa fa-pie-chart",
        span: "Charts",
        icone3: "",
        icone2: "fa fa-angle-left",
        sousMenu:[
                    {
                        icone1: "bx bx-circle",
                        b: "ChartsJs",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Flot",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Inline",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "uPlot",
                        icone2: "",
                    }
                ]
    },

    {
        icone1: "bx bxs-traffic",
        span: "UI Elements",
        icone3: "",
        icone2: "fa fa-angle-left",
        sousMenu:[
                    {
                        icone1: "bx bx-circle",
                        b: "General",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Icone",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Buttons",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Sliders",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Modals",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Navbar & Tabs",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Timeline",
                        icone2: "",
                    },
                    {
                        icone1: "bx bx-circle",
                        b: "Ribbons",
                        icone2: "",
                    }
                ]
    }
]


tab.forEach(function (objet) {
    icon1Val = objet['icone1']
    spanVal = objet['span']
    icon3Val = objet['icone3']
    icon2Val = objet['icone2']
    sousMenu=objet['sousMenu']

    const sidebarEll = document.querySelector('.side-bar')
    const ul=document.querySelector('.nav-links')


    const divIcone = document.createElement('div')
    divIcone.setAttribute('class', 'divicone')
    const divToggle = document.createElement('div')
    divToggle.setAttribute('class', 'divtoggle')
    const divv = document.createElement('div')
    divv.setAttribute('class', 'divv')
    const icone1 = document.createElement('i')
    icone1.setAttribute('class', icon1Val)
    const icone2 = document.createElement('i')
    icone2.setAttribute('class', icon2Val)
    const icone3 = document.createElement('i')
    icone3.setAttribute('class', icon3Val)
    const span = document.createElement('span')
    span.innerText = spanVal
    divIcone.appendChild(icone1)
    divToggle.appendChild(span)
    divToggle.appendChild(icone3)
    divToggle.appendChild(icone2)
    divv.appendChild(divIcone)
    divv.appendChild(divToggle)
    const ulSouMenue=document.createElement('ul')
    ulSouMenue.setAttribute('class', "ul-sou-menue")
   ul.appendChild(divv)
   ul.appendChild(ulSouMenue)

    sousMenu.forEach( (el)=> {
        icon1Val = el['icone1']
        bVal = el['b']
        icon2Val = el['icone2']

        const divIcone = document.createElement('div')
        divIcone.setAttribute('class', 'divicone')
        const divToggle = document.createElement('div')
        divToggle.setAttribute('class', 'divtoggle')
        const divvv = document.createElement('div')
        divvv.setAttribute('class', 'sou_menue open')
        // divv.setAttribute('id', 'sou_meneu_toggle')
        const icone1 = document.createElement('i')
        icone1.setAttribute('class', icon1Val)
        const icone2 = document.createElement('i')
        icone2.setAttribute('class', icon2Val)
        const b = document.createElement('b')
        b.innerText = bVal
        
        divIcone.appendChild(icone1)
        divToggle.appendChild(b)
        divvv.appendChild(divIcone)
        divvv.appendChild(divToggle)
        divToggle.appendChild(icone2)

        ulSouMenue.appendChild(divvv)
        

        
        })
          


        const divHidden=document.querySelectorAll('.sou_menue')
        divv.addEventListener('click', ()=>{
            icone2.classList.toggle('rotation')
            divv.nextElementSibling.classList.toggle('hidden')
    });


});

// let lienA = document.querySelectorAll('.das-btn')
// for (var i = 0; i < lienA.length; i++) {
//     lienA[i].addEventListener("click", (e) => {
//         let lienAParent = e.target.parentElement.parentElement
//         lienAParent.classList.toggle("show")

//     });

// }


// let divMenue = document.querySelector('.divv')
// let souMeneuToggle = document.querySelector('#sou_meneu_toggle')
// divMenue.addEventListener('click', ()=>{
//     souMeneuToggle.classList.toggle("open")
//     console.log(souMeneuToggle)
// })
   
// for (var i = 0; i < divMenue.length; i++) {
//     divMenue[i].addEventListener("click", (e) => {
//         let lienAParent = e.target.parentElement.parentElement
//         lienAParent.classList.toggle("sou_meneu_toggle")


//     });

// }


