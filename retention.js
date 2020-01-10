const readline = require('readline-sync');

const retentionList = [85,75,65,60,57,54,51,49,46,43,40,38,36,34,32,30,28,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,5,4,4,4,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2]
const salesMan = readline.question("How many sales persons are working? :- ");
const salesPerson = parseInt(salesMan);
const trailPersons = readline.question('How many sign ups are there in a day? :- ');
const trailPerson = parseInt(trailPersons);
const noShowPerMonth = readline.question('what is the percentage of no show? :- ');
const noShow = parseInt(noShowPerMonth);
const numOfWorkingDays = readline.question('Working Days? :- ');
const numberOfWorkingDays = parseInt(numOfWorkingDays);

function retentionListOfSubs(){
    const dicOfSubscribedList = {};
    let month = 1
    
    for(month; month<=60; month++){
        sinUp = salesPerson*trailPerson*numberOfWorkingDays;
        const firstSubs = sinUp-(sinUp*noShow/100)
        const subscribedList = []
       	let retentionM = 0;
        subscribedList.push(firstSubs);
        const length = retentionList.length - (month-1);

        for (retentionM; retentionM<length; retentionM++){
            const retentionOfMonth = firstSubs*retentionList[retentionM]/100;
            const intoInt = Math.floor(retentionOfMonth);
            subscribedList.push(intoInt);
        }
        var str = "month" + month;
        dicOfSubscribedList[str] = subscribedList;
    }
    return dicOfSubscribedList;
}

const listOfRetentions = retentionListOfSubs();
// console.log(listOfRetentions);

signUp = salesPerson*trailPerson*numberOfWorkingDays
subs = signUp-(signUp*noShow/100)
var month = 1;
let total_months = 60;
var str = "month";
function furtherRetentions(){
	let dict = listOfRetentions;
	fur_dic_key = 61;
	let fur_mnth = {}
	for(month; month <= total_months; month++){
		let fur_reten_lst = []
		let key = str + month;
		let start = dict[key].length
		for (start; start < total_months; start++){
				fur_reten = parseInt(subs*retentionList[start-1]/100);
				fur_reten_lst.push(fur_reten);
		}
		fur_mnth[str + fur_dic_key] = fur_reten_lst
		fur_dic_key++;
	}
	return fur_mnth;
}

console.log(furtherRetentions())


// console.log(typeof(listOfRetentions));
// console.log(JSON.stringify(listOfRetentions));
module.exports.listOfRetentions = listOfRetentions;