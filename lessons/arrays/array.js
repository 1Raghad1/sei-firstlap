var num = 2234858;

function splitNumber(num){
    num=num+""
    
    num=num.split("");
    for (i=0;i<num.length;i++){
        if(num[i]%2==0){
         num[i]="-"+num[i]   
        }   
    }
    num=num.join("",num)
return num;
}
console.log(splitNumber(num));
