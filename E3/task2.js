function showPrimeNum(num){
    if (num <= 1000){
        if(num!==1 && num !==0){
            for (i=2;i<num;i++){
                if (num%i ==0){
                    console.log('не простое число')
                    break
                }if (num%i ==1){
                    console.log('простое число')
                    break
                }
            }
        }else{
            console.log('0 и 1 не являются простыми числами')
        }
    }else{
        console.log('ведено число больше либо ровно 1000')
    }
}

showPrimeNum(34)