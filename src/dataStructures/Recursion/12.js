// subsequence of string
// for s:[abc] = a,b,c,ab,ac,bc,abc

function subsequence(s)
{
    subSeq(s,"");
}

function subSeq(s,subS)
{
    if(s.length===0)
    {
        console.log(subS)
        return;
    }

    subSeq(s.substring(1), subS+s[0]);
    subSeq(s.substring(1), subS);

}

subsequence("abc");
console.log("a".charCodeAt())