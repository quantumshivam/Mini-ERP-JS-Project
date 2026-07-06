// Importing required modules
import { laptopVault } from './module1_inventory.js';
import { SalesOrder } from './module2_records.js';
import { OrderValidator } from './module3_validation.js';
import { fetchCreditScore } from './module4_api.js';
import { generateEndOfDayReport } from './module5_report.js';

// Main function to process orders
async function processBulkOrders(orderList) {
    console.log("Starting order processing...\n");

    // Loop through each order using let for block scope
    for (let i = 0; i < orderList.length; i++) {
        let order = orderList[i];
        console.log(`Processing ${order.id} for ${order.customerName}...`);

        // Step 1: Validate amount
        if (!OrderValidator.isValid(order.amount)) {
            console.log(`FAILED: ${order.id} limit exceeded.`);
            order.status = "Rejected";
            continue; 
        }

        // Step 2: Check credit score (async API call)
        const score = await fetchCreditScore(order.customerName);
        if (score < 650) {
            console.log(`REJECTED: Low credit score (${score}).`);
            order.status = "Rejected";
            continue;
        }

        // Step 3: Deduct inventory
        const inStock = laptopVault.sellStock(order.qty);
        if (inStock) {
            console.log(`SUCCESS: ${order.id} Approved.`);
            order.status = "Approved";
        } else {
            console.log(`FAILED: Out of stock.`);
            order.status = "Backordered";
        }
    }

    // Step 4: Generate report after loop finishes
    generateEndOfDayReport(orderList, laptopVault.getStock());
}

// ==========================================
// Execution Setup
// ==========================================

// Creating test data
const incomingOrders = [
    new SalesOrder("SO-101", "Rahul", 45000, 1),   
    new SalesOrder("SO-102", "Amit", 150000, 3), // Will fail due to limit  
    new SalesOrder("SO-103", "Sumit", 45000, 1)    
];

// Execute the engine
processBulkOrders(incomingOrders);
