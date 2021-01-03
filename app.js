const minLoan = 500000;
const maxLoan = 5000000;

let interest = 0;
let emi;
let duration;

function checkLoan(e) {
    e.preventDefault();
    const amount = Number(
        document.getElementById("loanAmnt").value
    );
    const salary = Number(
        document.getElementById("mntIncome").value
    );
    const name = document.getElementById("name").value;
    if (amount > maxLoan) {
        Swal.fire(
            {
                icon: "error",
                title:
                    "<h6>The amount you entered is above our maximum</h6>",
                text: "Pls try again with new Amount",
            },
            clearFields(),
            validation()
        );
    } else if (amount > minLoan) {
        interest = 8.7 / 100;
        duration = 8 * 12;
        console.log(interest, amount);
        emi =
            (amount *
                interest *
                (1 + interest / 12) *
                duration) /
            (12 * (1 + interest / 12) * duration - 1);
        console.log(emi);
    } else {
        interest = 5.7 / 100;
        duration = 5 * 12;
        console.log(interest, amount);
        emi =
            (amount *
                interest *
                (1 + interest / 12) *
                duration) /
            (12 * (1 + interest / 12) * duration - 1);
        console.log(emi);
    }

    if (salary > emi) {
        Swal.fire(
            {
                icon: "success",
                title:
                    "<h6>Congratulation! " +
                    name +
                    " you qualified for " +
                    amount +
                    ", you'll be paying " +
                    emi +
                    " monthly for the duration of " +
                    duration +
                    " months!</h6>",
                text: "Click Ok to proceed",
                imageWidth: 400,
                imageHeight: 200,
            },
            clearFields(),
            validation()
        );
    } else if (emi > salary) {
        Swal.fire(
            {
                icon: "error",
                title:
                    "<h6>Sorry you are unable to apply today...</h6>",
                text: "Try again in few months",
            },
            clearFields(),
            validation()
        );
    }
}
function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
    document.getElementById("purpose").value = "";
    document.getElementById("exampleCheck1").checked = false;
    document.getElementById("exampleCheck2").checked = false;
    document.getElementById("loanAmnt").value = "";
    document.getElementById("mntIncome").value = "";
}

// Validation
const loaded = (window.onload = function () {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const day = document.getElementById("day");
    const year = document.getElementById("month");
    const month = document.getElementById("year");
    const purpose = document.getElementById("purpose");
    const working = document.getElementById("exampleCheck1");
    const notWorking = document.getElementById("exampleCheck2");
    const loanAmnt = document.getElementById("loanAmnt");
    const income = document.getElementById("mntIncome");

    const btn = (document.getElementById(
        "formbtn"
    ).disabled = true);

    name.onkeyup = validation;
    email.onkeyup = validation;
    day.onclick = validation;
    month.onclick = validation;
    year.onclick = validation;
    working.onclick = validation;
    notWorking.onclick = validation;
    purpose.onkeyup = validation;
    loanAmnt.onkeyup = validation;
    income.onkeyup = validation;
});

function validation() {
    console.log("im validated");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const day = document.getElementById("day").value;
    const year = document.getElementById("month").value;
    const month = document.getElementById("year").value;
    const purpose = document.getElementById("purpose").value;
    const working = document.forms.emp[0];
    const notWorking = document.forms.emp[1];
    const loanAmnt = document.getElementById("loanAmnt").value;
    const income = document.getElementById("mntIncome").value;

    const btn = document.getElementById("formbtn");

    if (
        name &&
        email &&
        day &&
        month &&
        year &&
        purpose &&
        loanAmnt &&
        income === ""
    ) {
        btn.disabled = true;
    }
    if (!working.checked && !notWorking.checked) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }

    if (working.checked) {
        notWorking.disabled = true;
    } else {
        notWorking.disabled = false;
    }
    if (notWorking.checked) {
        working.disabled = true;
    } else {
        working.disabled = false;
    }
}

document
    .getElementById("formbtn")
    .addEventListener("click", checkLoan);
