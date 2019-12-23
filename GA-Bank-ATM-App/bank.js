var savingTotalBalance = 0;
var savingDeposit = 0;
var savingWithdraw = 0;
var savingDepositBtn = document.querySelector(".savingDeposit-btn");
var savingWithdrawBtn = document.querySelector(".savingWithdraw-btn");
var savingBalanceElement = document.querySelector(".savingBalance");
var savingWithdrawElement = document.querySelector(".savingBalance");

var handleSaving = function() {
  savingDeposit = Number(document.querySelector("#savingDeposit").value);
  var savingCurrentBalance = Number(savingBalanceElement.textContent);
  var newSavingBalance = savingDeposit + savingCurrentBalance;
  savingBalanceElement.textContent = newSavingBalance;
};
savingDepositBtn.addEventListener("click", handleSaving);

var handleSavingWithdraw = function() {
  savingWithdraw = Number(document.querySelector("#savingDeposit").value);
  var savingCurrentBalance = Number(savingBalanceElement.textContent);
  // ensure balance >= withdraw
  if (savingCurrentBalance >= savingWithdraw) {
    var newSavingBalance = savingCurrentBalance - savingWithdraw;
    savingBalanceElement.textContent = newSavingBalance;
  } else {
    // not enough money, let's check the balance from check account
    var checkCurrentBalance = Number(checkBalanceElement.textContent);
    // ensure saving + check balance >= withdraw
    if (checkCurrentBalance + savingCurrentBalance >= savingWithdraw) {
      // withdraw allowd
      // saving balance will reduce to 0 for sure
      var newcheckBalance =
        checkCurrentBalance + savingCurrentBalance - savingWithdraw;

      // update saving and check balance
      savingBalanceElement.textContent = 0;
      checkBalanceElement.textContent = newcheckBalance;
    } else {
      alert(
        "You do not have enough money in saving account and check account."
      );
    }
  }
};
savingWithdrawBtn.addEventListener("click", handleSavingWithdraw);

var checkTotalBalance = 0;
var checkDeposit = 0;
var checkWithdraw = 0;
var checkDepositBtn = document.querySelector(".checkDeposit-btn");
var checkWithdrawBtn = document.querySelector(".checkWithdraw-btn");
var checkBalanceElement = document.querySelector(".checkBalance");
var checkWithdrawElement = document.querySelector(".checkBalance");

var handleCheck = function() {
  checkDeposit = Number(document.querySelector("#checkDeposit").value);
  var checkCurrentBalance = Number(checkBalanceElement.textContent);
  var newcheckBalance = checkDeposit + checkCurrentBalance;
  checkBalanceElement.textContent = newcheckBalance;
};
checkDepositBtn.addEventListener("click", handleCheck);

var handleCheckWithdraw = function() {
  checkWithdraw = Number(document.querySelector("#checkDeposit").value);
  var checkCurrentBalance = Number(checkBalanceElement.textContent);
  // ensure balance >= withdraw
  if (checkCurrentBalance >= checkWithdraw) {
    var newCheckBalance = checkCurrentBalance - checkWithdraw;
    checkBalanceElement.textContent = newCheckBalance;
  } else {
    alert("You do not have enough money in your check account.");
  }
};
checkWithdrawBtn.addEventListener("click", handleCheckWithdraw);
