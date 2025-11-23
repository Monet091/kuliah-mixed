let total = 0;
function addExpense(){
    const itemInput = document.getElementById('item-input');
    const priceInput = document.getElementById(`price-input`);

    const itemName = itemInput.value;
    const priceValue= Number(priceInput.value);

    if (itemName == "" || priceValue <= 0 || isNaN(priceValue)){
        alert("Please enter a valid item name and price.");
        return;
    }


total += priceValue;
document.getElementById("total-display").textContent = total;

const expenseList = document.getElementById("expense-list");
expenseList.innerHTML += `<li>${itemName}: $${priceValue}</li>`;

itemInput.value = "";
priceInput.value = "";

}

document.getElementById("add-btn").addEventListener("click", addExpense);
