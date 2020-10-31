/* 7. Write a program that asks the user to enter a store's sales for each day
 *  of the week.
The amounts should be stored in an array. 
Use a loop to calculate the total sales for the week and display the results.
 */



let sales = [];
while(sales.length < 7){
    sales.push(Number(prompt("Enter number ")));
}

let total = 0;
for(let sale of sales){
    total += sale;
}
document.write("Weekly sales- " + sales + "<br>" + "Total sales- " + total);
