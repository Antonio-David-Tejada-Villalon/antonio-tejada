let moveNumber = 0;
      document.querySelectorAll('td').forEach((t) => {
        t.addEventListener('click', addMove);
        t.addEventListener('touchend', addMove);
      });
      document.querySelector('#reset').addEventListener('click', reset);
      function addMove(e) {
        if (e.target.innerHTML === '') {
          e.target.innerHTML = moveNumber % 2 == 0 ? 'X' : 'O';
          checkWin();
          moveNumber++;
        }
      }
      function reset() {
        document.querySelectorAll('td').forEach((t) => {
          t.innerHTML = '';
        });
        moveNumber = 0;
      }
      function getCell(id) {
        return document.getElementById(id).innerHTML;
      }
      function checkCells(...cells) {
        return (
          getCell(cells[0]) == getCell(cells[1]) &&
          getCell(cells[1]) == getCell(cells[2]) &&
          getCell(cells[2]) !== ''
        );
      }
      function winner() {
        alert(`Player ${moveNumber % 2 == 0 ? 'X' : 'O'} wins!`);
      }
      function checkWin() {
        if (
          checkCells('topLeft', 'middleLeft', 'bottomLeft') ||
          checkCells('topCenter', 'center', 'bottomCenter') ||
          checkCells('topRight', 'middleRight', 'bottomRight') ||
          checkCells('topLeft', 'topCenter', 'topRight') ||
          checkCells('middleLeft', 'center', 'middleRight') ||
          checkCells('topRight', 'center', 'bottomLeft')
        ) {
          winner();
        } else {
          if (
            [...document.querySelectorAll('td')].every(
              (x) => x.innerHTML !== ''
            )
          ) {
            alert(`The game ends in a tie.`);
          }
        }
      }