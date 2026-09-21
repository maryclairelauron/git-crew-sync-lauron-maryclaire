function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const MIN_WAGE = 15;
  if (rate < MIN_WAGE) {
    rate = MIN_WAGE;
  }
  if (hours > 8) {
    const regularPay = 8 * rate;
    const overtimeHours = hours - 8;
    const overtimePay = overtimeHours * rate * 1.5;
    return Math.round(regularPay + overtimePay);
  }
  return Math.round(hours * rate);
}

module.exports = { isValidShift, calculatePay };