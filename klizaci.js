
function klizaci() {
  let crvena = loptice.filter(red => red.includes('class="red"'));
  let braon = loptice.filter(red => red.includes('class="brown"'));
  let zelena = loptice.filter(red => red.includes('class="green"'));
  let plava = loptice.filter(red => red.includes('class="blue"'));
  let roze = loptice.filter(red => red.includes('class="pink"'));
  let ljubicasta = loptice.filter(red => red.includes('class="purple"'));
  let zuta = loptice.filter(red => red.includes('class="yellow"'));
  let narandzasta = loptice.filter(red => red.includes('class="orange"'));

    for (let i = 0; i < crvena.length; i++) {
      let counter = crvena.length;
      let move = 120 - counter * 20;
      document.querySelector('.red2').style.marginTop = `${move}px`;
    }
    for (let i = 0; i < braon.length; i++) {
      let counter = braon.length;
      let move = 120 - counter * 20;
      document.querySelector('.brown2').style.marginTop = `${move}px`;
    }
    for (let i = 0; i < zelena.length; i++) {
      let counter = zelena.length;
      let move = 120 - counter * 20;
      document.querySelector('.green2').style.marginTop = `${move}px`;
    }
    for (let i = 0; i < plava.length; i++) {
      let counter = plava.length;
      let move = 120 - counter * 20;
      document.querySelector('.blue2').style.marginTop = `${move}px`;
    }
    for (let i = 0; i < roze.length; i++) {
      let counter = roze.length;
      let move = 120 - counter * 20;
      document.querySelector('.pink2').style.marginTop = `${move}px`;
    }
    for (let i = 0; i < ljubicasta.length; i++) {
      let counter = ljubicasta.length;
      let move = 120 - counter * 20;
      document.querySelector('.purple2').style.marginTop = `${move}px`;
    }
    for (let i = 0; i < zuta.length; i++) {
      let counter = zuta.length;
      let move = 120 - counter * 20;
      document.querySelector('.yellow2').style.marginTop = `${move}px`;
    }
    for (let i = 0; i < narandzasta.length; i++) {
      let counter = narandzasta.length;
      let move = 120 - counter * 20;
      document.querySelector('.orange2').style.marginTop = `${move}px`;
    }
}
