const inputs = [5,4,3,4];
const target = 8;

let result
for (let i = 0; i < inputs.length; i++) {
    const newInputs = inputs.slice(i)
    for (let j = 0; j < newInputs.length; j++) {
        if((inputs[i] + newInputs[j]) === target){
            result = [i, inputs.findIndex((input) => input === newInputs[j])]
            return
        }
    }
}

console.log(result);

// duration for test 20m