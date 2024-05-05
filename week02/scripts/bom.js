const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    const input = document.querySelector('#favchap').value; // Retrieve the input value

    // Create a new list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set the text content of the list item to the input value
    li.textContent = input;

    // Set the text content of the delete button
    deleteButton.textContent = '❌';

    // Add a click event listener to the delete button
    deleteButton.addEventListener('click', function() {
        // Removing the parent list item when the delete button is clicked
        li.remove();
        input.focus();
    });

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the new list item to the list
    list.appendChild(li);

    // Clear the input field after adding the chapter
    document.querySelector('#favchap').value = '';

    input.focus();
});
