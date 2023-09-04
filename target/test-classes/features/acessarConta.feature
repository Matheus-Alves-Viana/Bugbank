#language: pt
#encoding: utf-8
@rodaTudo @acessarContas
Funcionalidade: acessar contas

  @semDadoslogin
  Cenario: login invalido
    Dado que na pagina inicial e clicar em acessar
    Entao retorna mensagem de campo obrigatorio

  @senhaIncorretaLogin
  Cenario: email correto mas senha errada
    Dado que na pagina inicial informar o email "brucewayne@wayneenterprises.com"
    E a senha "hahahaCoringa"
    E clicar em acessar
    Entao retorna mensagem de senha invalida

  @loginValido
  Cenario: Login valido
    Dado a conta estiver criada
    E na pagina inicial informar o email "mainnoc@lolzinho.com"
    E a senha "Escuridao"
    E clicar em acessar
    Entao mostrara usuario logado