let deviceWidth = window.innerWidth;
let one = document.querySelector(".one");
let two = document.querySelector('.two');
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let row1 = document.querySelector('.row1');
let row2 = document.querySelector('.row2');


function flip(cardNum)
{
   
    if(cardNum == 1)
    {
        
        row1.innerHTML = '<div class="card1Back" onclick="unflip(1)"> <div class="figures">FIGURES</div> <div class="won">WON : <button class="btnWon">0</button></div> <div class="lost">LOST : <button class="btnLost">0</button></div> <div class="abandoned"><button class="btnAbandoned" onclick="resetWL()" >Reset Score</button></div> </div>';
 
        row1.classList.add('flipDivOne');
        row1.classList.remove('unflipDivOne');

        let won = document.querySelector('.btnWon');
        won.innerHTML = localStorage.getItem('winCount');

        let lose = document.querySelector('.btnLost');
        lose.innerHTML = localStorage.getItem('loseCount');

    }

    else if(cardNum == 3)
    {

        row2.innerHTML = "";
        row2.innerHTML = '<div class="card3Back" onclick="unflip(3)"> <p class="card3L0"> INSTRUCTIONS </p> <p class="card3L1"> • Use PC or Laptop for better experience.</p><p class="card3L2"> • Flip is a timed card memory game. Click the blue cards to see what symbol they uncover and try to find matching symbol underneath the other cards. </p> <p class="card3L3"> • Uncover two matching symbols  at once to eliminate them from the game.</p> <p class="card3L4"> • Eliminate all cards as fast as you can to win the game.Have fun FLIPing!!</p> </div>';

        row2.classList.add('flipDivThree');
        row2.classList.remove('unflipDivThree');


    }

    else if(cardNum == 4)
    {
        let card4 = document.querySelector('.four');

        card4.innerHTML = "";
        card4.innerHTML = '<div class="card4Back"> <div class="easy" onclick = "redirect(1)">EASY</div> <div class="med" onclick = "redirect(2)" >MEDIUM</div> <div class="hard" onclick = "redirect(3)">HARD</div> </div>';

        card4.setAttribute("onclick","unflip(4)");

        card4.classList.add('flipDivFour');
        card4.classList.remove('unflipDivFour');
    }
}

function unflip(cardNum)
{

    if(cardNum == 1)
    {

        let row1 = document.querySelector('.row1');

        row1.innerHTML = '<div class="one" onclick="flip(1)"><p class="innerP1">F</p> <p class="innerSecondP1">FIGURES</p> </div> <div class="two"><p class="innerP2">L</p></div>'

        row1.classList.remove('flipDivOne');
        row1.classList.add('unflipDivOne');

    }
    
    else if(cardNum == 3)
    {

        row2.innerHTML = '<div class="three" onclick="flip(3)"><p class="innerP3">I</p><p class="innerSecondP3">INSTRUCTIONS</p></div> <div class="four" onclick = "flip(4)" > <p class="innerP4">P</p><p class="innerSecondP4">PLAY NOW</p></div>'

        row2.classList.remove('flipDivThree');
        row2.classList.add('unflipDivThree');

    }

}

function redirect(mode)
{
    if(mode == 1)
    {
        let card4 = document.querySelector('.four');

        card4.innerHTML = "";
        card4.innerHTML = '<p class="innerP4">P</p> <p class="innerSecondP4">PLAY NOW</p>';

        card4.classList.remove('flipDivFour');
        card4.classList.add('unflipDivFour');

        card4.setAttribute("onclick","flip("+4+")");

        window.location.href = "./Easy.html";
         
    }

    if(mode == 2)
    {
        let card4 = document.querySelector('.four');

        card4.innerHTML = "";
        card4.innerHTML = '<p class="innerP4">P</p> <p class="innerSecondP4">PLAY NOW</p>';

        card4.classList.remove('flipDivFour');
        card4.classList.add('unflipDivFour');

        card4.setAttribute("onclick","flip("+4+")");

        window.location.href = "./Med.html";
         
    }

    if(mode == 3)
    {
        let card4 = document.querySelector('.four');

        card4.innerHTML = "";
        card4.innerHTML = '<p class="innerP4">P</p> <p class="innerSecondP4">PLAY NOW</p>';

        card4.classList.remove('flipDivFour');
        card4.classList.add('unflipDivFour');

        card4.setAttribute("onclick","flip("+4+")");

        window.location.href = "./Hard.html";
         
    }
}

function resetWL(){   
    if(deviceWidth <= 768){
        

        if(localStorage.getItem('loseCount')){
            localStorage.setItem('loseCount',0)
        }
        else{
            localStorage.setItem('loseCount',0);
        }
    
        if(localStorage.getItem('winCount')){
            localStorage.setItem('winCount',0)
        }
        else{
            localStorage.setItem('winCount',0);
        }

    }
    else{

        Swal.fire({
            title: "Are you sure?",
            text: "That want to reset the score!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, reset it!"
          }).then((result) => {
            if (result.isConfirmed) {
    
                if(localStorage.getItem('loseCount')){
                    localStorage.setItem('loseCount',0)
                }
                else{
                    localStorage.setItem('loseCount',0);
                }
            
                if(localStorage.getItem('winCount')){
                    localStorage.setItem('winCount',0)
                }
                else{
                    localStorage.setItem('winCount',0);
                }
    
                Swal.fire({
                    title: "Updated!",
                    text: "Your Score has been Updated.",
                    icon: "success"
                  });
        
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Select all divs with classes easy, med, and hard
    const divs = document.querySelectorAll(".easy, .med, .hard");

    // Add event listeners to each selected div
    divs.forEach(div => {
        div.addEventListener("touchstart", function() {
            div.classList.add("touch-active");
        });

        div.addEventListener("touchend", function() {
            div.classList.remove("touch-active");
        });

        // Optionally handle touchcancel to remove the class if the touch is canceled
        div.addEventListener("touchcancel", function() {
            div.classList.remove("touch-active");
        });
    });
});
