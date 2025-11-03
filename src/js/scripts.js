async function main() {
let firstname = await input("Please enter your first name: ");
let lastname = await input("Please enter your last name: ");
let fullname = (firstname + " " + lastname);
let newname = fullname.replace(/o/g, "a");
output("Your full name is: " + newname);
let numb1 = Number (await input("Please enter a number larger than 10: "));
let numb2 = Number (await input("Please enter a number smaller than 10: "));
let numb3 = Number (numb1 % numb2);
output(numb3);

}

