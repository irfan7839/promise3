
fetch("https://foodish-api.herokuapp.com/api/").then(response => {
    let c = response.json();
    return c;
}).then(result => {
    foo(result);
}).catch(error => {
    console.log(error);
});

// function createlink(eleName, value = "", className = "") {
//     var a = document.createElement(eleName);
//     a.setAttribute("href", value)
//     a.innerHTML = value;
//     return a;
// }

function foo(e) {
    console.log(e.image);
    var container=document.createElement('div');
    container.setAttribute('class','container')
    var obj=document.createElement('object');
    obj.setAttribute('class','Responsive');
    obj.data=e.image;
    container.append(obj)
    document.body.append(container);
}