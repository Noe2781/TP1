const divContImg = document.querySelector("#contenedor-imagenes");
const selectImg = document.querySelector("#cantidad");
const selectCantImg = document.querySelector("#cantidad-permitida");
const pCantDiscos = document.querySelector("#cantidad-discos");
const pParrafos = document.querySelector("#Leer-parrafos");
const pParrafos1 = document.querySelector("#Leer-parrafos1");
const pColores = document.querySelector("#Leer-colores");
const h3TituloDisco=document.querySelector("#titulo-disco");

const IMAGEN_1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapmy-o80I45f1w_NzGzQaa4Eh4FKYYKkFBw&usqp=CAU";
const IMAGEN_2=  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqRiWM9F0_SXWzHokb9MEUDbj1csTCNsM-A&usqp=CAU";
const IMAGEN_3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJN1kcTLwXmJEykNRlIACVzdCLHS9_4Xf-w&usqp=CAU";
const IMAGEN_4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04clvslY7nZSqH61gYyOA-d0ZpObMLrKfTw&usqp=CAU";
const IMAGEN_5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4fjdr3ESg-v8Dne8bmCdT-Ecfcrvu3Mbsw&usqp=CAU";
const IMAGEN_6 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGwtl8H2hU5Pm-NR1BFhhDAiHtNdq4f-5kg&usqp=CAU";
const IMAGEN_7 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9C736qZtJFP3SphWzdz-CA-9W2w5aq1-Gww&usqp=CAU";
const IMAGEN_8 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6p2ayCMD3Z2dqIumxjlvC1Sio_4pjx9Gfg&usqp=CAU";
const IMAGEN_9 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS034idmhYqGFcJINzK3pmKcEC3dKPJci4r7g&usqp=CAU"; 
const IMAGEN_10 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSdg615_7YwundHJ3ymrwNNahtOqpbd_1pw&usqp=CAU"; 








/* const imagenes = [IMAGEN_1, IMAGEN_2,IMAGEN_3, IMAGEN_4, IMAGEN_5, IMAGEN_6, IMAGEN_7, IMAGEN_8, IMAGEN_9, IMAGEN_10]; */
//funcion para mostrar las 10 imagenes
 function generar(){
    let cantImg = selectImg.value;
    divContImg.innerHTML = "";

    if (cantImg==1) {
     divContImg.innerHTML += `
    <h3>Disco 1 </h3>
    <li><img src="${IMAGEN_1}" alt="img"></li>
    <p>Opciones de pago:</p>
    <select name="producto" id="producto-mostrado">
      <option value="1">Efectivo</option>
      <option value="2">Débito</option>
      <option value="3">Crédito</option>
    </select>
    
     `
     pParrafos.innerHTML=("La cantidad de productos a mostrar es : 1 ");
     /* h3TituloDisco.innerHTML=("Disco 1 "); */
     
    } else if (cantImg==3) {
     divContImg.innerHTML += `
    <li><img src="${IMAGEN_1}" alt="img">
    <img src="${IMAGEN_2}" alt="img">
    <img src="${IMAGEN_3}" alt="img"></li>
     `
     pParrafos.innerHTML=("La cantidad de productos a mostrar es : 3 ");

    } else if (cantImg==7) {
     divContImg.innerHTML += `
     <li><img src="${IMAGEN_1}" alt="img">
     <img src="${IMAGEN_2}" alt="img">
     <img src="${IMAGEN_3}" alt="img">
     <img src="${IMAGEN_4}" alt="img">
     <img src="${IMAGEN_5}" alt="img">
     <img src="${IMAGEN_6}" alt="img">
     <img src="${IMAGEN_7}" alt="img"></li>
    
      `
     pParrafos.innerHTML=("La cantidad de productos a mostrar es : 7 ");

   } else if (cantImg==10) {
     divContImg.innerHTML += `
     <li><img src="${IMAGEN_1}" alt="img">
     <img src="${IMAGEN_2}" alt="img">
     <img src="${IMAGEN_3}" alt="img">
     <img src="${IMAGEN_4}" alt="img">
     <img src="${IMAGEN_5}" alt="img">
     <img src="${IMAGEN_6}" alt="img">
     <img src="${IMAGEN_7}" alt="img">
     <img src="${IMAGEN_8}" alt="img">
     <img src="${IMAGEN_9}" alt="img">
     <img src="${IMAGEN_10}" alt="img"></li>
      `
    pParrafos.innerHTML=("La cantidad de productos a mostrar es : 10 ");
   }
//mostrando cantidad permitida
    {
    pParrafos1.innerHTML =("La cantidad permitida por cada disco es : ") + `
    ${selectCantImg.value}
 
    `;
    }

} 






        
