//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42');	
let setumei = document.createElement('p');
setumei.textContent = '写真表と都市の緯度経度のページです';
h2.insertAdjacentElement('afterend', setumei);
setumei.style.textEmphasis = 'sesame green';
// 練習4-3 写真表作成プログラム
let div = document.querySelector('div#phototable');
let hanako = document.createElement('p');
div.insertAdjacentElement('afterend', hanako);
let hanakop = document.querySelector('p#hanako');
hanakop = document.createElement('img');
hanakop.setAttribute('src', 'hanako.png');
hanako.insertAdjacentElement('beforeend', hanakop);
let jiro = document.createElement('p');
div.insertAdjacentElement('afterend', jiro);
let jirop = document.querySelector('p#jiro');
jirop = document.createElement('img');
jirop.setAttribute('src', 'jiro.png');
jiro.insertAdjacentElement('beforeend', jirop);
let taro = document.createElement('p');
div.insertAdjacentElement('afterend', taro);
let tarop = document.querySelector('p#taro');
tarop = document.createElement('img');
tarop.setAttribute('src', 'taro.png');
taro.insertAdjacentElement('beforeend', tarop);
// 練習4-4 箇条書き削除プログラム
let li = document.querySelectorAll('li');
for (let l of li) {
    l.remove();
}
// 練習4-5 箇条書き追加プログラム
let z = document.querySelector('ul#location');
let z0 = document.createElement('li');
z0.textContent = data[0].name+'...'+data[0].lat+','+data[0].lng;
z.insertAdjacentElement('beforeend', z0);
let z1 = document.createElement('li');
z1.textContent = data[1].name+'...'+data[1].lat+","+data[1].lng;
z.insertAdjacentElement('beforeend', z1);
let z2 = document.createElement('li');
z2.textContent = data[2].name+'...'+data[2].lat+","+data[2].lng;
z.insertAdjacentElement('beforeend', z2);
let z3 = document.createElement('li');
z3.textContent = data[3].name+'...'+data[3].lat+","+data[3].lng;
z.insertAdjacentElement('beforeend', z3);
let z4 = document.createElement('li');
z4.textContent = data[4].name+'...'+data[4].lat+","+data[4].lng;
z.insertAdjacentElement('beforeend', z4);
let z5 = document.createElement('li');
z5.textContent = data[5].name+'...'+data[5].lat+","+data[5].lng;
z.insertAdjacentElement('beforeend', z5);
let z6 = document.createElement('li');
z6.textContent = data[6].name+'...'+data[6].lat+","+data[6].lng;
z.insertAdjacentElement('beforeend', z6);
let z7 = document.createElement('li');
z7.textContent = data[7].name+'...'+data[7].lat+","+data[7].lng;
z.insertAdjacentElement('beforeend', z7);
let z8 = document.createElement('li');
z8.textContent = data[8].name+'...'+data[8].lat+","+data[8].lng;
z.insertAdjacentElement('beforeend', z8);
let z9 = document.createElement('li');
z9.textContent = data[9].name+'...'+data[9].lat+","+data[9].lng;
z.insertAdjacentElement('beforeend', z9);