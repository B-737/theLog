async function fetchData() {
    const column = document.getElementById("column").value;
    const value = document.getElementById("value").value;

    // Build the API URL
    const apiUrl = `https://script.google.com/macros/s/AKfycbzs8RrgF4UsKh7qclLILeUZaEx4lovVykV4HoFUH5-uM8zjsIyVtXeLk1LPYwwgl3v8IA/exec?column=${encodeURIComponent(column)}&value=${encodeURIComponent(value)}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      displayData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data. Check console for details.");
    }
  }

  function displayData(data) {
    const tableBody = document.getElementById("dataBody");
    tableBody.innerHTML = ""; // Clear existing rows

    if (data.error) {
      alert(data.error);
      return;
    }

    if (data.length === 0) {
      alert("No matching data found.");
      return;
    }

    data.forEach(row => {
      const rowElement = document.createElement("tr");
      row.forEach(cell => {
        const cellElement = document.createElement("td");
        cellElement.textContent = cell;
        rowElement.appendChild(cellElement);
      });
      tableBody.appendChild(rowElement);
    });
  }