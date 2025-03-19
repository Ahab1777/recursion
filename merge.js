function mergeSort(a){
    //base case
        if (a.length <= 1){
            console.log('reached base')
            return a;
        } 
            
    //merge function
    function merge(leftArray, rightArray){
        let leftPosition = 0;
        let rightPosition = 0;
        const mergedArray = [];
    
        while(leftPosition < leftArray.length && rightPosition < rightArray.length){
            console.log('left', leftArray)
            console.log('right', rightArray)
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

    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}