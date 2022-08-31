let addBtn = document.querySelector('button')

addBtn.onclick =function(){

    let mid = document.getElementById('mid')
    let mname = document.getElementById('mname')
    let mphone=document.getElementById('mphone')

if(!mid.value || !mname.value||!mphone.value){
    alert('좀 넣어라')
    return
}



const mValues = [mid.value,mname.value,mphone.value]

let tr = document.createElement('tr')

mValues.forEach(val =>{

    let td = document.createElement('td')
    let txt = document.createTextNode(val)
    td.appendChild(txt);
    tr.appendChild(td)



})



document.getElementById('list').appendChild(tr)

mid.value = ''
mname.value = ''
mphone.value = ''
mid.focus()

}



let load = document.getElementById('reload')

load.onclick = function(){
    location.reload();
}