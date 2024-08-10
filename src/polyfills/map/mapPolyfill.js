const arr = [1,2,3,4,5];

// const doubleArr = arr.map((el)=>el*2);
// console.log(doubleArr);

Array.prototype.MyMap= function(cb){
    const newArr=[];
    for(let i=0;i<this.length;i++){
        newArr.push(cb(this[i],i,this));
    }

    return newArr;
}

// function doubleVal(el){
//     return el*2;
// }

const doubleArr = arr.MyMap((el)=>el*2);
console.log(doubleArr);