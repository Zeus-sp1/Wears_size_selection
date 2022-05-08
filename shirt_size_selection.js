const shirtWidth = 18;
const shirtLength = 28;
const shirtSleeve = 8.2;

// your code goes here
let size = "not available";
if ((shirtWidth < 18 || shirtWidth <= 19) && (shirtLength < 28 || shirtLength == 28) && (shirtSleeve <8.1 || shirtSleeve <= 8.37)){
  size = "S";
}
else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
    size = "M";
}
else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
    size = "L";
}
else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
    size = "XL";
}
else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
    size = "2XL";
}
else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
    size = "3XL";
}
else {
    size = "NA";
}
console.log(size);