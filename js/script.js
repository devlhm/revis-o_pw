document.getElementById('btn-login').addEventListener('click', event => {
    const usuario = document.getElementById('input-usuario').value;
    const senha = document.getElementById('input-senha').value;
    
    if(usuario != "" && senha != "") {
        alert("Bem vindo " + usuario + "!");
    } else {
        alert("Preencha todos os campos!");
    }
});