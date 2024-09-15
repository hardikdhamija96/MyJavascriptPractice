
Array.prototype.MyMap= function(cb){
    const newArr=[];
    for(let i=0;i<this.length;i++){
        newArr.push(cb(this[i],i,this));
    }

    return newArr;
}

