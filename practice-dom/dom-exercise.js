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
for (let zahyou of data) {
	zahyou = document.createElement('li');
    zahyou.textContent = zahyou.name+'...'+zahyou.lat+','+zahyou.lng;
}
z.insertAdjacentElement('beforeend', zahyou);