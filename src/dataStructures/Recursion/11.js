// you are given a string, return string by eliminating all 'apple' string

function stream(s)
{
    
    // let updatedS = skipApple(s);
    let updatedS = skipAppNotApple(s);
    console.log(updatedS);
}


function skipApple(s)
{
    if(s.length === 0)
    {
        return "";
    }
    else{
        
        if(s.startsWith("apple"))
        {
           return skipApple(s.substring(5));
        }
        else
        {
            return s.charAt(0) + skipApple(s.substring(1));
        }
        
        
    }
}

stream("aappleappleappleapp");

// Follow Up
// Similarly remove "app" from string but not "apple"

function skipAppNotApple(s)
{
    if(s.length === 0)
    {
        return "";
    }
    else{
        
        if(s.startsWith("app") && !s.startsWith("apple"))
        {
           return skipAppNotApple(s.substring(3));
        }
        else
        {
            return s.charAt(0) + skipAppNotApple(s.substring(1));
        }
        
        
    }
}

// stream("aappleappleappleapp");
stream("aapplapleappleapp");