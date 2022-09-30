var input = document.getElementById("calc");
var y = document.querySelector(".igual");


function as(valor){
  input.innerHTML += valor.innerHTML;

  var s = input.innerHTML;
  var r = valor.innerHTML;

  y.onclick = function(){
      var t = parseFloat(eval(input.innerHTML));
      input.innerHTML = t.toFixed(2);
  }


    switch(r){  
        case 'C':
            input.innerHTML = "";
        break;
    }

}
