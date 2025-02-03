//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//Adiciona amigo na lista 
function adicionarAmigo() {
  let digite = document.getElementById('amigo');
    let nome = digite.value;

    // Verifica se o campo está vazio
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Adiciona o nome ao array e limpa o campo de texto
    amigos.push(nome);
    digite.value = "";
}



