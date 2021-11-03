// Code your solution in this file!

function distanceFromHqInBlocks(dropoff) {
    return Math.abs(42 - dropoff)
}

function distanceFromHqInFeet(dropoff) {
    return distanceFromHqInBlocks(dropoff) * 264
}

function distanceTravelledInFeet(pickup, dropoff) {
    return Math.abs((pickup - dropoff)) * 264
}

// function calculatesFarePrice(pickup, dropoff) {
//     let distance = distanceTravelledInFeet(pickup, dropoff)
//     if (distance < 400) {
//         return 0
//     } else if (distance > 400 && distance < 2000) {
//         return (distance - 400) * .02
//     } else if (distance > 2000 && distance < 2500) {
//         return 25
//     } else if (distance > 2500) {
//         return 'cannot travel that far'
//     }
// } 


function calculatesFarePrice(start, destination){

    let distance = distanceTravelledInFeet(start, destination);
    
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0

    } else if (distance > 400 && distance < 2000){
        return ((distance - 400) * .02)
    
    }  else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return (25);
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return ('cannot travel that far');
    }
}
