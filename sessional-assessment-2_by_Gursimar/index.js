const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").src = JSON.parse(this.responseccText);
            // localStorage.setItem('data', JSON.parse(this.responseText));
            // console.log(this.responseText);
            const users = [];
            const data = JSON.parse(this.responseText);

            data.forEach(element => {
                if(!users.includes(element.albumId)){
                    users.push(element.albumId);
                }
                // console.log(element);
            });

            console.log(users);

            users.forEach(ele => {
                const title = document.createElement("div");
                title.className = "title";
                const card = document.createElement("div")
                card.className = "album__card";
                const sign = document.createElement("a")
                sign.className = "sign";
                sign.href = `./album.html?id=` + ele;
                sign.innerHTML = ">";
                title.innerHTML = `Visit Album ${ele}`
                card.appendChild(title)
                card.appendChild(sign)
                // document.getElementsByClassName("album__grid").appendChild(card)
                document.getElementById("grid").appendChild(card)
            })
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send();
}


loadDoc();