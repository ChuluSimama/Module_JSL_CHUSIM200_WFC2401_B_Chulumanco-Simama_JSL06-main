const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

const prices = {
    Starters: 5,
    MainCourses: 10,
    Desserts: 7
};

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

function addToOrder(itemName, category) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    const orderItem = document.createElement('li');
    orderItem.textContent = itemName;
    orderItemsList.appendChild(orderItem);

    const currentTotal = parseFloat(orderTotalElement.textContent);
    const itemPrice = prices[category];
    const newTotal = currentTotal + itemPrice;
    orderTotalElement.textContent = newTotal.toFixed(2);
}

function initMenuSystem(menu) {
    displayMenuItems(menu);
}

initMenuSystem(menu);
