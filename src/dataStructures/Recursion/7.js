// Given N, find s such that sum of first s natural number is N.

function find(n)
{
    let ans=0;
    let val=1;
    let steps = findN(n,ans,val);
    console.log(`for n= ${n}: Steps = ${steps}`);
}

function findN(n,ans,val)
{
    
    if (n === 0) {
        return ans;
    }
    if (n < 0) {
        return -1;
    }
    return findN(n - val, ans + 1, val + 1);
}

let NVal = [1,2,3,6,7,10,55,100,190];

NVal.forEach(find);