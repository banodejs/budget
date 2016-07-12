const fs = require('fs');
const path = require('path');


fs.readdir(path.resolve(__dirname, 'events'), (err, res) => {
  if(err) {
    process.exit(1);
    return;
  }

  const overallBudget = res.reduce((sum, event) => {
    return sum + require(path.resolve(__dirname, 'events', event));
  }, 0);

  console.log(`Overall budget: ${overallBudget}`);

  process.exit(overallBudget < 0 ? 1 : 0);
});