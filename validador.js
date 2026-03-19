
const usuarioCorrecto = "hawasly";
const passCorrecto = "12345";
const intentosMaximos = 3;
let intentos = 0;

function validarAcceso() {
    let usIng = document.getElementById("userInput").value;
    let passIng = document.getElementById("passInput").value;

    if (intentos >= intentosMaximos) {
        alert("Usuario bloqueado. No puedes intentar más.");
        return;
    }

    if (usIng === usuarioCorrecto && passIng === passCorrecto) {
        alert("Bienvenido al sistema!");
        intentos = 0; 
    } else {
        intentos++;
        let restantes = intentosMaximos - intentos;

        if (restantes > 0) {
            alert(`Datos incorrectos. Te quedan ${restantes} intentos.`);
        } else {
            alert("Usuario bloqueado. superaste el numero de intentos.");
        }
    }
}
