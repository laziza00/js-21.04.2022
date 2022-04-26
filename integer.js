

// ============== 21.04.2022 uyga vazifa =====================




//=============== masala 206 ===============

// function isPrimeNumber(num) {
//   let count = 0
//   for (let i = 1; i <= Math.floor(num / 2); i++) {
//     // console.log(i);
//       if (num % i == 0) {
//           count += 1
//       }
//   }
//   return count > 1? false : true
// }

// let number = 1000
// let result = 0

// for (let i = 2; i < number; i++) {
//   // console.log(i);
//   if (isPrimeNumber(i)) {
//       result += 1
//   }
// }

// console.log(result);


//=============== masala 207 ===============


// function evaluate(str) {

//   let result = 0
//   let amallar = ["+", "-"]
//   let newStr = str.replace(/\s/g, '')

//   for (let i = 0; i < newStr.length; i++) {

//       if (amallar.includes(newStr[i])) {
          
//           if (newStr[i] == "-") {
//               result += - +newStr[i + 1]
//               i += 1
//           }else{
//               result += +newStr[i + 1]
//               i += 1
//           }
//       }
//       else{
//           result += +newStr[i]
//       }
//   }
//   return result
// }
// console.log(evaluate("     5  +3  -9    + 8"));


//=============== masala 214 ===============


// function getCharacterCount(n) {

//   for(let i=0; i<n.length; i++) {

//   }
// }

//=============== masala 215 ===============


// let arr =[1, 2, 3, 4, 19, -2, -3];

// function sortArr(arr) {

//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++) {
//             if(arr[j]>arr[j+1] ){
//                 let a = arr[j+1]
//                 arr[j+1] = arr[j]
//                 arr[j] = a
//                 // console.log(a);
//             }
//           }
//         }
//     return arr;
// }

// console.log(sortArr(arr));






//=============== masala 216 ===============

// let arr =[0, 2, 35, -8, -45, 7, 34, -7, 76]

// function minNumber(arr) {

//   for(let i=0; i<arr.length; i++) {
//   for(let j=0; j<arr.length; j++) {
//       if(arr[0]>arr[j]) {
//           arr[0] = arr[j];
//       }
//     }
//   }
//   return arr[0]
// }
// console.log(minNumber(arr));


//=============== masala 217 ===============

// function showMessage(n) {
//   return n? "juft": "toq"
// }

// function oddOrEven(b) {
//   let tf =0
//   if(b%2==0) {
//     tf = true
//     return showMessage(tf)
//   }else {
//     tf= false;
//      return showMessage(tf)
//   }
// }
// console.log(oddOrEven(4));


//=============== masala 218 ===============

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],[7, 8, 9],
//   [10, 11, 12, 13, 14, 15]
// ];

// let flatArray = arr.reduce((acc, curVal) => {
//   return acc.concat(curVal)
// }, []);
// console.log(flatArray);

//=============== masala 219 ===============


// function recursie(n) {

//   if(n>=1 && n<=18) {
//     return n===1 ? 1 : n*recursie(n-1)
//   }
//   else{
//     return "1<=n<=18 bo'lishi kerak";
//   }
// }
// console.log(recursie(10));

//=============== masala 220 ===============

// function recursie(n) {

//   if(n>=1 && n<=100) {
//     return n===1 ? 1 : n*recursie(n-1)
//   }
//   else{
//     return "1<=n<=18 bo'lishi kerak";
//   }
// }
// console.log(recursie(10))