const readCSVFile = async () => {
  var fs = require("fs");
  var parse = require("csv-parse");
  let sum = 0;
  return new Promise((resolve, reject) => {
    fs.createReadStream("dbnc-parse.csv")
      .pipe(parse({ delimiter: "," }))
      .on("data", function (csvrow) {
        let last = csvrow[csvrow.length - 1];
        if (!isNaN(last)) {
          sum += Number(last);
        }
      })
      .on("end", function () {
        resolve(sum);
      });
  });
};
async function run() {
  let res = await readCSVFile();
  console.log(res);
}
run();
