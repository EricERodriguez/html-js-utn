function carga() {
    event.preventDefault();

    var tipo =document.getElementById("tipo_id").value

    var basico = 500
    var intermedio = 1000
    var premium = 1500

    switch (tipo) {
        case "basico":
            document.getElementById("precio_id").innerHTML = `Basico: $ ${basico}`
            break;
        case "intermedio":
            document.getElementById("precio_id").innerHTML = `Intermedio: $ ${intermedio}`
            break;
        case "premium":
            document.getElementById("precio_id").innerHTML = `Premium: $ ${premium}`
            break;
        default:
            break;
    }
}
