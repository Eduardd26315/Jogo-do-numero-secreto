let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas= 1;


function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{reate:1.2})
}



function exivirMensagem() {
    exibirTexto('h1 ','jogo do numero secreto   ');
    exibirTexto('p','Coloque um numero  entre 1  e o 10' );
}
 exivirMensagem();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTexto('h1','Voce Acertou!' );
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `voce descubriu o numero secreto com ${tentativas} ${palavraTentativa}!`
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
 

    }else{
        if(chute>numeroSecreto){
            exibirTexto('p', ' o numero secreto e menor !');
    
        }else{
            exibirTexto('p', ' o numero secreto e maior !');
        }
        
       tentativas++;
       limparCampo();
 
    };

 }

 function gerarNumeroAleatorio() {
   let numeroEscolido =  parseInt(Math.random() * numeroLimite+1);
   let quantidadeDeElementoNaLista= listaDeNumeroSorteado.length;
   
   if(quantidadeDeElementoNaLista == numeroLimite){
   listaDeNumeroSorteado = [];
   }
   if(listaDeNumeroSorteado.includes(numeroEscolido)){
    return gerarNumeroAleatorio()

   }else{
    listaDeNumeroSorteado.push(numeroEscolido);
    console.log(listaDeNumeroSorteado)

    return numeroEscolido;
 
   }
 }

 function limparCampo(){
    chute= document.querySelector('input');
    chute.value= '';

 }


 function reiniciarJogo() {
    numeroSecreto= gerarNumeroAleatorio();
    limparCampo();
    tentativas= 1;
    exivirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
 }