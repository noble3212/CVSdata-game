Papa.parse("data.csv", {
  download: true,
  header: true,
  complete: function(results) {
    const data = results.data;
    const container = document.getElementById("map-container");

    data.forEach(region => {
      const div = document.createElement("div");
      div.className = "region";
      div.textContent = region.name;
      div.onclick = () => {
        div.classList.toggle("active");
        alert(`Clicked on ${region.name}`);
        // Add your game logic here
      };
      container.appendChild(div);
    });
  }
});
