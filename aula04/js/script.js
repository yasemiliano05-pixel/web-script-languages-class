/*

for(var inicial;condição;incremento/decremento){
set de instruções;
}

for(i=0;i<=10;i++){
console.log(i);
}


for (i=9;i>=0;i=i-2){ // i=i-2 => i-=2
console.log(i);

}
*/

res = document.getElementById("result"); //string é caraterizada pela aspas.
x = "";
for(i=0;i<=10;i++){
       // x = x + i;
  x += "<br>" + i; // -> para dar espaço entre os numeros

  //  document.writeln(i);  //serve para mostrar o resultado na tela do html
    }
    
   // res.innerText = x;  -> innerText permite permite a insrção somente de textos dentro de um elemento.

    res.innerHTML = x; // permite a inserção de tags HTML