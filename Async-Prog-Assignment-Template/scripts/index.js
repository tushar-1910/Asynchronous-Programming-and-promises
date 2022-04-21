var movie = [
    {
        name: "Pushpa",
        release_Date: " 17 - 10 - 2021",
        img_src: "https://i.ytimg.com/vi/XBOVYPukO-0/maxresdefault.jpg",
        rating: 2,
    },
    {
        name: "Rabata",
        release_Date: " 9 - 5 - 2020",
        img_src: "https://igimages.gumlet.io/hindi/gallery/movies/raabta/raaabta_poster.jpg?w=160&dpr=2.6",
        rating: 3,

    },
    {
        name: "Jagga jasoos",
        release_Date: " 10 - 6 - 2020",
        img_src: "https://igimages.gumlet.io/hindi/gallery/movies/jaggajasoos/jagaajasoos_poster.jpg?w=160&dpr=2.6",
        rating: 4,
    },

    {
        name: "Radhe",
        release_Date: " 20 - 11 - 2006",
        img_src: "https://i.ytimg.com/vi/0ZbIJtd1b9M/maxresdefault.jpg",
        rating: 7,
    },

    {
        name: "Pathan",
        release_Date: " 20 - 12 - 2000",
        img_src: "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/09/Pathan-film.jpg?fit=1200%2C675&ssl=1",
        rating: 6,
    },
    {
        name: "KGF",
        release_Date: " 23 - 10 - 2018",
        img_src: "https://www.behindwoods.com/tamil-movies/kgf-tamil/images/kgf-tamil-review-banner.jpg",
        rating: 1,
    },
    {
        name: "RRR",
        release_Date: " 20 - 11 - 2021",
        img_src: "https://images.indianexpress.com/2022/01/RRR-final-release-date-1200.jpg",
        rating: 4,
    },
    {
        name: "Sataymev Jayte",
        release_Date: " 20 - 12 - 2021",
        img_src: "https://www.filmibeat.com/img/popcorn/movie_posters/satyameva-jayate-hin-20200423162158-258.jpg",
        rating: 4,
    },

    {
        name: "Farz",
        release_Date: " 20 - 1 - 1990",
        img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG74z9VU_Z9QDy8rThRMZ-fUBRxPEyYC96eg&usqp=CAU",
        rating: 10,
    },
]

localStorage.setItem('movies' , JSON.stringify(movie));
function display(movie) {
    movie.forEach(moviedata => {
        var box = document.createElement('div');
        box.setAttribute('class', "box");

        var img = document.createElement('img');
        img.src = moviedata.img_src;

        var name = document.createElement('h1');
        name.innerText = moviedata.name;

        var release_Date = document.createElement('p');
        release_Date.innerText = "Release Date: " + moviedata.release_Date;

        var rating = document.createElement('p');
        rating.innerText = "Rating: " + moviedata.rating;

        box.append(img, name, release_Date, rating);
        document.getElementById('movies').append(box);
    });
}

display(movie)

var a = 0;

var slideshow = setInterval(() => {
    if (a == 9) {
        a = 0;
    }
    var image = document.createElement('img');
    image.src = movie[a++].img_src;
    document.getElementById('slideshow').innerHTML="";
    document.getElementById('slideshow').append(image);
}, 3000)