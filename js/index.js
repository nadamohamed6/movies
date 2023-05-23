//API KEY:

// e7b3cbea8f8403b08ee024fdabb70258





// API :

//search:
// 
// https://api.themoviedb.org/3/search/company?api_key=e7b3cbea8f8403b08ee024fdabb70258&query=

// Top rated movies:
// https://api.themoviedb.org/3/movie/top_rated?api_key=e7b3cbea8f8403b08ee024fdabb70258


// Upcoming movies:
// https://api.themoviedb.org/3/movie/upcoming?api_key=e7b3cbea8f8403b08ee024fdabb70258

// Now playing movies:
// https://api.themoviedb.org/3/movie/now_playing?api_key=e7b3cbea8f8403b08ee024fdabb70258

// Popular movies:
// https://api.themoviedb.org/3/movie/popular?api_key=e7b3cbea8f8403b08ee024fdabb70258
// 
// trending:
// https://api.themoviedb.org/3/trending/all/day?api_key=e7b3cbea8f8403b08ee024fdabb70258




let closeIcon = document.querySelector("#mainIcon")
let searchBar = document.querySelector("#word")
let nameInput = document.querySelector("#name")
let emailInput = document.querySelector("#email")
let phoneInput = document.querySelector("#phone")
let ageInput = document.querySelector("#age")
let passwordInput = document.querySelector("#password")
let repasswordInput = document.querySelector("#repassword")

let notvalidName = document.querySelector("#notvalidName")
let notvalidEmail = document.querySelector("#notvalidEmail")
let notvalidPhone = document.querySelector("#notvalidPhone")
let notvalidAge = document.querySelector("#notvalidAge")
let notvalidPassword = document.querySelector("#notvalidPassword")
let notvalidRePassword = document.querySelector("#notvalidRePassword")
let submit = document.querySelector("#submit")




let movies;
let moviesRes = [];
let moviesFinalRes = [];
let query = "";

// async function NowPlaying(){
//     movies= await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=e7b3cbea8f8403b08ee024fdabb70258")
//     moviesRes = await movies.json()
//     moviesFinalRes = moviesRes.results
// //    console.log(moviesFinalRes);
// //    console.log(moviesFinalRes[0].release_date);
//    display(moviesFinalRes)
// }

// NowPlaying()

let yourOption = "now_playing"

async function NowPlaying() {


    movies = await fetch(`https://api.themoviedb.org/3/movie/${yourOption}?api_key=e7b3cbea8f8403b08ee024fdabb70258`)
    moviesRes = await movies.json()
    moviesFinalRes = moviesRes.results
    //    console.log(moviesFinalRes[0].release_date);
    display()

    console.log(moviesFinalRes);

}

NowPlaying()


$("#NowPlaying").click(function () {



    yourOption = "now_playing"
    NowPlaying()
    console.log("hi from NowPlaying");
    console.log(moviesFinalRes);


})



$("#Popular").click(function () {

    yourOption = "popular"
    NowPlaying()

    console.log("hi from popular");

})


$("#TopRated").click(function () {


    yourOption = "top_rated"
    NowPlaying()
    console.log("hi from TopRated");
})


$("#Upcoming").click(function () {

    yourOption = "upcoming"
    NowPlaying()
    console.log("hi from Upcoming");

})


$("#Trending").click(function () {
    async function Trending() {
        movies = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=e7b3cbea8f8403b08ee024fdabb70258")
        moviesRes = await movies.json()
        moviesFinalRes = moviesRes.results
        console.log("hi from trending");
        console.log(moviesFinalRes);
        display()

    }


    Trending()

})



function display() {
    let cartona = ``;

    for (let i = 0; i < moviesFinalRes.length; i++) {


        cartona += `<div class="col-md-4 movie p-1 pt-4">
        <div class="imgBox">
        <img  class="w-100 rounded " src="https://image.tmdb.org/t/p/w500${moviesFinalRes[i].poster_path}"">
    
        <div class="captionbox d-flex align-items-center">
            <div class="caption">
        <h2 >${moviesFinalRes[i].title}</h2>
        <p>${moviesFinalRes[i].overview}</p>
        <p>rate: ${moviesFinalRes[i].vote_average}</p>
        <p>${moviesFinalRes[i].release_date}</p>
        </div>
        </div>
        </div>
    
        
    </div>`
    }

    document.getElementById("movie").innerHTML = cartona;
}

let sideBarPosition = $("#sideBar .side-bar-content").innerWidth();
$("#sideBar").animate({ left: -sideBarPosition }, 1000)



$("#sideBar .nav-bar .main-icon i ").click(function () {

    if ($("#sideBar").css("left") == "0px") {
        closeIcon.classList.replace("fa-xmark", "fa-bars")
        $("#sideBar").animate({ left: -sideBarPosition }, 500)

    } else {
        closeIcon.classList.replace("fa-bars", "fa-xmark")

        $("#sideBar").animate({ left: "0px" }, 500)

    }

})



searchBar.addEventListener("keyup", function () {
    async function search() {
        movies = await fetch(` https://api.themoviedb.org/3/search/movie?api_key=e7b3cbea8f8403b08ee024fdabb70258&query=${query}`)
        moviesRes = await movies.json()
        moviesFinalRes = moviesRes.results
        query = searchBar.value
        display()



    }

    search()

})









    function validatenameInput() {
        $("#name").keyup(function () {
            var regex = /[a-zA-z]{1,10}/;
            if (regex.test(nameInput.value) == true) {
                console.log("valid name");
                notvalidName.classList.replace("d-block", "d-none")
                return true
    
    
            } else {
                notvalidName.classList.replace("d-none", "d-block")
    
                console.log("not valid name");
                return false
    
            }
        })
    
    }

    function validatemailInput() {
        $("#email").keyup(function () {
            var regex = /^[a-zA-Z]{1,20}@[a-z]{1,10}.com$/;
            if (regex.test(emailInput.value) == true) {
                console.log("valid email");
                notvalidEmail.classList.replace("d-block", "d-none")
    
                return true
    
    
            } else {
                notvalidEmail.classList.replace("d-none", "d-block")
                console.log("not valid email");
                return false
    
            }
        })
    
    }

    function validatphoneInput() {
        $("#phone").keyup(function () {
            var regex = /^[0-9]{10,12}$/;
            if (regex.test(phoneInput.value) == true) {
                console.log(phoneInput.value);
                console.log("valid phone");
                notvalidPhone.classList.replace("d-block", "d-none")
    
                return true
    
    
            } else {
                notvalidPhone.classList.replace("d-none", "d-block")
                console.log("not valid phone");
                return false
    
            }
        })
    
    }

    function validatageInput() {
        $("#age").keyup(function () {
            var regex = /^[1-9][1-9]|100$/;
            if (regex.test(ageInput.value) == true) {
                console.log(ageInput.value);
                console.log("valid age");
                notvalidAge.classList.replace("d-block", "d-none")
    
                return true
    
    
            } else {
                notvalidAge.classList.replace("d-none", "d-block")
                console.log("not valid age");
                return false
    
            }
        })
    
    }

    function validatpasswordInput() {
        $("#password").keyup(function () {
            var regex = /^[a-zA-Z0-9]{8}[a-zA-Z0-9]{1,5}$/;
            if (regex.test(passwordInput.value) == true) {
                console.log(passwordInput.value);
                console.log("valid password");
                notvalidPassword.classList.replace("d-block", "d-none")
    
                return true
    
    
            } else {
                notvalidPassword.classList.replace("d-none", "d-block")
                console.log("not valid password");
                return false
    
            }
        })
    
    }
    function validatrepasswordInput() {
        $("#repassword").keyup(function () {
            if (passwordInput.value == repasswordInput.value) {
                notvalidRePassword.classList.replace("d-block", "d-none")
                console.log("valid repassword");
    
                return true;
    
            } else {
                console.log("not valid repassword");
                notvalidRePassword.classList.replace("d-none", "d-block")
                return false
            }
    
    
        })
    }

// validatageInput()
// validatemailInput()
// validatenameInput()
// validatpasswordInput()
// validatphoneInput()
// validatrepasswordInput()

    if ((validatenameInput()&& validatageInput()&& validatemailInput() && validatpasswordInput() &&
     validatphoneInput()&& validatrepasswordInput()== true) ){
        submit.classList.replace("disabled","enable")
        // submit.classList.replace("enable","disabled")


        console.log("valid");
    
    
    }else{
        // submit.classList.replace("disabled","enable")
        submit.classList.replace("enable","disabled")

        console.log("notvaliiiiid");
    }



