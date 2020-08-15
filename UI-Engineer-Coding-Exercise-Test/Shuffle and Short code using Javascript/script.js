function sorting(){

var store =[1,2,3,4,5,6,7,8,9];
var count=0;

  for(var i=0; i<3; i++){
     for(var j=0;j<3;j++)
			{
			document.getElementById("sort").rows[i].cells[j].innerHTML=store[count];
			count++;
			}
		}
}


function shuffel(){
   var store = [];

   	var amountOfNumbers = 9;
	var useNumbers = {};
	for(var i=0; store.length<amountOfNumbers; i++){
        var rng = Math.floor((Math.random()*amountOfNumbers)+1);
        if(!useNumbers[rng]){
            store.push(rng);
	        useNumbers[rng] = true;
        }
    }
	var count=0;
	for(var i=0; i<3; i++){
     for(var j=0;j<3;j++)
			{
			document.getElementById("sort").rows[i].cells[j].innerHTML=store[count];
			count++;
			}
		}
		 
}
