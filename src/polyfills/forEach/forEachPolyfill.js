
// forEach functionality
const arr = [1,2,3,4,5];

// arr.forEach((el)=>console.log(el));

Array.prototype.myForEach = function (cb) {
    // console.log("this:",this);
    for(let i=0;i<this.length; i++){
        cb(this[i],i,this);
    }
    
}

function consoleVal(el){
    console.log(el);
}
arr.myForEach(consoleVal);


function doubleVal(el){
    console.log(el*2);
}
arr.myForEach(doubleVal);