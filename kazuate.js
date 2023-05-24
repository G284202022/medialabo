// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  kaisu = kaisu + 1;
  console.log(kaisu + "回目の予想: " + yoso);
  let k = document.querySelector('span#kaisu');
  k.textContent = kaisu;
  let y = document.querySelector('span#answer');
  y.textContent = yoso;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  if (kaisu < 3) {
    if (kotae === yoso) {
      console.log("正解です．おめでとう!");
      let a = document.querySelector('p#result');
      let a1 = document.createElement('p');
      a1.textContent = '正解です.おめでとう!';
      a.insertAdjacentElement('afterend', a1);
    } else if (kotae > yoso) {
      console.log("まちがい．答えはもっと大きいですよ");
      let b = document.querySelector('p#result');
      let b1 = document.createElement('p');
      b1.textContent = 'まちがい.答えはもっと大きいですよ';
      b.insertAdjacentElement('afterend', b1);
    } else if (kotae < yoso) {
      console.log("まちがい．答えはもっと小さいですよ");
      let c = document.querySelector('p#result');
      let c1 = document.createElement('p');
      c1.textContent = 'まちがい．答えはもっと小さいですよ';
      c.insertAdjacentElement('beforeend', c1);
    }  
  } else if (kaisu === 3 && kotae !== yoso) {
    console.log("まちがい．残念でした答えは" + kotae + "です．");
    let d = document.querySelector('p#result');
    let d1 = document.createElement('p');
    d1.textContent = 'まちがい．残念でした答えは'+kotae+'です.';
    d.insertAdjacentElement('beforeend', d1);
  } else if (kaisu === 3 && kotae === yoso) {
    console.log("正解です．おめでとう!");
    let e = document.querySelector('p#result');
    let e1 = document.createElement('p');
    e1.textContent = '正解です.おめでとう！';
    e.insertAdjacentElement('beforeend', e1);
  } else if (kaisu > 3) {
    console.log("答えは" + kotae + "でした．すでにゲームは終わっています");
    let f = document.querySelector('p#result');
    let f1 = document.createElement('p');
    f1.textContent = '答えは'+kotae+'でした．すでにゲームは終わっています';
    f.insertAdjacentElement('beforeend', f1);
  }
}