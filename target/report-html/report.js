$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "name": "Cadastro_de_usuários",
  "description": "\tEU COMO usuário do sistema.\n\tDESEJO realizar o cadastro de novos usuários.\n\tPARA QUE seja possível armazenar e gerenciar seus dados.",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "acesso Url",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.acessoUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Cadastrar um usuário",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: Patrick Avila, email: patrick_avila99@outlook.com e senha: 12345678",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "valido usuário cadastrado com id: 1, nome: Patrick Avila, email: patrick_avila99@outlook.com",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validar os campos obrigatorios",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: \u003cnome\u003e, email: \u003cemail\u003e e senha: \u003csenha\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "valido mensagem de campo obrigatório para \u003ccampo\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha",
        "campo"
      ]
    },
    {
      "cells": [
        "",
        "patrick_avila99@outlook.com",
        "12345678",
        "Nome"
      ]
    },
    {
      "cells": [
        "Patrick Avila",
        "",
        "12345678",
        "E-mail"
      ]
    },
    {
      "cells": [
        "Patrick Avila",
        "patrick_avila99@outlook.com",
        "",
        "Senha"
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "Todos"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "acesso Url",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.acessoUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar os campos obrigatorios",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: , email: patrick_avila99@outlook.com e senha: 12345678",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "valido mensagem de campo obrigatório para Nome",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.validoMensagemCampoObrigatorio(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "acesso Url",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.acessoUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar os campos obrigatorios",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: Patrick Avila, email:  e senha: 12345678",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "valido mensagem de campo obrigatório para E-mail",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.validoMensagemCampoObrigatorio(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "acesso Url",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.acessoUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar os campos obrigatorios",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: Patrick Avila, email: patrick_avila99@outlook.com e senha: ",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "valido mensagem de campo obrigatório para Senha",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.validoMensagemCampoObrigatorio(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "acesso Url",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.acessoUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar os campos obrigatorios",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: , email:  e senha: ",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "valido mensagem de campo obrigatório para Todos",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.validoMensagemCampoObrigatorio(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validar informações validas",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: \u003cnome1\u003e, email: \u003cemail2\u003e e senha: \u003csenha3\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "valido mensagem de informação valida no campo \u003ccampo1\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome1",
        "email2",
        "senha3",
        "campo1"
      ]
    },
    {
      "cells": [
        "Patrick",
        "patrick_avila99@outlook.com",
        "12345678",
        "Nome"
      ]
    },
    {
      "cells": [
        "Patrick Avila",
        "patrick_avila99@outlook.c",
        "12345678",
        "E-mail"
      ]
    },
    {
      "cells": [
        "Patrick Avila",
        "patrick_avila99@outlook.com",
        "1234567",
        "Senha"
      ]
    },
    {
      "cells": [
        "Patrick",
        "patrick_avila99@outlook.c",
        "1234567",
        "Todos"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "acesso Url",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.acessoUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar informações validas",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: Patrick, email: patrick_avila99@outlook.com e senha: 12345678",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "valido mensagem de informação valida no campo Nome",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.validoMensagemInformaçõesValidas(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "acesso Url",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.acessoUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar informações validas",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: Patrick Avila, email: patrick_avila99@outlook.c e senha: 12345678",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "valido mensagem de informação valida no campo E-mail",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.validoMensagemInformaçõesValidas(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "acesso Url",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.acessoUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar informações validas",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: Patrick Avila, email: patrick_avila99@outlook.com e senha: 1234567",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "valido mensagem de informação valida no campo Senha",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.validoMensagemInformaçõesValidas(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "acesso Url",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.acessoUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar informações validas",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: Patrick, email: patrick_avila99@outlook.c e senha: 1234567",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "valido mensagem de informação valida no campo Todos",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.validoMensagemInformaçõesValidas(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "acesso Url",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.acessoUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Cadastrar dois usuários e excluir o primeiro",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: Patrick Avila, email: patrick_avila99@outlook.com e senha: 12345678",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "desejo cadastrar um usuário com nome: Adriano Avila, email: adriano_avila93@outlook.com e senha: 123456789",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "valido usuário cadastrado com id: 1, nome: Patrick Avila, email: patrick_avila99@outlook.com",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "valido usuário cadastrado com id: 2, nome: Adriano Avila, email: adriano_avila93@outlook.com",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "excluo usuário com id 1",
  "keyword": "Mas "
});
formatter.match({
  "location": "InserirContasSteps.excluoUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "valido usuário cadastrado com id: 2, nome: Adriano Avila, email: adriano_avila93@outlook.com",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});