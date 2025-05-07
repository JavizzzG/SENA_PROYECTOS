function getRandomCard() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  function playTurn(playerName, currentScore) {
    let turnScore = currentScore;
    while (confirm(`${playerName}, ¿desea pedir?`)) {
      const newCard = getRandomCard();
      turnScore += newCard;
      console.log(`${playerName}: ${turnScore} puntos totales`);
      if (turnScore > 21) {
        console.log(`${playerName} se ha pasado de 21. ¡Pierde!`);
        return turnScore; // Return score even if bust
      }
    }
    console.log(`${playerName} se planta con ${turnScore} puntos.`);
    return turnScore;
  }
  
  function playBlackjack() {
    if (!confirm("JUGADOR 1, ¿desea jugar?")) {
      console.log("No hay jugadores activos.");
      return;
    }
  
    if (!confirm("JUGADOR 2, ¿desea jugar?")) {
      console.log("No hay jugadores activos.");
      return;
    }
  
  
    let score1 = 0;
    let score2 = 0;
    let player1Standing = false;
    let player2Standing = false;
  
    while (!player1Standing || !player2Standing) {
      if (!player1Standing) {
        score1 = playTurn("Jugador 1", score1);
        if (score1 > 21) break; //end if player 1 busts
        if (confirm("Jugador 1, ¿desea plantarse?")) player1Standing = true;
      }
  
       if (!player2Standing) {
        score2 = playTurn("Jugador 2", score2);
        if (score2 > 21) break; //end if player 2 busts
         if (confirm("Jugador 2, ¿desea plantarse?")) player2Standing = true;
  
      }
    }
  
    if (score1 > 21 && score2 > 21) {
      console.log("Ambos jugadores se han pasado. ¡Empate!");
    } else if (score1 > 21) {
      console.log("¡Jugador 2 gana!");
    } else if (score2 > 21) {
      console.log("¡Jugador 1 gana!");
    } else if (score1 > score2) {
      console.log("¡Jugador 1 gana!");
    } else if (score2 > score1) {
      console.log("¡Jugador 2 gana!");
    } else {
      console.log ("¡Empate!");
    }
  }
  
  
  
  playBlackjack();
  