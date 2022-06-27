//calcularFPS(fps, minutos)
//FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos

//calcularFPS(1, 1) // 60
//calcularFPS(10, 2) // 1200
//calcularFPS(2, 3) // 360

const calcularFPS = (fps, minutos) =>{
    return (fps * minutos) * 60;
}

console.log(calcularFPS(1, 1));
console.log(calcularFPS(10, 2));
console.log(calcularFPS(2, 3));