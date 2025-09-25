// Reference data from Excel (basic example, expand for all)
const materials = {
  cement: { basic: 346, medium: 366, premium: 382, unit: "bags" },
  steel:  { basic: 43, medium: 45, premium: 50, unit: "kg" },
  bricks: { basic: 5, medium: 7, premium: 8, unit: "pieces" }
  // Add more from Excel...
};

function calculate() {
  let plotArea = document.getElementById("plotArea").value;
  let builtUpArea = document.getElementById("builtUpArea").value || 0;
  let type = document.getElementById("constructionType").value;
  let quality = document.getElementById("quality").value;

  if (!plotArea) {
    alert("Please enter plot area");
    return;
  }

  // Example: base calculation
  let totalCost = 0;
  let materialDetails = "";

  for (let key in materials) {
    let rate = materials[key][quality];
    let quantity = plotArea;  // for now assume proportional to area
    let cost = quantity * rate;
    totalCost += cost;
    materialDetails += `<li>${key.toUpperCase()} - ${quantity} ${materials[key].unit} = ₹${cost}</li>`;
  }

  // Estimated time (basic logic: 1 month per 1000 sq. ft.)
  let time = Math.ceil(plotArea / 1000) + " months";

  // Show result
  document.getElementById("result").innerHTML = `
    <h2>Estimated Cost: ₹${totalCost}</h2>
    <h3>Estimated Time: ${time}</h3>
    <h3>Material Breakdown:</h3>
    <ul>${materialDetails}</ul>
  `;
}
