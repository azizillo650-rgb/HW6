const rawName = "   aziko   ";

let name = rawName.trim();
name = name[0].toUpperCase() + name.slice(1);

console.log(name);


const url = "https://developer.mozilla.org";

console.log(url.startsWith("https://"));
console.log(url.includes("mozilla"));
console.log(url.endsWith(".org"));


const word = "bonono";

let result = word.replaceAll("o", "a").toUpperCase();

console.log(result);

const car = "Mercedes-Benz";

console.log(car.at(0));
console.log(car.at(-1));
console.log(car.length);

const language = "JavaScript";

console.log(language.slice(0, 4));
console.log(language.slice(-6));


const fileName = "document.pdf";

let dotIndex = fileName.indexOf(".");
let extension = fileName.slice(dotIndex + 1);

console.log(extension);


const review = "Этот фильм плохой, но актёры сыграли отлично.";

console.log(review.includes("фильм"));

let newReview = review.replace("плохой", "хороший");

console.log(newReview);
