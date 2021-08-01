function runJava(){
    var spawn = require("child_process").spawn;
    var child = spawn('java', []);
}

module.exports = {runJava}

