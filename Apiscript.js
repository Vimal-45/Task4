


const divEl = document.createElement("div");
document.body.appendChild(divEl)
divEl.setAttribute("class", "container flex-container" )






const myFunc = async () => {

    const reslt = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await reslt.json();
    return data;
}

const datas = myFunc();
datas.then((infoArr) => {

    for (let i = 0; i < infoArr.length; i++) {
 
        
        divEl.appendChild(document.createElement("p")).innerHTML = ` <b>Name   : ${infoArr[i].name}</b> <br>
        Email : ${infoArr[i].email}<br>
        Street : ${infoArr[i].address.street}<br>
        City   : ${infoArr[i].address.city}`
                
    }

})

