"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var input = await inquirer_1["default"].prompt([
    {
        name: "userid",
        type: "string",
        message: "Please Enter Your ID"
    },
    {
        name: "pin",
        type: "number",
        message: "Please enter your PIN",
        when: function (answers) {
            return answers.userid;
        }
    },
    {
        name: "acctype",
        type: "list",
        choices: ["current account", "saving account"],
        message: "please enter your type",
        when: function (answers) {
            return answers.pin;
        }
    },
    {
        name: "options",
        type: "list",
        choices: ["fast cash", "cash withdraw"],
        message: "choose given below",
        when: function (answers) {
            return answers.acctype;
        }
    },
    {
        name: "cashamount",
        type: "list",
        choices: [1000, 3000, 5000, 10000],
        message: "choose amount",
        when: function (answers) {
            return answers.options === "fast cash";
        }
    },
    {
        name: "cashamount",
        type: "number",
        message: "choose amount",
        when: function (answers) {
            return answers.options === "cash withdraw";
        }
    },
]);
var userid = input.userid, pin = input.pin, acctype = input.acctype, option = input.option, cashamount = input.cashamount;
var balance = Math.floor(Math.random() * 100000);
if (userid && pin && cashamount) {
    console.log(balance);
    if (balance > cashamount) {
        var currentbalance = balance - cashamount;
        console.log("transaction successsful. \n your currentbalance is ".concat(currentbalance));
    }
    else {
        console.log("insuficient balance");
    }
}
