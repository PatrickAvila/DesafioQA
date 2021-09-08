package br.ce.pavila.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class InserirContasPage {

	public WebDriver driver;
	
	public void acessarUrl() {
		driver = new ChromeDriver();
		driver.get("http://prova.stefanini-jgr.com.br/teste/qa/");
		driver.manage().window().maximize();
	}
		
	public void adicionarConta(String nome, String email, String senha) {
		driver.findElement(By.id("name")).sendKeys(nome);
		driver.findElement(By.id("email")).sendKeys(email);
		driver.findElement(By.id("password")).sendKeys(senha);
		driver.findElement(By.id("register")).click();
	}
	
	public void validarUsuarioCadastrado(String id, String nome, String email) {
		String idTabela = driver.findElement(By.id("tdUserId"+id)).getText();
	    Assert.assertEquals(id, idTabela);
	    String nomeTabela = driver.findElement(By.id("tdUserName"+id)).getText();
	    Assert.assertEquals(nome, nomeTabela);
	    String emailTabela = driver.findElement(By.id("tdUserEmail"+id)).getText();
	    Assert.assertEquals(email, emailTabela);	
	}
	
	public void excluirUsuario(String id){
		driver.findElement(By.id("removeUser"+id)).click();
	}
	
	public void validarCampoObrigatorio(String campo) {
		if(campo == "Todos") {
			String mensagemNome = driver.findElement(By.xpath("//label/following-sibling::p[contains(text(),\'O campo Nome é obrigatório.\')]")).getText();
			Assert.assertEquals("O campo Nome é obrigatório.", mensagemNome);
			String mensagemEmail = driver.findElement(By.xpath("//label/following-sibling::p[contains(text(),\'O campo E-mail é obrigatório.\')]")).getText();
			Assert.assertEquals("O campo E-mail é obrigatório.", mensagemEmail);
			String mensagemSenha = driver.findElement(By.xpath("//label/following-sibling::p[contains(text(),\'O campo Senha é obrigatório.\')]")).getText();
			Assert.assertEquals("O campo Senha é obrigatório.", mensagemSenha);
		}else if(campo == "Nome" || campo== "E-mail" || campo== "Senha"){
			String mensagem = driver.findElement(By.xpath("//label/following-sibling::p[contains(text(),\'O campo "+campo+" é obrigatório.\')]")).getText();
			Assert.assertEquals("O campo "+campo+" é obrigatório.", mensagem);
		}
	}
	
	public void validarInformaçõesValidas(String campo) {
		if(campo == "Senha") 
		{
			String mensagemNome = driver.findElement(By.xpath("//label/following-sibling::p[contains(text(),\'A senha deve conter ao menos 8 caracteres.\')]")).getText();
			Assert.assertEquals("A senha deve conter ao menos 8 caracteres.", mensagemNome);
		} 
		else if(campo == "Nome") 
		{
			String mensagemNome = driver.findElement(By.xpath("//label/following-sibling::p[contains(text(),\'Por favor, insira um nome completo.\')]")).getText();
			Assert.assertEquals("Por favor, insira um nome completo.", mensagemNome);
		} 
		else if(campo == "E-mail") 
		{
			String mensagemNome = driver.findElement(By.xpath("//label/following-sibling::p[contains(text(),\'Por favor, insira um e-mail válido.\')]")).getText();
			Assert.assertEquals("Por favor, insira um e-mail válido.", mensagemNome);
		}
		else if(campo == "Todos") 
		{
			String mensagemNome = driver.findElement(By.xpath("//label/following-sibling::p[contains(text(),\'A senha deve conter ao menos 8 caracteres.\')]")).getText();
			Assert.assertEquals("A senha deve conter ao menos 8 caracteres.", mensagemNome);
			String mensagemNome2 = driver.findElement(By.xpath("//label/following-sibling::p[contains(text(),\'Por favor, insira um nome completo.\')]")).getText();
			Assert.assertEquals("Por favor, insira um nome completo.", mensagemNome2);
			String mensagemNome3 = driver.findElement(By.xpath("//label/following-sibling::p[contains(text(),\'Por favor, insira um e-mail válido.\')]")).getText();
			Assert.assertEquals("Por favor, insira um e-mail válido.", mensagemNome3);
		}
	}
		
	public void fecharBrowser() {
		driver.quit();
	}
	
}
