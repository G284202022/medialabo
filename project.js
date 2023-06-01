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
    let h3 = document.querySelector('h3');
    let setumei = document.createElement('p');
    setumei.textContent = data;
    h3.insertAdjacentElement('afterend', setumei);
}
function showError(err) {
    console.log(err);
}
function finish() {
    console.log('Ajax 通信が終わりました');
}
