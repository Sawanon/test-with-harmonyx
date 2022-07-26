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
  stringChange = stringChange.substring(0, stringChange.length - 2);
  return {
    totalAmount,
    cash,
    stringChange,
  };
};

const exproduct = {
  product: [
    {
      name: "A",
      amount: 1,
    },
    {
      name: "B",
      amount: 2,
    },
    {
      name: "C",
      amount: 1,
    },
  ],
};

const realProduct = [
    {
        name: "A",
        value: 99
    },
    {
        name: "B",
        value: 199
    },
    {
        name: "C",
        value: 3999
    }
]

const promotion = (body) => {
    if(body.product.length > 0){
        let total = 0;
        const result = body.product.map((product) => {
            const thisProduct = realProduct.filter((products) => products.name === product.name)
            if(thisProduct.length > 0){
                // console.log(thisProduct[0].value * product.amount);
                total += thisProduct[0].value * product.amount
                return {
                    name: product.name,
                    amount: product.amount,
                    total: thisProduct[0].value * product.amount
                }
            }
        })
        if(total >= 200){
            total = total - (total*0.1)
        }
        if(body.product.some((d) => d.name === "A") && body.product.some((d) => d.name === "B")){
            total -= 50;
        }
        console.log(result, total);
        return {
            detail: result,
            total
        }
    }else{
        return false
    }
};

app.post("/test3", (req, res) => {
  const body = req.body;
  let result;
  if (body) {
    result = promotion(body)
  } else {
    result = "body is empty"
  }
  res.send(result);
});

app.post("/test3/exbody", (req, res) => {
  res.send(exproduct);
});

app.listen(port, () => {
  console.log(`example app listening on port http://localhost:${port}`);
});

// duration for this test 1h 33m
