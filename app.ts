#! /usr/bin/env node

import inquirer from "inquirer";
import currency from "./currency.js";

let userAnswer = await inquirer.prompt(
    [
        {
            name:"from",
            message:"Enter from currency",
            type:"list",
            choices:["USD","EUR","INR","PKR","AED"],
        },
        {
            name:"to",
            message:"Enter to currency",
            type:"list",
            choices:["USD","EUR","INR","PKR","AED"],
        },
        {
            name:"amount",
            message:"Enter your amount",
            type:"number",
        },
    ]
)

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let givenAmount = userAnswer.amount
let baseAmount = givenAmount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);
