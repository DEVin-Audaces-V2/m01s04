let tarefas = [];

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

  listaTarefas();
});

// Formatar prioridade de acordo com valor selecionado
const obterPrioridade = (idPrioridade) => {
  if (idPrioridade === '0') {
    return {
      nome: 'Alta',
      classe: 'color-red',
    };
  } else if (idPrioridade === '1') {
    return {
      nome: 'Média',
      classe: 'color-yellow',
    };
  } else {
    return {
      nome: 'Baixa',
      classe: 'color-green',
    };
  }
};

// Criar os elementos no html, recebe uma lista de tarefas, ou usa o valor default
const listaTarefas = (listaTarefas = tarefas) => {
  // Obtem a lista (ul) do html
  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  listaTarefas.forEach((tarefa) => {
    // Criando li e add classe
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    // Cria titulo, add classe, adiciona o elemento criado no li
    const titulo = document.createElement('h3');
    titulo.classList.add('subtitle', 'text-center');
    titulo.innerText = tarefa.titulo;
    listItem.appendChild(titulo);

    // Obter prioridade formatada
    const prioridadeFormatada = obterPrioridade(tarefa.prioridade);

    // Cria prioridade, add classe, adiciona o elemento criado no li
    const prioridade = document.createElement('p');
    prioridade.classList.add('text-center', 'priority', prioridadeFormatada.classe);
    prioridade.innerText = prioridadeFormatada.nome;
    listItem.appendChild(prioridade);

    // Cria descricao, add classe, adiciona o elemento criado no li
    const descricao = document.createElement('p');
    descricao.classList.add('description');
    descricao.innerText = tarefa.descricao;
    listItem.appendChild(descricao);

    // Cria div para posicionar o checkbox
    const div = document.createElement('div');
    div.classList.add('list-item-footer');

    // Cria o checkbox e adiciona ele na div
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'concluida';
    checkbox.classList.add('checkbox');
    checkbox.checked = tarefa.concluida;
    checkbox.addEventListener('change', () => {
      // Atualizar apenas o status da tarefa clicada
      const tarefasAtualizadas = tarefas.map((t) =>
        t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t
      );
      // Atualizar variavel de controle global
      tarefas = tarefasAtualizadas;
      console.log(tarefas);
    });
    div.appendChild(checkbox);

    // Adiciona a div no li
    listItem.appendChild(div);

    // Adiciono o li na ul
    lista.appendChild(listItem);
  });
};

// Criar busca
//Obter o botão
const butaoBusca = document.getElementById('button-search');
butaoBusca.addEventListener('click', () => {
  // Obtem o valor digitado no input
  const valorBusca = document.getElementById('input-busca').value;

  // Aplica o filtro
  const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.titulo.includes(valorBusca));

  // Cria os elementos filtrados no html
  listaTarefas(tarefasFiltradas);
});
