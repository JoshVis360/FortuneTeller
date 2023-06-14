
let checkData = '10';

const upperCaseData = 'A';
const lowerCaseData = 'a';


upperCaseData.toUpperCase();
lowerCaseData.toLowerCase(); 


if (checkData == upperCaseData) {
    console.log(`${checkData} is an UPPERCASE letter`);
}
else if (checkData == lowerCaseData) {
    console.log(`${checkData} is an lowercase letter`);
}

else {
    console.log(`${checkData} is a number`);
}
