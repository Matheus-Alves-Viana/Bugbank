package stepsDefinitions;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.CadastroPage;

import static utils.Utils.*;

public class CadastroSteps {

	@Dado("que na pagina inicial e acionar o botao registrar")
	public void queNaPaginaInicialEAcionarOBotaoRegistrar() {
		Na(CadastroPage.class).clicarBtnRegistrar();
	}

	@Quando("inserir o email {string}")
	public void inserirOEmail(String email) {
		Na(CadastroPage.class).campoEmail(email);
	}

	@Quando("informar o nome {string}")
	public void informarONome(String nome) {
		Na(CadastroPage.class).campoInserirNome(nome);
	}

	@Quando("por a senha {string}")
	public void porASenha(String senha) {
		Na(CadastroPage.class).criarSenha(senha);
	}

	@Quando("confimar a senha {string}")
	public void confimarASenha(String conf) {
		Na(CadastroPage.class).confirmarSenha(conf);
	}

	@Quando("acionar o botao cadastrar")
	public void acionarOBotaoCadastrar() {
		Na(CadastroPage.class).btnCadastrar();
	}

	@Entao("retornara mensagem de erro")
	public void retornaraMensagemDeErro() {
		Na(CadastroPage.class).senhaDiferente();

	}

	@Entao("retornara formato invalido")
	public void retornaraFormatoInvalido() {
		Na(CadastroPage.class).formatoInvalido();
	}

	@Entao("retornara mensagem de nome vazio")
	public void retornaraMensagemDeNomeVazio() {
		Na(CadastroPage.class).nomeObrigatorio();
	}

	@Entao("retornara mensagem de campo obrigatorio")
	public void retornaraMensagemDeCampoObrigatorio() {
		Na(CadastroPage.class).campoObrigatorio();
	}

	@Quando("clicar em mostrar senha")
	public void clicarEmMostrarSenha() {
		Na(CadastroPage.class).mostrarsenha1();
	}

	@Quando("clicar em mostrar senha confirmacao")
	public void clicarEmMostrarSenhaConfirmacao() {
		Na(CadastroPage.class).mostrarSenha2();
	}

	@Quando("criar conta com saldo")
	public void criarContaComSaldo() {
		Na(CadastroPage.class).inserirSaldo();
	}

	@Entao("retornara mensagem")
	public void retornaraMensagem() {
		Na(CadastroPage.class).confirmacaoConta();
	}

	@Entao("clicar em fechar")
	public void clicarEmFechar() {
		Na(CadastroPage.class).btnFechar();
	}

	@Entao("aciona o botao registrar")
	public void acionaOBotaoRegistrar() {
		Na(CadastroPage.class).clicarBtnRegistrar();
	}

	@Entao("limpar todos os campos")
	public void limparTodosOsCampos() {
		Na(CadastroPage.class).limparCampos();
	}

}
