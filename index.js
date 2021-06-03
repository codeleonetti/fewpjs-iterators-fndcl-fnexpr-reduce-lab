const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// make new variable
// go through each element and start reducing elements
// return only single items

let totalBatteries = batteryBatches.reduce(function(total, numberBatteries){
    return numberBatteries + total
})