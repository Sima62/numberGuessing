'use strict';
/*
console.log(document.querySelector('.message'));*/

let num=Math.trunc(Math.random()*20)+1;
//again function
let score=20;
let x=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    if(!guess){
        document.querySelector('.message').textContent='No number !';
    }
    else if(guess==num){
        if(score>x){
            x=score;
            document.querySelector('.highscore').textContent=x;
        }
        document.querySelector('.message').textContent='wooohooo Correct Number !';
        document.querySelector('.number').textContent=num;
        document.querySelector('body').style.backgroundColor='#90EE90';
        document.querySelector('number').style.width='30px';
        
    }
    else if(guess>num){
        if(score>1) {
            document.querySelector('.message').textContent='To High !';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lost the game !';
            document.querySelector('.score').textContent=0;
        }

    }
    else if(guess<num){
        if(score>1) {
            document.querySelector('.message').textContent='To low !';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lost the game !';
            document.querySelector('.score').textContent=0;
        }
    }
});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    num=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start Guessing.......';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#ADD8E6';
    document.querySelector('number').style.width='15rem';
    
    
    
});