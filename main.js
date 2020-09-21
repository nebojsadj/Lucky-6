
play();

function play() {
  const play = document.querySelector('#play');
  const container1 = document.querySelector('#container1');
  const container2 = document.querySelector('#container2');
  let brIzvlacenja = document.querySelector('#brIzvlacenja');
  const wrapp2 = document.querySelector('#wrapp2');

  index = 0;
  let counter = 0;
  markedBalls.length = 0;
  loptice.length = 0;
  zbir5.innerHTML = 0;
  br = 0;
  dobitakPolje.innerHTML = 0;
  uplata.value = '';
  kvotaPolje.innerHTML = 0;
  kvotaPolje2.innerHTML = 1;

  let copyArr3 = [].concat(arr3);

    insertBoxes();
    allBoxes = document.querySelectorAll('.box');
    allColors = document.querySelectorAll('.box2');

    insertHolders();
    insertTopHolders();
    insertChannels();
    klizaci();
    sat();

  allHolders = document.querySelectorAll('.kuglica');
  const holdBall = document.querySelector('#holdBall');
  clickFor.style.color = '#a6a6a6';
  clickFor.style.background = '#999999';


  clickFor.addEventListener('click',clickForNumbers);

  function clickForNumbers() {
    clickFor.removeEventListener('click',clickForNumbers);
    clickFor.style.color = '#a6a6a6';
    clickFor.style.background = '#999999';

    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].addEventListener('click', marking);
      };
    for (let i = 0; i < allColors.length; i++) {
        allColors[i].addEventListener('click', markingAll);
        };
  };

  function marking() {
    if (this.getAttribute('style') === 'background: rgb(102,102,102)') {
        this.removeAttribute('style');
        index--;
        markedBalls.splice(this,1);
    }else {
        this.setAttribute('style','background: rgb(102,102,102)');
        index++;
        markedBalls.push(this.innerHTML);
    }
    if (index === 6) {
      for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].removeEventListener('click', marking);
        play.addEventListener('click',luckyNumbers);
        play.style.color = 'aqua';
        play.style.background = '#595959';
        };
    }
  };

  function markingAll() {
      if (this.id === '49') {
        this.style.background = 'gray';
        let allRed = document.querySelectorAll('.red');
        let arrRed = arr3.slice(0,6);
        for (var i = 0; i < allRed.length; i++) {
          allRed[i].parentElement.style.background = 'gray';
        };
        markedBalls.push(arrRed[0],arrRed[1],arrRed[2],arrRed[3],arrRed[4],arrRed[5]);
        index = 6;
      }else if (this.id === '50') {
        this.style.background = 'gray';
        let allBrown = document.querySelectorAll('.brown');
        let arrBrown = arr3.slice(6,12);
        for (var i = 0; i < allBrown.length; i++) {
          allBrown[i].parentElement.style.background = 'gray';
        };
        markedBalls.push(arrBrown[0],arrBrown[1],arrBrown[2],arrBrown[3],arrBrown[4],arrBrown[5]);
        index = 6;
      }else if (this.id === '51') {
        this.style.background = 'gray';
        let allGreen = document.querySelectorAll('.green');
        let arrGreen = arr3.slice(12,18);
        for (var i = 0; i < allGreen.length; i++) {
          allGreen[i].parentElement.style.background = 'gray';
        };
        markedBalls.push(arrGreen[0],arrGreen[1],arrGreen[2],arrGreen[3],arrGreen[4],arrGreen[5]);
        index = 6;
      }else if (this.id === '52') {
        this.style.background = 'gray';
        let allBlue = document.querySelectorAll('.blue');
        let arrBlue = arr3.slice(18,24);
        for (var i = 0; i < allBlue.length; i++) {
          allBlue[i].parentElement.style.background = 'gray';
        };
        markedBalls.push(arrBlue[0],arrBlue[1],arrBlue[2],arrBlue[3],arrBlue[4],arrBlue[5]);
        index = 6;
      }else if (this.id === '53') {
        this.style.background = 'gray';
        let allPink = document.querySelectorAll('.pink');
        let arrPink = arr3.slice(24,30);
        for (var i = 0; i < allPink.length; i++) {
          allPink[i].parentElement.style.background = 'gray';
        };
        markedBalls.push(arrPink[0],arrPink[1],arrPink[2],arrPink[3],arrPink[4],arrPink[5]);
        index = 6;
      }else if (this.id === '54') {
        this.style.background = 'gray';
        let allPurple = document.querySelectorAll('.purple');
        let arrPurple = arr3.slice(30,36);
        for (var i = 0; i < allPurple.length; i++) {
          allPurple[i].parentElement.style.background = 'gray';
        };
        markedBalls.push(arrPurple[0],arrPurple[1],arrPurple[2],arrPurple[3],arrPurple[4],arrPurple[5]);
        index = 6;
      }else if (this.id === '55') {
        this.style.background = 'gray';
        let allYellow = document.querySelectorAll('.yellow');
        let arrYellow = arr3.slice(36,42);
        for (var i = 0; i < allYellow.length; i++) {
          allYellow[i].parentElement.style.background = 'gray';
        };
        markedBalls.push(arrYellow[0],arrYellow[1],arrYellow[2],arrYellow[3],arrYellow[4],arrYellow[5]);
        index = 6;
      }else if (this.id === '56') {
        this.style.background = 'gray';
        let allOrange = document.querySelectorAll('.orange');
        let arrOrange = arr3.slice(42,48);
        for (var i = 0; i < allOrange.length; i++) {
          allOrange[i].parentElement.style.background = 'gray';
        };
        markedBalls.push(arrOrange[0],arrOrange[1],arrOrange[2],arrOrange[3],arrOrange[4],arrOrange[5]);
        index = 6;
      }


      if (index === 6) {
        for (var i = 0; i < 48; i++) {
          allBoxes[i].removeEventListener('click', marking);
        }
        play.addEventListener('click',luckyNumbers);
        play.style.color = 'aqua';
        play.style.background = '#595959';
      }
  };

  function luckyNumbers() {
    play.style.color = '#a6a6a6';
    play.style.background = '#999999';
    play.removeEventListener('click',luckyNumbers);
    indexI++;
    brIzvlacenja.innerHTML = indexI;
    let loop = setInterval(run,800);

    function run() {
      let r = Math.floor(Math.random() * copyArr3.length);
      if (counter < 35) {
        allHolders[counter].innerHTML = '';
        allHolders[counter].innerHTML = copyArr3[r];
        loptice.push(allHolders[counter].innerHTML);
        copyArr3.splice(r,1);
        klizaci();
      }else {
        clearInterval(loop);
        allFive();
        includesBall();
        restart();
      }
      counter++;
    };
  };
};
