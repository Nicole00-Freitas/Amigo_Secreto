//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigosSorteados = [];

function adicionarAmigo(nome) {
  document.getElementById('input').value = "";

  if (nome === "") {
    alert("Por favro, insira um nome.");
    return;
  } else {
    amigos.push(nome);
  }
  limparCampo();
  
}


