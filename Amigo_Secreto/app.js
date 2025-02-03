//Adicionar a biblioteca para ler o coteúdo da tela
// if ('speechSynthesis' in window) {
//     let utterance = new SpeechSynthesisUtterance(texto);
//     utterance.lang = 'pt-BR'; 
//     utterance.rate = 1.2; 
//     window.speechSynthesis.speak(utterance); 
// } else {
//     console.log("Web Speech API não suportada neste navegador.");
// }


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

//Atualiza a lista de amigos
function atualizarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  if(amigos === 0) {

  }
}


