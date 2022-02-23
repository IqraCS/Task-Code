function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));

function left_most_vowel()
{
    var str=IQRAJAVED;
	for(var i = 0; i<str.length; i++)
	{
		if (
            str.chartAt(i)=='a' || str.charAt(i)=='e'  || str.charAt(i)=='i' ||  str.charAt(i)=='o'
           || str.charAt(i)=='u' || str.charAt(i)=='A' || str.charAt(i)=='E' || str.charAt(i)=='I'
           || str.charAt(i)=='O' || str.charAt(i)=='U'   )
		{
			console.log("The entered string is:" +str );
			console.log("The leftmost vowel is :"+str.charAt(i));
			var pos = i+1;
			console.log("The position of the leftmost vowel " +str.charAt(i)+ " is:" +pos+"\n");
			exit;
		}
	}
	console.log(left_most_vowel);
	console.log("The entered string has no vowels");
}