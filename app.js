const benchmark = 500000;

let interest = 0;
let emi;
let duration;

function checkLoan() {
    const amount = document.getElementById("loanAmnt").value;
    const salary = document.getElementById("mntIncome").value;

    if (amount > benchmark) {
        interest = 8.7 / 100;
        duration = 8 * 12;
        console.log(interest, amount);
        emi = (amount * interest * (1 + interest / 12) * duration) / (12 * (1 + interest / 12) * duration - 1);
        console.log(emi);
    } else {
        interest = 5.7 / 100;
        duration = 5 * 12;
        console.log(interest, amount);
        emi = (amount * interest * (1 + interest / 12) * duration) / (12 * (1 + interest / 12) * duration - 1);
        console.log(emi);
    }

    if (emi >= salary) {
        console.log("sorry you are not qualified today, you can check back in few weeks");
    } else {
        alert("congratulation, we will get back to u asap");
    }
}

document.getElementById("formbtn").addEventListener("click", checkLoan);
