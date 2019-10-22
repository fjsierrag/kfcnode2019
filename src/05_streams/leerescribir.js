const fs=require("fs");
const writeStream=fs.createWriteStream("escribir_copia.txt");

const rs=fs.createReadStream("archivo.txt",{
    highWaterMark:10*1024
});
let cuenta=0;
rs.on("data",chunk=>{
    writeStream.write(chunk);
    cuenta++;
});

rs.on("end",()=>{
    writeStream.end();
});
