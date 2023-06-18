
let score = 0;
let upgrades = 0;
let clickValue = 1;
let upgradeCosts = [10, 50, 100, 250];
let upgradeValues = [1, 8, 16, 60];
let upgradeImages = ["images/avatar/avatar2.png", "images/avatar/avatar3.png", "images/avatar/avatar4.png", "images/avatar/avatar5.png"];

function increaseScore() {
  score += clickValue;
  document.getElementById("score").textContent = score;

  if (score >= 1000) {
    alert("Parabéns Da Roça, resete a página");
  }
}

function buyUpgrade(index) {
  const currentUpgradeCost = upgradeCosts[index];
  const upgradeButton = document.getElementById("upgrade" + (index + 1));

  if (score >= currentUpgradeCost && !upgradeButton.classList.contains("bought")) {
    score -= currentUpgradeCost;
    clickValue += upgradeValues[index];
    upgrades++;

    document.getElementById("score").textContent = score;
    document.getElementById("upgrades").textContent = upgrades;

    upgradeButton.classList.add("bought");
    upgradeButton.disabled = true;

    document.getElementById("clickButton").src = upgradeImages[index];
    } else {
      alert("Esse item ja foi comprado ou você não tem dinheiro!");
    }
}


function playClickSound() {
    var audio = document.getElementById("clickSound");
    audio.currentTime = 0; 
    audio.play();
  }