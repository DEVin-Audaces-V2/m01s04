const tarefas = [];

const formCadastro = document.getElementById('form-cadastro');
formCadastro.addEventListener('submit', (event) => {
  event.preventDefault();

  const tarefa = {
    id: new Date().getTime(),
    titulo: event.target.titulo.value,
    prioridade: event.target.prioridade.value,
    descricao: event.target.descricao.value,
    concluida: false,
  };

  tarefas.push(tarefa);
});

const listaTarefas = () => {
  // Obtem a lista (ul) do html
  const lista = document.getElementById('lista');

  // Criando li e add classe
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');

  // Cria titulo, add classe, adiciona o elemento criado no li
  const titulo = document.createElement('h3');
  titulo.classList.add('subtitle', 'text-center');
  titulo.innerText = '';
  listItem.appendChild(titulo);

  // Cria prioridade, add classe, adiciona o elemento criado no li
  const prioridade = document.createElement('p');
  prioridade.classList.add('text-center', 'priority', 'color-red');
  prioridade.innerText = '';
  listItem.appendChild(prioridade);

  // Cria descricao, add classe, adiciona o elemento criado no li
  const descricao = document.createElement('p');
  descricao.classList.add('description');
  descricao.innerText = '';
  listItem.appendChild(descricao);

  // Cria div para posicionar o checkbox
  const div = document.createElement('div');
  div.classList.add('list-item-footer');

  // Cria o checkbox e adiciona ele na div
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'concluida';
  checkbox.classList.add('checkbox');
  checkbox.addEventListener('change', () => {
    console.log('clicou');
  });
  div.appendChild(checkbox);

  // Adiciona a div no li
  listItem.appendChild(div);

  // Adiciono o li na ul
  lista.appendChild(listItem);
};

document.body.onload = listaTarefas();
