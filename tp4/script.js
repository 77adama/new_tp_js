let bodyEl =document.getElementsByTagName('body')
let titleEL=document.getElementById('title')
let minuteurEL=document.getElementById('"minuteur')
let jEL=document.getElementById('j')
let hEL=document.getElementById('h')
let mEL=document.getElementById('m')
let sEL=document.getElementById('s')

// recupere le delta de temps en minute
// let now = new Date()
// const dateOffsetInMinutes = now.getTimezoneOffset;

const unJourEnMs = 1000*60*60*24
const uneHeureEnMs = 1000*60*60
const uneMinuteEnMs = 1000*60

const newYear= new Date ("2023")

const getCountdown=()=>{    
    //date à l'instan t
   let nowDate=Date.now()
   let tempsRestantEnMs = newYear- nowDate ;
    //jours
  let nbJours = Math.floor(tempsRestantEnMs / unJourEnMs);
  // heurs
   let resteTempsSansJoursMs = tempsRestantEnMs - nbJours * unJourEnMs 
   let nbHeure = Math.floor(resteTempsSansJoursMs/uneHeureEnMs)
    //minutes
    let resteTempsSansHeureMs = resteTempsSansJoursMs- nbHeure*uneHeureEnMs
    let nbMinutes = Math.floor(resteTempsSansHeureMs/uneMinuteEnMs)
    //secondes
    let resteTempsSansMinuteMs = resteTempsSansHeureMs - nbMinutes * uneMinuteEnMs
    let nbSeconde=Math.floor(resteTempsSansMinuteMs/1000)
  
    jEL.textContent=[-nbJours]
    hEL.textContent=0+ [-nbHeure]
    mEL.textContent=0+[-nbMinutes]
    sEL.textContent=0+[-nbSeconde]

    // if (tempsRestantEnMs<=0) {
    //     jEL.textContent=0
    //     hEL.textContent=0
    //     mEL.textContent=0
    //     sEL.textContent=0
    //     titleEL.innerHTML='bonne année !!!'
    // }

}

let countDownInterval = setInterval(getCountdown, 1000)

getCountdown()