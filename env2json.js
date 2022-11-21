const fs = require('fs')

function env2json(path) {
    const fileJson = {}
    if (!fs.existsSync(path)) throw Error('File does\'t exists')
    const allFileContents = fs.readFileSync(path, 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line => {
        if (line.startsWith("#")) return
        const [key, value] = line.split('=')
        if (key) fileJson[key] = value
    });
    return fileJson
}

module.exports = env2json