function logger(req, res, next) {
    let inicio = new Date().getTime();
    console.log(`Inicia ${inicio} - ${req.url}`);
    res.on("finish", () => {
        var fin = new Date().getTime();
        var tiempo = fin - inicio;
        console.log(`Finaliza ${inicio}: duración: ${tiempo} ms`);
    });
    next();
}

module.exports = logger;