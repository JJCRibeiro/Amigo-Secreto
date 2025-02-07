//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Soteo do Amigo Secreto do JJ';

let amigos = []; // Array para armazenar os nomes dos amigos

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo'); // Pega o campo de entrada
    const amigo = amigoInput.value.trim(); // Remove espaços em branco do início e fim

    if (amigo) { // Verifica se o nome não está vazio
        if (amigos.includes(amigo)) { // Verifica se o nome já foi adicionado
            alert('Este nome já foi adicionado!');
        } else {
            amigos.push(amigo); // Adiciona o nome ao array
            amigoInput.value = ''; // Limpa o campo de entrada
            atualizarListaAmigos(); // Atualiza a lista na tela
        }
    } else {
        alert('Por favor, insira um nome válido.'); // Alerta se o campo estiver vazio
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); // Pega a lista <ul>
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome da lista ao <ul>
    amigos.forEach(amigo => {
        const li = document.createElement('li'); // Cria um novo <li>
        li.textContent = amigo; // Define o texto do <li>
        listaAmigos.appendChild(li); // Adiciona o <li> à lista <ul>
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    if (amigos.length === 0) { // Verifica se há nomes na lista
        alert('Nenhum nome foi adicionado ainda.');
        return;
    }

    // Sorteia um índice aleatório do array
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado]; // Pega o nome sorteado

    // Exibe o nome sorteado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}