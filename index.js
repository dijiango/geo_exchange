const globe = document.querySelector('#current-globe');
const leftBtn = document.getElementById('left-turn');
const rightBtn = document.getElementById('right-turn');
const goHome = document.getElementById('return-home');

//image src tag
let imgNum = 1;
const baseImg = "earth-images/" + imgNum + ".jpg";
globe.src = baseImg; 

function rotateLeft() {
    if (imgNum === 1) {
        imgNum = 15;
    }
    else {
        --imgNum;
    }
    globe.src = "earth-images/" + imgNum + ".jpg";
    console.log("New image ->", globe.src);
};

function rotateRight() {
    if (imgNum === 15) {
        imgNum = 1;
        
    }
    else {
        ++imgNum;
    }
    globe.src = "earth-images/" + imgNum + ".jpg";
}

leftBtn.addEventListener("click", rotateLeft);

rightBtn.addEventListener("click", rotateRight);

goHome.addEventListener("click", () => {
    imgNum = 1;
    globe.src = "earth-images/" + imgNum + ".jpg";
});