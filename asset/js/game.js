var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// fight function (now with parameter for enemy's name)
var fight = function () {
  alert("welcome to robot gladiators!");
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining."
  );
  var startGame = function() {
    for (var i = 0; i < enemyNames.length; i++) {
      ...
    }
  
  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove players's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    // leave while() loop if player is dead
  } else {
    alert(playerName + " still has" + playerHealth + "health left");
  }
};
fight();
