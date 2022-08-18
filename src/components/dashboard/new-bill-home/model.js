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
export function s1s2p8(amount) {
  let Amount = null;
  alert("Needs Clarification");
  return Amount;
}
//Needs Clarification
export function s1s2p9(amount) {
  let Amount = null;
  alert("Needs Clarification");
  return Amount;
}
//Needs Clarification
export function s1s2p10(amount) {
  let Amount = null;
  alert("Needs Clarification");
  return Amount;
}
//Needs Clarification
export function s1s2p11(amount) {
  let Amount = null;
  alert("Needs Clarification");
  return Amount;
}
//Needs Clarification
export function s1s2p12(amount) {
  let Amount = null;
  alert("Needs Clarification");
  return Amount;
}
//Needs Clarification
export function s1s2p13(amount) {
  let Amount = null;
  alert("Needs Clarification");
  return Amount;
}
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
export function s6p1(amount) {
  let Amount = null;
  return Amount;
}
export function s6p2(amount) {
  let Amount = null;
  return Amount;
}
export function s6p3(amount) {
  let Amount = null;
  return Amount;
}
export function s6p4(amount) {
  let Amount = null;
  return Amount;
}
export function s6p5(amount) {
  let Amount = null;
  return Amount;
}
export function s6p6(amount) {
  let Amount = null;
  return Amount;
}
export function s6p7(amount) {
  let Amount = null;
  return Amount;
}
export function s6p8(amount) {
  let Amount = null;
  return Amount;
}
export function s6p9(amount) {
  let Amount = null;
  return Amount;
}
export function s6p10(amount) {
  let Amount = null;
  return Amount;
}
export function s6p11(amount) {
  let Amount = null;
  return Amount;
}
export function s6p12(amount) {
  let Amount = null;
  return Amount;
}
