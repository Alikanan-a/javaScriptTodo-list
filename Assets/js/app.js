products = [];
let table = document.getElementById('t-body');
let form = document.getElementById('p-body');

function myFunction() {
    let pro = {
        id: Math.floor(Math.random() * 10),
        productName: document.getElementById("pName").value ,
        productPrice: document.getElementById("pPrice").value
    };
    products.push(pro);
    show()

}
function show() {
    table.innerHTML = ''
    products.forEach(create);
}
function create(item) {
    let row  = document.createElement('div')
    row.classList.add("table-row");
    let td  = document.createElement('div')
    td.classList.add('table-data')
    td.innerHTML = item.productName
    row.append(td)
    let td2 =  document.createElement('div')
    td2.classList.add('table-data')
    td2.innerHTML = item.productPrice
    row.append(td2)
    let del  = document.createElement('div')
    del.classList.add('delete');
    del.innerHTML = 'delete' ;
    del.setAttribute("onclick", "del("+item.id+")")
    row.append(del)
    let edit  = document.createElement('div')
    edit.classList.add('edit');
    edit.setAttribute("onclick", "edit("+item.id+")")
    edit.innerHTML = 'edit' ;
    row.append(edit)
    let done  = document.createElement('div')
    done.classList.add('edit');
    done.setAttribute("onclick", "done("+item.id+")")
    done.innerHTML = 'done' ;
    row.append(done)
    table.append(row)
    
}
function del(id) {
    let i = products.findIndex(function (item) {
        return item.id === id;
    });
    products.splice(i, 1)
    console.log(products)
    show()
}
function edit(id) {
    let i = products.find(function (item) {
        return item.id === id;
    });
    document.getElementById("pName").value = i.productName;
    document.getElementById("pPrice").value = i.productPrice;
    let upB  = document.createElement('button')
    upB.classList.add('click');
    upB.setAttribute('type', 'button');
    upB.innerHTML = 'update it' ;
    upB.setAttribute("onclick", "update("+i.id+")")
    form.append(upB)
}
function update(id) {
    form.innerHTML = '';
    let pro = {
        id: Math.floor(Math.random() * 10),
        productName: document.getElementById("pName").value ,
        productPrice: document.getElementById("pPrice").value
    };
    let i = products.findIndex(function (item) {
        return item.id === id;
    });
    products.splice(i , 1 , pro)
    show()
}
function done(id) {
    
}