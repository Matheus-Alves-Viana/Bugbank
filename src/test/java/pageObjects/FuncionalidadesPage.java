package pageObjects;

import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;
import static utils.Utils.esperarElemento;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

public class FuncionalidadesPage {

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

	@FindBy(id = "btn-EXTRATO")
	private WebElement btnExtrato;
	
	@FindBy(id = "btnBack")
	private WebElement btnVoltar;
	
	@FindBy(xpath = "//a[@class='transfer__BackText-sc-1yjpf2r-5 gWmJSZ'][contains(.,'Voltar')]")
	private WebElement fecharTransf;
	
    @FindBy(id = "btn-SAQUE")
    private WebElement btnSaque;
    
    @FindBy(id = "btn-PAGAMENTOS")
    private WebElement btnPag;
	

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
	
	@FindBy(name = "transferValue")
	private WebElement inserirValor;

//	================validacoes==================

	@FindBy(id = "textTypeTransaction")
	private WebElement aberturaDeConta;
	
	@FindBy(id = "textDescription")
	private WebElement saldoConta;
	
	@FindBy(id = "textTypeTransaction")
	private WebElement envioRealizado;
	
	@FindBy(xpath = "//p[@class='styles__Text-sc-8zteav-4 gpcLtj'][contains(.,'Funcionalidade em desenvolvimento')]")
	private WebElement funcionalidadeDesenvolvimento;
	
// ==================metodos======================
	
	public void lgnRapido() throws InterruptedException {
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
	
	public void botaoExtrato() {
		btnExtrato.click();
	}
	
	public void contaAberta() {
		esperarElemento(aberturaDeConta);
		assertTrue(aberturaDeConta.isDisplayed());
	}
	
	public void saldoEmConta() {
		esperarElemento(saldoConta);
		assertTrue(saldoConta.isDisplayed());
	}
	
	public void botaoVoltar() {
		btnVoltar.click();
	}
	
	public void botaoTranferencia() {
	botaoTransferencia.click();
	}
	
	public void inserirValor(String TED) {
		esperarElemento(inserirValor);
		inserirValor.sendKeys(TED);
	}
	
	public void transferir() {
		esperarElemento(transferir);
		transferir.click();
	}
	
	public void fecharTransf() {
		esperarElemento(btnFechar);
		btnFechar.click();
	}
	
	public void btnFecharTransf() {
		fecharTransf.click();
	}
	
	public void transacaoRealizada() {
		esperarElemento(envioRealizado);
		assertTrue(envioRealizado.isDisplayed());
	}
	
	public void saque() {
		esperarElemento(btnSaque);
		btnSaque.click();
	}
	
	public void desenvolvimento() {
		esperarElemento(funcionalidadeDesenvolvimento);
		assertTrue(funcionalidadeDesenvolvimento.isDisplayed());
	}
	
	public void botaoPagamento() {
		esperarElemento(btnPag);
		btnPag.click();
	}
}
