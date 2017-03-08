function Palindrome(str) { 
    var low=str.toLowerCase()
    var first = low.charAt(0);
    var last = low.charAt(low.length-1);
    var mid = low.charAt(1);
    var mid1 = low.charAt(low.length-2);


       if(first===last)
        if(mid===mid1)


        {
           return true    
        }
            else
        {
            return false    
        }
        else
        {
            return false
        }
        }
Palindrome(readline());  