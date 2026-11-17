// Task 1: Calculate a bill including tip, then split it evenly.

const billForm = document.getElementById("billForm");

billForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const bill = Number(document.getElementById("billAmount").value);
    const tipRate = Number(document.getElementById("tipRate").value);
    const people = Number(document.getElementById("people").value);
    const errors = [];

    // Validate each value before doing the calculation.
    if (!Number.isFinite(bill) || bill <= 0) {
        errors.push("Enter a bill amount greater than 0.");
    }

    if (![0, 5, 10, 15, 20].includes(tipRate)) {
        errors.push("Choose a valid tip rate.");
    }

    if (!Number.isInteger(people) || people < 1) {
        errors.push("Enter a whole number of people (at least 1).");
    }

    const errorBox = document.getElementById("errors");
    const resultBox = document.getElementById("result");

    if (errors.length > 0) {
        errorBox.innerHTML = "<ul>" + errors.map(message => `<li>${message}</li>`).join("") + "</ul>";
        resultBox.hidden = true;
        return;
    }

    errorBox.textContent = "";

    // DEBUGGING PRACTICE:
    // 1. Put a breakpoint on the next line in your browser's Sources panel.
    // 2. Click Calculate split on the page.
    // 3. Use Step over to move through the calculation.
    // 4. Inspect bill, tipRate, people, tip and total in the Scope panel.
    const tip = bill * (tipRate / 100);
    const total = bill + tip;
    const share = total / people;

    // Display currency to two decimal places.
    document.getElementById("originalBill").textContent = formatMoney(bill);
    document.getElementById("tipAmount").textContent = formatMoney(tip);
    document.getElementById("totalBill").textContent = formatMoney(total);
    document.getElementById("perPerson").textContent = formatMoney(share);

    resultBox.hidden = false;
});

function formatMoney(amount) {
    return "Rs. " + amount.toFixed(2);
}
