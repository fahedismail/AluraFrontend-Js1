/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha o numero de 1 a 0';
*/
let listaNumeroSorteado= [];
let numeroLimite = 5;
let numeroSecreto = numeroAleatorio();
let tentativa= 1




function exibirTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTela('h1', 'jogo do numero secreto');
exibirTela('p', 'Escolha o numero de 1 a 99');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
   
    if(numeroSecreto == chute){
        exibirTela('h1', 'Acertou ');
       let palavraTentativas = tentativa > 1 ? 'tentativas' : 'tentativa';
       let  mensagemTentativa = `voce descobriu o numero secreto com ${tentativa} ${palavraTentativas}!`;
        exibirTela('p',`${mensagemTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTela('h1', 'Errou');
            exibirTela('p', `O numero secreto é menor que ${chute}`);
        }
        if(chute < numeroSecreto){
            exibirTela('h1', 'Errou');
            exibirTela('p',  `O numero secreto é maior que ${chute}`);
        }
        tentativa++
      limparCampo()
    }
}

function numeroAleatorio(){
  let numeroGerado = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementoLista = listaNumeroSorteado.length;

if (quantidadeElementoLista == numeroLimite){
    listaNumeroSorteado = []
}


   if(listaNumeroSorteado.includes(numeroGerado)){
   return numeroAleatorio();}
else {
    listaNumeroSorteado.push(numeroGerado);
    console.log(listaNumeroSorteado);
    return numeroGerado;
}
}

function  limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
    
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}