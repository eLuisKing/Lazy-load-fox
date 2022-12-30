const isIntersecting = (entry) => {
    return entry.isIntersecting //is true si se ven pantalla
}

let appendedImages = 0;
let loadedImages = 0;

const printLog = () => {
    console.log(`⚪ Se han agregado ${appendedImages} imágenes`);
    console.log(`🟣 Se han cargado ${loadedImages} imágenes`);
    console.log("---------------------------------------");
}

const loadImage = (entry) => {
    const container = entry.target; //Container = div
    //El pimer hijo es la img 
    const imagen = container.firstChild;
    //Obtenemos la dataset ose la url osea la src de la imagen
    const url = imagen.dataset.src;

    loadedImages++;
    printLog();

    //Load imagen -> Asignamos el dataset al src de la img
    imagen.src = url;

    //Dejar de escuchar despues
    observer.unobserve(container);



}

//entries = entradas
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
})

//Recibe una imagen y le dice al observador que vea la imagen recibida
export const registerImage = (imagen) => {
    appendedImages++;
    printLog();
    observer.observe(imagen);
}