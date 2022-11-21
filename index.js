const { SecretsManagerClient, CreateSecretCommand } = require("@aws-sdk/client-secrets-manager")
const env2json = require("./env2json")

const REGION = "sa-east-1"
const ACCESS_KEY = ""
const SECRET_KEY = ""
const SECRET_NAME = "stg/onegestor-api"
const SECRET_DESCRIPTION = "Secrets Manager para controlar as variáveis de ambiente da aplicação One Gestor API"

async function run() {

    const envKeysExtracted = env2json('.env-stg')

    const client = new SecretsManagerClient({
        region: REGION, credentials: {
            accessKeyId: ACCESS_KEY,
            secretAccessKey: SECRET_KEY
        }
    })

    const command = new CreateSecretCommand({
        Description: SECRET_DESCRIPTION,
        SecretString: JSON.stringify(envKeysExtracted),
        Name: SECRET_NAME
    })

    try {
        const data = await client.send(command)
        console.log({ data })
    } catch (error) {
        const { requestId, cfId, extendedRequestId } = error.$$metadata
        console.log({ requestId, cfId, extendedRequestId })
    }
}

run()