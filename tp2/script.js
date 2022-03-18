const adminn=document.querySelector('.admin')
const alexendeR=document.querySelector('.alexender')
const searcH=document.querySelector('.search')
const naV=document.querySelector('nav')


/////////////////////////
const image1=document.createElement('img')
const small1=document.createElement('small')
small1.innerHTML='AdminLTE3'
adminn.appendChild(image1)
adminn.appendChild(small1)

const image2=document.createElement('img')
const small2=document.createElement('small')
small2.innerHTML='Alexendre Pierce'
alexendeR.appendChild(image2)
alexendeR.appendChild(small2)

const ii=document.createElement('i')
const small3=document.createElement('small')
ii.setAttribute('class','fas fa-search')
small3.innerHTML='Alexendre Pierce'
searcH.appendChild(ii)
searcH.appendChild(small3)

const tablE=document.createElement('table')

////////////////////////////////////////////////////////////////////////////////////////////////////////
const tR1=document.createElement('tr')
const tH1=document.createElement('th')
tH1.innerHTML='Dashboard'
tR1.appendChild(tH1)
tablE.appendChild(tR1)
naV.appendChild(tablE)
const tD1=document.createElement('td')
const div1=document.createElement('div')
div1.setAttribute('class', 'tabl')

const input1=document.createElement('input')
input1.setAttribute('type', 'radio')
const label1=document.createElement('label')
label1.innerHTML='Dashboard v1'
div1.appendChild(label1)
div1.appendChild(input1)
tD1.appendChild(div1)
tR1.appendChild(tD1)

const div2=document.createElement('div')
const input2=document.createElement('input')
input2.setAttribute('type', 'radio')
const label2=document.createElement('label')
label2.innerHTML='Dashboard v2'
div2.appendChild(label2)
div2.appendChild(input2)
tD1.appendChild(div2)

const div3=document.createElement('div')
const input3=document.createElement('input')
input3.setAttribute('type', 'radio')
const label3=document.createElement('label')
label3.innerHTML='Dashboard v3'
div3.appendChild(label3)
div3.appendChild(input3)
tD1.appendChild(div3)
////////////////////////////////////////////////////////////////////////////////////////////////////////

const tR2=document.createElement('tr')
const tH2=document.createElement('th')
tH2.innerHTML='Layout Option'
tR2.appendChild(tH2)
tablE.appendChild(tR2)
naV.appendChild(tablE)
const tD2=document.createElement('td')
const div21=document.createElement('div')
div21.setAttribute('class', 'tabl')

const input21=document.createElement('input')
input21.setAttribute('type', 'radio')
const label21=document.createElement('label')
label21.innerHTML='Top Navigation'
div21.appendChild(label21)
div21.appendChild(input21)
tD2.appendChild(div21)
tR2.appendChild(tD2)

const div22=document.createElement('div')
const input22=document.createElement('input')
input22.setAttribute('type', 'radio')
const label22=document.createElement('label')
label22.innerHTML='Top Navigation+Sedebar'
div22.appendChild(label22)
div22.appendChild(input22)
tD2.appendChild(div22)

const div23=document.createElement('div')
const input23=document.createElement('input')
input23.setAttribute('type', 'radio')
const label23=document.createElement('label')
label23.innerHTML='Boxed'
div23.appendChild(label23)
div23.appendChild(input23)
tD2.appendChild(div23)

const div24=document.createElement('div')
const input24=document.createElement('input')
input24.setAttribute('type', 'radio')
const label24=document.createElement('label')
label24.innerHTML='Fixed Sidebar'
div24.appendChild(label24)
div24.appendChild(input24)
tD2.appendChild(div24)

const div25=document.createElement('div')
const input25=document.createElement('input')
input25.setAttribute('type', 'radio')
const label25=document.createElement('label')
label25.innerHTML='Fixed Sidebar'
div25.appendChild(label25)
div25.appendChild(input25)
tD2.appendChild(div25)

//////////////////////////////////////////////////////////////////////////////////////////////
const tR3=document.createElement('tr')
const tH3=document.createElement('th')
tH3.innerHTML='Charts'
tR3.appendChild(tH3)
tablE.appendChild(tR3)
naV.appendChild(tablE)
const tD3=document.createElement('td')
const div31=document.createElement('div')
div31.setAttribute('class', 'tabl')

const input31=document.createElement('input')
input31.setAttribute('type', 'radio')
const label31=document.createElement('label')
label31.innerHTML='ChartsJs'
div31.appendChild(label31)
div31.appendChild(input31)
tD3.appendChild(div31)
tR3.appendChild(tD3)

const div32=document.createElement('div')
const input32=document.createElement('input')
input32.setAttribute('type', 'radio')
const label32=document.createElement('label')
label32.innerHTML='Flot'
div32.appendChild(label32)
div32.appendChild(input32)
tD3.appendChild(div32)

const div33=document.createElement('div')
const input33=document.createElement('input')
input33.setAttribute('type', 'radio')
const label33=document.createElement('label')
label33.innerHTML='Inline'
div33.appendChild(label33)
div33.appendChild(input33)
tD3.appendChild(div33)

const div34=document.createElement('div')
const input34=document.createElement('input')
input34.setAttribute('type', 'radio')
const label34=document.createElement('label')
label34.innerHTML='uPlot'
div34.appendChild(label34)
div34.appendChild(input34)
tD3.appendChild(div34)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const tR4=document.createElement('tr')
const tH4=document.createElement('th')
tH4.innerHTML='UI Elements'
tR4.appendChild(tH4)
tablE.appendChild(tR4)
naV.appendChild(tablE)
const tD4=document.createElement('td')
const div41=document.createElement('div')
div41.setAttribute('class', 'tabl')

const input41=document.createElement('input')
input41.setAttribute('type', 'radio')
const label41=document.createElement('label')
label41.innerHTML='General'
div41.appendChild(label41)
div41.appendChild(input41)
tD4.appendChild(div41)
tR4.appendChild(tD4)

const div42=document.createElement('div')
const input42=document.createElement('input')
input42.setAttribute('type', 'radio')
const label42=document.createElement('label')
label42.innerHTML='Icone'
div42.appendChild(label42)
div42.appendChild(input42)
tD4.appendChild(div42)

const div43=document.createElement('div')
const input43=document.createElement('input')
input43.setAttribute('type', 'radio')
const label43=document.createElement('label')
label43.innerHTML='Buttons'
div43.appendChild(label43)
div43.appendChild(input43)
tD4.appendChild(div43)

const div44=document.createElement('div')
const input44=document.createElement('input')
input44.setAttribute('type', 'radio')
const label44=document.createElement('label')
label44.innerHTML='Sliders'
div44.appendChild(label44)
div44.appendChild(input44)
tD4.appendChild(div44)

const div45=document.createElement('div')
const input45=document.createElement('input')
input45.setAttribute('type', 'radio')
const label45=document.createElement('label')
label45.innerHTML='Modals & Alerts'
div45.appendChild(label45)
div45.appendChild(input45)
tD4.appendChild(div45)
tR4.appendChild(tD4)

const div46=document.createElement('div')
const input46=document.createElement('input')
input46.setAttribute('type', 'radio')
const label46=document.createElement('label')
label46.innerHTML='Navbar & Tabs'
div46.appendChild(label46)
div46.appendChild(input46)
tD4.appendChild(div46)

const div47=document.createElement('div')
const input47=document.createElement('input')
input47.setAttribute('type', 'radio')
const label47=document.createElement('label')
label47.innerHTML='Timeline'
div47.appendChild(label47)
div47.appendChild(input47)
tD4.appendChild(div47)

const div48=document.createElement('div')
const input48=document.createElement('input')
input48.setAttribute('type', 'radio')
const label48=document.createElement('label')
label48.innerHTML='Ribbons'
div48.appendChild(label48)
div48.appendChild(input48)
tD4.appendChild(div48)

////////////////////////////////////////////////////////////////////////////////////////////////////////
const tR5=document.createElement('tr')
const tH5=document.createElement('th')
tH5.innerHTML='Forms'
tR5.appendChild(tH5)
tablE.appendChild(tR5)
naV.appendChild(tablE)
const tD5=document.createElement('td')
const div51=document.createElement('div')
div51.setAttribute('class', 'tabl')

const input51=document.createElement('input')
input51.setAttribute('type', 'radio')
const label51=document.createElement('label')
label51.innerHTML='Genéral Elements'
div51.appendChild(label51)
div51.appendChild(input51)
tD5.appendChild(div51)
tR5.appendChild(tD5)

const div52=document.createElement('div')
const input52=document.createElement('input')
input52.setAttribute('type', 'radio')
const label52=document.createElement('label')
label52.innerHTML='Advanced Elements'
div52.appendChild(label52)
div52.appendChild(input52)
tD5.appendChild(div52)

const div53=document.createElement('div')
const input53=document.createElement('input')
input53.setAttribute('type', 'radio')
const label53=document.createElement('label')
label53.innerHTML='Editor'
div53.appendChild(label53)
div53.appendChild(input53)
tD5.appendChild(div53)

const div54=document.createElement('div')
const input54=document.createElement('input')
input54.setAttribute('type', 'radio')
const label54=document.createElement('label')
label54.innerHTML='Validation'
div54.appendChild(label54)
div54.appendChild(input54)
tD5.appendChild(div54)

////////////////////////////////////////////////////////////////////////////////////////////
const tR6=document.createElement('tr')
const tH6=document.createElement('th')
tH6.innerHTML='Tables'
tR6.appendChild(tH6)
tablE.appendChild(tR6)
naV.appendChild(tablE)
const tD6=document.createElement('td')
const div61=document.createElement('div')
div61.setAttribute('class', 'tabl')

const input61=document.createElement('input')
input61.setAttribute('type', 'radio')
const label61=document.createElement('label')
label61.innerHTML='Simple Tables'
div61.appendChild(label61)
div61.appendChild(input61)
tD6.appendChild(div61)
tR6.appendChild(tD6)

const div62=document.createElement('div')
const input62=document.createElement('input')
input62.setAttribute('type', 'radio')
const label62=document.createElement('label')
label62.innerHTML='DataTables'
div62.appendChild(label62)
div62.appendChild(input62)
tD6.appendChild(div62)

const div63=document.createElement('div')
const input63=document.createElement('input')
input63.setAttribute('type', 'radio')
const label63=document.createElement('label')
label63.innerHTML='jsGRID'
div63.appendChild(label63)
div63.appendChild(input63)
tD6.appendChild(div63)