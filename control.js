let formulario = document.getElementById("formulario");
let correo = document.getElementById("correo");

let valor;



formulario.addEventListener
(
    "submit", 
    function(e)
    {
        e.preventDefault();

        valor = correo.value;

        if (!valor.includes("@"))
        {
            alert("No incluyo el caracter @");
        } 
        
        if (valor.trim().length == 0)
        {
            alert("Por favor ingrese su correo");
        } 
        
        
        if (valor.includes("@") && valor.trim().length != 0)
        {
            alert ("Formulario enviado exitosamente!")           
        }
    }
)
