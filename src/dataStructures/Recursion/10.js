// you are given a string, return string by eliminating all 'a' characters

function stream(s)
{
    let updatedString = skipA(s,"");
    let updatedS = skipA2(s);
    console.log(updatedS);
}


// method 1: ans in argument
function skipA(s,ans)
{
    if(s.length === 0)
    {
        return ans;
    }
    else{
        if(s.charAt(0) !== "a")
        {
            ans += s.charAt(0);
            // s = s.substring(1);
            // return skipA(s,ans)
        }
        // else{
        //     s = s.substring(1);
        //     return skipA(s,ans)
        // }
        return skipA(s.substring(1),ans);
    }
}

// method 2
function skipA2(s)
{
    if(s.length === 0)
    {
        return "";
    }
    else{
        
        if(s.charAt(0) !== "a")
        {
           return s.charAt(0) + skipA2(s.substring(1));
        }
        
        return skipA2(s.substring(1));
    }
}

stream("aaha");
