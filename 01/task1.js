var fs = require("fs");
var array = fs.readFileSync("01-input.txt").toString().split("\n");

function calculate(args) {
        let n = 1;

        for (let x = 0; x < args.length; x++) {
                let a = args[x];
                let b = args[x - 1];
                if (x >= 1) {
                        if (a > b) {
                                n++;
                        }
                }
        }
        return n;
}

console.log(calculate(array));
