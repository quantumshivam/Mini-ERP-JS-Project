// Generates end of day report using array methods
export function generateEndOfDayReport(allOrders, remainingStock) {
    console.log("\n--- END OF DAY FINANCIAL REPORT ---");

    // Calculate total revenue from approved orders only
    const totalRevenue = allOrders
        .filter(order => order.status === "Approved")
        .map(order => order.amount)
        .reduce((total, amount) => total + amount, 0);

    console.log(`Total Revenue Generated: INR ${totalRevenue}`);
    console.log(`Remaining Laptop Stock: ${remainingStock} units\n`);
}
