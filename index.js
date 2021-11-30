'use strict';


const preenche = (endereco) =>{

    
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const limparCampo = (endereco) =>{

    
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
const pesquisaCep = async() => {

    limparCampo();


    const cep = document.getElementById('cep').value; 
    
        const url = `http://viacep.com.br/ws/${cep}/json`;

        const eNumero = (numero) => /^[0-9]+$/.test(numero);

        const cepValido = (cep) => cep.length == 8 && eNumero(cep);
        if(cepValido(cep)){



            const dados = await fetch(url);
                const endereco = await  dados.json();

                if(endereco.hasOwnProperty('erro')){
                  
                    document.getElementById('endereco').value = 'CEP INVALIDO';
                    
                }
                else{
                    preenche(endereco);
                }
       
}

else{
    document.getElementById('endereco').value = 'CEP INSERIDO COM FORMATO ERRADO';
}

}

document.getElementById('cep');  
addEventListener ('focusout', pesquisaCep);