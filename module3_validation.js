// Object to handle order validation
export const OrderValidator = {
    limit: 100000,
    
    isValid: function(amount) {
        // Using arrow function so 'this' refers to OrderValidator context
        const check = () => amount <= this.limit;
        return check();
    }
};
