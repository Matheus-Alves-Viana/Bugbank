package stepsDefinitions;

import static utils.Utils.*;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TransferenciaPage;

public class TransferenciaSteps {

	@Dado("que estiver logado")
	public void queEstiverLogado() throws InterruptedException {
		Na(TransferenciaPage.class).loginRapido();
	}

	@Quando("clicar em tranferencia")
	public void clicarEmTranferencia() {
		Na(TransferenciaPage.class).btnTransf();
	}

	@Quando("informar o numero da conta {string}")
	public void informarONumeroDaConta(String conta) {
		Na(TransferenciaPage.class).numCont(conta);
	}

	@Quando("informar o digito {string}")
	public void informarODigito(String digito) {
		Na(TransferenciaPage.class).digCont(digito);
	}

	@Quando("informar o valor da transferencia {string}")
	public void informarOValorDaTransferencia(String quantia) {
		Na(TransferenciaPage.class).valTranf(quantia);
	}

	@Quando("por uma descricao {string}")
	public void porUmaDescricao(String pix) {
		Na(TransferenciaPage.class).mensagensDoPix(pix);
	}

	@Quando("acionar o botao transferir")
	public void acionarOBotaoTransferir() {
		Na(TransferenciaPage.class).escorregaPix();
	}

	@Entao("aparece mensagem de conta invalida ou inexistente")
	public void apareceMensagemDeContaInvalidaOuInexistente() {
		Na(TransferenciaPage.class).contaInvalida();
	}

	@Entao("aparece transferencia realizada com sucesso")
	public void apareceTransferenciaRealizadaComSucesso() {
		Na(TransferenciaPage.class).tranferenciaRealizada();
	}

	@Entao("aparece mensagem de invalido")
	public void apareceMensagemDeInvalido() {
		Na(TransferenciaPage.class).tranfComLetras();
	}

	@Entao("acionar botao fechar")
	public void acionarBotaoFechar() {
		Na(TransferenciaPage.class).botaoFechar();
	}

	@Entao("limpar o campo valor da transferencia")
	public void limparOCampoValorDaTransferencia() {
		Na(TransferenciaPage.class).limparCampo();
	}

	@Entao("limpar o campo descricao")
	public void limparOCampoDescricao() {
		Na(TransferenciaPage.class).limparDesc();
	}

	@Entao("mostra mensagem de saldo insuficiente")
	public void mostraMensagemDeSaldoInsuficiente() {
		Na(TransferenciaPage.class).semSaldo();
	}

}
