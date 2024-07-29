// Question 1

const displayWeather = (city, temperature) => {
  return `The weather in ${city} is ${temperature} degrees Celsius.`
}

console.log(displayWeather("New York", 20));
console.log(displayWeather("London", 15));

// Question 2

const formatCurrency = (amount, code) => {
  return `You have ${amount} ${code}.`
}

console.log(formatCurrency(50.5, "USD"));
console.log(formatCurrency(100, "EUR"));

// Question 3

const displayBookSummary = (title, author, genre) => {
  return `The book "${title}" written by ${author} belongs to the ${genre} genre.`
}

console.log(displayBookSummary("To Kill a Mockingbird", "Harper Lee", "Fiction"));

// Question 4

const displayMovieInfo = (title, releaseYear, director) => {
  return `The movie "${title}" was released in ${releaseYear} and directed by ${director}.`
}

console.log(displayMovieInfo("Inception", 2010, "Christopher Nolan"));

// Question 5

const constructEmail = (email, subject) => {
  return `To: ${email}\nSubject: ${subject}\n\nDear ${email},\n\n\n...`
}

console.log(constructEmail("alice@example.com", "Meeting Reminder"));

// Question 6

const assessGrade = (grade) => {
  return `You are ${grade > 45 ? "passing" : "failing"}.`
}

console.log(assessGrade(75)); 
console.log(assessGrade(60)); 
console.log(assessGrade(45)); 

// Question 7

const showMessage = (product, quantity) => {
  return `You have ${quantity} ${quantity > 1 ? product +"s" : product}.`
}

console.log(showMessage("bangle", 10));
console.log(showMessage("lipstick", 1));

// Question 8

const assessMarks = (score, grade) => {
  return `You are ${score > 60 && grade === "A" ? "passing" : "failing"}.`
}

console.log(assessMarks(95, "A"));
console.log(assessMarks(62, "C"));
console.log(assessMarks(45, "D"));

// Question 9

const showMsg = (item1, quantity1, item2, quantity2) => {
  return `${(quantity1 > 10 && quantity2 > 5) ? "You have a good collection." : "You need to update your collection."}`
}

console.log(showMsg("bangle", 11, "lipstick", 6));
console.log(showMsg("bangle", 5, "lipstick", 1)); 
console.log(showMsg("bangle", 12, "lipstick", 4)); 


// Question 10

const shareStationeryMessage = (pencil, eraser) => {
   return `${pencil > 10 && eraser > 5 || pencil > 5 && eraser > 10 ? "Please share stationery with friends." : "Please ask your friends for stationery."}`
}

console.log(shareStationeryMessage(12, 8)); 
console.log(shareStationeryMessage(7, 15));
console.log(shareStationeryMessage(5, 3));