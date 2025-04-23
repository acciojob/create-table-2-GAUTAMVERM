function createTable() {
  const table = document.getElementById("myTable");
  table.innerHTML = ""; // Clear previous table content

  const rows = parseInt(prompt("Input number of rows"));
  const cols = parseInt(prompt("Input number of columns"));

  // Validation
  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  // Generate table
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}