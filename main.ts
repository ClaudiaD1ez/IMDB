import { Professional } from "./professional"


let proffesional1:Professional  = new Professional("Luis", 35, "Male", 72, 1.70, "Black", "Blue", "White", false, "Germany", 1, "Actor");
let proffesional2:Professional  = new Professional("Emily", 46, "Female", 56, 1.62, "Blonde", "Green", "Caucasian", false, "United States", 1, "Producer");
let proffesional3:Professional  = new Professional("Harrison", 75, "Male", 82, 1.80, "Brown", "Brown", "White", true, "United Kingdom", 1, "Director");

proffesional1.printValue();
proffesional2.printValue();
proffesional3.printValue();
