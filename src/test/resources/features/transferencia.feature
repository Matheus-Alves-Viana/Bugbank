#language: pt
#encoding: utf-8
@rodaTudo @transferencia
Funcionalidade: funcoes do site

  Contexto: 
    Dado que estiver logado
    E clicar em tranferencia

  @logar
  Cenario: conta invalida
    E informar o numero da conta "333"
    E informar o digito "3"
    E informar o valor da transferencia "333"
    E por uma descricao "luz"
    E acionar o botao transferir
    Entao aparece mensagem de conta invalida ou inexistente

  @transfSemConta
  Cenario: envio de quantia sem por numero da conta
    E informar o valor da transferencia "333"
    E por uma descricao "agua"
    E acionar o botao transferir
    Entao aparece transferencia realizada com sucesso

  @letras
  Cenario: valor letras
    E informar o valor da transferencia "aaa"
    E acionar o botao transferir
    Entao aparece mensagem de invalido

  @multiplas
  Cenario: multiplas trasferencias
    E informar o valor da transferencia "25"
    E por uma descricao "olha o dinheiro"
    E acionar o botao transferir
    Quando aparece transferencia realizada com sucesso
    E acionar botao fechar
    E limpar o campo valor da transferencia
    E informar o valor da transferencia "94"
    E limpar o campo descricao
    E por uma descricao "PIX?"
    E acionar o botao transferir
    Quando aparece transferencia realizada com sucesso
    E acionar botao fechar
    E limpar o campo valor da transferencia
    E informar o valor da transferencia "14"
    E limpar o campo descricao
    E por uma descricao "RENEGADE ATOLADA"
    E acionar o botao transferir
    Quando aparece transferencia realizada com sucesso
    E acionar botao fechar
    E limpar o campo valor da transferencia
    E informar o valor da transferencia "150"
    E limpar o campo descricao
    E por uma descricao "TRABALHEIRA"
    E acionar o botao transferir
    Quando aparece transferencia realizada com sucesso
    E acionar botao fechar
    E limpar o campo valor da transferencia
    E informar o valor da transferencia "80"
    E limpar o campo descricao
    E por uma descricao "DINHEIRO"
    E acionar o botao transferir
    Entao aparece transferencia realizada com sucesso

  @saldoInsuficiente
  Cenario: saldo insuficiente
    E informar o valor da transferencia "3333"
    E por uma descricao "to sem dinheiro"
    E acionar o botao transferir
    Entao mostra mensagem de saldo insuficiente
