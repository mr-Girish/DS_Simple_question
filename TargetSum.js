const arr = [1,5,4,3,8,9,2]
const num = 6

for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]+arr[j]==num)
        {
            console.log(arr[i],arr[j])
        }    
    }
}