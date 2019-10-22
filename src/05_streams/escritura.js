const fs=require("fs");
const writeStream=fs.createWriteStream("escribir.txt");

for(let i=0;i<10000;i++){
    writeStream.write("Linea "+(i+1)+"\n");
}

writeStream.end();

