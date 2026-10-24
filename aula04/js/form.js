function tabuada(){
    valor = document.getElementById("txtValor");
    tabuadas = document.getElementById("tabuada");
    tab = ""; 

    if(valor.value == ""){ // aspas => campo vazio "" aspas
        alert("Campo obrigatório!")
        valor.focus();
       }
      
       else { 
        for(i=1;i<=10;i++){
            tab = tab + i + " * " + valor.value + " = " + (i*valor.value) + "<br>";
           } 
        }
     
       tabuadas.innerHTML = tab;
      valor.value = "";
      valor.focus();
      
      
    // document.getElementById("txtValor").value = "";
    // document.getElementById("txtValor").focus() = "";           
    // // focus() -> cursor piscando

    }
   