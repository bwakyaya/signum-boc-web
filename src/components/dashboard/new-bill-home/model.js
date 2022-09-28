

function getInput(message){
  let amount;
  let input = prompt(`Enter ${message}`);
  let isnum = /^\d+$/.test(input);
  if(isnum){
    amount = Number(input);
    return amount;
  }
  else{
    alert(`Invalid input for ${message}. It Should be a valid number.`);
    getInput(message);
  }
  
}
//Schedule 1
function s1s1p1() {
  const amount = getInput("Consideration");
  console.log(amount)
  let numberOfItemsNotHandled = getInput("Items not Handled");   
  let Amount ;
  if (amount < 10000000){
    console.log("Hooray")
    Amount =  0.05 * amount;}
  if(amount === 10000000){
    Amount =   500000;}
  if (amount > 10000000 && amount <= 20000000){
    Amount =   500000 + 0.03 * (amount - 10000000);}
  if(amount > 20000000){
    Amount =   500000 + 300000 + 0.02 * (amount - 20000000);}
  
  return Amount - numberOfItemsNotHandled * 0.3 * Amount;
}
function s1s1p2() {
  return 0.5 * s1s1p1();
}
function s1s1p3() {
  return 1;
}
function s1s2p1(amount) {
  let Amount = null;
  switch (amount) {
    case amount < 10000000:
      Amount = 0.05 * amount;
      break;
    case (amount = 10000000):
      Amount = 500000;
      break;
    case amount > 10000000 && amount <= 20000000:
      Amount = 500000 + 0.03 * (amount - 10000000);
      break;
    case amount > 20000000:
      Amount = 500000 + 300000 + 0.01 * (amount - 20000000);
      break;
    default:
      break;
  }
  return Amount;
}
function s1s2p2(amount) {
  return s1s2p1(amount) * 0.3;
}
function s1s2p3(amount) {
  return s1s2p1(amount) * 0.5;
}
function s1s2p4(amount) {
  return s1s2p1(amount) * 0.3;
}
function s1s2p5(amount) {
  let Amount = s1s2p1(amount) * 0.15;
  if (Amount > 500000) {
    return Amount;
  } else {
    return 500000;
  }
}
function s1s2p6(amount) {
  return s1s2p1(amount) * 0.5;
}
function s1s2p7(amount) {
  return s1s2p1(amount) * 0.25;
}
//Needs Clarification
function s1s2p8(prescribedFeePerSecurity, numberOfSecurities) {
  let Amount = null;
  switch (numberOfSecurities) {
    case (numberOfSecurities = 1):
      Amount = prescribedFeePerSecurity;
      break;
    case (numberOfSecurities = 2):
      Amount = prescribedFeePerSecurity + 0.25 * prescribedFeePerSecurity;
      break;
    case numberOfSecurities > 2:
      Amount =
        prescribedFeePerSecurity +
        0.25 * prescribedFeePerSecurity +
        0.1 * prescribedFeePerSecurity * (numberOfSecurities - 2);
      break;
    default:
      break;
  }
  return Amount;
}
//Needs Clarification - Is the first immovable property free of charge?
function s1s2p9(numberOfImmovableProperty, prescribedFee) {
  let Amount = null;
  switch (numberOfImmovableProperty) {
    case (numberOfImmovableProperty = 2):
      Amount = 0.1 * prescribedFee;
      break;
    case numberOfImmovableProperty < 2:
      Amount = prescribedFee + 0.05 * (numberOfImmovableProperty - 2);
      break;
    default:
      break;
  }
  return Amount;
}
//Needs Clarification - The meaning of the feel shall be divided equally
function s1s2p10(prescribedFeePerChargee, numberOfChargees) {
  let Amount = null;
  switch (numberOfChargees) {
    case (numberOfChargees = 1):
      Amount = prescribedFeePerChargee;
      break;
    case numberOfChargees > 1:
      Amount =
        prescribedFeePerChargee +
        0.05 * prescribedFeePerChargee(numberOfChargees - 1);
      break;
    default:
      break;
  }
  return Amount;
}
// //Needs Clarification - Is this a paragraph of its own or it is a condition for the above items
// function s1s2p11(numberOfItemsNotHandled) {
//   let Amount = null;
//   return Amount;
// }
// //Needs Clarification - Is this a paragraph of its own or it is a condition for the above items
// function s1s2p12(amount) {
//   let Amount = null;
//   alert("Needs Clarification");
//   return Amount;
// }
// //Needs Clarification - Is this a paragraph of its own or it is a condition for the above items
// function s1s2p13(amount) {
//   let Amount = null;
//   alert("Needs Clarification");
//   return Amount;
// }
//Schedule 2
function s2s1p1(amount) {
  let Amount = null;
  switch (amount) {
    case amount < 20000000:
      Amount = 0.05 * amount;
      break;
    case (amount = 20000000):
      Amount = 500000;
      break;
    case amount > 20000000 && amount <= 50000000:
      Amount = 0.1 * 20000000 + 0.05 * (amount - 20000000);
      break;
    case amount > 20000000:
      Amount = 0.1 * 20000000 + 0.05 * 30000000 + 0.02 * (amount - 50000000);
      break;
    default:
      break;
  }
  return Amount;
}
function s2s1p2(reduction) {
  let Amount = 1000000;
  return Amount - reduction;
}
function s2s2p1(amount) {
  let Amount = null;
  switch (amount) {
    case amount <= 20000000:
      let temp_amount = 0.1 * amount;
      if (temp_amount < 500000) {
        Amount = 500000;
      } else {
        Amount = temp_amount;
      }
      break;
    case amount > 20000000 && amount <= 50000000:
      Amount = 0.1 * 20000000 + 0.05 * (amount - 20000000);
      break;
    case amount > 50000000:
      Amount = 0.1 * 20000000 + 0.05 * 30000000 + 0.02 * (amount - 50000000);
      break;
    default:
      break;
  }
  return Amount;
}
function s2s2p2(amount) {
  let Amount = 0.3 * s2s2p1(amount);
  return Amount;
}
//Schedule 3
function s3s1p1(amount) {
  let Amount = null;
  switch (amount) {
    case amount <= 10000000:
      let temp_amount = 0.1 * amount;
      if (temp_amount < 500000) {
        Amount = 500000;
      } else {
        Amount = temp_amount;
      }
      break;
    case amount > 10000000 && amount <= 50000000:
      Amount = 0.1 * 10000000 + 0.03 * (amount - 10000000);
      break;
    case amount > 50000000 && amount <= 100000000:
      Amount = 0.1 * 10000000 + 0.03 * 40000000 + 0.02 * (amount - 50000000);
      break;
    case amount > 100000000:
      Amount =
        0.1 * 10000000 +
        0.03 * 40000000 +
        0.02 * 50000000 +
        0.01 * (amount - 100000000);
      break;
    default:
      break;
  }
  return Amount;
}
//percentage needs clarification: is it 15% or 150%. we are now using 15%
function s3s1p2(amount) {
  let Amount = null;
  let temp = 0.15 * s3s1p1(amount);
  if (temp > 1000000) {
    Amount = temp;
  } else {
    Amount = 1000000;
  }
  return Amount;
}
function s3s1p3(amount) {
  let Amount = null;
  if (amount > 500000) {
    Amount = amount;
  } else {
    alert("The fee shall be at least 500000/=");
    Amount = 500000;
  }
  return Amount;
}
function s3s1p4(amount) {
  let Amount = null;
  if (amount > 1000000) {
    Amount = amount;
  } else {
    alert("The fee shall be at least 1000000/=");
    Amount = 1000000;
  }
  return Amount;
}
function s3s2p1(amount) {
  let Amount = s3s1p1(amount);
  return Amount;
}
function s3s2p2(amount) {
  return amount;
}
function s3s3p1(amount) {
  return amount;
}
// function s3s3p2(amount) {
//   let Amount = null;
//   return Amount;
// }

//Schedule 4
//Add more items to the tree
function s4s1p1x1() {
  return 1000000;
}
function s4s1p1x2() {
  return 500000;
}
function s4s1p1x3() {
  return 100000;
}
function s4s1p2x1a() {
  return 500000;
}
function s4s1p2x1b() {
  return 400000;
}
function s4s1p2x1c() {
  return 300000;
}
function s4s1p2x1d() {
  return 200000;
}
function s4s1p2x2(amount) {
  if (amount > s4s1p2x1c()) {
    return amount;
  }
  return s4s1p2x1c();
}
function s4s1p2x3(amount) {
  return s4s1p2x2(amount);
}
function s4s1p2x4a() {
  return s4s1p2x1a();
}
function s4s1p2x4b() {
  return s4s1p2x1b();
}
function s4s1p2x4c() {
  return s4s1p2x1c();
}
function s4s1p2x4d() {
  return s4s1p2x1d();
}
function s4s1p2x5(amount) {
  return s4s1p2x2(amount);
}
function s4s1p2x6() {
  return s4s1p2x1d();
}
function s4s1p3x1a() {
  return 500000;
}
function s4s1p3x1b() {
  return 400000;
}
function s4s1p3x1c() {
  return 300000;
}
function s4s1p3x2a() {
  return 500000;
}
function s4s1p3x2b() {
  return 400000;
}
function s4s1p3x3() {
  return 300000;
}
function s4s1p4x1() {
  return 500000;
}
function s4s1p4x2() {
  return 400000;
}
function s4s1p4x3() {
  return 700000;
}
function s4s1p5x1() {
  let Amount = 500000;
  return Amount;
}
function s4s1p5x2() {
  let Amount = 500000;
  return Amount;
}
function s4s1p6x1() {
  return 500000;
}
function s4s1p6x2() {
  return 300000;
}
function s4s1p7x1() {
  return 500000;
}
function s4s1p7x2() {
  return 300000;
}
function s4s1p8x1() {
  return 300000;
}
function s4s1p8x2() {
  return 300000;
}
function s4s1p8x3() {
  return 300000;
}
function s4s1p8x4() {
  return 300000;
}
function s4s1p9x1(amount) {
  if (amount > 3000000) {
    return amount;
  }
  return 3000000;
}
function s4s1p9x2a(numberOfDays) {
  return numberOfDays * 400000;
}
function s4s1p9x2b() {
  return 200000;
}
function s4s1p9x3(numberOfHours) {
  return numberOfHours * 100000;
}
function s4s1p10x1(numberOfHours) {
  return numberOfHours * 100000;
}
function s4s1p10x2() {
  return 75000;
}
function s4s2p1(amount) {
  if (amount > 3000000) {
    return amount;
  }
  return 3000000;
}
//add more items to the tree
function s4s2p2x1() {
  return 2000000;
}
function s4s2p2x2() {
  return 2000000;
}
function s4s2p2x3() {
  return 1000000;
}
function s4s2p3x1() {
  return 1000000;
}
function s4s2p3x2() {
  return 1000000;
}
function s4s2p3x3(amount) {
  if (amount > 1000000) {
    return amount;
  }
  return 1000000;
}
function s4s2p4() {
  return 1000000;
}
function s4s2p5() {
  return 2000000;
}
function s4s2p6() {
  return 500000;
}
function s4s2p7() {
  return 1000000;
}
function s4s2p8() {
  return 500000;
}
function s4s2p9() {
  return 300000;
}
//add more items to the tree
function s4s2p10x1() {
  return 100000;
}
function s4s2p10x2() {
  return 50000;
}
function s4s2p11x1(amount) {
  if (amount > 5000000) {
    return amount;
  }
  return 5000000;
}
function s4s2p11x2a() {
  return 500000;
}
function s4s2p11x2b() {
  return 300000;
}
function s4s2p12x1(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
function s4s2p12x2() {
  return 300000;
}
function s4s2p12x3() {
  return 500000;
}
function s4s2p12x4() {
  return 500000;
}
function s4s2p12x5a(numberOfDays) {
  return numberOfDays * 300000;
}
function s4s2p12x5b(numberofHalfDays) {
  return numberofHalfDays * 200000;
}
function s4s2p12x6a(numberOfLetters) {
  return 100000 * numberOfLetters;
}
function s4s2p12x6b(folio) {
  return 50000 * folio;
}
function s4s2p12x7a(numberOfLetters) {
  return 100000 * numberOfLetters;
}
function s4s2p12x7b(folio) {
  return 50000 * folio;
}
function s4s2p12x8(numberOfFolio) {
  return numberOfFolio * 50000;
}
function s4s2p12x9() {
  return 500000;
}
//Schedule 5
function s5p1(amount) {
  if (amount > 200000) {
    return amount;
  }
  return 200000;
}
function s5p2(amountPerSession, numberOfMinutes) {
  let Amount = 0;
  let sessions = numberOfMinutes / 15;
  let sessionsRemainder = numberOfMinutes % 15;
  if (sessionsRemainder > 0) {
    if (amountPerSession > 75000) {
      Amount = amountPerSession * sessions + amountPerSession;
    } else {
      Amount = 75000 * sessions + 75000;
    }
  } else {
    if (amountPerSession > 75000) {
      Amount = amountPerSession * sessions + amountPerSession;
    } else {
      Amount = 75000 * sessions + 75000;
    }
  }

  return Amount;
}
function s5p3(numberOfDays) {
  return 300000 * numberOfDays;
}
function s5p4(amount) {
  if (amount > 100000) {
    return amount;
  }
  return 100000;
}
function s5p5() {
  return 100000;
}
function s5p6(amount) {
  if (amount > 100000) {
    return amount;
  }
  return 100000;
}
function s5p7x1() {
  return 100000;
}
function s5p7x2() {
  return 100000;
}
function s5p8(amount) {
  if (amount > 200000) {
    return amount;
  }
  return 200000;
}
function s5p9(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
function s5p10(amount) {
  let Amount = null;
  switch (amount) {
    case amount <= 5000000:
      Amount = 0.1 * amount;
      break;
    case amount > 5000000 && amount <= 15000000:
      Amount = 0.1 * 5000000 + 0.075 * (amount - 5000000);
      break;
    case amount > 15000000 && amount <= 30000000:
      Amount = 0.1 * 5000000 + 0.075 * 10000000 + 0.05 * (amount - 15000000);
      break;
    case amount > 30000000 && amount <= 50000000:
      Amount =
        0.1 * 5000000 +
        0.075 * 10000000 +
        0.05 * 15000000 +
        0.03 * (amount - 30000000);
      break;
    case amount > 50000000:
      Amount =
        0.1 * 5000000 +
        0.075 * 10000000 +
        0.05 * 15000000 +
        0.03 * 20000000 +
        0.02 * (amount - 50000000);
      break;
    default:
      break;
  }
  return Amount;
}
//Schedule Six
function s6p1x1(amount) {
  let Amount = null;
  switch (amount) {
    case amount <= 2000000:
      Amount = 0.15 * amount;
      break;
    case amount > 2000000 && amount <= 5000000:
      Amount = 0.15 * 2000000 + 0.14 * (amount - 2000000);
      break;
    case amount > 5000000 && amount <= 10000000:
      Amount = 0.15 * 2000000 + 0.14 * 3000000 + 0.12 * (amount - 5000000);
      break;
    case amount > 10000000 && amount <= 20000000:
      Amount =
        0.15 * 2000000 +
        0.14 * 3000000 +
        0.12 * 5000000 +
        0.1 * (amount - 10000000);
      break;
    case amount > 20000000 && amount <= 50000000:
      Amount =
        0.15 * 2000000 +
        0.14 * 3000000 +
        0.12 * 5000000 +
        0.1 * 10000000 +
        0.08 * (amount - 20000000);
      break;
    case amount > 50000000 && amount <= 100000000:
      Amount =
        0.15 * 2000000 +
        0.14 * 3000000 +
        0.12 * 5000000 +
        0.1 * 10000000 +
        0.08 * 30000000 +
        0.05 * (amount - 50000000);
      break;
    case amount > 100000000:
      Amount =
        0.15 * 2000000 +
        0.14 * 3000000 +
        0.12 * 5000000 +
        0.1 * 10000000 +
        0.08 * 30000000 +
        0.05 * 50000000 +
        0.02(amount - 100000000);
      break;
    default:
      break;
  }
  return Amount;
}
function s6p1x2(amount) {
  let Amount = 0.65 * s6p1x1(amount);
  return Amount;
}
function s6p1x3(amount) {
  let Amount = 0.75 * s6p1x1(amount);
  return Amount;
}
function s6p1x4(amount) {
  let Amount = 0.85 * s6p1x1(amount);
  return Amount;
}
//Add more items to the tree
function s6p2x1(amount) {
  let Amount = null;
  switch (amount) {
    case amount <= 2000000:
      Amount = 0.15 * amount;
      break;
    case amount > 2000000 && amount <= 5000000:
      Amount = 0.15 * 2000000 + 0.14 * (amount - 2000000);
      break;
    case amount > 5000000 && amount <= 10000000:
      Amount = 0.15 * 2000000 + 0.14 * 3000000 + 0.12 * (amount - 5000000);
      break;
    case amount > 10000000 && amount <= 20000000:
      Amount =
        0.15 * 2000000 +
        0.14 * 3000000 +
        0.12 * 5000000 +
        0.1 * (amount - 10000000);
      break;
    case amount > 20000000 && amount <= 50000000:
      Amount =
        0.15 * 2000000 +
        0.14 * 3000000 +
        0.12 * 5000000 +
        0.1 * 10000000 +
        0.08 * (amount - 20000000);
      break;
    case amount > 50000000 && amount <= 100000000:
      Amount =
        0.15 * 2000000 +
        0.14 * 3000000 +
        0.12 * 5000000 +
        0.1 * 10000000 +
        0.08 * 30000000 +
        0.05 * (amount - 50000000);
      break;
    case amount > 100000000:
      Amount =
        0.15 * 2000000 +
        0.14 * 3000000 +
        0.12 * 5000000 +
        0.1 * 10000000 +
        0.08 * 30000000 +
        0.05 * 50000000 +
        0.02(amount - 100000000);
      break;
    default:
      break;
  }
  return Amount;
}
function s6p2x2(amount) {
  let Amount = 0.65 * s6p2x1(amount);
  return Amount;
}
function s6p2x3(amount) {
  let Amount = 0.75 * s6p2x1(amount);
  return Amount;
}
function s6p2x4(amount) {
  let Amount = 0.85 * s6p2x1(amount);
  return Amount;
}
//add more tree children
function s6p3x1a(amount) {
  if (amount > 1000000) {
    return amount;
  }
  return 1000000;
}
function s6p3x1b(amount) {
  if (amount > 2000000) {
    return amount;
  }
  return 2000000;
}
function s6p3x2a(amount) {
  if (amount > 1000000) {
    return amount;
  }
  return 1000000;
}
function s6p3x2b(amount) {
  if (amount > 1500000) {
    return amount;
  }
  return 1500000;
}

function s6p4(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
function s6p5a(grossCapitalValue) {
  let Amount = 0.01 * grossCapitalValue;
  if (Amount > 1000000) {
    return Amount;
  }
  return 1000000;
}
function s6p5b(grossCapitalValue) {
  let Amount = 0.02 * grossCapitalValue;
  if (Amount > 1000000) {
    return Amount;
  }
  return 1000000;
}
//Need Clarification : add more tree children
function s6p5c(feesFromParagraphOne) {
  let Amount = (4 / 5) * feesFromParagraphOne;
  return Amount;
}
// function s6p5c2(amount) {
//   let Amount = (4 / 5) * s6p1x2(amount);
//   return Amount;
// }
// function s6p5c3(amount) {
//   let Amount = (4 / 5) * s6p1x3(amount);
//   return Amount;
// }
// function s6p5c4(amount) {
//   let Amount = (4 / 5) * s6p1x4(amount);
//   return Amount;
// }
//add more tree children
function s6p5d(amountUnderParagraph3, negotiatedAmount) {
  let tempAmount = 2 * amountUnderParagraph3;
  if (negotiatedAmount > tempAmount) {
    return negotiatedAmount;
  }
  return tempAmount;
}
// function s6p5d1b(amount, negotiatedAmount) {
//   let tempAmount = 2 * s6p3x1b(amount);
//   if (negotiatedAmount > tempAmount) {
//     return negotiatedAmount;
//   }
//   return tempAmount;
// }
// function s6p5d2a(amount, negotiatedAmount) {
//   let tempAmount = 2 * s6p3x2a(amount);
//   if (negotiatedAmount > tempAmount) {
//     return negotiatedAmount;
//   }
//   return tempAmount;
// }
// function s6p5d2b(amount, negotiatedAmount) {
//   let tempAmount = 2 * s6p3x2b(amount);
//   if (negotiatedAmount > tempAmount) {
//     return negotiatedAmount;
//   }
//   return tempAmount;
// }
function s6p5e(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
function s6p5f(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
function s6p5g(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
function s6p5h(amount) {
  if (amount > 1000000) {
    return amount;
  }
  return 1000000;
}
function s6p6(amount, act) {
  let Amount = null;
  switch (act) {
    case "parliamentary":
      if (amount > 10000000) {
        Amount = amount;
      }
      Amount = 10000000;
      break;
    case "local-governments":
      if (amount > 5000000) {
        Amount = amount;
      }
      Amount = 5000000;
      break;
    default:
      break;
  }
  return Amount;
}
function s6p7(amount) {
  if (amount > 3000000) {
    return amount;
  }
  return 3000000;
}
function s6p8x1(amount) {
  if (amount > 2000000) {
    return amount;
  }
  return 2000000;
}
function s6p8x2(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
function s6p9x1(amount) {
  if (amount > 2000000) {
    return amount;
  }
  return 2000000;
}
function s6p9x2(amount) {
  if (amount > 300000) {
    return amount;
  }
  return 300000;
}
function s6p10x1(numberOfCopies) {
  let Amount = 300000 + 50000 * numberOfCopies;
  return Amount;
}
function s6p10x2(numberOfCopies) {
  let Amount = 200000 + 30000 * numberOfCopies;
  return Amount;
}
function s6p10x3(numberOfCopies) {
  let Amount = 50000 + 20000 * numberOfCopies;
  return Amount;
}
function s6p10x4(numberOfCopies) {
  let Amount = 300000 + 50000 * numberOfCopies;
  return Amount;
}
function s6p10x5(numberOfCopies) {
  let Amount = 200000 + 50000 * numberOfCopies;
  return Amount;
}
function s6p11x1() {
  let Amount = 100000;
  return Amount;
}
function s6p11x2(numberOfCopies) {
  let Amount = 20000 * numberOfCopies;
  return Amount;
}
function s6p12x1(numberOfHours) {
  let Amount = numberOfHours * 100000;
  return Amount;
}
function s6p12x2a(numberOfHours) {
  let Amount = numberOfHours * 100000;
  return Amount;
}
function s6p12x2b(numberOfHours) {
  let Amount = numberOfHours * 20000;
  return Amount;
}
function s6p12x3(numberOfHours) {
  let Amount = numberOfHours * 100000;
  return Amount;
}

export function getAmount(id) {
  let amount;
  Prompt();
  switch (id) {
    case "s1s1p1":
      amount = s1s1p1();   
      break;
    case "s1s1p2":
      amount = s1s1p2();

      break;
    case "s1s1p3":
      amount = s1s1p3();

      break;
    case "s1s2p1":
      amount = s1s2p1();

      break;
    case "s1s2p2":
      amount = s1s2p2();

      break;
    case "s1s2p3":
      amount = s1s2p3();

      break;
    case "s1s2p4":
      amount = s1s2p4();

      break;
    case "s1s2p5":
      amount = s1s2p5();

      break;
    case "s1s2p6":
      amount = s1s2p6();

      break;
    case "s1s2p7":
      amount = s1s2p7();

      break;
    case "s1s2p8":
      amount = s1s2p8();

      break;
    case "s1s2p9":
      amount = s1s2p9();

      break;
    case "s1s2p10":
      amount = s1s2p10();

      break;
    case "s2s1p1":
      amount = s2s1p1();

      break;
    case "s2s1p2":
      amount = s2s1p2();

      break;
    case "s2s2p1":
      amount = s2s2p1();

      break;
    case "s2s2p2":
      amount = s2s2p2();

      break;
    case "s3s1p1":
      amount = s3s1p1();

      break;
    case "s3s1p2":
      amount = s3s1p2();

      break;
    case "s3s1p3":
      amount = s3s1p3();

      break;
    case "s3s1p4":
      amount = s3s1p4();

      break;
    case "s3s2p1":
      amount = s3s2p1();

      break;
    case "s3s2p2":
      amount = s3s2p2();

      break;
    case "s3s3p1":
      amount = s3s3p1();

      break;
    case "s4s1p1x1":
      amount = s4s1p1x1();

      break;
    case "s4s1p1x2":
      amount = s4s1p1x2();

      break;
    case "s4s1p1x3":
      amount = s4s1p1x3();

      break;
    case "s4s1p2x1a":
      amount = s4s1p2x1a();

      break;
    case "s4s1p2x1b":
      amount = s4s1p2x1b();

      break;
    case "s4s1p2x1c":
      amount = s4s1p2x1c();

      break;
    case "s4s1p2x1d":
      amount = s4s1p2x1d();

      break;
    case "s4s1p2x2":
      amount = s4s1p2x2();

      break;
    case "s4s1p2x3":
      amount = s4s1p2x3();

      break;
    case "s4s1p2x4a":
      amount = s4s1p2x4a();

      break;
    case "s4s1p2x4b":
      amount = s4s1p2x4b();

      break;
    case "s4s1p2x4c":
      amount = s4s1p2x4c();

      break;
    case "s4s1p2x4d":
      amount = s4s1p2x4d();

      break;
    case "s4s1p2x5":
      amount = s4s1p2x5();

      break;
    case "s4s1p2x6":
      amount = s4s1p2x6();

      break;
    case "s4s1p3x1a":
      amount = s4s1p3x1a();

      break;
    case "s4s1p3x1b":
      amount = s4s1p3x1b();

      break;
    case "s4s1p3x1c":
      amount = s4s1p3x1c();

      break;
    case "s4s1p3x2a":
      amount = s4s1p3x2a();

      break;
    case "s4s1p3x2b":
      amount = s4s1p3x2b();

      break;
    case "s4s1p3x3":
      amount = s4s1p3x3();

      break;
    case "s4s1p4x1":
      amount = s4s1p4x1();

      break;
    case "s4s1p4x2":
      amount = s4s1p4x2();

      break;
    case "s4s1p4x3":
      amount = s4s1p4x3();

      break;
    case "s4s1p5x1":
      amount = s4s1p5x1();

      break;
    case "s4s1p5x2":
      amount = s4s1p5x2();

      break;
    case "s4s1p6x1":
      amount = s4s1p6x1();

      break;
    case "s4s1p6x2":
      amount = s4s1p6x2();

      break;
    case "s4s1p7x1":
      amount = s4s1p7x1();

      break;
    case "s4s1p7x2":
      amount = s4s1p7x2();

      break;
    case "s4s1p8x1":
      amount = s4s1p8x1();

      break;
    case "s4s1p8x2":
      amount = s4s1p8x2();

      break;
    case "s4s1p8x3":
      amount = s4s1p8x3();

      break;
    case "s4s1p8x4":
      amount = s4s1p8x4();

      break;
    case "s4s1p9x1":
      amount = s4s1p9x1();

      break;
    case "s4s1p9x2a":
      amount = s4s1p9x2a();

      break;
    case "s4s1p9x2b":
      amount = s4s1p9x2b();

      break;
    case "s4s1p9x3":
      amount = s4s1p9x3();

      break;
    case "s4s1p10x1":
      amount = s4s1p10x1();

      break;
    case "s4s1p10x2":
      amount = s4s1p10x2();

      break;
    case "s4s2p1":
      amount = s4s2p1();

      break;
    case "s4s2p2x1":
      amount = s4s2p2x1();

      break;
    case "s4s2p2x2":
      amount = s4s2p2x2();

      break;
    case "s4s2p2x3":
      amount = s4s2p2x3();

      break;
    case "s4s2p3x1":
      amount = s4s2p3x1();

      break;
    case "s4s2p3x2":
      amount = s4s2p3x2();

      break;
    case "s4s2p3x3":
      amount = s4s2p3x3();

      break;
    case "s4s2p4":
      amount = s4s2p4();

      break;
    case "s4s2p5":
      amount = s4s2p5();

      break;
    case "s4s2p6":
      amount = s4s2p6();

      break;
    case "s4s2p7":
      amount = s4s2p7();

      break;
    case "s4s2p8":
      amount = s4s2p8();

      break;
    case "s4s2p9":
      amount = s4s2p9();

      break;
    case "s4s2p10x1":
      amount = s4s2p10x1();

      break;
    case "s4s2p10x2":
      amount = s4s2p10x2();

      break;
    case "s4s2p11x1":
      amount = s4s2p11x1();

      break;
    case "s4s2p11x2a":
      amount = s4s2p11x2a();

      break;
    case "s4s2p11x2b":
      amount = s4s2p11x2b();

      break;
    case "s4s2p12x1":
      amount = s4s2p12x1();

      break;
    case "s4s2p12x2":
      amount = s4s2p12x2();

      break;
    case "s4s2p12x3":
      amount = s4s2p12x3();

      break;
    case "s4s2p12x4":
      amount = s4s2p12x4();

      break;
    case "s4s2p12x5a":
      amount = s4s2p12x5a();

      break;
    case "s4s2p12x5b":
      amount = s4s2p12x5b();

      break;
    case "s4s2p12x6a":
      amount = s4s2p12x6a();

      break;
    case "s4s2p12x6b":
      amount = s4s2p12x6b();

      break;
    case "s4s2p12x7a":
      amount = s4s2p12x7a();

      break;
    case "s4s2p12x7b":
      amount = s4s2p12x7b();

      break;
    case "s4s2p12x8":
      amount = s4s2p12x8();

      break;
    case "s4s2p12x9":
      amount = s4s2p12x9();

      break;
    case "s5p1":
      amount = s5p1();

      break;
    case "s5p2":
      amount = s5p2();

      break;
    case "s5p3":
      amount = s5p3();

      break;
    case "s5p4":
      amount = s5p4();

      break;
    case "s5p5":
      amount = s5p5();

      break;
    case "s5p6":
      amount = s5p6();

      break;
    case "s5p7x1":
      amount = s5p7x1();

      break;
    case "s5p7x2":
      amount = s5p7x2();

      break;
    case "s5p8":
      amount = s5p8();

      break;
    case "s5p9":
      amount = s5p9();

      break;
    case "s5p10":
      amount = s5p10();

      break;
    case "s6p1x1":
      amount = s6p1x1();

      break;
    case "s6p1x2":
      amount = s6p1x2();

      break;
    case "s6p1x3":
      amount = s6p1x3();

      break;
    case "s6p1x4":
      amount = s6p1x4();

      break;
    case "s6p2x1":
      amount = s6p2x1();
      break;
    case "s6p2x2":
      amount = s6p2x2();
      break;
    case "s6p2x3":
      amount = s6p2x3();

      break;
    case "s6p2x4":
      amount = s6p2x4();

      break;
    case "s6p3x1a":
      amount = s6p3x1a();

      break;
    case "s6p3x1b":
      amount = s6p3x1b();

      break;
    case "s6p3x2a":
      amount = s6p3x2a();

      break;
    case "s6p3x2b":
      amount = s6p3x2b();

      break;
    case "s6p4":
      amount = s6p4();

      break;
    case "s6p5a":
      amount = s6p5a();

      break;
    case "s6p5b":
      amount = s6p5b();

      break;
    case "s6p5c":
      amount = s6p5c();

      break;
    case "s6p5d":
      amount = s6p5d();

      break;
    case "s6p5e":
      amount = s6p5e();

      break;
    case "s6p5f":
      amount = s6p5f();

      break;
    case "s6p5g":
      amount = s6p5g();

      break;
    case "s6p5h":
      amount = s6p5h();

      break;
    case "s6p6":
      amount = s6p6();

      break;
    case "s6p7":
      amount = s6p7();

      break;
    case "s6p8x1":
      amount = s6p8x1();

      break;
    case "s6p8x2":
      amount = s6p8x2();

      break;
    case "s6p9x1":
      amount = s6p9x1();

      break;
    case "s6p9x2":
      amount = s6p9x2();

      break;
    case "s6p10x1":
      amount = s6p10x1();

      break;
    case "s6p10x2":
      amount = s6p10x2();

      break;
    case "s6p10x3":
      amount = s6p10x3();

      break;
    case "s6p10x4":
      amount = s6p10x4();

      break;
    case "s6p10x5":
      amount = s6p10x5();

      break;
    case "s6p11x1":
      amount = s6p11x1();

      break;
    case "s6p11x2":
      amount = s6p11x2();

      break;
    case "s6p12x1":
      amount = s6p12x1();

      break;
    case "s6p12x2a":
      amount = s6p12x2a();

      break;
    case "s6p12x2b":
      amount = s6p12x2b();

      break;
    case "s6p12x3":
      amount = s6p12x3();

      break;
    default:
      break;
  }
  return amount;
}

function Prompt(){

}

