const arr = [1,2,3,4,5];

// const res = arr.filter((el)=> el>2);
// console.log(res);

Array.prototype.MyFilter = function(cb){
    // console.log(this);
    const newArr=[];

    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this))
        {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

const res = arr.MyFilter((el)=> el>2);
console.log(res);
