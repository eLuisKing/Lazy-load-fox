/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage } from "./lazy";

const random = () => Math.floor(Math.random() * (122-1) + 1);

const nvaImagen = () => {
    const container = document.createElement("div");
    container.className = "p-4 bg-gray-200 mx-auto rounded-xl w-60 mt-3";
    // container.style = "margin-top: 10px;"

    const imagen = document.createElement("img");
    imagen.className = "mx-auto rounded-xl";
    imagen.width = "350";
    //Aqui la estamos guardando dentro de la peopiedad dataset esta solo guarda no muestra
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);

    return container;
}

let contadorAdd = 0;

const addBtn = document.querySelector('button');
addBtn.className = "inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50";

addBtn.addEventListener('click',function(){
    const insertarImagen = nvaImagen();
    const contenerdorImagenes = document.getElementById('images');
    contenerdorImagenes.appendChild(insertarImagen);
    registerImage(insertarImagen);

})

const cleanBtn = document.getElementById('clean');
cleanBtn.className = "inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50";

cleanBtn.addEventListener('click',() => {
    window.location.reload()
})



