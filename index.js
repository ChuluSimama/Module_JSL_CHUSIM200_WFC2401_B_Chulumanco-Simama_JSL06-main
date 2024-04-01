// Sample menu data
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menuContainer'); 

    Object.entries(menu).forEach(([category, items]) => {
        const categoryElement = document.createElement('h2');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        const itemListElement = document.createElement('ul');
        menuContainer.appendChild(itemListElement);

        items.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = item;
            itemElement.addEventListener('click', () => addToOrder(item));
            itemListElement.appendChild(itemElement);
        });
    });
}

let orderTotal = 0; 
function addToOrder(itemName) {
    const orderList = document.getElementById('orderItems'); 
    const orderTotalElement = document.getElementById('orderTotal');

    const orderItem = document.createElement('li');
    orderItem.textContent = itemName;
    orderList.appendChild(orderItem);

    orderTotal += 5; 
    orderTotalElement.textContent = `Total: $${orderTotal}`;
}

function initMenuSystem(menu) {
    displayMenuItems(menu);
}

document.addEventListener('DOMContentLoaded', () => initMenuSystem(menu));

