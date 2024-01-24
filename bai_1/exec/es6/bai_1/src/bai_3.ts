let arr3: string[] = ['a','b','c','d','2'];

const c = arr3.filter(a => {
    const string = 'V';
    return a.toLowerCase() === string.toLowerCase();
})

if(c.length == 0){
    console.log("Khong tim thay")
} else{
    console.log(c);
}