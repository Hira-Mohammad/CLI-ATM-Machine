#! /usr/bin/env node
import inquirer from "inquirer";
let totalBalance = 100000;
const pinCode = 2233;
let pinAnswer = await inquirer.prompt([
    {
        name: 'pin',
        type: 'number',
        message: 'Enter Your pinCode',
    }
]);
if (pinAnswer.pin === pinCode) {
    console.log("Welcome to your account!!!!!");
    let operationsAnswer = await inquirer.prompt([
        {
            name: 'operation',
            type: 'list',
            message: 'Select Your operation',
            choices: [
                'withdraw',
                'fastCash',
                'balanceInquiry',
            ]
        }
    ]);
    if (operationsAnswer.operation === "withdraw") {
        let withdrawalAmount = await inquirer.prompt([
            {
                name: 'amount',
                type: 'number',
                message: 'Please Enter Your Amount'
            }
        ]);
        if (totalBalance < withdrawalAmount.amount)
            console.log("Insufficient Balance");
        else
            (totalBalance -= withdrawalAmount.amount);
        console.log("Your Remaining Balance is:" + totalBalance);
    }
    else if (operationsAnswer.operation === "fastCash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "Please select your amount",
                choices: ['1000', '3000', '5000', '10000']
            }
        ]);
        (totalBalance -= fastCashAns.amount);
        console.log("transaction completed,your remaining account balance is:" + totalBalance);
    }
    else if (operationsAnswer.operation === "balanceInquiry") {
        console.log("your current balance is:" + totalBalance);
    }
}
else {
    console.log("Incorrect pincode! Please Try Again");
}
