package br.ce.pavila.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import br.ce.pavila.pages.InserirContasPage;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Mas;
import io.cucumber.java.pt.Quando;

public class InserirContasSteps {
	
	InserirContasPage _contasPage = new InserirContasPage();
	
	@Dado("^acesso Url$")
	public void acessoUrl() throws Throwable {
		_contasPage.acessarUrl();
	}

	@Quando("^desejo cadastrar um usuário com nome: (.*), email: (.*) e senha: (.*)$")
	public void queDesejoAdicionarUmaConta(String nome, String email, String senha) throws Throwable {
		_contasPage.adicionarConta(nome,email,senha);
	}

	@Mas("^excluo usuário com id (.*)$")
	public void excluoUsuario(String id) throws Throwable {
		_contasPage.excluirUsuario(id);
	}
	
	@Então("^valido usuário cadastrado com id: (.*), nome: (.*), email: (.*)$")
	public void receboAMensagem(String id, String nome, String email) throws Throwable {
		_contasPage.validarUsuarioCadastrado(id, nome, email);
	}
		
	@Então("^valido mensagem de campo obrigatório para (.*)$")
	public void validoMensagemCampoObrigatorio(String campo) {	
		_contasPage.validarCampoObrigatorio(campo);
	}
	
	@Então("^valido mensagem de informação valida no campo (.*)$")
	public void validoMensagemInformaçõesValidas(String campo) {	
		_contasPage.validarInformaçõesValidas(campo);
	}
	
	@AfterStep(order = 1, value = "@funcionais")
	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot)_contasPage.driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshot/"+cenario.getName()+"/"+cenario.getLine()+".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@After(order = 0, value = "@funcionais")
	public void fecharBrowser() {
		_contasPage.fecharBrowser();
	}
}
