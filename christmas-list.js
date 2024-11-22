// Select the list element
const christmasList = document.querySelector('ul');

// Function to add a new item to the list
function addItem(itemName, itemLink) {
    // Create list item
    const listItem = document.createElement('li');

    // Add content to the list item
    listItem.innerHTML = `
        🎁 ${itemName}
        <a href="${itemLink}" target="_blank">
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                <i class="material-icons">shopping_cart</i>
            </button>
        </a>
    `;

    // Append the new item to the list
    christmasList.appendChild(listItem);
}

// Example of dynamically adding items (optional demo)
addItem("Festive Mug", "https://example.com/mug");
addItem("Holiday Candle", "https://example.com/candle");

// Function to toggle festive mode
function toggleFestiveMode() {
    document.body.classList.toggle('festive');

    // If festive mode is active, add snowflakes
    if (document.body.classList.contains('festive')) {
        createSnowflakes();
    } else {
        removeSnowflakes();
    }
}

// Function to create snowflakes
function createSnowflakes() {
    for (let i = 0; i < 10; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄️';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2s and 5s
        document.body.appendChild(snowflake);
    }
}

// Function to remove snowflakes
function removeSnowflakes() {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => snowflake.remove());
}

// Add event listener to a button (optional for festive toggle)
const festiveToggleBtn = document.createElement('button');
festiveToggleBtn.innerText = "Toggle Festive Mode";
festiveToggleBtn.classList.add("mdl-button", "mdl-js-button", "mdl-button--raised", "mdl-button--colored");
festiveToggleBtn.style.marginTop = "20px";
festiveToggleBtn.addEventListener('click', toggleFestiveMode);

// Add the toggle button to the footer
document.querySelector('footer').appendChild(festiveToggleBtn);
