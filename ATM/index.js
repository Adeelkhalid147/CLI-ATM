import inquirer from "inquirer";
let input = await inquirer.prompt([
    {
        name: `userid`,
        type: `string`,
        message: `Please Enter Your ID`,
    },
    {
        name: `pin`,
        type: `number`,
        message: `Please enter your PIN`,
        when(answers) {
            return answers.userid;
        },
    },
    {
        name: `acctype`,
        type: `list`,
        choices: [`current account`, `saving account`],
        message: `please enter your type`,
        when(answers) {
            return answers.pin;
        },
    },
    {
        name: `options`,
        type: `list`,
        choices: [`fast cash`, `cash withdraw`],
        message: `choose given below`,
        when(answers) {
            return answers.acctype;
        },
    },
    {
        name: `cashamount`,
        type: `list`,
        choices: [1000, 3000, 5000, 10000],
        message: `choose amount`,
        when(answers) {
            return answers.options === `fast cash`;
        },
    },
    {
        name: `cashamount`,
        type: `number`,
        message: `choose amount`,
        when(answers) {
            return answers.options === `cash withdraw`;
        },
    },
]);
const { userid, pin, acctype, option, cashamount } = input;
let balance = Math.floor(Math.random() * 100000);
if (userid && pin && cashamount) {
    console.log(balance);
    if (balance > cashamount) {
        let currentbalance = balance - cashamount;
        console.log(`transaction successsful. \n your currentbalance is ${currentbalance}`);
    }
    else {
        console.log(`insuficient balance`);
    }
}
