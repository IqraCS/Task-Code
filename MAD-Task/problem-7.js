function first_last_num(num)
{
  var end_pos = num.length - 1;
  return num[0] == 10 || num[end_pos] == 10;
}


console.log(first_last_num([10, 3, 5]));
console.log(first_last_num([10, 3, 5, 10]));
console.log(first_last_num([2, 4, 6]));