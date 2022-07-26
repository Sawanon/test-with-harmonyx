# test-with-harmonyx

ข้อ 1 รันใน node ใช้ได้เลยนะครับ ส่วนข้อ 2 และ 3 ผมทำเป็น api

ส่วนเวลาที่ใช้ไปใน test แต่ล่ะอัน
test: 1 => 20m
test: 2 => 1h 33m
test: 3 => 37m

test: 1 => [test1.js](test1.js)

link test: 2 => https://test-with-harmonyx.herokuapp.com/test2
body: => (เป็น json นะครับ)

```json
{
    "totalAmount": 250,
    "cash": 1000
}
```

link test: 3 => https://test-with-harmonyx.herokuapp.com/test3
body: => (เป็น json นะครับ)
```json
{
    "product": [
        {
            "name": "A",
            "amount": 1
        },
        {
            "name": "B",
            "amount": 2
        },
        {
            "name": "C",
            "amount": 1
        }
    ]
}
```
