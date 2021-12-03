# API-CEP-INTEGRACAO
Testando api "via cep" que recebe um cep no formato "00000000" e depois entrega os dados do CEP em JSON

o html simula uma tela de cadastro onde o usuario insere suas informações pessoais e o CEP, apos sair do input "CEP", caso tenha inserido corretamente o CEP na formatação padrão
as informações contidas no CEP inserido devem ser autocompletadas nos campos "cidade" "uf" "rua", caso seja inserido de forma incorreta ou o cep seja inexistente, imprime uma 
mensagem de erro no input que deveria ser autocompletado.

Ja que nao vai ser efetuado um cadastrado de fato, o foco é no input do CEP, a validação de se é um cep existe e na formatação, e caso seja entregue as informações autocompletando.
