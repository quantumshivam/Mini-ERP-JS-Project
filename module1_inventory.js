// Creates a simple inventory manager using closures to keep stock private
function createInventoryManager(itemName, initialStock) {
    let stock = initialStock;
    
    return {
        sellStock: function(qty) {
            if (qty <= stock) {
                stock -= qty;
                return true;
            }
            return false;
        },
        getStock: () => stock
    };
}

// Export the inventory instance
export const laptopVault = createInventoryManager("Dell Laptops", 50);
