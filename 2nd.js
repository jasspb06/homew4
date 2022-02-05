const firstArg = parseInt(process.argv[2]);
const secondArg = parseInt(process.argv[3]);
const thirdArg = parseInt(process.argv[4]);

function a(num1, num2, num3) {
    // logic here
    if(num1,num2,num3 >0){
        var s = (num1 + num2 + num3) / 2;
    
var area = Math.sqrt(s * ((s - num1) * (s - num2) * (s - num3)));
console.log("area of triangle is " + area);
    }
else{
    console.log('imposible triangle!')
}
        var pr = num1 + num2 + num3;
        console.log("perimeter is " + pr)
        
    // end
    
}

a(firstArg, secondArg, thirdArg);