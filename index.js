const addDays = require("date-fns/addDays");

const getAfterDays = (days) => {
  const date = addDays(new Date(2020, 7, 22), days);
  console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
};
getAfterDays(3);
module.exports = getAfterDays;
