// let totalamont = document.getAnimations("total-mount")
// let usermounr = document.getAnimations("user-amount")
// const chackmountbtn = document.getElementById("chack-amount")
// const totalmountbtn = document.getElementById("total-mount-btn")
// const proudecttitel = document.getElementById("proudect-titel")
// const expenditurevalue = document.getElementById("expenditure-value")
// const errormasseg = document.getElementById("budget-error")
// const proudecttitelerror = document.getElementById("proudect-titel-error")
// const amount = document.getElementById("amount")
// const balanceamount = document.getElementById("balance-amount")
// const prodecttitalcost = document.getElementById("prodect-cost-error")
// const list = document.getElementById("list")

// let tempamaunt = 0

// totalmountbtn.addEventListener("click", () => {
//     tempamaunt = totalamont.value
//     if (tempamaunt === "" || tempamaunt > 0) {
//         errormasseg.classList.remove("hide")
//     } else {
//         errormasseg.classList.add("hide")
//         amount.innerHTML = tempamaunt
//         balanceamount.innerText = tempamaunt - expenditurevalue.innerText
//         totalamont.value = ""

//     }
// })
// const disablebtn = (bool) => {
//     let editbtn = document.getElementsByClassName('edit')
//     Array.from(editbtn).forEach((element) => {
//         element.disablebtn = bool
//     })
// }
// const modifyelemnt = (element, edit = false) => {
//     let parntdiv = element.parentElement
//     let curentbalenc = balanceamount.innerText
//     let currentexpres = expenditurevalue.innerText
//     let parentamaunt = parntdiv.querySelector(".amount").innerText
//     if (edit) {
//         let parentext = parntdiv.querySelector(".product").innerText
//         proudecttitel.value = parentext
//         usermounr.value = parentamaunt
//         disablebtn(true)
//     }
//     balanceamount.innerText = parseInt
//         (curentbalenc) + parseInt(parentamaunt)
//     expenditurevalue.innerText = parseInt(currentexpres) - parseInt(parentamaunt)
//     parntdiv.remove()
// }
// const listcreator = (expensename, expnsevalue) => {
//     let sudlistcontent = document.createElement("div")
//     sudlistcontent.classList.add("icons-container", "flex-speace")
//     list.appendChild(sudlistcontent)
//     sudlistcontent.innerText = `
// <p class="proudect">${expensename}</p>
// <p class="amount">${expnsevalue}</p>
// `
//     let editbtn = document.createElement("button")
//     editbtn.classList.add("fa-solid", "fa-pen-to-square", "edit")
//     editbtn.style.fontSize = "24px"
//     editbtn.addEventListener("click", () => {
//         modifyelemnt(editbtn, true)
//     })
//     let deletbtn = document.createElement("button")

//     deletbtn.children.add("fa-solid", "fa-trash-can", "delete")
//     deletbtn, style.fontSize = "24px"
//     deletbtn.addEventListener("click", () => {
//         modifyelemnt(deletbtn)
//     })
//     sudlistcontent.appendChild(editbtn)
//     sudlistcontent.appendChild(deletbtn)
//     document.getElementById("list").appendChild(sudlistcontent)
// }
// chackmountbtn.addEventListener("click", () => {
//     if (!usermounr.value | !proudecttitel.value) {
//         proudecttitelerror.classList.remove("hide")
//         return false
//     }
//     disablebtn(false)
//     let expendtrue = parseInt(usermounr.value)
//     let sum = parseInt(expenditurevalue.innerText) + expendtrue
//     expenditurevalue.innerText = sum
//     const totalbalence = tempamaunt - sum
//     balanceamount.innerText = totalbalence
//     listcreator(proudecttitel.value, usermounr.value)

//     proudecttitel.value = ""
//     usermounr.value = ""
// })
















let totalamont = document.getElementById("total-amount");
let usermounr = document.getElementById("user-amount");
const chackmountbtn = document.getElementById("check-amount");
const totalmountbtn = document.getElementById("total-amount-button");
const proudecttitel = document.getElementById("product-title");
const errormasseg = document.getElementById("budget-error");
const proudecttitelerror = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditurevalue = document.getElementById("expenditure-value");
const balanceamount = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempamaunt = 0;

//Set Budget Part
totalmountbtn.addEventListener("click", () => {
    tempamaunt = totalamont.value;
    //empty or negative input
    if (tempamaunt === "" || tempamaunt < 0) {
        errormasseg.classList.remove("hide");
    } else {
        errormasseg.classList.add("hide");
        //Set Budget
        amount.innerHTML = tempamaunt;
        //Set Balance
        balanceamount.innerText = tempamaunt - expenditurevalue.innerText;
        //Clear Input Box
        totalamont.value = "";
    }
});

//Function To Disable Edit and Delete Button
const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) => {
        element.disabled = bool;
    });
};

//Function To Modify List Elements
const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement;
    let currentBalance = balanceamount.innerText;
    let currentExpense = expenditurevalue.innerText;
    let parentAmount = parentDiv.querySelector(".amount").innerText;
    if (edit) {
        let parentText = parentDiv.querySelector(".product").innerText;
        proudecttitel.value = parentText;
        usermounr.value = parentAmount;
        disableButtons(true);
    }
    balanceamount.innerText = parseInt(currentBalance) + parseInt(parentAmount);
    expenditurevalue.innerText =
        parseInt(currentExpense) - parseInt(parentAmount);
    parentDiv.remove();
};

//Function To Create List
const listCreator = (expenseName, expenseValue) => {
    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content", "flex-space");
    list.appendChild(sublistContent);
    sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;
    let editButton = document.createElement("button");
    editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
    editButton.style.fontSize = "1.2em";
    editButton.addEventListener("click", () => {
        modifyElement(editButton, true);
    });
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteButton.style.fontSize = "1.2em";
    deleteButton.addEventListener("click", () => {
        modifyElement(deleteButton);
    });
    sublistContent.appendChild(editButton);
    sublistContent.appendChild(deleteButton);
    document.getElementById("list").appendChild(sublistContent);
};

//Function To Add Expenses
chackmountbtn.addEventListener("click", () => {
    //empty checks
    if (!usermounr.value || !proudecttitel.value) {
        proudecttitelerror.classList.remove("hide");
        return false;
    }
    //Enable buttons
    disableButtons(false);
    //Expense
    let expenditure = parseInt(usermounr.value);
    //Total expense (existing + new)
    let sum = parseInt(expenditurevalue.innerText) + expenditure;
    expenditurevalue.innerText = sum;
    //Total balance(budget - total expense)
    const totalBalance = tempamaunt - sum;
    balanceamount.innerText = totalBalance;
    //Create list
    listCreator(proudecttitel.value, usermounr.value);
    //Empty inputs
    proudecttitel.value = "";
    usermounr.value = "";
});