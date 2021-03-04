function paintShop(cars, color) {
    let car = JSON.parse(JSON.stringify(cars));

    car.forEach(
        (v) => { 
            if (v.make == "Ford") {
                return (v.colour = color);  
            }
        }
    )

    return car;
}

module.exports = paintShop