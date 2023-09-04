package pageObjects;

import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;
import static utils.Utils.esperarElemento;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

public class TransferenciaPage {

//	================BOTOES==================
	@FindBy(xpath = "//button[@type='button'][contains(.,'Registrar')]")
	private WebElement botaoregistrar;

	@FindBy(xpath = "//button[@type='submit'][contains(.,'Cadastrar')]")
	private WebElement botaoCadastrar;

	@FindBy(id = "toggleAddBalance")
	private WebElement saldo;

	@FindBy(id = "btnCloseModal")
	private WebElement botaoFechar;

	@FindBy(xpath = "//button[@type='submit'][contains(.,'Acessar')]")
	private WebElement btnAcessar;

	@FindBy(id = "btn-TRANSFERÊNCIA")
	private WebElement botaoTransferencia;

	@FindBy(xpath = "//button[@type='submit'][contains(.,'Transferir agora')]")
	private WebElement transferir;

	@FindBy(id = "btnCloseModal")
	private WebElement btnFechar;

//	================CAMPOS IMPUT==================

	@FindBy(xpath = "(//input[contains(@type,'email')])[2]")
	private WebElement campoEmail;

	@FindBy(xpath = "//input[contains(@type,'name')]")
	private WebElement campoNome;

	@FindBy(xpath = "(//input[contains(@type,'password')])[2]")
	private WebElement campoSenha;

	@FindBy(xpath = "//input[contains(@placeholder,'Informe a confirmação da senha')]")
	private WebElement confirmarSenha;

	@FindBy(name = "email")
	private WebElement campoInserirEmail;

	@FindBy(name = "password")
	private WebElement campoInseirSenha;

	@FindBy(name = "accountNumber")
	private WebElement numConta;

	@FindBy(name = "digit")
	private WebElement digitoConta;

	@FindBy(name = "transferValue")
	private WebElement valor;

	@FindBy(name = "description")
	private WebElement descricao;

//	================validacoes==================

	@FindBy(id = "modalText")
	private WebElement cntInvalida;

	@FindBy(xpath = "//p[@class='styles__Text-sc-8zteav-4 gpcLtj'][contains(.,'Transferencia realizada com sucesso')]")
	private WebElement tranfRealizada;

	@FindBy(xpath = "(//p[contains(@class,'input__warging')])[3]")
	private WebElement erroValor;
	
	@FindBy(xpath = "//p[contains(@class,'styles__Text-sc-8zteav-4 gpcLtj')]")
	private WebElement saldoInsuficiente;

// ==================metodos======================

	public void loginRapido() throws InterruptedException {
		botaoregistrar.click();
		esperarElemento(campoEmail);
		campoEmail.sendKeys("mainnoc@lolzinho.com");
		campoNome.sendKeys("Nocturne");
		campoSenha.sendKeys("Escuridao");
		confirmarSenha.sendKeys("Escuridao");
		Thread.sleep(1000);
		Actions actions = new Actions(driver);
		actions.moveToElement(saldo).click().build().perform();
		Thread.sleep(1000);
		botaoCadastrar.click();
		esperarElemento(botaoFechar);
		botaoFechar.click();
		campoInserirEmail.sendKeys("mainnoc@lolzinho.com");
		campoInseirSenha.sendKeys("Escuridao");
		btnAcessar.click();

	}

	public void btnTransf() {
		botaoTransferencia.click();
	}

	public void numCont(String conta) {
		numConta.sendKeys(conta);
	}

	public void digCont(String digito) {
		digitoConta.sendKeys(digito);
	}

	public void valTranf(String quantia) {
		valor.sendKeys(quantia);
	}

	public void mensagensDoPix(String pix) {
		descricao.sendKeys(pix);
	}

	public void escorregaPix() {
		transferir.click();
	}

	public void contaInvalida() {
		esperarElemento(cntInvalida);
		assertTrue(cntInvalida.isDisplayed());
	}

	public void tranferenciaRealizada() {
		esperarElemento(tranfRealizada);
		assertTrue(tranfRealizada.isDisplayed());
	}

	public void tranfComLetras() {
		esperarElemento(erroValor);
		assertTrue(erroValor.isDisplayed());
	}

	public void botaoFechar() {
		esperarElemento(btnFechar);
		btnFechar.click();
	}

	public void limparCampo() {
		valor.clear();
	}
	
	public void limparDesc() {
		descricao.clear();
	}
	
	public void semSaldo() {
		esperarElemento(saldoInsuficiente);
		assertTrue(saldoInsuficiente.isDisplayed());
	}
	
}
