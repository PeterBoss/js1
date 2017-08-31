var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]


function myFilter(array, callback) {
    var filteredArray = []
    
    array.forEach(function(element) {
        if(callback(element)) {
            filteredArray.push(element)
        }
    })

    return filteredArray
}

var shortNames = myFilter(names, function(name) {
    if (name.length <= 3) {
        return name
    }
}) 
console.log(shortNames)


function myMap(array, callback) {
    var mappedArray = []

    array.forEach(function(element){
        mappedArray.push(callback(element))
    })

    return mappedArray
}

var uppercaseNames = myMap(names, function(name) {
    return name.toUpperCase()
})
console.log(uppercaseNames)