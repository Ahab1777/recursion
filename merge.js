function mergeSort(a){
        if (a.length <= 1) return a;
    
    
    
    //merge function
    function merge(leftArray, rightArray){
        let leftPosition = 0;
        let rightPosition = 0;
        const mergedArray = [];
    
        while(leftPosition < leftArray.length && rightPosition < rightArray.length){
            if(leftArray[leftPosition] < rightArray[rightPosition]){
                mergedArray.push(leftArray[leftPosition])
                leftPosition++
            } else {
                mergedArray.push(rightArray[rightPosition])
                rightPosition++
            }
        }
    
        return [...mergedArray, ...(leftArray.slice(leftPosition)), ...(rightArray.slice(rightPosition))]
    }


    //divide the array
    const middleIndex = Math.floor((a.length)/2)
    const firstHalf = a.slice(0,middleIndex)
    const secondHalf = a.slice(middleIndex)


    return mergeSort(merge(firstHalf, secondHalf))
    
    
    
}

console.log(mergeSort([2,1,3,5,99]))
//console.log(merge([4,99], [5, 7, 8]))

