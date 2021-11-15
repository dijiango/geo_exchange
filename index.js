fetch('https://api.vatcomply.com/rates?base=USD')
.then(response => response.json())
.then(data => console.log(data))


console.log("Let's do this")

// ####### This is the nav bar #######

const newNavbar = document.createElement("nav");
const homeLink = document.createElement("a");
const githLink = document.createElement("a");
const twitLink = document.createElement("a");
const instaLink = document.createElement("a");


newNavbar.className = "navbar";

homeLink.href = "./index.html";
homeLink.innerText = "Home";

githLink.href = "https://github.com/Mumrawsingh";
githLink.innerText = "Github";
githLink.target = "_blank";

twitLink.href = "https://twitter.com/iLikeItLikeMatt";
twitLink.innerText = "Twitter";
twitLink.target = "_blank";

instaLink.href = "https://www.instagram.com/el_shiloh_/?hl=en";
instaLink.innerText = "My Puppy";
instaLink.target = "_blank";

    if (document.title === "Planet Matt | Home") {
        newNavbar.append(projectLink)
}   else {
        newNavbar.append(homeLink)
}

document.body.querySelector(".container").prepend(newNavbar)
newNavbar.append(githLink)
newNavbar.append(twitLink)
newNavbar.append(instaLink)

// ####### This is the nav bar #######