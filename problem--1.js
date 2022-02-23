function kthDigitFromLast(n, k)
    {
        if (k <= 0)
        {
            console.log(-1);
            return;
        }
        while ((k - 1) > 0 && n > 0)
        {
            n = n / 10;
            k--;
        }
         
        if (n == 0)
        {
            console.log(-1);
        }
        else
        {
            console.log(parseInt(n % 10));
        }
    }
    var n = 23617;
    var k = 4;
     
    kthDigitFromLast(n, k);