const fs = require("fs");
const { Transform } = require('stream');
let chunkNum=0;
const CHUNK_SIZE_KB = 10 * 1024;
let totalProcesado=0;


const rs = fs.createReadStream("archivo.txt", {
    highWaterMark: CHUNK_SIZE_KB
});

const reportProgress = new Transform({
    transform(chunk, encoding, callback) {
        chunkNum++;
        totalProcesado += this.writableLength;
        process.stdout.write("Chunk #: "+chunkNum+", PROCESADO "+(totalProcesado/1000)+"KB\n");
        callback(null, chunk);
    }
});

const writeStream = fs.createWriteStream("escribir_copia_pipe.txt");
rs.pipe(reportProgress)
    .pipe(writeStream);

rs.on