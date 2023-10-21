function adicionarViagem() {
    let escolhaViagem = document.getElementById('viagem');
    let erroIcon1 = document.getElementById('erroIcon1');

    if (escolhaViagem.value == '') {
        escolhaViagem.classList.add('border', 'border-danger');
        erroIcon1.classList.remove('d-none');
        escolhaViagem.focus();
        return;
    }

    let lista = document.getElementById('message');

    if (lista.value == '') {
        lista.value = escolhaViagem.value;
        escolhaViagem.classList.remove('border', 'border-danger');
        erroIcon1.classList.add('d-none');
    } else {
        lista.value = lista.value + ', ' + escolhaViagem.value;
        escolhaViagem.classList.remove('border', 'border-danger');
        erroIcon1.classList.add('d-none');
    }
    escolhaViagem.value = '';
};


function adicionarRestaurante() {
    let escolhaRestaurante = document.getElementById('restaurante');
    let erroIcon2 = document.getElementById('erroIcon2');

    if (escolhaRestaurante.value == '') {
        escolhaRestaurante.classList.add('border', 'border-danger');
        erroIcon2.classList.remove('d-none');
        escolhaRestaurante.focus();
        return;
    }

    let lista = document.getElementById('message');

    if (lista.value == '') {
        lista.value = escolhaRestaurante.value;
        escolhaRestaurante.classList.remove('border', 'border-danger');
        erroIcon2.classList.add('d-none');
    } else {
        lista.value = lista.value + ', ' + escolhaRestaurante.value;
        escolhaRestaurante.classList.remove('border', 'border-danger');
        erroIcon2.classList.add('d-none');
    }
    escolhaRestaurante.value = '';
};


function adicionarCinema() {
    let escolhaCinema = document.getElementById('cinema');
    let erroIcon3 = document.getElementById('erroIcon3');

    if (escolhaCinema.value == '') {
        escolhaCinema.classList.add('border', 'border-danger');
        erroIcon3.classList.remove('d-none');
        escolhaCinema.focus();
        return;
    }

    let lista = document.getElementById('message');

    if (lista.value == '') {
        lista.value = escolhaCinema.value;
        escolhaCinema.classList.remove('border', 'border-danger');
        erroIcon3.classList.add('d-none');
    } else {
        lista.value = lista.value + ', ' + escolhaCinema.value;
        escolhaCinema.classList.remove('border', 'border-danger');
        erroIcon3.classList.add('d-none');
    }
    escolhaCinema.value = '';
};

