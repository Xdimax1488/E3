function getSum(a){
    return function (b){
        console.log(a+b)
    }
}

const func = getSum(3)
func(4)