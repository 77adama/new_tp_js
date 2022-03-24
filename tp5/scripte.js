const APIURL =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c357
31a5ee918f014970082a0088b1&page=1`
const IMGPATH = "https://image.tmdb.org/t/p/w1280"
const SEARCHAPI ='https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='
 

const form =  document.getElementById('form');
const search = document.getElementById('search');

// const img=document.getElementById('img')

// fetch('https://api.thecatapi.com/v1/images/search')
// .then(res=> res.json())
// .then(data =>img.src=data[0].url)


 





 const main=document.getElementById('main')
function Affiche(images,titre,note,description ) {
    
const divMovie =document.createElement('div')
divMovie.setAttribute('class', 'movie')
const image =document.createElement('img')
image.setAttribute('src', images)
image.setAttribute('id', 'img')
const divMovieInfo =document.createElement('div')
divMovieInfo.setAttribute('class', 'movie-info')
const h3 =document.createElement('h3')
h3.innerText = titre
const span =document.createElement('span')
span.setAttribute('class', 'green')
span.innerText = note
const divOverview =document.createElement('div')
divOverview.setAttribute('class', 'overview')
const H3 =document.createElement('h3')
H3.innerText = 'overview'
const p =document.createElement('p')
p.innerText = description


divMovieInfo.appendChild(h3)
divMovieInfo.appendChild(span)
divOverview.appendChild(H3)
divOverview.appendChild(p)
divMovie.appendChild(image)
divMovie.appendChild(divMovieInfo)
divMovie.appendChild(divOverview)
main.appendChild(divMovie) 
}



fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
.then(function (donne) {
    json=donne.json()
    return json
    
})
.then(function (json) {
    result=json.results
    console.log(result);
   return result
})
.then(function (data) {
   data.forEach(element => {
      photo=IMGPATH+element.backdrop_path
      note=element.vote_average
      description=element.overview
    titre=   element.title
    Affiche(photo,titre,note,description )
       
   });
    
})

search.addEventListener('input', () => {
   main.innerHTML=''
   const searchFilm = search.value;
 
   fetch(SEARCHAPI+searchFilm)
.then(function (donne) {
    json=donne.json()
    return json
    
})
.then(function (json) {
    result=json.results
    console.log(result);
   return result
})
.then(function (data) {
   data.forEach(element => {
      photo=IMGPATH+element.backdrop_path
      note=element.vote_average
      description=element.overview
    titre=   element.title
    Affiche(photo,titre,note,description )
       
   });
    
})

 
   console.log(searchFilm)

})


