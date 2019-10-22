const fs=require("fs");
const rs=fs.createReadStream("archivo.txt",{
    highWaterMark:10*1024
});
let cuenta=0;
rs.on("data",chunk=>{
    console.log(chunk.toString());
    cuenta++;
})

rs.on("end",()=>{
   console.log("Ya dice que acabó, Numero de chunks: "+cuenta);
});