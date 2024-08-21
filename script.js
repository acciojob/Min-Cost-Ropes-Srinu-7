function mincost(arr) {
    // Initialize total cost
    let totalCost = 0;

    // Sort the array to simulate a min-heap
    arr.sort((a, b) => a - b);

    // While there's more than one rope left, connect the two smallest
    while (arr.length > 1) {
        // Extract the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // Calculate the cost of connecting them
        let cost = first + second;

        // Add this cost to the total cost
        totalCost += cost;

        // Insert the new rope back into the array and sort it again
        arr.push(cost);
        arr.sort((a, b) => a - b);
    }

    // Return the total cost
    return totalCost;
}

module.exports = mincost;
