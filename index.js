import express from "express";
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;
const app = express();
const cashArr = [
  {
    value: 1000,
    prefix: "แบงค์",
    unit: "ใบ",
  },
  {
    value: 500,
    prefix: "แบงค์",
    unit: "ใบ",
  },
  {
    value: 100,
    prefix: "แบงค์",
    unit: "ใบ",
  },
  {
    value: 50,
    prefix: "แบงค์",
    unit: "ใบ",
  },
  {
    value: 10,
    prefix: "เหรียญ",
    unit: "เหรียญ",
  },
  {
    value: 2,
    prefix: "เหรียญ",
    unit: "เหรียญ",
  },
  {
    value: 1,
    prefix: "เหรียญ",
    unit: "เหรียญ",
  },
];
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/test2", (req, res) => {
//   console.log(req.body);
  const body = req.body;
  let result;
  if (body) {
    result = torn(body.totalAmount, body.cash);
  } else {
    result = "body is empty";
  }
  res.send(result);
});

const torn = (totalAmount, cash) => {
  let shouldChange = cash - totalAmount;
//   console.log("27", shouldChange);
  const change = cashArr.map((cashLoop) => {
    let keepChange = {
      cash: cashLoop,
      amount: 0,
    };
    while (shouldChange / cashLoop.value >= 1) {
      shouldChange -= cashLoop.value;
      keepChange.amount++;
    }
    return keepChange;
  });
//   console.log(change);
  let stringChange = "";
  change.map((changeLoop) => {
    if (changeLoop.amount !== 0) {
      stringChange += `${changeLoop.cash.prefix} ${changeLoop.cash.value} ${changeLoop.amount} ${changeLoop.cash.unit}, `;
    }
  });
  stringChange = stringChange.substring(0, stringChange.length - 2)
  return {
    totalAmount,
    cash,
    stringChange
  };
};

app.listen(port, () => {
  console.log(`example app listening on port http://localhost:${port}`);
});
