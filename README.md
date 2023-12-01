# Env2SecretManager

Este projeto ajuda você a importar um arquivo .env para um secret manager na AWS.

# Executar projeto

- Garregue o seu arquivo .env para dentro da pasta raiz do projeto
- Configure as credenciais da AWS no arquivo `index.js`
- Configure o seu secret manager no arquivo `index.js`
- Execute `npm start` para importar as secrets

# Como usar um secret manager no seu projeto

Para usar o AWS Secret Manager em seu projeto, você pode usar uma ação personalizada para gerar seu ambiente e construir sua imagem docker com seus segredos.


```
- name: Store ENV file from AWS SecretsManager
  uses: say8425/aws-secrets-manager-actions@v2
  with:
    AWS_ACCESS_KEY_ID: ${{secrets.CICD_SECRETS_PRODUCTION_ACCESS_KEY_ID}}
    AWS_SECRET_ACCESS_KEY: ${{secrets.CICD_SECRETS_PRODUCTION_ACCESS_KEY}}
    AWS_DEFAULT_REGION: sa-east-1
    SECRET_NAME: ${{secrets.CICD_SECRETS_PRODUCTION_NAME}}
    OUTPUT_PATH: '.env'
```


# Autor

- [Maik Braga](https://github.com/maikvortx)
