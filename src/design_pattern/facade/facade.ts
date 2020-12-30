class Cooker {
    makePotatoes() {
        console.log("Making potatoes some potatoes...")
    }
}
class Order {
    savingOrder() {
        console.log('The order was saved.')
    }
}

class Delivery {
    Deliver() {
        setTimeout(() => console.log('The deliver is already here '), 1000)
    }
}
class OrderingCook {

    static Ordering() {
        let cooker:Cooker = new Cooker();
        let order:Order = new Order();
        let deliver:Delivery = new Delivery();

        order.savingOrder()
        cooker.makePotatoes()
        deliver.Deliver();
    }
}
OrderingCook.Ordering()