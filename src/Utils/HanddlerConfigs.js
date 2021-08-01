const fs = require('fs');

function save(path, content){
    const contentString = JSON.stringify(content)
    return fs.writeFileSync(path, contentString)
}

function load(path){
    const fileBuffer = fs.readFileSync(path, 'utf-8')
    const contentJson = JSON.parse(fileBuffer)
    console.log(contentJson)
    return contentJson
}

function teste(path, content){
    console.log( path, content)
}

module.exports = {
    save,
    load,
    teste
}