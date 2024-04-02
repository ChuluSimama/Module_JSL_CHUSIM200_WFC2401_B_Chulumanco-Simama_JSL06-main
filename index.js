// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Prices for each category (simplified for demonstration)
const prices = {
    Starters: 5,
    MainCourses: 10,
    Desserts: 7
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (const [category, items] of Object.entries(menu)) {
        const categoryElement = document.createElement('h3');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        const itemList = document.createElement('ul');
        menuContainer.appendChild(itemList);

        items.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = item;
            itemElement.addEventListener('click', () => addToOrder(item, category));
            itemList.appendChild(itemElement);
        });
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName, category) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    const orderItem = document.createElement('li');
    orderItem.textContent = itemName;
    orderItemsList.appendChild(orderItem);

    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const itemPrice = prices[category];
    const newTotal = currentTotal + itemPrice;
    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
