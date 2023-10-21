document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let username = document.getElementById('usuario');
    let password = document.getElementById('password');
    let labelU = document.getElementById('label-usuario');
    let labelP = document.getElementById('label-password');
    let person = document.getElementById('person');
    let btnP = document.getElementById('btn-password');
    let erro = document.getElementById('erro');

    if (username.value === 'Milena' && password.value === '2210') {

        window.location.href = '/assets/pages/carta.html';
    } else {
        erro.classList.remove('d-none');
        username.classList.add('border', 'border-danger');
        password.classList.add('border', 'border-danger');
        labelU.classList.add('text-danger');
        labelP.classList.add('text-danger');
        person.classList.add('text-danger');
        btnP.classList.add('text-danger');
        username.focus();
    }
    username.value = '';
    password.value = '';
});

