const readline = require('readline-sync');
const retentions = require('./retention');
const year = 5;
const inflationRatePerYear = readline.question('What is the inflation rate in per year? :- ');
const inflationRate = parseInt(inflationRatePerYear);

let inflationMonth = 12; 
let rowM = 0;
let columnM = 0;
let dicOfRevenue = {};
let amtPerSubscription = 650;
let revenue_rate = 40;


for(columnM; columnM<60; columnM++){
    let numberOfSubscriber = 0;
    let revenueOfMoth = 0;
    let month = 'month';
    rowM = columnM;
    let count = 1;

    for(rowM; rowM >= 0; rowM --){
        
        if(count === inflationMonth){
            inflationMonth = inflationMonth + 12;
            let inflation = parseInt(amtPerSubscription*inflationRate/100);
            amtPerSubscription = amtPerSubscription + inflation;
        }
        month = "month" + count;
        numberOfSubscriber = numberOfSubscriber + retentions['listOfRetentions'][month][rowM];
        count = count + 1;
    }
    revenueOfMonth = (numberOfSubscriber*amtPerSubscription)*revenue_rate/100;
    revenueOfMonth = parseInt(revenueOfMonth);
    dicOfRevenue[month] = revenueOfMonth;
}

console.log(dicOfRevenue);