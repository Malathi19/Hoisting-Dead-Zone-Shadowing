//shadowing using var

var price = "$20"

function getPrice (){
    console.log ("original Price", price)
    var price = "$14.99"
    console.log ("Discount Price", price)
}
console.log(getPrice())
//shadowing using let
let price = "$20"

function getPrice (){
    console.log ("original Price", price)
    let price = "$14.99"
    console.log ("Discount Price", price)
}
console.log(getPrice())
//shadowing using const

const price = "$20"

function getPrice (){
    console.log ("original Price", price)
    const price = "$14.99"
    console.log ("Discount Price", price)
}console.log(getPrice())