const user = prompt("Ваше ім'я", 'User');

const nameUser = document.getElementById('name');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');


const arrayImg = ["images/Apple.jpg","images/Pear.jpg",
                    "images/Cherry.jpg","images/Lemon.jpg",
                    "images/Peach.jpg"];

const cols = [item1, item2, item3];
nameUser.innerHTML = user;

const btn = document.querySelector('#btn');
let div = [[],[],[]];
function createDiv(){
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
        div[i][j] = document.createElement("div");
        div[i][j].classList.add('image');
        cols[j].appendChild(div[i][j]);
        }
    }
}
createDiv();
let item;
let memory=[[],[],[]];
function randomImg(){
    for (let i = 0; i < 3; i++){
        let arr = [...arrayImg];
        for (let j = 0; j < 3; j++){
            n = Math.floor(Math.random() * arr.length);
            item = arr.splice(n, 1)[0];
            div[j][i].style.backgroundImage = `url(${item})`;
            div[j][i].style.backgroundSize="100%";
            memory[i][j] = item;
        }
    }
}

let i=0;
btn.onclick = function(){
    if(i<3){
        randomImg();
        i++;
    }else{
        Winner();
    }
};


function Winner(){
    for (let i = 0; i < 3; i++) {
        if (memory[0][i] === memory[1][i] && memory[1][i] === memory[2][i]) {
            alert(`Вітаємо, ${nameUser.value}! Ви перемогли в рядку ${i + 1}!`);
            Reset();
            return;
    }
    }
    Reset();
    alert("Спробуйте іншим разом");
};

function Reset(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            div[i][j].style.backgroundImage = '';
            memory[i][j] = null;
        }
    }
    i = 0;
};