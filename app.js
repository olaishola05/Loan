const btnApply = document.getElementById("btn-apply");

function openForm() {
    document.getElementById("loanForm").innerHTML = "Player nine";
}

btnApply.addEventListener("click", openForm);
