import inquirer from "inquirer";

(async () => {
  const userinput: { userid: string; userpin: string } = await inquirer.prompt([
    {
      name: `userid`,
      message: `Enter Your ID`,
      type: `input`,
    },
    {
      name: `userpin`,
      message: `Enter your pin`,
      type: `password`,
    },
  ]);
  const userdata = {
    userid: userinput.userid,
    userpin: userinput.userpin,
    amount: Math.floor(Math.random() * 100000 + 1),
  };
  const selectoption: { options: `cash withdraw` | `exit` } =
    await inquirer.prompt([
      {
        name: `options`,
        message: `select any option`,
        type: `list`,
        choices: [`cash withdraw`, `exit`],
      },
    ]);
  if (selectoption.options === `cash withdraw`) {
    console.log(`your current amount is ${userdata.amount}`);
    const enteramount: { amount: number } = await inquirer.prompt([
      {
        message: `enter your amount`,
        name: `amount`,
        type: `number`,
        validate: (input) => {
          if (input > userdata.amount) {
            return `insufficent balance`;
          } else {
            return true;
          }
        },
      },
    ]);
    userdata.amount -= enteramount.amount;
    console.log(`your remaining amount is `, userdata.amount);
  }
})();
