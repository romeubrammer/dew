// Selecionar um formulario pelo seu ID (#) formularioAcademico
const formulario = documento.querySelector("#formularioAcademico");
console.log(formulario);

// Selecionamos o campo nome pelo seu ID nome
const campoNome = documento.querySelector("#nome");
console.log(campoNome);

// Selecionamos o campo notaUm pelo seu ID notaUm
const campoNotaUm = documento.querySelector("#notaUm");
console.log(campoNotaUm);

// Selecionamos o campo notaDois com seu ID notaDois
const campoNotaDois = documento.querySelector("#notaDois");
console.log(campoNotaDois);

const resultados = documento.querySelector("Resultados");
console.log(resultados);

const botaoCalcularMedia = document.querySelector("#btnCalcular")
console.log(botaoCalcularMedia)

let mediaCalculada;
let aprovacao;
let mensagemFinal = "...";

// 1 Criar funcao para calcular a media das duas notas
// Declaracao da funcao
function calcularMedia(valorNotaUm, ValorNotaDois) {
  return (valorNotaUm + ValorNotaDois) / 2;
}

// 2 Funcao para verificar a aprovacao
function verificarAprovacao(mediaCalculada) {
  //Estrutura de decisao: verificar se a media e de aprovacao ou nao
  if (mediaCalculada >= 6) {
    return true;
  }
  return false;
}

function mensagemAprovacao(aprovacao) {
  //Receber o valor boleano e retornar como texto
  switch (aprovacao) {
    case true:
      return "Aprovado(a)";
    case false:
      return "Reprovado(a)";
  }
}

// 3 Mapeamento de evento de envio de formulario
//submit ou clique 
botaoCalcularMedia.addEventListener("click", function () {
  //Coleta de valores de campo
  const valorNome = campoNome.value;
  const valorNotaDois = Number(campoNotaDois.value);
  const valorNotaUm = Number(campoNotaUm.value)

  // Chamada da funcao calculo da media
  mediaCalculada = calcularMedia(valorNotaUm, valorNotaDois);

  // Verificacao da aprovacao
  aprovacao = verificarAprovacao(mediaCalculada);
  mensagemFinal = mensagemAprovacao(aprovacao);

  // 4 Mostrar resultados
  resultados.textContent = valorNome + " " + mediaCalculada + " " + mensagemFinal;
})