import express from 'express'

const port = process.env.PORT || 3000;
const app = express();

app.post("/test2", (req, res)=>{
    console.log();
    res.send({
        test: "ya"
    })
})

const torn = (valueOfProduct, valueFromCustomd) => {

}

app.listen(port, () => {
  console.log(`example app listening on port http://localhost:${port}`);
});
