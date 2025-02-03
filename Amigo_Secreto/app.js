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
    atualizarLista();  
}

//Atualiza a lista de amigos
function atualizarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  //Adiciona cada amigo na lista
  let i = 0; //controla a variável de loop
  while (i < amigos.length) {
    let item = document.createElement('li'); 
    item.textContent = amigos[i]; //adiciona o nome do amigo ao item da lista
    lista.appendChild(item); //adiciona o item à lista
    i++;
  }
}

// Sorteia um amigo e limpa a lista
function sortearAmigo(){
  //Verifica se há amigos disponíveis para sortear
if (amigos.length === 0) {
  document.getElementById('resultado').innerHTML = "Nenhum amigo disponível";
  return;
} 
//Sorteia um amigo
let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
document.getElementById('resultado').innerHTML = amigoSorteado;

 // Limpa a lista de amigos após o sorteio
 amigos = [];
 atualizarLista();
}





