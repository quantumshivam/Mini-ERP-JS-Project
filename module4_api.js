// Mock API call to fetch credit score using Promises
export function fetchCreditScore(customerName) {
    return new Promise((resolve) => {
        // Simulating network delay
        setTimeout(() => {
            const score = Math.floor(Math.random() * 300) + 300; 
            resolve(score);
        }, 1000);
    });
}
