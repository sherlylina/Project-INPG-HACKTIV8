let drag1, drag2, scores, activePlayer, gamePlaying,result, resultEnd, finalEnd, sound;


sound = document.getElementById('funSong')

function playAudio() { 
  sound.play(); 
} 

function pauseAudio() { 
  sound.pause(); 
}


function deklarisasi(){
  scores = [0, 0];
  gamePlaying = true;
  activePlayer = 0;
  playAudio();
  document.getElementById('time').innerHTML = "30";
  timeUp = "-";
  document.getElementById('ques-1').style.display = "none";
  document.getElementById('ques-2').style.display = "none";
  document.getElementById('ques-3').style.display = "none";
  document.getElementById('ans-1').style.display = "none";
  document.getElementById('ans-2').style.display = "none";
  document.getElementById('result').style.display = "none";
  document.getElementById('box-1').style.display = "block"
  document.getElementById('box-2').style.display = "block"
  document.getElementById('box-3').style.display = "block"
  document.getElementById('box-4').style.display = "block"

  document.getElementById('score-0').innerHTML = "0";
  document.getElementById('score-1').innerHTML = "0";

  document.getElementById('name-0').innerHTML = "player 1";
  document.getElementById('name-1').innerHTML = "player 2";
  

  document.getElementById('result').value = "0";
  document.getElementById('final-score').value = "0";
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');

}

deklarisasi()

document.querySelector('.btn-new').addEventListener('click',deklarisasi);

document.querySelector('.btn-roll').addEventListener('click',function(){

   if(gamePlaying){
     update = setInterval("timeDeal()",1000);
     timeUp = 30;
     playAudio();
     let x = 20;
     let o = -20;
     let a = Math.floor(Math.random() * x) -5
     let b = Math.floor(Math.random() * o) +10
     let c = Math.floor(Math.random() * x) -5
     document.getElementsByClassName("ques")[0].innerHTML = a;
     document.getElementsByClassName("ques")[1].innerHTML = b;
     document.getElementsByClassName("ques")[2].innerHTML = c;
     result = Math.max(a+b+c, a-b-c, a+b*c, a*b+c, a-b*c, a*b-c, a*b*c, a/b+c, a+b/c, a/b-c, a-b/c, a*b/c, a/b*c, a/b/c);
     let operator = [['+','+'],['-','-'],['+','x'],
                     ['x','+'],['-','x'],['x','-'],
                     ['x','x']
                    ];
    let tile = document.getElementsByClassName('ans')
    let temp1 = ''
    let temp2 = ''
    for(i= 0 ; i < operator.length ; i++){
        if(operator[i] == '+','+'){
           let hitung = a+b+c
           if(hitung == result){
           temp1 = '+'
           temp2 = '+'
          }
        }
        if(operator[i] == '-','-'){
           let hitung = a-b-c
           if(hitung == result){
           temp1 = '-'
           temp2 = '-'
          }
        }    
        if(operator[i] == '+','x'){
           let hitung = a+b*c
           if(hitung == result){
           temp1 = '+'
           temp2 = 'x'
          }
        }
        if(operator[i] == 'x','+'){
           let hitung = a*b+c
           if(hitung == result){
           temp1 = 'x'
           temp2 = '+'
         }
       }
       if(operator[i] == '-','x'){
          let hitung = a-b*c
          if(hitung == result){
          temp1 = '-'
          temp2 = 'x'
         }
       }
       if(operator[i] == 'x','-'){
           let hitung = a*b-c
          if(hitung == result){
          temp1 = 'x'
          temp2 = '-'
         }     
       }
       if(operator[i] == 'x','x'){
          let hitung = a*b*c
          if(hitung == result){
          temp1 = 'x'
          temp2 = 'x'
         }
       }
    }
   tile[0].setAttribute("title", temp1);
   tile[1].setAttribute("title", temp2);
   document.getElementById('ques-1').style.display = "block";
   document.getElementById('ques-2').style.display = "block";
   document.getElementById('ques-3').style.display = "block";
   document.getElementById('ans-1').style.display = "block";
   document.getElementById('ans-2').style.display = "block";

   document.getElementById('box-1').innerHTML = "+";
   document.getElementById('box-2').innerHTML = "x";
   document.getElementById('box-3').innerHTML = ":";
   document.getElementById('box-4').innerHTML = "-";
  

  $(".dragable").draggable({
    revert: true
  })

  
  $(".dropable").droppable({
    drop: function( event , ui){
      let nilaiBenar = document.getElementsByClassName("ans")[0].title
      let kotakYangDibawa = ui.draggable.text();

      if(kotakYangDibawa == nilaiBenar){
         
         $(this).removeClass("error"); 
         drag1 = true;
      
         $(this).text(nilaiBenar);
      } else{
          window.clearInterval(update);
          timeUp = "-";
          $(this).addClass('error') 
          nextPlayer(); 
      }
    }
  })
  
  
  $(".dropable2").droppable({
    drop: function( event , ui){
      let nilaiBenar = document.getElementsByClassName("ans")[1].title
      let kotakYangDibawa = ui.draggable.text();

      if(kotakYangDibawa == nilaiBenar){
         drag2 = true;
         $(this).removeClass("error");
         $(this).text(nilaiBenar);
      } else{
          window.clearInterval(update);
          timeUp = "-";
          $(this).addClass('error');
          nextPlayer();
      }
     }
   })
 }
});


function timeDeal(){
  timeUp = timeUp-1;
  if(timeUp < 30){
    document.getElementById('time').innerHTML = timeUp;
  }
  if(timeUp < 1){
    window.clearInterval(update);
    nextPlayer();
  }
}



function nextPlayer(){
   document.getElementById('time').innerHTML = '30'

    if(activePlayer == 0){
        activePlayer = 1
    }else{
       activePlayer = 0
    }
    document.getElementById('box-1').style.display = "block"
    document.getElementById('box-2').style.display = "block"
    document.getElementById('box-3').style.display = "block"
    document.getElementById('box-4').style.display = "block"
     
    document.getElementById('result').style.display = "none"
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
   
    document.getElementById('ques-1').style.display = "none";
    document.getElementById('ques-2').style.display = "none";
    document.getElementById('ques-3').style.display = "none";
    document.getElementById('ans-1').style.display = "none";
    document.getElementById('ans-2').style.display = "none";

    document.getElementById('ans-1').classList.remove('error')
    document.getElementById('ans-2').classList.remove('error')
    document.getElementById('ans-1').innerHTML = "..."
    document.getElementById('ans-2').innerHTML = "..."
  
}


document.querySelector('.btn-hold').addEventListener('click',function(){
   if(gamePlaying){
    if(drag1 && drag2){
     document.getElementById('box-1').style.display = "none"
     document.getElementById('box-2').style.display = "none"
     document.getElementById('box-3').style.display = "none"
     document.getElementById('box-4').style.display = "none"
     document.getElementById('result').style.display = "block"
    }
 }
})

  let input1 = document.getElementById('result')
   input1.addEventListener('input', (e) => {
       resultEnd = e.target.value 
   });

  
  let input2 = document.getElementById('final-score')
    input2.addEventListener('input', (e) => {
        finalEnd = e.target.value
   });

document.querySelector('.btn-check').addEventListener('click',function(){

   if(gamePlaying){
     if(drag1 && drag2){
       if(resultEnd == result){
          window.clearInterval(update);
          timeUp = "-";
          scores[activePlayer] += 1
           
          document.querySelector('#score-'+activePlayer).innerHTML= scores[activePlayer];
          document.getElementById('result').value = "0"
      
           if(scores[activePlayer] >= finalEnd){
             
           document.querySelector('#name-'+ activePlayer).innerHTML = 'Winner!';
           document.getElementById('ques-1').style.display = "none";
           document.getElementById('ques-2').style.display = "none";
           document.getElementById('ques-3').style.display = "none";
           document.getElementById('ans-1').style.display = "none";
           document.getElementById('ans-2').style.display = "none";
           document.getElementById('result').style.display = "none"

           document.getElementById('box-1').style.display = "block";
           document.getElementById('box-2').style.display = "block";
           document.getElementById('box-3').style.display = "block";
           document.getElementById('box-4').style.display = "block";
      
           document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
           document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
           
           pauseAudio();
           gamePlaying = false;
          }else{
           drag1 = false;
           drag2 = false;
           nextPlayer();
          }
        }
      else{
       drag1 = false;
       drag2 = false;
       window.clearInterval(update);
       timeUp = "-";
       document.getElementById('result').value = "0";
       document.getElementById('result').style.display = "none";
       nextPlayer();
       }
     }
   }
});