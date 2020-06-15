document.write("<h2>Task 1</h2>");
var num1=3;
var num2=5;
var sum = num1+ num2
document.write(`Sum of ${num1} and ${num2} is ${sum}`);


//task 2
document.write("<h2>Task 2</h2>");
var num1=5;
var num2=3;
var sum = num1+ num2;
var mult=num1*num2;
var sub = num1-num2;
var div = num1/num2;
var modules = num1%num2;
document.write(`Sum of ${num1} and ${num2} is ${sum} <br>`);

document.write(`Subtraction  of ${num1} and ${num2} is ${sub} <br>`);
document.write(`Multiplication of ${num1} and ${num2} is ${mult}<br>`);
document.write(`Division of ${num1} and ${num2} is ${div}<br>`);
document.write(`Modules of ${num1} and ${num2} is ${modules}<br>`);

//task 3
document.write("<h2>Task 3</h2>");
var value;
document.write(` Value after variable declared is ${value} <br>`);
value=5
document.write(` Initilize the Value ${value} <br>`);
value++;
document.write(`Value after Increment ${value} <br>`);
value+=7;
document.write(`Value after Addition is  ${value} <br>`);
value--;
document.write(`Value after decrement is  ${value} <br>`);
value%=3;
document.write(`The Reminder  is  ${value} <br>`);

//task 4
document.write("<h2>Task 4</h2>");
var price=600;
var no_of_tickets=5;
var Total=price*no_of_tickets;
document.write(`Total Cost to Buy ${no_of_tickets} to a movie is ${Total}pkr at the price of ${price}pkr`);


//task 5
document.write("<h2>Task 5</h2>");
var table=5;
for (var i=1;i<=10;i++){
    document.write(`${table} x ${i} = ${table*i} <br>`)
}


//task 6
document.write("<h2>Task 6</h2>");
var c=25;
var fahrenhrit=(c*(9/5))+32;
document.write(`${c}<sup>o</sup>C is ${fahrenhrit}<sup>o</sup>F <br>`);
var f=70;
var celsius=(f-32)*(5/9);
document.write(`${f}<sup>o</sup>F is ${celsius}<sup>o</sup>C`);



//task 7
document.write("<h2>Task 7</h2>");
var item1_price=650;
var item2_price=1650;
var item1_quantity=3;
var item2_quantity=7;
var shipping_charges=100;

document.write(`Price of item 1 is ${item1_price} <br>`);
document.write(`Quantity of item 1 is ${item1_quantity} <br>`);
document.write(`Price of item 2 is ${item2_price} <br>`);
document.write(`Quantity of item 1 is ${item1_quantity} <br>`);
document.write(`Shipping Charges is ${shipping_charges} <br>`);
var Total = item1_price*item1_quantity + item2_price*item2_quantity +shipping_charges;
document.write(`Total Cost of your order is ${Total} <br>`);

//task 8
document.write("<h2>Task 8</h2>");
var total_marks=980;
var marks_obtained=804;
var percentage= (marks_obtained*100)/total_marks;


document.write('<h2> Mark Sheet</h2>')
document.write(`Total Marks :${total_marks} <br>`);
document.write(`Markd Obtained :${marks_obtained}<br>`);
document.write(`Percantage :${percentage}<br>`);


//task 9
document.write("<h2>Task 9</h2>");
var US_dollar_rate=104.80;
var Saudi_riyals_rate=28;
var us_dollors=10;
var saudi_riyal=25;

var total_pkr= us_dollors*US_dollar_rate + saudi_riyal*Saudi_riyals_rate;


document.write('<h2> Currency in PKR</h2>')
document.write(`Total Currerncy is :${total_pkr} <br>`);


//task 10
document.write("<h2>Task 10</h2>");
var value=50;
var result = ((value +5)*10)/2
document.write('<h2> Single Expression</h2>')
document.write(`Add 5 in  ${value} Multiply by 10 divide the result by 2  :${result} <br>`);

//task 11
document.write("<h2>Task 11</h2>");
var Current_year=2020;
var Birth_year=1996;
var your_age=Current_year-Birth_year;
document.write('<h2> Age Calculator</h2>')
document.write(`Current Year ${Current_year}<br>`);
document.write(`Birth Year ${Birth_year}<br>`);
document.write(`Your Age :${your_age} <br>`);

//task 12
document.write("<h2>Task 12</h2>");
var Radius=20;
var Circumference=2*3.142*Radius;
var Area=3.142*Radius*Radius;

document.write('<h2>The Geometrizer</h2>')
document.write(`Radius of Circle is  ${Radius}<br>`);
document.write(`The Circumference is  ${Circumference}<br>`);
document.write(`The Area is  :${Area} <br>`);


//task 13
document.write("<h2>Task 13</h2>");
var f_snack="Chocolate";
var current_Age=15;
var est_max_age=65;
var amount_per_day=3;
var total=(est_max_age-current_Age)*3;
document.write('<h2>The Life Time Supply Calculator</h2>')
document.write(`Favourite Snack :  ${f_snack}<br>`);
document.write(`Current Age :  ${current_Age}<br>`);
document.write(`Estimated Age :  ${est_max_age}<br>`);
document.write(`AMount of snack  per day :  ${amount_per_day}<br>`);
document.write(`You will need :${total} ${f_snack} to last you until the ripe old age of ${est_max_age} <br>`);

