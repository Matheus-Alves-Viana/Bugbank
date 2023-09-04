$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/acessarConta.feature");
formatter.feature({
  "name": "acessar contas",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@acessarContas"
    }
  ]
});
formatter.scenario({
  "name": "login invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@acessarContas"
    },
    {
      "name": "@semDadoslogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial e clicar em acessar",
  "keyword": "Dado "
});
formatter.match({
  "location": "AcessaContaSteps.queNaPaginaInicialEClicarEmAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retorna mensagem de campo obrigatorio",
  "keyword": "Entao "
});
formatter.match({
  "location": "AcessaContaSteps.retornaMensagemDeCampoObrigatorio()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "email correto mas senha errada",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@acessarContas"
    },
    {
      "name": "@senhaIncorretaLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial informar o email \"brucewayne@wayneenterprises.com\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "AcessaContaSteps.queNaPaginaInicialInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"hahahaCoringa\"",
  "keyword": "E "
});
formatter.match({
  "location": "AcessaContaSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em acessar",
  "keyword": "E "
});
formatter.match({
  "location": "AcessaContaSteps.clicarEmAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retorna mensagem de senha invalida",
  "keyword": "Entao "
});
formatter.match({
  "location": "AcessaContaSteps.retornaMensagemDeSenhaInvalida()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login valido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@acessarContas"
    },
    {
      "name": "@loginValido"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a conta estiver criada",
  "keyword": "Dado "
});
formatter.match({
  "location": "AcessaContaSteps.aContaEstiverCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "na pagina inicial informar o email \"mainnoc@lolzinho.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "AcessaContaSteps.naPaginaInicialInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"Escuridao\"",
  "keyword": "E "
});
formatter.match({
  "location": "AcessaContaSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em acessar",
  "keyword": "E "
});
formatter.match({
  "location": "AcessaContaSteps.clicarEmAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "mostrara usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "AcessaContaSteps.mostraraUsuarioLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/cadastro.feature");
formatter.feature({
  "name": "Cadastro invalido",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@cadastroInvalido"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial e acionar o botao registrar",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queNaPaginaInicialEAcionarOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "cadastro invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@cadastroInvalido"
    },
    {
      "name": "@invalido"
    }
  ]
});
formatter.step({
  "name": "inserir o email \"medaumdinheiai@esseemeupatrao.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.inserirOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o nome \"Liminha\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.informarONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por a senha \"xiiiiiiii\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.porASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confimar a senha \"12345\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.confimarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.acionarOBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retornara mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.retornaraMensagemDeErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial e acionar o botao registrar",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queNaPaginaInicialEAcionarOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "informacoes trocadas",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@cadastroInvalido"
    },
    {
      "name": "@trocado"
    }
  ]
});
formatter.step({
  "name": "inserir o email \"tonho\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.inserirOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o nome \"da lua\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.informarONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por a senha \"123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.porASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confimar a senha \"123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.confimarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.acionarOBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retornara formato invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.retornaraFormatoInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial e acionar o botao registrar",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queNaPaginaInicialEAcionarOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "sem nome",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@cadastroInvalido"
    },
    {
      "name": "@semNome"
    }
  ]
});
formatter.step({
  "name": "inserir o email \"sugar@soad.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.inserirOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por a senha \"123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.porASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confimar a senha \"123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.confimarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.acionarOBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retornara mensagem de nome vazio",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.retornaraMensagemDeNomeVazio()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial e acionar o botao registrar",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queNaPaginaInicialEAcionarOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "sem dados",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@cadastroInvalido"
    },
    {
      "name": "@semDados"
    }
  ]
});
formatter.step({
  "name": "acionar o botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.acionarOBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retornara mensagem de campo obrigatorio",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.retornaraMensagemDeCampoObrigatorio()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial e acionar o botao registrar",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queNaPaginaInicialEAcionarOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "sem nome",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@cadastroInvalido"
    },
    {
      "name": "@semCom"
    }
  ]
});
formatter.step({
  "name": "inserir o email \"sugar@soad.\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.inserirOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por a senha \"123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.porASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confimar a senha \"123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.confimarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.acionarOBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retornara formato invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.retornaraFormatoInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial e acionar o botao registrar",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queNaPaginaInicialEAcionarOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "sem nome",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@cadastroInvalido"
    },
    {
      "name": "@apenasNumeros"
    }
  ]
});
formatter.step({
  "name": "inserir o email \"2151514411\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.inserirOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por a senha \"123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.porASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confimar a senha \"123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.confimarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.acionarOBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retornara formato invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.retornaraFormatoInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial e acionar o botao registrar",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queNaPaginaInicialEAcionarOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "cadastro valido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@cadastroInvalido"
    },
    {
      "name": "@VALIDO1"
    }
  ]
});
formatter.step({
  "name": "inserir o email \"brucewayne@wayneenterprises.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.inserirOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o nome \"Bruce Wayne\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.informarONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por a senha \"i\u0027mBatman\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.porASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em mostrar senha",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarEmMostrarSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confimar a senha \"i\u0027mBatman\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.confimarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em mostrar senha confirmacao",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarEmMostrarSenhaConfirmacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "criar conta com saldo",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.criarContaComSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.acionarOBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retornara mensagem",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.retornaraMensagem()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial e acionar o botao registrar",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroSteps.queNaPaginaInicialEAcionarOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "cadastro valido2",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@cadastroInvalido"
    },
    {
      "name": "@VALIDO2"
    }
  ]
});
formatter.step({
  "name": "inserir o email \"tonystark@industriesstark.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.inserirOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o nome \"Tony Stark\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.informarONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por a senha \"i\u0027mIronMan\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.porASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em mostrar senha",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarEmMostrarSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confimar a senha \"i\u0027mIronMan\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.confimarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em mostrar senha confirmacao",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarEmMostrarSenhaConfirmacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "criar conta com saldo",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.criarContaComSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.acionarOBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em fechar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroSteps.clicarEmFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aciona o botao registrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.acionaOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "limpar todos os campos",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.limparTodosOsCampos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir o email \"rocklee@4portao.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.inserirOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o nome \"Rock Lee\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.informarONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por a senha \"lotusOculta\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.porASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em mostrar senha",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarEmMostrarSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confimar a senha \"lotusOculta\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.confimarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em mostrar senha confirmacao",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.clicarEmMostrarSenhaConfirmacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "criar conta com saldo",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.criarContaComSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao cadastrar",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.acionarOBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/funcionalidades.feature");
formatter.feature({
  "name": "extrato",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@extrato"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial",
  "keyword": "Dado "
});
formatter.match({
  "location": "FuncionalidadesSteps.queNaPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "conferir extrato",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@extrato"
    },
    {
      "name": "@conferir"
    }
  ]
});
formatter.step({
  "name": "acionar o botao extrato",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.acionarOBotaoExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verificar abertura de conta",
  "keyword": "Entao "
});
formatter.match({
  "location": "FuncionalidadesSteps.verificarAberturaDeConta()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial",
  "keyword": "Dado "
});
formatter.match({
  "location": "FuncionalidadesSteps.queNaPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "conferir extrato apos transferencia",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@extrato"
    },
    {
      "name": "@conferirComTransf"
    }
  ]
});
formatter.step({
  "name": "acionar o botao extrato",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.acionarOBotaoExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e verificar se ha quantia em conta",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.eVerificarSeHaQuantiaEmConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.acionarBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao transferirencia",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.acionarOBotaoTransferirencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por o valor \"752\"",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.porOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "efetuar uma transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.efetuarUmaTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar botao fechar transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.acionarBotaoFecharTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.botaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao extrato",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.acionarOBotaoExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verificar se foi executada a tranferencia",
  "keyword": "Entao "
});
formatter.match({
  "location": "FuncionalidadesSteps.verificarSeFoiExecutadaATranferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial",
  "keyword": "Dado "
});
formatter.match({
  "location": "FuncionalidadesSteps.queNaPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "funcao saque",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@extrato"
    },
    {
      "name": "@saque"
    }
  ]
});
formatter.step({
  "name": "acionar o botao saque",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.acionarOBotaoSaque()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retorna mensagem de funcionalidade em desemvolvimento",
  "keyword": "Entao "
});
formatter.match({
  "location": "FuncionalidadesSteps.retornaMensagemDeFuncionalidadeEmDesemvolvimento()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que na pagina inicial",
  "keyword": "Dado "
});
formatter.match({
  "location": "FuncionalidadesSteps.queNaPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "funcao saque",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@extrato"
    },
    {
      "name": "@pagamentos"
    }
  ]
});
formatter.step({
  "name": "acionar o pagamentos",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionalidadesSteps.acionarOPagamentos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retorna mensagem de funcionalidade em desemvolvimento",
  "keyword": "Entao "
});
formatter.match({
  "location": "FuncionalidadesSteps.retornaMensagemDeFuncionalidadeEmDesemvolvimento()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/transferencia.feature");
formatter.feature({
  "name": "funcoes do site",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@transferencia"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estiver logado",
  "keyword": "Dado "
});
formatter.match({
  "location": "TransferenciaSteps.queEstiverLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em tranferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarEmTranferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "conta invalida",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@transferencia"
    },
    {
      "name": "@logar"
    }
  ]
});
formatter.step({
  "name": "informar o numero da conta \"333\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarONumeroDaConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o digito \"3\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarODigito(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor da transferencia \"333\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValorDaTransferencia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por uma descricao \"luz\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.porUmaDescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarOBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece mensagem de conta invalida ou inexistente",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciaSteps.apareceMensagemDeContaInvalidaOuInexistente()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estiver logado",
  "keyword": "Dado "
});
formatter.match({
  "location": "TransferenciaSteps.queEstiverLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em tranferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarEmTranferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "envio de quantia sem por numero da conta",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@transferencia"
    },
    {
      "name": "@transfSemConta"
    }
  ]
});
formatter.step({
  "name": "informar o valor da transferencia \"333\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValorDaTransferencia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por uma descricao \"agua\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.porUmaDescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarOBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece transferencia realizada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciaSteps.apareceTransferenciaRealizadaComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estiver logado",
  "keyword": "Dado "
});
formatter.match({
  "location": "TransferenciaSteps.queEstiverLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em tranferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarEmTranferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "valor letras",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@transferencia"
    },
    {
      "name": "@letras"
    }
  ]
});
formatter.step({
  "name": "informar o valor da transferencia \"aaa\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValorDaTransferencia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarOBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece mensagem de invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciaSteps.apareceMensagemDeInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estiver logado",
  "keyword": "Dado "
});
formatter.match({
  "location": "TransferenciaSteps.queEstiverLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em tranferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarEmTranferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "multiplas trasferencias",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@transferencia"
    },
    {
      "name": "@multiplas"
    }
  ]
});
formatter.step({
  "name": "informar o valor da transferencia \"25\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValorDaTransferencia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por uma descricao \"olha o dinheiro\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.porUmaDescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarOBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece transferencia realizada com sucesso",
  "keyword": "Quando "
});
formatter.match({
  "location": "TransferenciaSteps.apareceTransferenciaRealizadaComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "limpar o campo valor da transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.limparOCampoValorDaTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor da transferencia \"94\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValorDaTransferencia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "limpar o campo descricao",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.limparOCampoDescricao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por uma descricao \"PIX?\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.porUmaDescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarOBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece transferencia realizada com sucesso",
  "keyword": "Quando "
});
formatter.match({
  "location": "TransferenciaSteps.apareceTransferenciaRealizadaComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "limpar o campo valor da transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.limparOCampoValorDaTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor da transferencia \"14\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValorDaTransferencia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "limpar o campo descricao",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.limparOCampoDescricao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por uma descricao \"RENEGADE ATOLADA\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.porUmaDescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarOBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece transferencia realizada com sucesso",
  "keyword": "Quando "
});
formatter.match({
  "location": "TransferenciaSteps.apareceTransferenciaRealizadaComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "limpar o campo valor da transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.limparOCampoValorDaTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor da transferencia \"150\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValorDaTransferencia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "limpar o campo descricao",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.limparOCampoDescricao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por uma descricao \"TRABALHEIRA\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.porUmaDescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarOBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece transferencia realizada com sucesso",
  "keyword": "Quando "
});
formatter.match({
  "location": "TransferenciaSteps.apareceTransferenciaRealizadaComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "limpar o campo valor da transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.limparOCampoValorDaTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor da transferencia \"80\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValorDaTransferencia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "limpar o campo descricao",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.limparOCampoDescricao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por uma descricao \"DINHEIRO\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.porUmaDescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarOBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece transferencia realizada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciaSteps.apareceTransferenciaRealizadaComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estiver logado",
  "keyword": "Dado "
});
formatter.match({
  "location": "TransferenciaSteps.queEstiverLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em tranferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarEmTranferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "saldo insuficiente",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@rodaTudo"
    },
    {
      "name": "@transferencia"
    },
    {
      "name": "@saldoInsuficiente"
    }
  ]
});
formatter.step({
  "name": "informar o valor da transferencia \"3333\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValorDaTransferencia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "por uma descricao \"to sem dinheiro\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.porUmaDescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.acionarOBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "mostra mensagem de saldo insuficiente",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciaSteps.mostraMensagemDeSaldoInsuficiente()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png", null);
formatter.after({
  "status": "passed"
});
});