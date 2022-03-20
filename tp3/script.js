const bodyEl=document.querySelector('body')
const containerEL=document.getElementById('container')
const gEL=document.getElementById('g')
const dEL=document.getElementById('d')


document.body.onload=function(){
    nbr=4
    p=0

    const containerEL=document.getElementById('container')
const dEL=document.getElementById('d')
const gEL=document.getElementById('g')

containerEL.style.width=(800*nbr)+"px"
for ( i = 0; i <= nbr; i++) {
    divEl=document.createElement('div');
    divEl.className="photo"
    divEl.style.backgroundImage="url('im"+i+".png')"
    containerEL.appendChild(divEl)
   
    affMas()

}
}

gEL.onclick=function(){
    if(p>-nbr+1)
         p--
    containerEL.style.transform="translate("+p*800+"px)" 
    containerEL.style.transition="all 0.5s ease"

    affMas()
}
dEL.onclick=function(){
    if(p<0)
         p++
    containerEL.style.transform="translate("+p*800+"px)" 
    containerEL.style.transition="all 0.5s ease"

    affMas()
}

function affMas(){
    if(p==-nbr+1)
    gEL.style.visibility="hidden"
    else
    gEL.style.visibility="visible"
    if(p==0)
    dEL.style.visibility="hidden"
    else
    dEL.style.visibility="visible"
    
}