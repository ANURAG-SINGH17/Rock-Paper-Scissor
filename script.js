
let userscore = 0;
let compscore = 0;

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");

const youscoree = document.querySelector("#user-s");
const compscoree = document.querySelector("#com-s");


choises.forEach((choise)=>{
choise.addEventListener("click", () => {
    const choiseid = choise.getAttribute("id");
    playgame(choiseid); 
})
});

const playgame = (choiseid) => {
   console.log("user choise = ",choiseid);
   const compchos = getcompchoise();
   console.log("computer choise = ",compchos);

   if (choiseid === compchos) {
    drawgame();
   }
    let userWin = true;
    if (choiseid === "rock"){
        userWin = compchos === "paper" ? false : true;
       }
       else if (choiseid === "paper"){
        userWin = compchos === "scissor" ? false : true;
       }
       else{
        userWin = compchos === "rock" ? false : true;
       }
 
    showwinner(userWin);
};

let showwinner = (userWin) => {
    if (userWin){
        userscore++;
        youscoree.innerText = userscore;
        msg.innerText = "You Won";
        
    }else {
        compscore++;
        compscoree.innerText = compscore
        console.log("You Lose");
        msg.innerText = "You Lose";
    }
};

const drawgame = () => {
    msg.innerText = "Game was Draw";
};

const getcompchoise = () => {
    const comopt = ["rock" , "paper" , "scissor"];
    const randinx = Math.floor(Math.random() * 3);
    return comopt[randinx];
};