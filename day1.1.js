var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]

var shortNames = names.filter(function(name) {
    if (name.length <= 3) {
        return name
    }
})
console.log(shortNames)

var uppercaseNames = names.map(function(name) {
    return name.toUpperCase();
})
console.log(uppercaseNames)