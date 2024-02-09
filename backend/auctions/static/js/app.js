// This function will create a list item for each category
function createCategoryElement(category) {
    const listItem = document.createElement('li');
    listItem.textContent = category.name;
    return listItem;
}

// This function will fetch categories and append them to the DOM
function loadCategories() {
    fetch('/api/categories/')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(categories => {
            const categoriesList = document.getElementById('categories-list');
            categories.forEach(category => {
                const categoryElement = createCategoryElement(category);
                categoriesList.appendChild(categoryElement);
            });
        })
        .catch(e => {
            console.error('Error fetching categories:', e);
        });
}

// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
});

function checkAuthentication() {
    fetch('/api/check-authentication/') // A Django endpoint that verifies if the user is logged in
        .then(response => response.json())
        .then(data => {
            if (!data.isAuthenticated) {
                // Redirect the user to the login page or show a login form
                window.location.href = '/login/';
            } else {
                // Allow the user to create an auction or place a bid
                // Initialize auction creation or bidding logic here
            }
        })
        .catch(e => {
            console.error('Error checking authentication:', e);
        });
}
