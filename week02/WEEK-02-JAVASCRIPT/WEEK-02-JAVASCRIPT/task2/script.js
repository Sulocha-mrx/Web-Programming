// Task 2: Build the bill total from the menu items entered by the user.

const items = [];
const itemForm = document.getElementById("itemForm");
const itemList = document.getElementById("itemList");
const errorBox = document.getElementById("errors");

itemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("itemName");
    const priceInput = document.getElementById("itemPrice");
    const name = nameInput.value.trim();
    const price = Number(priceInput.value);

    if (name === "") {
        errorBox.textContent = "Enter a name for the menu item.";
        return;
    }
    if (!Number.isFinite(price) || price <= 0) {
        errorBox.textContent = "Enter a price greater than 0.";
        return;
    }

    items.push({ name: name, price: price });
    errorBox.textContent = "";
    nameInput.value = "";
    priceInput.value = "";
    renderItems();
    nameInput.focus();
});

function renderItems() {
    itemList.innerHTML = "";

    if (items.length === 0) {
        itemList.innerHTML = '<li class="empty">No menu items added yet.</li>';
        return;
    }

    items.forEach(function (item, index) {
        const li = document.createElement("li");
        const info = document.createElement("span");
        info.className = "item-info";
        info.textContent = item.name + " — " + formatMoney(item.price);

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "remove-button";
        removeButton.textContent = "Remove";
        removeButton.setAttribute("aria-label", "Remove " + item.name);
        removeButton.addEventListener("click", function () {
            items.splice(index, 1);
            renderItems();
            document.getElementById("result").hidden = true;
        });

        li.append(info, removeButton);
        itemList.appendChild(li);
    });
}

document.getElementById("calculateButton").addEventListener("click", function () {
    const people = Number(document.getElementById("people").value);

    if (items.length === 0) {
        errorBox.textContent = "Add at least one menu item before calculating.";
        document.getElementById("result").hidden = true;
        return;
    }
    if (!Number.isInteger(people) || people < 1) {
        errorBox.textContent = "Enter a whole number of people (at least 1).";
        document.getElementById("result").hidden = true;
        return;
    }

    errorBox.textContent = "";
    const total = items.reduce(function (sum, item) {
        return sum + item.price;
    }, 0);
    const share = total / people;

    document.getElementById("billTotal").textContent = formatMoney(total);
    document.getElementById("perPerson").textContent = formatMoney(share);
    document.getElementById("result").hidden = false;
});

function formatMoney(amount) {
    return "Rs. " + amount.toFixed(2);
}
