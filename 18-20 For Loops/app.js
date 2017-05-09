// Name: Muhammad Tauheed Ahmed;
// Roll No: 5209;
// Batch: 4.1;
// Section: Bright ;

// Task Number One
// 1. Write a program to display the message “Hello World” 5 times

// in your browser using for loop.
// for(i=0; i<5; i++){
//     alert("Hello World!");
// }




// Task Number Two
// 2. Write a program to print numeric counting from 1 to 10.

// for(var i=1; i<=10; ++i){
//     document.write(i + "<br>");
// }




// Task Number Three
// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.

// var tableName = +prompt("Insert Table Name!");
// var tableLength = +prompt("Insert Table Length!");

// document.write("Multiplication Table Of " + tableName + "<br> Table Length is " + tableLength + "<br>");

// var i = 1;
// for(i; i<=tableLength; i++){
//     document.write("<br>" + tableName + " x " + i + " = " + tableName*i)
// }






// Task Number Four
// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.

// var mobiles = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]

// for(i=0; i<mobiles.length; i++){
//     document.write(mobiles[i] + "<br>");
// }





// Task Number Five
// 5. Write a program to print items of the following array using for
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(i=0; i<fruits.length; i++){
	// document.write(fruits[i] + "<br>");
// }

// for(i=0; i<fruits.length; i++){
	// document.write("<br>Element at index " + i + " is " + fruits[i]);
// }





// Task Number Six
// 6. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.

// var N = [];
// var numOfItems = +prompt("Enter Number Or Items..");

// for(i=0; i<numOfItems; i++){
	// N[i] = prompt("Enter Value Of index " + i,"Item");
// }
// document.write("<b>Number Of Items: </b>" + numOfItems + "<br>");
// document.write("Items: <br><br>")
// for(i=0; i<numOfItems; i++){
	// document.write("<br>" + N[i] );
// }




/*

// Task Number Seven
// 7. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
	document.write("<h2>Counting</h2>")
	for(i=1; i<=15; i++){
		document.write(i + ",");
	}
	
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
	document.write("<h2>Reverse Counting</h2>")
	for(i=10; i>=1; i--){
		document.write(i + ",");
	}
	
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
	document.write("<h2>Even Numbers</h2>")
	for(i=0; i<=20; i++){
		if(i%2 === 0){
		document.write(i + ",");
		}
	}
	
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
	document.write("<h2>Odd Numbers</h2>")
	for(i=0; i<=20; i++){
		if(i%2 != 0){
		document.write(i + ",");
		}
	}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

	document.write("<h2>Series: </h2>")
	for (i=1; i<=20; i++){
		if(i%2 === 0){
		document.write(i + "k,");
		}
	}

*/






// Task Number Eight
// 8. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome in to Our Bakery.What do you want to order sir/ma'am..??", "Insert Items..");

// for(i=0; ; i++){
	// if(userInput == items[i]){
		// document.write(items[i] + " is available at index " + i);
		// break;
	// }
	// else{
		// document.write("We are sorry! " + userInput + " is <b> Not Available </b> in our bakery... " )
		// break;
	// }
	
// }







// Task Number Nine
// 9. Write a program to identify the largest number in the given
// array.
// A = [24, 53, 78, 91, 12]

// var num = [24, 53, 78, 91, 12];

// document.write("Array Items: " + num);
// document.write("<br>The Largest Number is " + Math.max(24, 53, 78, 91, 12));








// Task Number Ten
// 10. Write a program to identify the smallest number in the given
// array.
// A = [24, 53, 78, 91, 12]

// var num = [24, 53, 78, 91, 12];

// document.write("Array Items: " + num);
// document.write("<br>The Smallest Number is " + Math.min(24, 53, 78, 91, 12));








// Task Number Eleven
// 11. Write a program to identify the largest & the smallest
// number in the given array.
// A = [24, 53, 78, 91, 12]

// var num = [24, 53, 78, 91, 12];

// document.write("Array Items: " + num);
// document.write("<br>The Largest Number is " + Math.max(24, 53, 78, 91, 12));
// document.write("<br>The Smallest Number is " + Math.min(24, 53, 78, 91, 12));







// Task Number Twelve
// 12. Write a program to print multiples of 5 ranging 1 to 100

// for(i=1; i<=100; i++){
	// if(i%5 === 0){
		// document.write(i + ", ");
	// }
// }






// Task Number Thirteen
// 13. You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// Write a program to generate the following HTML table in your
// browser using JS.

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// document.write("<table border='1'><tr><th>Students</th><th>Scores</th></tr>");

// for(i=0; i<students.length; i++){
	// document.write("<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>")
// }

// document.write("</table>");
 
 
 
 
 
 
 // Task Number Fourteen
 // 14. Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34
 
 // var scores = [12, 45, 3, 22, 34, 50];
 // var userInput = +prompt("Insert Stop value...");
 
 // document.write("Scores: " + scores + "<br>");
 
 // for(i=0; i<=scores.length; i++){
	 // if(userInput === scores[i]){
		 // break;
	// }
	
		 // document.write(scores[i] + ", ")
 // }
 
 
 
 
 
 // Task Number Fifteen
 // 15. You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for
// loops.
 
 // var arr = [ [1,2,3] , [4,5,6] , [7,8,9] ];
 
 // for(i=0; i<arr.length; i++){
	 // document.write(arr[i] + "<br>");
 // }
 
 
 
 
 
 // Task Number Sixteen
 // 16. Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.
 
// for(i=5; i>=0; i-=.5){
	// document.write(i + ", ");
// } 
 
 
 
 
 
 // Task Number Seventeen
 // 17. The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each
// iteration, it will check if the current number is even or odd, and
// report that to the screen (e.g. "2 is even").
 
 // for(i=0; i<=20; i++){
	 // if(i%2 === 0){
		 // document.write(i + " is Even Number<br>");
	 // }else if(i%2 !== 0){
		 // document.write(i + " is Odd Number<br>");
	 // }
 // }
 
 
 
 
 // Task Number Eighteen
 // 18. Write a program to calculate the product of the odd integers
// from 1 to 7.
 
 
 
 
 
 
 
 
 // Task Number Ninteen
 // 19. Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7
 
 // for(i=7; i>0; i--){
	 // for(j=i; j>0; j--){
		 // document.write(" * ");
	 // }
		// document.write("<br>");
 // }
 
 
 
 
 
 
 
 // Task Number Twenty
 // 20. Write a program to create the following patterns in your
// browser. Take number of lines as an input.
 
 document.write("<br> a. <br>")
 
 var userInput = prompt("Insert a value for pattren");
 for(i=0; i<userInput; i++){
	 
		 document.write(" ***** <br>");
 }
 
 
 document.write("<br><br> b. <br>")
 
 for(i=0; i<userInput; i++){
	 for(j=0; j<=i; j++){
		 document.write(" * ");
	}
	document.write("<br>");
 }
 
 
 document.write("<br><br> c. <br>")
 
 for(i=userInput; i>0; i--){
	 for(j=i; j>0; j--){
		 document.write(" * ");
	}
	document.write("<br>");
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 