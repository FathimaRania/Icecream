const icecream = {
    tendercoconut: {
        flavor: "tendercoconut",
        price: 125,
        qty: 5
    },
    bubblegum: {
        flavor: "bubblegum",
        price: 180,
        qty: 4
    },
    belgiumchocolate: {
        flavor: "belgiumchocolate",
        price: 220,
        qty: 3
    }
};
icecream.pista= {flavor: "pista",price: 250,qty: 4};
console.log(icecream);
let totalqty=icecream.tendercoconut.qty+icecream.bubblegum.qty+icecream.belgiumchocolate.qty+icecream.pista.qty;
console.log(totalqty);
let totalprice=icecream.tendercoconut.price+icecream.bubblegum.price+icecream.belgiumchocolate.price+icecream.pista.price;
console.log(totalprice);
