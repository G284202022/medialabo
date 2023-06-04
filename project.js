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
    let kesu = document.querySelectorAll('tr');
    for(let s of kesu){
      s.remove();
    }

    if(sv[0].checked){
        for (let a of data.list.g1){
            let tb = document.querySelector('tbody');	
            let y = document.createElement('tr');
            s[i] = [];
            for(i = 0; i < 6; i++){
              s[i] = document.createElement('td');
            }
            s[0].textContent = a.title;
            s[1].textContent = a.service.name;
            s[2].textContent = a.start_name; 
            s[3].textContent = a.end_time;
            s[4].textContent = a.content;
            s[5].textContent = a.act;
            for (let i = 0;i<6;i++){
                let tr = document.querySelector('tr');
                let setumei = document.createElement('td');
                j.textContent = s[i];
                tr.insertAdjacentElement('beforeend', j);
            }
    }
    }  else if(sv[1].checked){
        for (let a of data.list.e1){
            let tb = document.querySelector('tbody');	
            let y = document.createElement('tr');
            s[i] = [];
            for(i = 0; i < 6; i++){
              s[i] = document.createElement('td');
            }
            s[0].textContent = a.title;
            s[1].textContent = a.service.name;
            s[2].textContent = a.start_name; 
            s[3].textContent = a.end_time;
            s[4].textContent = a.content;
            s[5].textContent = a.act;
            for (let i = 0;i<6;i++){
                let tr = document.querySelector('tr');
                let setumei = document.createElement('td');
                j.textContent = s[i];
                tr.insertAdjacentElement('beforeend', j);
            }
        }
    }
}
function showError(err) {
    console.log(err);
}
function finish() {
    console.log('Ajax 通信が終わりました');
}
