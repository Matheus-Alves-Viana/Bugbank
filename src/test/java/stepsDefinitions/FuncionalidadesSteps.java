package stepsDefinitions;

import static utils.Utils.*;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.FuncionalidadesPage;

public class FuncionalidadesSteps {

	@Dado("que na pagina inicial")
	public void queNaPaginaInicial() throws InterruptedException {
		Na(FuncionalidadesPage.class).lgnRapido();
	}

	@Quando("acionar o botao extrato")
	public void acionarOBotaoExtrato() {
		Na(FuncionalidadesPage.class).botaoExtrato();
	}

	@Entao("verificar abertura de conta")
	public void verificarAberturaDeConta() {
		Na(FuncionalidadesPage.class).contaAberta();
		;
	}

	@Quando("e verificar se ha quantia em conta")
	public void eVerificarSeHaQuantiaEmConta() {
		Na(FuncionalidadesPage.class).saldoEmConta();
	}

	@Quando("acionar botao voltar")
	public void acionarBotaoVoltar() {
		Na(FuncionalidadesPage.class).botaoVoltar();
	}

	@Quando("acionar o botao transferirencia")
	public void acionarOBotaoTransferirencia() {
		Na(FuncionalidadesPage.class).botaoTranferencia();
	}

	@Quando("por o valor {string}")
	public void porOValor(String TED) {
		Na(FuncionalidadesPage.class).inserirValor(TED);
	}

	@Quando("efetuar uma transferencia")
	public void efetuarUmaTransferencia() {
		Na(FuncionalidadesPage.class).transferir();
	}

	@Quando("acionar botao fechar transferencia")
	public void acionarBotaoFecharTransferencia() {
		Na(FuncionalidadesPage.class).fecharTransf();
	}

	@Quando("botao voltar")
	public void botaoVoltar() {
		Na(FuncionalidadesPage.class).btnFecharTransf();
	}

	@Entao("verificar se foi executada a tranferencia")
	public void verificarSeFoiExecutadaATranferencia() {
		Na(FuncionalidadesPage.class).transacaoRealizada();
	}

	@Quando("acionar o botao saque")
	public void acionarOBotaoSaque() {
		Na(FuncionalidadesPage.class).saque();
	}

	@Entao("retorna mensagem de funcionalidade em desemvolvimento")
	public void retornaMensagemDeFuncionalidadeEmDesemvolvimento() {
		Na(FuncionalidadesPage.class).desenvolvimento();
	}

	@Quando("acionar o pagamentos")
	public void acionarOPagamentos() {
		Na(FuncionalidadesPage.class).botaoPagamento();
	}

}
