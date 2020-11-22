class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  submitBudetForm(){
    const value = this.budgetInput.value;
    if(value === "" || value < 0 ){
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML = `<p> value cannot be empty or negative</p>`;
      setTimeout(function(){
        this.budgetFeedback.classList.remove("showItem");
      },4000);
    }
  }
}

function eventListener(){
const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");
const budgetList = document.getElementById("expense-list");

const ui = new UI();

budgetForm.addEventListener("submit",function(event){
  event.preventDefault();

})

expenseForm.addEventListener("submit",function(event){
  event.preventDefault();
})

budgetList.addEventListener("click",function(event){
  
})
}



document.addEventListener("DOMContentLoaded",function(){
  eventListener();
})