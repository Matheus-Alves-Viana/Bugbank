#language: pt
#encoding: utf-8
@rodaTudo @extrato
Funcionalidade: extrato

  Contexto: 
    Dado que na pagina inicial

  @conferir
  Cenario: conferir extrato
    E acionar o botao extrato
    Entao verificar abertura de conta

  @conferirComTransf
  Cenario: conferir extrato apos transferencia
    E acionar o botao extrato
    E e verificar se ha quantia em conta
    E acionar botao voltar
    E acionar o botao transferirencia
    E por o valor "752"
    E efetuar uma transferencia
    E acionar botao fechar transferencia
    E botao voltar
    E acionar o botao extrato
    Entao verificar se foi executada a tranferencia

  @saque
  Cenario: funcao saque
    E acionar o botao saque
    Entao retorna mensagem de funcionalidade em desemvolvimento

  @pagamentos
  Cenario: funcao saque
    E acionar o pagamentos
    Entao retorna mensagem de funcionalidade em desemvolvimento
