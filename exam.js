let array = [1,2,3,4,5,6,7];
function Mission1(){
    // debugger
    let newArray = array.filter(num => num % 2 == 0 )
    return newArray
}

let str = "asfdsdf adf sdxf adsfcxv asfdxv dd xxxs"
function Mission2(str){
    countSpace = 0
    
    const stringe = str.split(" ").filter(s => s.length === 4)
    for(let i = 0; i < stringe.length; i++){
        countSpace += 1
    }
    return countSpace
    
}


const dubleArray = [[1,2,3],[1,2,3]]
function Mission3(array){
    let newArray = array.flat()
    return newArray
    
    
}


let arrayInt = [1,2,3]
function Mission4(array){
    
    for( i = 0; i < array.length; i++ ){
        if(array[i] < array[i+1]+1){
            return 1
            
        }
        if(array[i] > array[i +1]){
            return 2
            
        }
        else{
            return 0
        }
        
    }
    
    
}

module.exports = {

    Mission1,
    Mission2,
    Mission3,
    Mission4
}


