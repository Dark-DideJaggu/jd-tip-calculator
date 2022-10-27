/*  
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billinput = document.getElementById('billTotalInput')
const tipinput = document.getElementById('tipInput')
const numberofperson = document.getElementById('numberOfPeople')
const perpersontotal = document.getElementById('perPersonTotal')
// Get number of people from number of people div
let numberofpeople = Number(numberofperson.innerText)
// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let bill = Number(billinput.value)
  billinput.innerText = bill
  // get the tip from user & convert it into a percentage (divide by 100)
  let tippercentage = Number(tipinput.value) / 100

  // get the total tip amount

  let totaltip = tippercentage * bill



  // calculate the total (tip amount + bill)
  let total = totaltip + bill

  // calculate the per person total (total divided by number of people)
  let person = Number(numberofperson.innerText);
  numberofperson.innerText = person


  let perpersonbill = total / person


  // update the perPersonTotal on DOM & show it to user
  perpersontotal.innerText = `${Math.floor(perpersonbill)} $`;
}

// ** Splits the bill between more people **

let bill = Number(billinput.value)
billinput.innerText = bill

const increasePeople = () => {
  // increment the amount of people
  numberofpeople += 1
  // update the DOM with the new number of people
  numberofperson.innerText = numberofpeople

  // calculate the bill based on the new number of people
  calculateBill()

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  if (numberofpeople <= 1) {
     return 
  }
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)


  // decrement the amount of people
  numberofpeople -= 1;

  // update the DOM with the new number of people
  numberofperson.innerText = Math.floor(numberofpeople)

  // calculate the bill based on the new number of people
  calculateBill()
}
