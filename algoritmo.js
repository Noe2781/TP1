const selectCantidad = document.querySelector("#cantidad");
const selectCantPermitida = document.querySelector("#cantidad-permitida");
const selectColores = document.querySelector("#select-colores");
const pParrafo = document.querySelector("#Leer-parrafos");
const pParrafo1 = document.querySelector("#Leer-parrafos1");
const pParrafoColores = document.querySelector("#Leer-colores");
const divImagenes = document.querySelector("#contenedor-imagenes");


const imagenes = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqAwUgV130FuvVB0Qq6PEiA3MPkCY_vawXWHkzaTOE0qVrjm3-WBBMgs5sBFh2CiNpCk&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHO1Nft5229i95idKSE_rO-mUGKdoEuGpOQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMRaxeHn-FC0LRPYkI2C-fU9T0dXX5TTxDw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKXuB1ajyggGzTv8LEPuKdjevePdjK_Hmog&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1L3j1Qpl5c54RT1YGmswM34UbXk7bUCD2g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgQERHhSlClBvezwQJsFdMr0hC7800u3hAQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1ZNLuzA_tQwSHuzuSpzlaX3JPyqdKWjnzvzw2QybyU0Rjp8oDKvljrEdNmArmfHfOvM&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bTNPvkIn3jv28MHIgMnrTYfpJ4zC9G4Ktw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8_jIwst8QqpxIGH--oIUdRMaiX1d18XLwSC-5qe4Pny7TPhVRcAJDc-00LwYaSMRLX0&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbeMe6kytRpOmjvNr1jLC2eXghIAnmKsGfw&usqp=CAU"
];

function funciones(){
  divImagenes.innerHTML = "";
  //la informacion seleccionada
  pParrafo.innerHTML=("La cantidad de discos a mostrar es : " )+` ${selectCantidad.value} 

  ` ;

  pParrafo1.innerHTML=("La cantidad permitida por cada disco es : ") + `${selectCantPermitida.value}
  
  `;

  pParrafoColores.innerHTML=("El color elegido es : ") + `${selectColores.value}
  
  `;


 

for (let i = 0; i < selectCantidad.value; i++) {
 var imagen = document.createElement("img");
  imagen.src = imagenes[i];
  divImagenes.appendChild(imagen);
  divImagenes.innerHTML+=`
 <div><p>Opciones de pago:</p>
        <select name="producto" class="producto-mostrado">
          <option value="1">Efectivo</option>
          <option value="2">Débito</option>
          <option value="3">Crédito</option>
        </select>
        <br>
        <button class="boton-comprar">Comprar</button>
 </div>
        `;
}}

function cambiarColores(){
  const divImagenes = document.getElementsByClassName('disco');

  for(let i = 0; i<divImagenes.length;i++) {
    const disco = divImagenes[i];
    const numPar = (i + 1) % 2 === 0;
  
   switch (selectColores.value) {
    case "Ninguno":
      if(numPar) {
        disco.style.backgroundColor = "none";
      }else{
        disco.style.backgroundColor = "none";
      }
      break;
    case "Rojo-Amarillo":
      if(numPar) {
        disco.style.backgroundColor = "red";
      }else{
        disco.style.backgroundColor = "yellow";
      }
   
    default:
      break;
   }
  }} 

  






function generar() {

cambiarColores();
funciones();


}




        
