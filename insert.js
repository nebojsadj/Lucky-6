let arr3 = ['<div class="red">1</div>','<div class="red">9</div>','<div class="red">17</div>','<div class="red">25</div>','<div class="red">33</div>','<div class="red">41</div>','<div class="brown">2</div>','<div class="brown">10</div>','<div class="brown">18</div>','<div class="brown">26</div>','<div class="brown">34</div>','<div class="brown">42</div>','<div class="green">3</div>','<div class="green">11</div>','<div class="green">19</div>','<div class="green">27</div>','<div class="green">35</div>','<div class="green">43</div>','<div class="blue">4</div>','<div class="blue">12</div>','<div class="blue">20</div>','<div class="blue">28</div>','<div class="blue">36</div>','<div class="blue">44</div>','<div class="pink">5</div>','<div class="pink">13</div>','<div class="pink">21</div>','<div class="pink">29</div>','<div class="pink">37</div>','<div class="pink">45</div>','<div class="purple">6</div>','<div class="purple">14</div>','<div class="purple">22</div>','<div class="purple">30</div>','<div class="purple">38</div>','<div class="purple">46</div>','<div class="yellow">7</div>','<div class="yellow">15</div>','<div class="yellow">23</div>','<div class="yellow">31</div>','<div class="yellow">39</div>','<div class="yellow">47</div>','<div class="orange">8</div>','<div class="orange">16</div>','<div class="orange">24</div>','<div class="orange">32</div>','<div class="orange">40</div>','<div class="orange">48</div>'];

function insertBoxes() {
  let arr = ['red','brown','green','blue','pink','purple','yellow','orange','red','brown','green','blue','pink','purple','yellow','orange','red','brown','green','blue','pink','purple','yellow','orange','red','brown','green','blue','pink','purple','yellow','orange','red','brown','green','blue','pink','purple','yellow','orange','red','brown','green','blue','pink','purple','yellow','orange',,'red','brown','green','blue','pink','purple','yellow','orange'];

  let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];

  let boxes = '';
  for (let i = 0; i < 48; i++) {
      boxes +='<div class="box"><div class="'+arr[i]+'">'+arr1[i]+'</div></div>';
  };
  for (let i = 49; i < 57; i++) {
      boxes +='<div id="'+i+'" class="box2"><div id="'+arr[i]+'2'+'"></div></div>';
  }
  wrapp2.innerHTML = boxes;
};

function insertHolders() {
  let text = '';
  for ( let i = 30; i > 0; i--) {
    text += '<div class="kuglica">'+i+'</div>';
  }
  container1.innerHTML = text;
};

function insertChannels() {
  const boje = ['red2','brown2','green2','blue2','pink2','purple2','yellow2','orange2'];
  let text = '';
  for (let i = 0; i < 8; i++) {
    text += '<div class="kanal"><div class="'+boje[i]+'"></div></div>';
  };
  container2.innerHTML = text;
};

function insertTopHolders() {
  let text = '';
  for (let i = 35; i > 30; i--) {
    text += '<div class="kuglica">'+i+'</div>';
  };
  holdBall.innerHTML = text;
}

function sat() {
  let d = new Date();
  let m = d.getMinutes();
  if (m < 10) {
    m = '0' + m;
  }
  setTimeout(sat,1000);
  sat_.innerHTML = d.getHours() +':'+ m;
};
