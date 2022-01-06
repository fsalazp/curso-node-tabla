
const colors = require('colors');
let fs = require('fs');
const crearArchivo = async(base = 1, listar=false,hasta=10) => {
    try {
        let salida = '';
        let consola = '';
        for(let count=1; count <= hasta; count++){
            salida += `${base} x ${count} = ${base * count}\n`;
            consola += `${base} ${colors.blue('x')} ${count} ${colors.red("=")} ${base * count}\n`;
        }
        if(listar){
            console.log("====================".green);
            console.log("     Tabla del ",`${base}`.yellow);
            console.log("====================".green);  
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;  
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}
