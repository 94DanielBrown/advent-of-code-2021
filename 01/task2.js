var fs = require("fs");
var array = fs.readFileSync("01-input.txt").toString().split("\n");
//var array = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

const calculateNewArray = (inputArray) => {
        let outputArray = [];
        for (let i = 0; i < inputArray.length; i += 1) {
                a = inputArray[i];
                b = inputArray[i + 1];
                c = inputArray[i + 2];
                ans = Number(a) + Number(b) + Number(c);
                outputArray.push(ans);
        }
        return outputArray;
};

const calculate = (args) => {
        let n = 0;

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
};

let newArray = calculateNewArray(array);
console.log(calculateNewArray(array));
console.log(calculate(newArray));
