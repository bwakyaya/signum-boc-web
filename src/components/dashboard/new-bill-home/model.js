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
export function s4s1p1(amount) {
  let Amount = null;
  return Amount;
}
export function s4s1p2(amount) {
  let Amount = null;
  return Amount;
}
export function s4s1p3(amount) {
  let Amount = null;
  return Amount;
}
export function s4s1p4(amount) {
  let Amount = null;
  return Amount;
}
export function s4s1p5(amount) {
  let Amount = null;
  return Amount;
}
export function s4s1p6(amount) {
  let Amount = null;
  return Amount;
}
export function s4s1p7(amount) {
  let Amount = null;
  return Amount;
}
export function s4s1p8(amount) {
  let Amount = null;
  return Amount;
}
export function s4s1p9(amount) {
  let Amount = null;
  return Amount;
}
export function s4s1p10(amount) {
  let Amount = null;
  return Amount;
}
export function s4s2p1(amount) {
  let Amount = null;
  return Amount;
}
export function s4s2p2(amount) {
  let Amount = null;
  return Amount;
}
export function s4s2p3(amount) {
  let Amount = null;
  return Amount;
}
export function s4s2p4(amount) {
  let Amount = null;
  return Amount;
}
export function s4s2p5(amount) {
  let Amount = null;
  return Amount;
}
export function s4s2p6(amount) {
  let Amount = null;
  return Amount;
}
export function s4s2p7(amount) {
  let Amount = null;
  return Amount;
}
export function s4s2p8(amount) {
  let Amount = null;
  return Amount;
}
export function s4s2p9(amount) {
  let Amount = null;
  return Amount;
}
export function s4s2p10(amount) {
  let Amount = null;
  return Amount;
}
export function s4s2p11(amount) {
  let Amount = null;
  return Amount;
}
export function s4s2p12(amount) {
  let Amount = null;
  return Amount;
}
export function s5p1(amount) {
  let Amount = null;
  return Amount;
}
export function s5p2(amount) {
  let Amount = null;
  return Amount;
}
export function s5p3(amount) {
  let Amount = null;
  return Amount;
}
export function s5p4(amount) {
  let Amount = null;
  return Amount;
}
export function s5p5(amount) {
  let Amount = null;
  return Amount;
}
export function s5p6(amount) {
  let Amount = null;
  return Amount;
}
export function s5p7(amount) {
  let Amount = null;
  return Amount;
}
export function s5p8(amount) {
  let Amount = null;
  return Amount;
}
export function s5p9(amount) {
  let Amount = null;
  return Amount;
}
export function s5p10(amount) {
  let Amount = null;
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
