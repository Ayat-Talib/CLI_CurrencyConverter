#! usr/bin/env node 

import inquirer from "inquirer"

// Currency_Converter

const currency : any ={
    USD : 1, // base currency
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 278
};

let User_Answer = await inquirer.prompt(
    [
        {
        name : "from",
        type : "list",
        message : "Enter from currency",
        choices : ["USD", "EUR", "GBP", "INR", "PKR"]
        },

        {
            name : "To",
            type : "list",
            message : "Enter to currency",
            choices : ["USD", "EUR", "GBP", "INR", "PKR"],
        },

        {
            name : "Amount",
            type : "number",
            message : "Enter Your Amount: "
        }
    ]
);

let user_Currency = currency [User_Answer.from];  // Exchange rate of the 'from' currency
let to_Currency = currency [User_Answer.To]; // Exchange rate of the 'to' currency
let amount = User_Answer.Amount;

let base_amount = amount / user_Currency; // Convert amount to base currency (USD)
let converted_Amount = base_amount * to_Currency;  // Convert to desired currency
// console.log(converted_Amount);

console.log(`Converted Amount: ${converted_Amount.toFixed(2)} ${User_Answer.To}`);