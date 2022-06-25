let allMoviesByWord = document.getElementById("allMovies")
let apiMovies = [];



async function trendingMoves() {
    let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);

    apiMovies = await response.json();

    console.log(apiMovies.results);
    
    display(apiMovies.results);
}


// async function search() {
//     let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fedb2e6d7633d3698e236eecc75da7ca&query=Jack+Reacher`);

//     searchMove = await response.json();

//     console.log(searchMove);
    
//     // display(searchMove.results);
// }


    
//     for (var i = 0;t < allMovies.length; i++){
// userName.addEventListener("keyup", userNameValid(){
//     let term = allMoviesByWord.value;
//     let searchResult = [];
//     if (searchMove.results[i].title.toUpperCase().includes(term.toUpperCase()) == true) {
//         searchResult.push(searchMove.results[i]);
// });

        
//     }
//     console.log(searchResult);
// };


// function getMoviesByWord() {
//     let term = allMoviesByWord.value;
//     let searchResult = [];


//     for ( let i = 0 ; i < searchMove.results.length ; i++ ) {
//         if (searchMove.results[i].title.toUpperCase().includes(term.toUpperCase()) == true) {
//             searchResult.push(searchMove.results[i]);
//         }
//         else {
//             console.log("mafeesh");
//         }
//     }


//     console.log(searchResult);

    // display(searchResult);

// }

// getMoviesByWord();
// allMoviesByWord.onkeyup = function () {
//     getMoviesByWord(allMoviesByWord.value)
// };

(async function () {
    await trendingMoves()
    // await search()
})();


function display(list) {
    let box = ``;

    for (var i = 0; i < list.length; i++) {

        box += `
        <div class=" demo col-sm-4 shadow position-relative g-4 overflow-hidden ">

        <img src="https://image.tmdb.org/t/p/original/${list[i].poster_path}" alt="" class=" w-100 rounded">


        <div id="demo2" class=" over_demo text-center pt-5  rounded ">

        <div class=" d-flex flex-column py-5 ">

            <h2 class=" pt-5">${list[i].original_title}</h2>
            <p>${list[i].overview}</p>
            <p>rate: ${list[i].vote_average}</p>
            <p>${list[i].release_date}</p>

        </div>

    </div>
        </div>`;
    }
    document.getElementById('demo1').innerHTML = box;
};




let userName = document.getElementById("name");
let userNameAlert = document.getElementById("namealert");

let userEmail = document.getElementById("email");
let userEmailAlert = document.getElementById("emailalert");

let userPhone = document.getElementById("phone");
let userPhoneAlert = document.getElementById("phonealert");

let userAge = document.getElementById("age");
let userAgeAlert = document.getElementById("agealert");

let userPassword = document.getElementById("password");
let userpasswordAlert = document.getElementById("passwordalert");

let userRePassword = document.getElementById("rePassword");
let userRepasswordAlert = document.getElementById("repasswordalert");


function userNameValid() {
    let userValid = /^[a-zA-Z0-9]+$/;

    if (userValid.test(userName.value) == true) {
        (userNameAlert.style.display = "none", !0);
    }
    else {
        (userNameAlert.style.display = "block", !1);
    }
}

function userEmailValid() {
    let userValid1 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (userValid1.test(userEmail.value) == true) {
        (userEmailAlert.style.display = "none", !0);
    }
    else {
        (userEmailAlert.style.display = "block", !1);
    }
}


function userPhoneValid() {
    let userValid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (userValid.test(userPhone.value) == true) {
        (userPhoneAlert.style.display = "none");
    }
    else {
        (userPhoneAlert.style.display = "block");
    }
}


function userAgeValid() {
    let userValid = /^[1-9][0-9]?$|^100$/;

    if (userValid.test(userAge.value) == true) {
        (userAgeAlert.style.display = "none");
    }
    else {
        (userAgeAlert.style.display = "block");
    }
}


function userPasswordValid() {
    let userValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (userValid.test(userPassword.value) == true) {
        (userpasswordAlert.style.display = "none");
    }
    else {
        (userpasswordAlert.style.display = "block");
    }
}


function userRePasswordValid() {


    if (userPassword.value == userRePassword.value) {
        userRepasswordAlert.style.display = "none";
    }
    else {
        userRepasswordAlert.style.display = "block";
    }
}


userName.addEventListener("keyup", userNameValid);
userEmail.addEventListener("keyup", userEmailValid);
userPhone.addEventListener("keyup", userPhoneValid);
userAge.addEventListener("keyup", userAgeValid);
userPassword.addEventListener("keyup", userPasswordValid);
userRePassword.addEventListener("keyup", userRePasswordValid);


// $(".strip-toggel-menu").click(function () {
//     $(".nav-tab-menu").addClass("open-menu").removeClass("close-menu");

// })


// $("boody,html").click(function () {
// // $("#menu").addClass(".open-menu").removeClass(".close-menu")
// console.log("hello");
// });


var nvWidth = 0, isTrue = !0;
$(".strip-toggel-menu").click(function () {
    isTrue ? ($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"),
        nvWidth = $(".nav-tab-menu").width() - 10,
        $(".strip-header-nav").css("left", nvWidth),
        $(".fdsgh").addClass("fa-times").removeClass("fa-align-justify"),
        $(".nav-tab-menu .item1").animate({ opacity: "1", paddingTop: "25px" }, 1100),
        $(".nav-tab-menu .item2").animate({ opacity: "1", paddingTop: "25px" }, 1200),
        $(".nav-tab-menu .item3").animate({ opacity: "1", paddingTop: "25px" }, 1300),
        $(".nav-tab-menu .item4").animate({ opacity: "1", paddingTop: "25px" }, 1400),
        $(".nav-tab-menu .item5").animate({ opacity: "1", paddingTop: "25px" }, 1500),
        $(".nav-tab-menu .item6").animate({ opacity: "1", paddingTop: "25px" }, 1600),

        isTrue = !isTrue) : ($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"),

            $(".fa-align-justify").toggleClass("fa-times"),
            $(".strip-header-nav").css("left", 0),
            $(".nav-tab-menu li").animate({ opacity: "0", paddingTop: "500px" }, 500), isTrue = !isTrue)
});

let allData, allMovies, isSearchTrue = !0;

$(".strip-search").click(function () {
    isSearchTrue ? ($(".search").addClass("open-menu").removeClass("close-search"),
        $(".fa-search").toggleClass("fa-times"),
        $(".search-input").animate({ top: "49%" }, 1500, function () {
            $(".search-input").animate({ top: "50%" }, 250)
        }),
        isSearchTrue = !isSearchTrue) : ($(".search").addClass("close-search").removeClass("open-menu"),
            $(".fa-search").toggleClass("fa-times"),
            $(".search-input").animate({ top: "300%" }), isSearchTrue = !isSearchTrue)
});

let row = document.getElementById("rowData"),
    categorylinks = document.getElementsByClassName("nav-category"),
    result = document.getElementById("res"),
    
    trendingURL = "https://api.themoviedb.org/3/trending/all/day?api_key=fedb2e6d7633d3698e236eecc75da7ca",
    latestURL = "https://api.themoviedb.org/3/movie/latest?api_key=fedb2e6d7633d3698e236eecc75da7ca&language=en-US",
    popularURL = "https://api.themoviedb.org/3/person/popular?api_key=fedb2e6d7633d3698e236eecc75da7ca&language=en-US&page=1",
    topratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=fedb2e6d7633d3698e236eecc75da7ca&language=en-US&page=1",
    upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=fedb2e6d7633d3698e236eecc75da7ca&language=en-US&page=1",
    NowURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=fedb2e6d7633d3698e236eecc75da7ca&language=en-US&page=1",
    URL = "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    category = "",

    search_bar = document.getElementById("word");

   

getMovies();

for (var i = 0; i < categorylinks.length; i++)
    categorylinks[i].addEventListener("click", function (e) {
    "Now playing" == (category = e.target.innerHTML) && (URL = NowURL, getMovies()),
    "Popular" == category ? (URL = popularURL, getMovies())
     : "Top Rated" == category ? (URL = topratedURL,getMovies())
     : "Latest" == category ? (URL = latestURL, getMovies()) : "Trending" == category ? (URL = trendingURL,
    getMovies()) : "Upcoming" == category && (URL = upcomingURL,
    getMovies())
    });

function getMovies() {
    var e = new XMLHttpRequest;
    e.open("get", URL),
        e.send(),
        e.onreadystatechange = function () {
            4 == e.readyState && 200 == e.status ? (apiMovies.results,
                display(categorylinks[i])) : console.log("error")
        }
}