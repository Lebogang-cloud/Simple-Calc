let calculator = require("../src/simple_calculator")

describe("Add function", function() {
    it("Can add two number", function() {
        expect(calculator.add(0,0)).toBe(0)
    })

    it("Can add two negative numbers", function(){
        expect(calculator.add(-1,-1)).toBe(-2)
    })

    it("Can adds two numbers .", function(){
        expect(calculator.add(4,5)).toBe(9)
    })

    it("Can adds many numbers", function(){
        expect(calculator.add(1,2,3,4)).toBe(10);
    })

    
})

describe("Multiply function", function() {
    it("Can multiples two number", function() {
        expect(calculator.multiply(1,2)).toBe(2)
    })

    it("Can multiple many numbers", function(){
        expect(calculator.multiply(1,2,3,4)).toBe(24)
    })
})