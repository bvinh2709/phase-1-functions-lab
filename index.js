// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const distance = Math.abs(someValue - 42)
    return distance
}

distanceFromHqInBlocks(43)

function distanceFromHqInFeet(someValue) {
    const distance = distanceFromHqInBlocks(someValue) * 264
   return distance
}
distanceFromHqInFeet(50)

function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination) * 264
    return distance
}

distanceTravelledInFeet(42, 50)

function calculatesFarePrice(start, destination) {
    let fare = 0
    if (distanceTravelledInFeet(start, destination) < 400) {
        return fare
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        fare = (distanceTravelledInFeet(start, destination) - 400)* 0.02
        return fare
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        fare = 25
        return fare
    }
    else {
        return 'cannot travel that far'
    }
}

calculatesFarePrice(40, 50)