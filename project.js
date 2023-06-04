let b = document.querySelector('#kensaku');
b.addEventListener('click', kekka);
function kekka() {
    let sv = document.querySelectorAll('input[name="bangumi"]');
    let s;
    if(sv[0].checked){
        s = 'g1';
    } else if (sv[1].checked){
        s = 'e1'
    }
    let gn = document.querySelectorAll('input[name="janru"]');
    let g;
    if(gn[0].checked){
        g = '0000';
    } else if(gn[1].checked){
        g = '0100';
    } else if(gn[2].checked){
        g = '0205';
    } else if(gn[3].checked){
        g = '0300';
    } else if(gn[4].checked){
        g = '0409';
    } else if(gn[5].checked){
        g = '0502';
    } else if(gn[6].checked){
        g = '0600';
    } else if(gn[7].checked){
        g = '0700';
    } else if(gn[8].checked){
        g = '0800';
    } else if(gn[9].checked){
        g = '0903';
    } else if(gn[10].checked){
        g = '1000';
    } else if(gn[11].checked){
        g = '1100';
    }
    let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+s+'-'+g+'-j.json';
    axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);
}
function showResult(resp) {
    let data = resp.data;
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    let sv = document.querySelectorAll('input[name="bangumi"]');
    let s;
    if(sv[0].checked){
        for (let a of data.list.g1){
            let j0 = document.querySelector('h3#k0');
            j0.textContent = '--------------------------------------------------------------------------------------';

            let j1 = document.querySelector('h3#k1');
            j1.textContent = 'チャンネル名:'+a.service.name;

            let j2 = document.querySelector('h3#k2');
            j2.textContent = '番組名:'+a.title;
            
            let j3 = document.querySelector('h3#k3');
            j3.textContent = 'サブタイトル:'+a.subtitle;
            
            let j4 = document.querySelector('h3#k4');
            j4.textContent = '開始時刻:'+a.start_name;
            
            let j5 = document.querySelector('h3#k5');
            j5.textContent = '終了時刻:'+a.end_time;
            
            let j6 = document.querySelector('h3#k6');
            j6.textContent = '番組説明:'+a.content;
            
            let j7 = document.querySelector('h3#k7');
            j7.textContent = '出演者'+a.act;
            
    }
    }  else if(sv[1].checked){
        for (let a of data.list.e1){
            
            let j0 = document.querySelector('h3#k0');
            j0.textContent = '--------------------------------------------------------------------------------------';
            
            let j1 = document.querySelector('h3#k1');
            j1.textContent = 'チャンネル名:'+a.service.name;
            
            let j2 = document.querySelector('h3#k2');
            j2.textContent = '番組名:'+a.title;
            
            let j3 = document.querySelector('h3#k3');
            j3.textContent = 'サブタイトル:'+a.subtitle;
            
            let j4 = document.querySelector('h3#k4');
            j4.textContent = '開始時刻:'+a.start_name;
            
            let j5 = document.querySelector('h3#k5');
            j5.textContent = '終了時刻:'+a.end_time;
            
            let j6 = document.querySelector('h3#k6');
            j6.textContent = '番組説明:'+a.content;
            
            let j7 = document.querySelector('h3#k7');
            j7.textContent = '出演者'+a.act;
            
        }
    }
}
function showError(err) {
    console.log(err);
}
function finish() {
    console.log('Ajax 通信が終わりました');
}
