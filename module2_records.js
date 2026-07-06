// Base class for all records
class BaseRecord {
    constructor(type, id) {
        this.type = type;
        this.id = id;
        this.status = "Pending";
    }
}

// Sales Order class inheriting from BaseRecord
export class SalesOrder extends BaseRecord {
    constructor(id, customerName, amount, qty) {
        super("Sales Order", id);
        this.customerName = customerName;
        this.amount = amount;
        this.qty = qty;
    }
}// Your JavaScript code here
