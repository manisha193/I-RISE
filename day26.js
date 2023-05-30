var array=[1,2,3,4,5,6,10,40,60,80];
var target=9;


function findLarge(array,target)
{
    var count=0;
    for (var i=0;i<array.length;i++)
    {
        if(array[i]>target)
        {
            count++
        }
}
console.log(count);
}

findLarge(array,target)


