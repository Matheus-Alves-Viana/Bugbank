package stepsDefinitions;

import static utils.Utils.*;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.AcessarContaPage;

public class AcessaContaSteps {

	@Dado("que na pagina inicial e clicar em acessar")
	public void queNaPaginaInicialEClicarEmAcessar() {
		Na(AcessarContaPage.class).botaoAcessar();
	}

	@Quando("na pagina inicial eclicar em acessar")
	public void naPaginaInicialEclicarEmAcessar() {
		Na(AcessarContaPage.class).botaoAcessar();
	}

	@Entao("retorna mensagem de campo obrigatorio")
	public void retornaMensagemDeCampoObrigatorio() {
		Na(AcessarContaPage.class).campoObrigatorio();
	}

	@Dado("que na pagina inicial informar o email {string}")
	public void queNaPaginaInicialInformarOEmail(String email) {
		Na(AcessarContaPage.class).inserirEmail(email);
	}

	@Dado("na pagina inicial informar o email {string}")
	public void naPaginaInicialInformarOEmail(String email) {
		Na(AcessarContaPage.class).inserirEmail(email);
		}
	
	
	@Quando("a senha {string}")
	public void aSenha(String senha) {
		Na(AcessarContaPage.class).inserirSenha(senha);
	}

	@Quando("clicar em acessar")
	public void clicarEmAcessar() {
		Na(AcessarContaPage.class).botaoAcessar();
	}

	@Quando("retorna mensagem de senha invalida")
	public void retornaMensagemDeSenhaInvalida() {
		Na(AcessarContaPage.class).senhaInvalida();
	}

	@Quando("a conta estiver criada")
	public void aContaEstiverCriada() throws InterruptedException {
		Na(AcessarContaPage.class).criarContaRapido();
	}

	@Quando("mostrara usuario logado")
	public void mostraraUsuarioLogado() {
		Na(AcessarContaPage.class).mostrarLogar();
	}

}
