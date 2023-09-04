package pageObjects;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

public class AcessarContaPage {

//	================BOTOES==================

	@FindBy(xpath = "//button[@type='submit'][contains(.,'Acessar')]")
	private WebElement btnAcessar;

	@FindBy(xpath = "//button[@type='button'][contains(.,'Registrar')]")
	private WebElement botaoregistrar;

	@FindBy(xpath = "//button[@type='submit'][contains(.,'Cadastrar')]")
	private WebElement botaoCadastrar;

	@FindBy(id = "toggleAddBalance")
	private WebElement saldo;

	@FindBy(id = "btnCloseModal")
	private WebElement botaoFechar;
	
//	================CAMPOS IMPUT==================

	@FindBy(name = "email")
	private WebElement campoInserirEmail;

	@FindBy(name = "password")
	private WebElement campoInseirSenha;
	
	@FindBy(xpath = "(//input[contains(@type,'email')])[2]")
	private WebElement campoEmail;

	@FindBy(xpath = "//input[contains(@type,'name')]")
	private WebElement campoNome;

	@FindBy(xpath = "(//input[contains(@type,'password')])[2]")
	private WebElement campoSenha;

	@FindBy(xpath = "//input[contains(@placeholder,'Informe a confirmação da senha')]")
	private WebElement confirmarSenha;


//	================validacoes==================

	@FindBy(xpath = "(//p[contains(@class,'input__warging')])[2]")
	private WebElement mensagemCampoObrigatorio;

	@FindBy(id = "modalText")
	private WebElement mensagemSenhaInvalida;
	
	@FindBy(id = "textName")
	private WebElement Logado;

// ==================metodos=============

	public void botaoAcessar() {
		btnAcessar.click();
	}

	public void campoObrigatorio() {
		esperarElemento(mensagemCampoObrigatorio);
		assertTrue(mensagemCampoObrigatorio.isDisplayed());
	}

	public void inserirEmail(String email) {
		campoInserirEmail.sendKeys(email);
	}

	public void inserirSenha(String senha) {
		campoInseirSenha.sendKeys(senha);
	}

	public void senhaInvalida() {
		esperarElemento(mensagemSenhaInvalida);
		assertTrue(mensagemSenhaInvalida.isDisplayed());

	}

	
	//Como a aplicação nao possui bando de dados foi necessesário criar este metodo para criar uma conta a cada cenário
	public void criarContaRapido() throws InterruptedException {
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
	}
	
	public void mostrarLogar() {
		esperarElemento(Logado);
		assertTrue(Logado.isDisplayed());
	}
}
