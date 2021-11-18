class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        let sides = this.array.length
        return sides
    }

    get perimeter() {
        return this.array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    }

}

class Triangle extends Polygon {
    get isValid() {
        let side = this.array
        let side1 = side[0] + side[1]
        let side2 = side[0] +  side[2]
        let side3 =  side[1] +  side[2]
        
        if (this.array[0] > side3) {
            return false
        } if (this.array[1] > side2) {
            return false
        } if (this.array[2] > side1) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let side = this.array
        let side1 = this.array[0]
        let num = side.filter(obj => obj === side1)
        console.log(num)
        if (num.length === 4) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.array[0] ** 2
    }
}

