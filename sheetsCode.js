// Function to fetch and display all data
async function loadData() {
  google.script.run.withSuccessHandler(displayData).fetchAllData();
}

// Display data in a table
function displayData(data) {
  const tableBody = document.getElementById("dataBody");

  // Clear any existing content
  tableBody.innerHTML = "";

  // Loop through each row and display it
  data.forEach((row) => {
    const rowElement = document.createElement("tr");
    row.forEach((cell) => {
      const cellElement = document.createElement("td");
      cellElement.textContent = cell;
      rowElement.appendChild(cellElement);
    });
    tableBody.appendChild(rowElement);
  });
}

// Load data when the page loads
window.onload = loadData;
