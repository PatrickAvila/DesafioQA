#language: pt
@funcionais
Funcionalidade: Cadastro_de_usuários

	EU COMO usuário do sistema.
	DESEJO realizar o cadastro de novos usuários.
	PARA QUE seja possível armazenar e gerenciar seus dados.

Contexto: 
Dado acesso Url

Cenário: Cadastrar um usuário
	Quando desejo cadastrar um usuário com nome: Patrick Avila, email: patrick_avila99@outlook.com e senha: 12345678
	Entao valido usuário cadastrado com id: 1, nome: Patrick Avila, email: patrick_avila99@outlook.com
	
Esquema do Cenario: Validar os campos obrigatorios
	Quando desejo cadastrar um usuário com nome: <nome>, email: <email> e senha: <senha>
	Entao valido mensagem de campo obrigatório para <campo>
	
Exemplos:

	|nome						 |email											 |senha		|campo |
	|    						 |patrick_avila99@outlook.com|12345678|Nome	 |
	|Patrick Avila   |													 |12345678|E-mail|
	|Patrick Avila   |patrick_avila99@outlook.com|				|Senha |
	|							   |													 |				|Todos |
	
Esquema do Cenario: Validar informações validas
	Quando desejo cadastrar um usuário com nome: <nome1>, email: <email2> e senha: <senha3>
	Entao valido mensagem de informação valida no campo <campo1>
	
Exemplos:

	|nome1					 |email2										 |senha3	|campo1|
	|Patrick				 |patrick_avila99@outlook.com|12345678|Nome	 |
	|Patrick Avila   |patrick_avila99@outlook.c  |12345678|E-mail|
	|Patrick Avila   |patrick_avila99@outlook.com|1234567 |Senha |
	|Patrick				 |patrick_avila99@outlook.c  |1234567 |Todos |
	
Cenário: Cadastrar dois usuários e excluir o primeiro
	Quando desejo cadastrar um usuário com nome: Patrick Avila, email: patrick_avila99@outlook.com e senha: 12345678
	E desejo cadastrar um usuário com nome: Adriano Avila, email: adriano_avila93@outlook.com e senha: 123456789
	Entao valido usuário cadastrado com id: 1, nome: Patrick Avila, email: patrick_avila99@outlook.com
	Entao valido usuário cadastrado com id: 2, nome: Adriano Avila, email: adriano_avila93@outlook.com
	Mas excluo usuário com id 1
	Entao valido usuário cadastrado com id: 2, nome: Adriano Avila, email: adriano_avila93@outlook.com