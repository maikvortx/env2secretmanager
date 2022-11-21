# Create Secret Manager from env

This projet helps you to import your secrets from .env file to AWS.

# Run

- Upload your env file to root folder
- Configure your aws credentials in `index.js`
- Configure your secret name in `index.js`
- Run `npm start` to import secrets

# Using secret in your project

To use AWS Secret Manager in your project you can use a custom Action to gererate your env and build your docker image with your secrets

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
