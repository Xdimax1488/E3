let arr = [1, 1, 1, null, 0, 0, 2, 10];
function countEvenOddnum(array){
    let even_count = 0
    let odd_count = 0
    let zero_count=0
    let nul_count=0
    array.forEach(function(item,) {
        if (!isNaN(item)){
            if(item%2){
                even_count++;
            } else if (item === 0){
                zero_count++;
            } else if (item === null) {
                nul_count++;
            } else{
                odd_count++;
            }
        }
        
        
    });
    return console.log(
        `Количество четных элементов ${even_count},
    Количество нечетных элементов ${odd_count},
    Количество нулей ${zero_count}
    Количество null ${nul_count}
    Всего элементов ${array.length}`)
}

countEvenOddnum(arr)

