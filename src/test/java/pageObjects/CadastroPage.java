package pageObjects;

import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;
import static utils.Utils.esperarElemento;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

public class CadastroPage {

//	================BOTOES==================

	@FindBy(xpath = "//button[@type='button'][contains(.,'Registrar')]")
	private WebElement botaoregistrar;

	@FindBy(xpath = "//button[@type='submit'][contains(.,'Cadastrar')]")
	private WebElement botaoCadastrar;

	@FindBy(xpath = "(//img[contains(@alt,'Icon Close Eye')])[2]")
	private WebElement mostrarSenha1;

	@FindBy(xpath = "(//button[contains(@class,'login__eye')])[3]")
	private WebElement mostrarSenha2;

	@FindBy(id = "toggleAddBalance")
	private WebElement saldo;

	@FindBy(id = "btnCloseModal")
	private WebElement botaoFechar;

	@FindBy(xpath = "//button[@type='submit'][contains(.,'Acessar')]")
	private WebElement btnAcessar;

//	================CAMPOS IMPUT==================

	@FindBy(xpath = "(//input[contains(@type,'email')])[2]")
	private WebElement campoEmail;

	@FindBy(xpath = "//input[contains(@type,'name')]")
	private WebElement campoNome;

	@FindBy(xpath = "(//input[contains(@type,'password')])[2]")
	private WebElement campoSenha;

	@FindBy(xpath = "//input[contains(@placeholder,'Informe a confirmação da senha')]")
	private WebElement confirmarSenha;

	

//	================validacoes==================

	@FindBy(xpath = "//p[@id='modalText']")
	private WebElement senhasDiferentes;

	@FindBy(xpath = "//p[@class='input__warging'][contains(.,'Formato inválido')]")
	private WebElement formatoInvalido;

	@FindBy(xpath = "//p[@class='styles__Text-sc-8zteav-4 gpcLtj'][contains(.,'Nome não pode ser vazio.')]")
	private WebElement nomeObrigatorio;

	@FindBy(xpath = "(//p[@class='input__warging'][contains(.,'É campo obrigatório')])[3]")
	private WebElement campoObrigatorio;

	@FindBy(xpath = "//p[contains(.,' foi criada com sucesso')]")
	private WebElement confirmacaoCriacaoConta;

	// ==================metodos=============

	public void clicarBtnRegistrar() {
		esperarElemento(botaoregistrar);
		botaoregistrar.click();
	}

	public void campoEmail(String email) {
		campoEmail.sendKeys(email);
	}

	public void campoInserirNome(String nome) {
		campoNome.sendKeys(nome);
	}

	public void criarSenha(String senha) {
		campoSenha.sendKeys(senha);
	}

	public void confirmarSenha(String conf) {
		confirmarSenha.sendKeys(conf);
	}

	public void btnCadastrar() {
		botaoCadastrar.click();
	}

	public void senhaDiferente() {
		esperarElemento(senhasDiferentes);
		assertTrue(senhasDiferentes.isDisplayed());

	}

	public void formatoInvalido() {
		esperarElemento(formatoInvalido);
		assertTrue(formatoInvalido.isDisplayed());
	}

	public void nomeObrigatorio() {
		esperarElemento(nomeObrigatorio);
		assertTrue(nomeObrigatorio.isDisplayed());

	}

	public void campoObrigatorio() {
		esperarElemento(campoObrigatorio);
		assertTrue(campoObrigatorio.isDisplayed());

	}

	public void mostrarsenha1() {
		esperarElemento(mostrarSenha1);
		Actions actions = new Actions(driver);
		actions.moveToElement(mostrarSenha1).click().build().perform(); // foi usado este metodo pois o .click estava
																		// sendo interceptado
	}

	public void mostrarSenha2() {
		esperarElemento(mostrarSenha2);
		mostrarSenha2.click();

	}

	public void inserirSaldo() {
		saldo.click();

	}

	public void confirmacaoConta() {
		esperarElemento(confirmacaoCriacaoConta);
		assertTrue(confirmacaoCriacaoConta.isDisplayed());

	}

	public void btnFechar() {
		botaoFechar.click();
	}

	public void limparCampos() {
		campoEmail.clear();
		campoNome.clear();
		campoSenha.clear();
		confirmarSenha.clear();
	}

	
		
		
		
	
}
