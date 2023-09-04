#language: pt
#encoding: utf-8
@rodaTudo @cadastroInvalido
Funcionalidade: Cadastro invalido

  Contexto: 
    Dado que na pagina inicial e acionar o botao registrar

  @invalido
  Cenario: cadastro invalido
    E inserir o email "medaumdinheiai@esseemeupatrao.com"
    E informar o nome "Liminha"
    E por a senha "xiiiiiiii"
    E confimar a senha "12345"
    E acionar o botao cadastrar
    Entao retornara mensagem de erro

  @trocado
  Cenario: informacoes trocadas
    E inserir o email "tonho"
    E informar o nome "da lua"
    E por a senha "123"
    E confimar a senha "123"
    E acionar o botao cadastrar
    Entao retornara formato invalido

  @semNome
  Cenario: sem nome
    E inserir o email "sugar@soad.com"
    E por a senha "123"
    E confimar a senha "123"
    E acionar o botao cadastrar
    Entao retornara mensagem de nome vazio

  @semDados
  Cenario: sem dados
    E acionar o botao cadastrar
    Entao retornara mensagem de campo obrigatorio

  @semCom
  Cenario: sem nome
    E inserir o email "sugar@soad."
    E por a senha "123"
    E confimar a senha "123"
    E acionar o botao cadastrar
    Entao retornara formato invalido

  @apenasNumeros
  Cenario: sem nome
    E inserir o email "2151514411"
    E por a senha "123"
    E confimar a senha "123"
    E acionar o botao cadastrar
    Entao retornara formato invalido

  @VALIDO1
  Cenario: cadastro valido
    E inserir o email "brucewayne@wayneenterprises.com"
    E informar o nome "Bruce Wayne"
    E por a senha "i'mBatman"
    E clicar em mostrar senha
    E confimar a senha "i'mBatman"
    E clicar em mostrar senha confirmacao
    E criar conta com saldo
    E acionar o botao cadastrar
    Entao retornara mensagem

  @VALIDO2
  Cenario: cadastro valido2
    E inserir o email "tonystark@industriesstark.com"
    E informar o nome "Tony Stark"
    E por a senha "i'mIronMan"
    E clicar em mostrar senha
    E confimar a senha "i'mIronMan"
    E clicar em mostrar senha confirmacao
    E criar conta com saldo
    E acionar o botao cadastrar
    Quando clicar em fechar
    E aciona o botao registrar
    E limpar todos os campos
    E inserir o email "rocklee@4portao.com"
    E informar o nome "Rock Lee"
    E por a senha "lotusOculta"
    E clicar em mostrar senha
    E confimar a senha "lotusOculta"
    E clicar em mostrar senha confirmacao
    E criar conta com saldo
    Entao acionar o botao cadastrar
