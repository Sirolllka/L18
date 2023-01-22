// Перша частина завдання 
const firstSalary = prompt("Enter first month salary", "$");
const secondSalary = prompt("Enter second month salary", "$");
const sumSalaryForTwoMonth = Number(firstSalary) + Number(secondSalary);
alert(`Your salary for 2 month is: ${sumSalaryForTwoMonth}$`);
// Друга частина завдання
const yourBonus = sumSalaryForTwoMonth + 1;
alert(`You have extra bonus! Your total salary was: ${sumSalaryForTwoMonth}$ It's increase for 1$ and now it is: ${yourBonus}$ `)
// Третя частина завдання
// alert(`Will you work next? ${yourBonus >= 2000}`);
// Четверта частина завдання
alert(!(yourBonus >= 2000) && 'I\'m out' || yourBonus >= 2000 && 'I\'m redy to work');