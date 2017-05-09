/* Muhammad Tauheed Ahmed 
Roll # 5209
Batch 4.1 #Bright    */

/*
// Question Number One

// 1.  Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name

var firstName = prompt("Your First Name..");
var lastName = prompt("Your Last Name..??");

var fullName = firstName + " " + lastName;

document.write(fullName); 

*/




/*
// Question Number two

// 2.  Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.   

var favMobile = prompt("Insert Your Favorite Mobile Phone Model");

document.write("Your Favourit Phone is: " + favMobile);
document.write("<br> Length Of String: " + favMobile.length);

*/




/*
// Question Number Three

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser. 

var text = "Pakistani";

document.write("String: " + text);
document.write("<br> Index Of 'n': " + text.indexOf('n'));

*/


/*
// Question Number Four
// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 

var text = "Hello World!";

document.write("String: " + text);
document.write("<br>Last Index Of 'l' " + text.lastIndexOf("l") );
*/



/*
// Question Number Five

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser. 

var text = "Pakistani";

document.write("String: " + text);
document.write("<br>Character At 3<sup>rd</sup> Index: " + text.charAt(3));
*/



/*
// Question Number Six

// 6. Repeat Q1 using string concat() method. 

var firstName = prompt("Your First Name..??");
firstName = firstName.concat(" ");    
var lastName = prompt("Your Last Name...??");

var fullName = firstName.concat(lastName);

document.write(fullName);
*/



/*
// Question Number Seven
// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 

var city = "Hyderabad";
document.write("City: " + city);

var secCity = city.replace("Hyder", "Islam");
document.write("<br>After Replacment : " + secCity);
*/



/*
// Question Number Eight

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”; 

var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Message: " + message);
message = message.replace(/and/g, "&");
document.write("<br>After Replacement: " + message);
*/


/*
// Question Number Nine

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var num = "472";
document.write("Value: " + num);
document.write("<br> Type: " + typeof(num));

num = parseInt(num);
document.write("<br><br>Value: " + num);
document.write("<br> Type: " + typeof(num));
*/




// Question Number Ten	(INCOMPLETE)

// 10. Write a program that take a URL as user input in the following format: (www.facebook.com / www.yahoo.com ). Extract the domain name & show in your browser. 






/*
// Question Number Eleven

// 11. Write a program that takes user input. Convert and show the input in capital letters.  

var userInput = prompt("Insert Text Here...");
document.write("Your Input Text: " + userInput)

document.write("<br> After Capitalize: " + userInput.toUpperCase() );
*/



/*
// Question Number Twelve

// 12. Write a program that takes user input. Convert and show the input in small letters. 

var userInput = prompt("Insert Text Here (In Capital Letter)...");
document.write("Your Input Text: " + userInput)

document.write("<br> After Convert In Lower Case: " + userInput.toLowerCase() );
*/



/*
// Question Number Thirteen

// 13. Write a program that takes user input. Convert and show the input in title case. 

var userInput = prompt("Insert Text Here (In Capital Letter)...");
document.write("User Input: " + userInput)

var firstLetter = userInput.slice(0,1).toUpperCase();
var otherLetters = userInput.slice(1).toLowerCase();
userInput = firstLetter + otherLetters;

document.write("<br> Title Case: " + userInput );
*/



/*
// Question Number Fourteen   (INCOMPLETE)

// 14. Write a program that converts the variable num to string.           var num = 35.36 ; Remove the dot to display “3536” display in your browser. 

var num = "pakistan";

document.write("Number: " + num + "<br>");
// num = num.toString();

num.splice(2, 2);
document.write(num);

*/





/*
// Question Number Fifteen

// 15. Write a program to display the value of x in your browser if a=”3”
// and b=”3”?	x = a + b

var a = "3";
var b = "3";

var x = a + b;
document.write("a is " + a);
document.write("<br>b is " + b);
document.write("<br>a + b is " + x);

*/



/*

// Question Number Sixteen

// 16. Write a program to display the value of y in your browser if a=”3”
// and b=”3”?
// y = a - b;


var a = "3";
var b = "3";

var x = a - b;
document.write("a is " + a);
document.write("<br>b is " + b);
document.write("<br>a - b is " + x);

*/






/*
// Question Number Seventeen

// 17. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among
// [@ . , !], prompt the user to enter a valid username. For
// character codes of [@ . , !], refer to ASCII table at the end of
// this document.

var userInput = prompt("Your Name Here...");

if(userInput === [33]){
	alert("Please Enter a Valid User Name...");
}else if(userInput === [44]){
	alert("Please Enter a Valid User Name...");
}else if(userInput === [46]){
	alert("Please Enter a Valid User Name...");
}else if(userInput === [64]){
	alert("Please Enter a Valid User Name...");
}else{
	document.write(userInput);
}
*/





/*
// Question Number Eighteen

// 18. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.
// Note: Perform case insensitive search. Whether the user enters
// cookie, Cookie, COOKIE or coOkIE, program should inform
// about its availability. Example:

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to Saylani Bakery.. What do you want to order Sir/Ma'am..???");
var flag = false;

for(i=0; i<items.length; i++){
	if(userInput.toLowerCase() === items[i]){
	document.write(userInput + " is <b>available</b> in our bakery at index " + i + " in our bakery");
	flag = true;
	}
}
if(flag === false){
	document.write("We are sorry! " + userInput + " is not <b>available</b> in our bakery");
}
*/






// Question Number Ninteen

// 19. Write a program to take two input strings. Using string
// comparison, tell which string is greater than other or if they
// both are equal.




// Question Number Twenty

// 20. Write a program to take password as an input from user. The
// password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.




/*
// Question Number Twenty One

// 21. Write a program to convert the following string to an array
// using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University Of Karachi";

for(i=0; i<university.length; i++){
	document.write(university[i] + "<br>");
}
*/




/*
// Question Number Twenty Two

// 22. Write a program to display the last character of a user input.

var userInput = prompt("Insert Your Text Here...");
var lastChar = userInput.length-1;

document.write("Your Text is: " + userInput);
document.write("<br> Last Charecter Of Your Input is: " + userInput.charAt(lastChar));
*/




/*
// Question Number Twenty Three  (Not Run)

// 23. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word
// “the” in given string.

var str = "The quick brown fox jumps over the lazy dog";
var counter = 0;

document.write("String: " + str + "<br>");
for(i=0; i<str.length; i++){
	if(str[i].toLowerCase === "the"){
		counter++;
	}
}

document.write("'the' found <b>" + counter + " </b> Times in the given string..");
*/





// Question Number Twenty Four

// 24. Write a program to count number of vowels & consonants in
// given string
// var str = “Pakistan”;

var vowelChar = ["a", "e", "i", "o", "u"];
var str = "Pakistan";
var flag = false;
var vowel = 0;
var consonant = 0;

for(i=0; i<str.length; i++){
	if(str[i] === vowelChar[i]){
		vowel++;
		flag = true;
	}
}

document.write("string is: " + str);
document.write("<br>vowel found: " + vowel);
document.write("<br>consonant found: " + consonant);
















