
  uplataBtn.addEventListener('click', uplate);
  manjeBtn.onclick = function () {
    br = 1;
  };
  viseBtn.onclick = function () {
    br = 2;
  };

function uplate() {
   uplataVal = parseInt(uplata.value);
   uplata.style.background = 'green';

   if (Number.isInteger(uplataVal) === false ) {
     alert('Pogresan unos!');
     uplata.style.background = 'red';
   }else {
     clickFor.style.color = 'aqua';
     clickFor.style.background = '#595959';
     uplataBtn.style.background = '#999999';
     uplataBtn.style.color = '#a6a6a6';
     manjeBtn.style.background = '#999999';
     manjeBtn.style.color = '#a6a6a6';
     viseBtn.style.background = '#999999';
     viseBtn.style.color = '#a6a6a6';
   }
};

function kvote() {
  if (zadnjiBr === 5 ) {
      kvota = 25000;
  }else if (zadnjiBr === 6) {
      kvota = 15000;
  }else if (zadnjiBr === 7) {
      kvota = 7500;
  }else if (zadnjiBr === 8) {
      kvota = 3000;
  }else if (zadnjiBr === 9) {
      kvota = 1250;
  }else if (zadnjiBr === 10) {
      kvota = 700;
  }else if (zadnjiBr === 11) {
      kvota = 350;
  }else if (zadnjiBr === 12) {
      kvota = 250;
  }else if (zadnjiBr === 13) {
      kvota = 175;
  }else if (zadnjiBr === 14) {
      kvota = 125;
  }else if (zadnjiBr === 15) {
      kvota = 100;
  }else if (zadnjiBr === 16) {
      kvota = 90;
  }else if (zadnjiBr === 17) {
      kvota = 80;
  }else if (zadnjiBr === 18) {
      kvota = 70;
  }else if (zadnjiBr === 19) {
      kvota = 60;
  }else if (zadnjiBr === 20) {
      kvota = 50;
  }else if (zadnjiBr === 21) {
      kvota = 35;
  }else if (zadnjiBr === 22) {
      kvota = 25;
  }else if (zadnjiBr === 23) {
      kvota = 20;
  }else if (zadnjiBr === 24) {
      kvota = 15;
  }else if (zadnjiBr === 25) {
      kvota = 12;
  }else if (zadnjiBr === 26) {
      kvota = 10;
  }else if (zadnjiBr === 27) {
      kvota = 8;
  }else if (zadnjiBr === 28) {
      kvota = 7;
  }else if (zadnjiBr === 29) {
      kvota = 6;
  }else if (zadnjiBr === 30) {
      kvota = 5;
  }else if (zadnjiBr === 31) {
      kvota = 4;
  }else if (zadnjiBr === 32) {
      kvota = 3;
  }else if (zadnjiBr === 33) {
      kvota = 2;
  }else if (zadnjiBr === 34) {
      kvota = 1;
  }

};

function dobitakFun() {
  let dobitak = kvota * uplataVal;
  kvotaPolje.innerHTML = kvota;
  dobitakPolje.innerHTML = `${dobitak} din`;

  if (br == 1) {
      if (parseInt(zbir5.innerHTML) < 122.5) {
        kvotaPolje2.innerHTML = 2;
        dobitak  = kvota * uplataVal * 2;
        dobitakPolje.innerHTML = `${dobitak} din`;
      }else {
        kvotaPolje2.innerHTML = 0.50;
        dobitak  = kvota * uplataVal * 0.50;
        dobitakPolje.innerHTML = `${dobitak} din`;
      }
  };
  if (br == 2) {
      if (parseInt(zbir5.innerHTML) > 122.5) {
        kvotaPolje2.innerHTML = 2;
        dobitak  = kvota * uplataVal * 2;
        dobitakPolje.innerHTML = `${dobitak} din`;
      }else {
        kvotaPolje2.innerHTML = 0.50;
        dobitak  = kvota * uplataVal * 0.50;
        dobitakPolje.innerHTML = `${dobitak} din`;
      }
  };

};
