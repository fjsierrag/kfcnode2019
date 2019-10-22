const fs=require("fs");
const rs=fs.createReadStream("archivo.txt",{
    highWaterMark:10*1024
});
const writeStream=fs.createWriteStream("escribir_copia_pipe.txt");
rs.pipe(writeStream);