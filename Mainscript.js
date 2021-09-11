var firstQ = document.getElementsByClassName('myH3')


/*function clickme2() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block" 
    }*/
function hidden (){

    var x =  document.getElementById('myDIV');
    x.classList.toggle('subdiv');
    }
function nothid() {
    var y =  document.getElementById('duckdiv');
    y.classList.toggle('subdiv2');}
    

    function nothid2() {
      var z =  document.getElementById('MYcat');
      z.classList.toggle('subdiv3');}
  
 
    
     
   
   


//firstQ[0].addEventListener('click',hidden,false)
for (var i = 0 ; i < firstQ.length; i++) {
    if (firstQ[i]===firstQ[0]){
    firstQ[0].addEventListener('click' , hidden , false ) ; 
 }
 else if(firstQ[i]===firstQ[1]){
  firstQ[1].addEventListener('click' , nothid , false ) ; 
 } else{
   firstQ[2].addEventListener('click',nothid2, false )
 }
 
 }