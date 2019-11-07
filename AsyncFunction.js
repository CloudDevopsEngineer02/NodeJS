function add(a,b,callback)
{
 callback(a+b);
}

function print(c)
{
console.log(print(c));
}

//add(25,37,print);

add(22,25,(c) => console.log(c));

