const APIURL =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c357
31a5ee918f014970082a0088b1&page=1`
const IMGPATH = "https://image.tmdb.org/t/p/w1280"
const SEARCHAPI ='https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='



// const img=document.getElementById('img')

fetch('https://api.thecatapi.com/v1/images/search')
.then(res=> res.json())
.then(data =>image.src=data[0].url)



const main=document.getElementById('main')

const divMovie =document.createElement('div')
divMovie.setAttribute('class', 'movie')
const image =document.createElement('img')
image.setAttribute('src', '')
image.setAttribute('id', 'img')
const divMovieInfo =document.createElement('div')
divMovieInfo.setAttribute('class', 'movie-info')
const h3 =document.createElement('h3')
h3.innerText = 'Movie Title'
const span =document.createElement('span')
span.setAttribute('class', 'green')
span.innerText = '9.8'
const divOverview =document.createElement('div')
divOverview.setAttribute('class', 'overview')
divOverview.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem dolor quod laboriosam tenetur, minima obcaecati? Velit dolor architecto ipsam voluptatem'
const H3 =document.createElement('h3')
H3.innerText = 'overview'

divMovieInfo.appendChild(h3)
divMovieInfo.appendChild(span)
divOverview.appendChild(H3)
divMovie.appendChild(image)
divMovie.appendChild(divMovieInfo)
divMovie.appendChild(divOverview)
main.appendChild(divMovie)





