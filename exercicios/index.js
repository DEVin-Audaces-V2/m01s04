// Criar variável para armazenar lista de contas
let contas = [];

//Obter o formulário para adicionar evento
const formulario = document.getElementById('form-cadastro');

// Criar função para ser executada no envio do formulário
const enviarFormulario = (event) => {
  // Evitar o comportamento padrão do evento de submit do form
  event.preventDefault();

  // Obter os campos de senha para validar se são iguais
  const senha = event.target.senha.value;
  const confirmacaoSenha = event.target.confimacaoSenha.value;

  if (senha !== confirmacaoSenha) {
    alert('Senhas são divergentes');
    return;
  }

  // Adicionar a conta no array

  // Obtem os valores digitados no formulário
  const nome = event.target.nome.value;
  const cpf = event.target.cpf.value;
  const celular = event.target.celular.value;
  const conta = new Date().getTime();
  const saldo = 0;

  // Cria objeto
  const contaCriada = {
    conta,
    nome,
    cpf,
    celular,
    senha,
    saldo,
  };

  // Adiciona conta no array
  contas.push(contaCriada);
  // Exibe informação ao usuário
  alert(`Conta criada com sucesso. Número: ${conta}`);
};

// Vincular função ao evento de submit do formulario
formulario.addEventListener('submit', enviarFormulario);
