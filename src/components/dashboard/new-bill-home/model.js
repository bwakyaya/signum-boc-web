//Schedule 1
export function s1s1p1(amount, numberOfItemsNotHandled) {
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
      Amount = 500000 + 300000 + 0.02 * (amount - 20000000);
      break;
    default:
      break;
  }
  return Amount - numberOfItemsNotHandled * 0.3 * Amount;
}
export function s1s1p2(amount, numberOfItemsNotHandled) {
  let Amount = null;
  let itemOneFee = s1s1p1(amount);
  Amount =
    0.05 * itemOneFee - numberOfItemsNotHandled * 0.3 * 0.05 * itemOneFee;
  return Amount;
}
// export function s1s1p3(amount, ) {
//   let Amount = null;

//   return Amount;
// }
export function s1s2p1(amount) {
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
export function s1s2p2(amount) {
  return s1s2p1(amount) * 0.3;
}
export function s1s2p3(amount) {
  return s1s2p1(amount) * 0.5;
}
export function s1s2p4(amount) {
  return s1s2p1(amount) * 0.3;
}
export function s1s2p5(amount) {
  let Amount = s1s2p1(amount) * 0.15;
  if (Amount > 500000) {
    return Amount;
  } else {
    return 500000;
  }
}
export function s1s2p6(amount) {
  return s1s2p1(amount) * 0.5;
}
export function s1s2p7(amount) {
  return s1s2p1(amount) * 0.25;
}
//Needs Clarification
export function s1s2p8(prescribedFeePerSecurity, numberOfSecurities) {
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
export function s1s2p9(numberOfImmovableProperty, prescribedFee) {
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
export function s1s2p10(prescribedFeePerChargee, numberOfChargees) {
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
// export function s1s2p11(numberOfItemsNotHandled) {
//   let Amount = null;
//   return Amount;
// }
// //Needs Clarification - Is this a paragraph of its own or it is a condition for the above items
// export function s1s2p12(amount) {
//   let Amount = null;
//   alert("Needs Clarification");
//   return Amount;
// }
// //Needs Clarification - Is this a paragraph of its own or it is a condition for the above items
// export function s1s2p13(amount) {
//   let Amount = null;
//   alert("Needs Clarification");
//   return Amount;
// }
//Schedule 2
export function s2s1p1(amount) {
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
export function s2s1p2(reduction) {
  let Amount = 1000000;
  return Amount - reduction;
}
export function s2s2p1(amount) {
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
export function s2s2p2(amount) {
  let Amount = 0.3 * s2s2p1(amount);
  return Amount;
}
//Schedule 3
export function s3s1p1(amount) {
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
export function s3s1p2(amount) {
  let Amount = null;
  let temp = 0.15 * s3s1p1(amount);
  if (temp > 1000000) {
    Amount = temp;
  } else {
    Amount = 1000000;
  }
  return Amount;
}
export function s3s1p3(amount) {
  let Amount = null;
  if (amount > 500000) {
    Amount = amount;
  } else {
    alert("The fee shall be at least 500000/=");
    Amount = 500000;
  }
  return Amount;
}
export function s3s1p4(amount) {
  let Amount = null;
  if (amount > 1000000) {
    Amount = amount;
  } else {
    alert("The fee shall be at least 1000000/=");
    Amount = 1000000;
  }
  return Amount;
}
export function s3s2p1(amount) {
  let Amount = s3s1p1(amount);
  return Amount;
}
export function s3s2p2(amount) {
  return amount;
}
export function s3s3p1(amount) {
  return amount;
}
// export function s3s3p2(amount) {
//   let Amount = null;
//   return Amount;
// }

//Schedule 4
//Add more items to the tree
export function s4s1p1x1() {
  return 1000000;
}
export function s4s1p1x2() {
  return 500000;
}
export function s4s1p1x3() {
  return 100000;
}
export function s4s1p2x1a() {
  return 500000;
}
export function s4s1p2x1b() {
  return 400000;
}
export function s4s1p2x1c() {
  return 300000;
}
export function s4s1p2x1d() {
  return 200000;
}
export function s4s1p2x2(amount) {
  if (amount > s4s1p2x1c()) {
    return amount;
  }
  return s4s1p2x1c();
}
export function s4s1p2x3(amount) {
  return s4s1p2x2(amount);
}
export function s4s1p2x4a() {
  return s4s1p2x1a();
}
export function s4s1p2x4b() {
  return s4s1p2x1b();
}
export function s4s1p2x4c() {
  return s4s1p2x1c();
}
export function s4s1p2x4d() {
  return s4s1p2x1d();
}
export function s4s1p2x5(amount) {
  return s4s1p2x2(amount);
}
export function s4s1p2x6() {
  return s4s1p2x1d();
}
export function s4s1p3x1a() {
  return 500000;
}
export function s4s1p3x1b() {
  return 400000;
}
export function s4s1p3x1c() {
  return 300000;
}
export function s4s1p3x2a() {
  return 500000;
}
export function s4s1p3x2b() {
  return 400000;
}
export function s4s1p3x3() {
  return 300000;
}
export function s4s1p4x1() {
  return 500000;
}
export function s4s1p4x2() {
  return 400000;
}
export function s4s1p4x3() {
  return 700000;
}
export function s4s1p5x1() {
  let Amount = 500000;
  return Amount;
}
export function s4s1p5x2() {
  let Amount = 500000;
  return Amount;
}
export function s4s1p6x1() {
  return 500000;
}
export function s4s1p6x2() {
  return 300000;
}
export function s4s1p7x1() {
  return 500000;
}
export function s4s1p7x2() {
  return 300000;
}
export function s4s1p8x1() {
  return 300000;
}
export function s4s1p8x2() {
  return 300000;
}
export function s4s1p8x3() {
  return 300000;
}
export function s4s1p8x4() {
  return 300000;
}
export function s4s1p9x1(amount) {
  if (amount > 3000000) {
    return amount;
  }
  return 3000000;
}
export function s4s1p9x2a() {
  return 400000;
}
export function s4s1p9x2b() {
  return 200000;
}
export function s4s1p9x3() {
  return 100000;
}
export function s4s1p10x1() {
  return 100000;
}
export function s4s1p10x2() {
  return 75000;
}
export function s4s2p1(amount) {
  if (amount > 3000000) {
    return amount;
  }
  return 3000000;
}
//add more items to the tree
export function s4s2p2x1() {
  return 2000000;
}
export function s4s2p2x2() {
  return 2000000;
}
export function s4s2p2x3() {
  return 1000000;
}
export function s4s2p3x1() {
  return 1000000;
}
export function s4s2p3x2() {
  return 1000000;
}
export function s4s2p3x3(amount) {
  if (amount > 1000000) {
    return amount;
  }
  return 1000000;
}
export function s4s2p4() {
  return 1000000;
}
export function s4s2p5() {
  return 2000000;
}
export function s4s2p6() {
  return 500000;
}
export function s4s2p7() {
  return 1000000;
}
export function s4s2p8() {
  return 500000;
}
export function s4s2p9() {
  return 300000;
}
//add more items to the tree
export function s4s2p10x1() {
  return 100000;
}
export function s4s2p10x2() {
  return 50000;
}
export function s4s2p11x1(amount) {
  if (amount > 5000000) {
    return amount;
  }
  return 5000000;
}
export function s4s2p11x2a() {
  return 500000;
}
export function s4s2p11x2b() {
  return 300000;
}
export function s4s2p12x1(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
export function s4s2p12x2() {
  return 300000;
}
export function s4s2p12x3() {
  return 500000;
}
export function s4s2p12x4() {
  return 500000;
}
export function s4s2p12x5a() {
  return 300000;
}
export function s4s2p12x5b() {
  return 200000;
}
export function s4s2p12x6a(numberOfLetters) {
  return 100000 * numberOfLetters;
}
export function s4s2p12x6b(folio) {
  return 50000 * folio;
}
export function s4s2p12x7a(numberOfLetters) {
  return 100000 * numberOfLetters;
}
export function s4s2p12x7b(folio) {
  return 50000 * folio;
}
export function s4s2p12x8() {
  return 50000;
}
export function s4s2p12x9() {
  return 500000;
}
//Schedule 5
export function s5p1(amount) {
  if (amount > 200000) {
    return amount;
  }
  return 200000;
}
export function s5p2(amountPerSession, numberOfMinutes) {
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
export function s5p3(numberOfDays) {
  return 300000 * numberOfDays;
}
export function s5p4(amount) {
  if (amount > 100000) {
    return amount;
  }
  return 100000;
}
export function s5p5() {
  return 100000;
}
export function s5p6(amount) {
  if (amount > 100000) {
    return amount;
  }
  return 100000;
}
export function s5p7x1() {
  return 100000;
}
export function s5p7x2() {
  return 100000;
}
export function s5p8(amount) {
  if (amount > 200000) {
    return amount;
  }
  return 200000;
}
export function s5p9(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
export function s5p10(amount) {
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
export function s6p1x1(amount) {
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
export function s6p1x2(amount) {
  let Amount = 0.65 * s6p1x1(amount);
  return Amount;
}
export function s6p1x3(amount) {
  let Amount = 0.75 * s6p1x1(amount);
  return Amount;
}
export function s6p1x4(amount) {
  let Amount = 0.85 * s6p1x1(amount);
  return Amount;
}
//Add more items to the tree
export function s6p2x1(amount) {
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
export function s6p2x2(amount) {
  let Amount = 0.65 * s6p2x1(amount);
  return Amount;
}
export function s6p2x3(amount) {
  let Amount = 0.75 * s6p2x1(amount);
  return Amount;
}
export function s6p2x4(amount) {
  let Amount = 0.85 * s6p2x1(amount);
  return Amount;
}
//add more tree children
export function s6p3x1a(amount) {
  if (amount > 1000000) {
    return amount;
  }
  return 1000000;
}
export function s6p3x1b(amount) {
  if (amount > 2000000) {
    return amount;
  }
  return 2000000;
}
export function s6p3x2a(amount) {
  if (amount > 1000000) {
    return amount;
  }
  return 1000000;
}
export function s6p3x2b(amount) {
  if (amount > 1500000) {
    return amount;
  }
  return 1500000;
}

export function s6p4(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
export function s6p5a(grossCapitalValue) {
  let Amount = 0.01 * grossCapitalValue;
  if (Amount > 1000000) {
    return Amount;
  }
  return 1000000;
}
export function s6p5b(grossCapitalValue) {
  let Amount = 0.02 * grossCapitalValue;
  if (Amount > 1000000) {
    return Amount;
  }
  return 1000000;
}
//Need Clarification : add more tree children
export function s6p5c1(amount) {
  let Amount = (4 / 5) * s6p1x1(amount);
  return Amount;
}
export function s6p5c2(amount) {
  let Amount = (4 / 5) * s6p1x2(amount);
  return Amount;
}
export function s6p5c3(amount) {
  let Amount = (4 / 5) * s6p1x3(amount);
  return Amount;
}
export function s6p5c4(amount) {
  let Amount = (4 / 5) * s6p1x4(amount);
  return Amount;
}
//add more tree children
export function s6p5d1a(amount, negotiatedAmount) {
  let tempAmount = 2 * s6p3x1a(amount);
  if (negotiatedAmount > tempAmount) {
    return negotiatedAmount;
  }
  return tempAmount;
}
export function s6p5d1b(amount, negotiatedAmount) {
  let tempAmount = 2 * s6p3x1b(amount);
  if (negotiatedAmount > tempAmount) {
    return negotiatedAmount;
  }
  return tempAmount;
}
export function s6p5d2a(amount, negotiatedAmount) {
  let tempAmount = 2 * s6p3x2a(amount);
  if (negotiatedAmount > tempAmount) {
    return negotiatedAmount;
  }
  return tempAmount;
}
export function s6p5d2b(amount, negotiatedAmount) {
  let tempAmount = 2 * s6p3x2b(amount);
  if (negotiatedAmount > tempAmount) {
    return negotiatedAmount;
  }
  return tempAmount;
}
export function s6p5e(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
export function s6p5f(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
export function s6p5g(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
export function s6p5h(amount) {
  if (amount > 1000000) {
    return amount;
  }
  return 1000000;
}
export function s6p6(amount, act) {
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
export function s6p7(amount) {
  if (amount > 3000000) {
    return amount;
  }
  return 3000000;
}
//add more children to the tree
export function s6p8x1(amount) {
  if (amount > 2000000) {
    return amount;
  }
  return 2000000;
}
export function s6p8x2(amount) {
  if (amount > 500000) {
    return amount;
  }
  return 500000;
}
//add more children
export function s6p9x1(amount) {
  if (amount > 2000000) {
    return amount;
  }
  return 2000000;
}
export function s6p9x2(amount) {
  if (amount > 300000) {
    return amount;
  }
  return 300000;
}
//Extra Children needed
export function s6p10x1(numberOfCopies) {
  let Amount = 300000 + 50000 * numberOfCopies;
  return Amount;
}
export function s6p10x2(numberOfCopies) {
  let Amount = 200000 + 30000 * numberOfCopies;
  return Amount;
}
export function s6p10x3(numberOfCopies) {
  let Amount = 50000 + 20000 * numberOfCopies;
  return Amount;
}
export function s6p10x4(numberOfCopies) {
  let Amount = 300000 + 50000 * numberOfCopies;
  return Amount;
}
export function s6p10x5(numberOfCopies) {
  let Amount = 200000 + 50000 * numberOfCopies;
  return Amount;
}
//extra children needed
export function s6p11x1() {
  let Amount = 100000;
  return Amount;
}
export function s6p11x2() {
  let Amount = 20000;
  return Amount;
}
//extra children needed
export function s6p12x1(numberOfHours) {
  let Amount = numberOfHours * 100000;
  return Amount;
}
export function s6p12x2a(numberOfHours) {
  let Amount = numberOfHours * 100000;
  return Amount;
}
export function s6p12x2b(numberOfHours) {
  let Amount = numberOfHours * 20000;
  return Amount;
}
export function s6p12x3(numberOfHours) {
  let Amount = numberOfHours * 100000;
  return Amount;
}