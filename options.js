function includesBall() {
  let counter = 0;
  if (loptice.includes(markedBalls[0])) {
      counter++;
  }
  if (loptice.includes(markedBalls[1])) {
      counter++;
  }
  if (loptice.includes(markedBalls[2])) {
      counter++;
  }
  if (loptice.includes(markedBalls[3])) {
      counter++;
  }
  if (loptice.includes(markedBalls[4])) {
      counter++;
  }
  if (loptice.includes(markedBalls[5])) {
      counter++;
  }
  if (counter === 6) {
    pogodak();
    dobitakFun();
  };
};

function allFive() {
  let five = [];
  let _1 = parseInt(allHolders[0].innerText);
  let _2 = parseInt(allHolders[1].innerText);
  let _3 = parseInt(allHolders[2].innerText);
  let _4 = parseInt(allHolders[3].innerText);
  let _5 = parseInt(allHolders[4].innerText);
  five.push(_1,_2,_3,_4,_5);
   let zbirPrvihPet = five.reduce((a,b) => a + b,0);
   zbir5.innerHTML = zbirPrvihPet;
};

function restart() {
  restartBtn.style.color = 'aqua';
  restartBtn.style.background = '#595959';
  restartBtn.onclick = function () {
    restartBtn.style.color = '#a6a6a6';
    restartBtn.style.background = '#999999';
    clickFor.style.color = 'aqua';
    clickFor.style.background = '#595959';
    uplata.style.background = 'yellow';
    uplataBtn.style.background = 'aqua';
    uplataBtn.style.color = 'black';
    manjeBtn.style.background = 'aqua';
    manjeBtn.style.color = 'black';
    viseBtn.style.background = 'aqua';
    viseBtn.style.color = 'black';
    feedback.style.background = 'none';
    play();
  }
};

function pogodak() {
  success.play();
  feedback.style.background = 'green';
  let mark = [];
  let mark1 = loptice.indexOf(markedBalls[0]);
  let mark2 = loptice.indexOf(markedBalls[1]);
  let mark3 = loptice.indexOf(markedBalls[2]);
  let mark4 = loptice.indexOf(markedBalls[3]);
  let mark5 = loptice.indexOf(markedBalls[4]);
  let mark6 = loptice.indexOf(markedBalls[5]);
  mark.push(mark1,mark2,mark3,mark4,mark5,mark6);
  mark.sort((a,b) => a - b);
  zadnjiBr = mark.pop();
  kvote();
};

function allColorsTest() {
  if (index === 6) {
      play.addEventListener('click',luckyNumbers);
      play.style.color = 'aqua';
      play.style.background = '#595959';

  }
}
