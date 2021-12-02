var fs = require("fs");

var array = fs.readFileSync("02-input.txt").toString().split("\n");
//array = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"];

var aim = 0;
var horizontal = 0;
var depth = 0;

function calculate(args) {
        for (let x = 0; x < args.length; x++) {
                command = args[x];
                commandArray = command.split(" ");
                direction = commandArray[0];
                unit = commandArray[1];

                switch (direction) {
                        case "forward":
                                horizontal = Number(horizontal) + Number(unit);
                                let temp = Number(aim) * Number(unit);
                                depth = Number(depth) + Number(temp);
                                break;
                        case "down":
                                aim = Number(aim) + Number(unit);
                                break;
                        case "up":
                                aim = Number(aim) - Number(unit);
                                break;
                }
        }
}

calculate(array);
console.log("Horizontal is " + horizontal);
console.log("Depth is " + depth);
console.log("Answer is " + Number(horizontal) * Number(depth));
