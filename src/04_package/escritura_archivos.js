const fs= require("fs");
fs.writeFile("./escritura.txt","Escritura de archivos",err=>{
    if(err) throw err;
    console.log("Ya se escribió");
});