const benchmark = 500000;

const amount = document.getElementById("loanAmnt").value;
const salary = document.getElementById("mntIncome").value;

let interest = 0;

function checkLoan() {
    // if (amount > benchmark) {
    //     interest = 8.7;
    //     alert(interest, amount);
    // } else {
    //     interest = 5.7;
    //     alert(interest, amount);
    // }

    alert(salary);
}

document.getElementById("formbtn").addEventListener("click", checkLoan);
