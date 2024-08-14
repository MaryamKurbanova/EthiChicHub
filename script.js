document.addEventListener("DOMContentLoaded", function() {
  // Initializes the count variable for signatures
  let count = 0;

  const addSignature = () => {
    count += 1;
    console.log(`Signature count: ${count}`);
  };

  // Adds a click event listener to the sign now button
  const signNowButton = document.getElementById('sign-now-button');
  if (signNowButton) {
    signNowButton.addEventListener('click', () => {
      const nameInput = document.getElementById('name');
      const ageInput = document.getElementById('age');
      const emailInput = document.getElementById('email');

      // Validation logic
      if (nameInput.value.length < 2) {
        nameInput.classList.add('invalid-input');
      } else {
        nameInput.classList.remove('invalid-input');
      }

      if (ageInput.value.length < 2) {
        ageInput.classList.add('invalid-input');
      } else {
        ageInput.classList.remove('invalid-input');
      }

      if (emailInput.value.includes('@') && emailInput.value.includes('.')) {
        emailInput.classList.remove('invalid-input');
      } else {
        emailInput.classList.add('invalid-input');
      }
      // Adds signature
      addSignature();
      // Displays new modal
      displayNewModal();
    });
  }

  // Function to display the modal
  function displayModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

 
  // Sets timeout to display modal after 10 seconds
  setTimeout(displayModal, 30000); // 10 seconds = 10,000 milliseconds

  // Gets the <span> element that closes the modal
  var span = document.querySelector(".close");

  // When the user clicks on <span> (x), it closes the modal
  if (span) {
    span.onclick = function() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    };
  }

  // When the user clicks anywhere outside of the modal, closes it
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Ethical Product Calculator functionality
  const calculateButton = document.getElementById('calculate');
  const resultDisplay = document.getElementById('result');

  if (calculateButton) {
    calculateButton.addEventListener('click', function() {
      // Gets the values from the form
      const material = document.getElementById('material').value;
      const labor = document.getElementById('labor').value;
      const sustainability = document.getElementById('sustainability').value;
      const packaging = document.getElementById('packaging').value;
      const transport = document.getElementById('transport').value;
      const waste = document.getElementById('waste').value;

      // Initializes score
      let score = 0;

      // Defines scoring for each category
      const materialScore = {
        cotton: 1,
        polyester: 0.5,
        silk: 0.8,
        wool: 0.7
      };

      const laborScore = {
        good: 1,
        fair: 0.7,
        poor: 0.3
      };

      const sustainabilityScore = {
        high: 1,
        medium: 0.6,
        low: 0.3
      };

      const packagingScore = {
        recyclable: 1,
        reusable: 0.8,
        plastic: 0.4,
        none: 0
      };

      const transportScore = {
        local: 1,
        national: 0.6,
        international: 0.3
      };

      const wasteScore = {
        efficient: 1,
        average: 0.6,
        poor: 0.3
      };

      // Calculates the total score
      score += materialScore[material] || 0;
      score += laborScore[labor] || 0;
      score += sustainabilityScore[sustainability] || 0;
      score += packagingScore[packaging] || 0;
      score += transportScore[transport] || 0;
      score += wasteScore[waste] || 0;

      // Displays the result
      if (resultDisplay) {
        resultDisplay.textContent = `Your product's ethical score is ${score.toFixed(2)}/6.00 .`;
      }
    });
  }
});
