var obj = {
    total: 0,
    sum() {
        for(var key in arguments) {
            this.total += arguments[key]
        }        
    }
}
obj.sum(1,2,3)

var obj2 = {
    total: 0,
}

obj.sum.apply(obj2, [1,2,3]);
obj.sum(4);

console.log(obj.total)
console.log(obj2.total)

function concat(arr1, arr2) {
    var newArr=arr1.slice(0);
    [].push.apply(newArr, arr2);
    return newArr;
}
