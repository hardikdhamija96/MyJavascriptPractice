let arr = [1,2,3,4,5];

// let res = arr.reduce((acc, curr)=>{
//     return acc+curr;
// }, 0);

// console.log(res);

Array.prototype.MyReduce= function(cb, initialValue){
    let acc;
    let i;

    if(initialValue!==undefined)
    {
        i=0;
        acc=initialValue;
    }
    else{
        i=1;
        acc=this[0]
    }

    for(i;i<this.length;i++){
        acc = cb(acc,this[i],i,this);
    }

    return acc;
};

let res = arr.MyReduce((acc, curr)=>{
    return acc+curr;
}, 0);

console.log(res);