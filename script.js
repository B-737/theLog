// Fetch data from the Apps Script backend
async function fetchData() {
  const column = document.getElementById("column").value;
  const value = document.getElementById("value").value;

  try {
    const response = await google.script.run
      .withSuccessHandler(displayData)
      .fetchRowData(column, value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Display data in a table
function displayData(result) {
  const tableBody = document.getElementById("resultsBody");

  // Clear the table
  tableBody.innerHTML = "";

  if (result.error) {
    alert(result.error);
    return;
  }

  const data = result.data;
  if (data.length === 0) {
    alert("No matching rows found.");
    return;
  }

  // Populate the table
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

function addFlight() {
  let date = document.getElementById("date").value;
  let registration = document.getElementById("registration").value;
  let departure = document.getElementById("departure").value;
  let arrival = document.getElementById("arrival").value;
  let offBlock = document.getElementById("offblock").value;
  let onBlock = document.getElementById("onblock").value;
  let airborne = document.getElementById("airborne").value;
  let landed = document.getElementById("landed").value;
  let pilotFlying = document.getElementById("pilotFlying").value;
  let safetyPilot = document.getElementById("safetyPilot").value;

  console.log(
    date +
      registration +
      departure +
      arrival +
      offBlock +
      onBlock +
      airborne +
      landed +
      pilotFlying +
      safetyPilot
  );
}
