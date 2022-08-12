const params = new URLSearchParams(window.location.search)
const book = params.get('id')
// console.log(params.get('id'));
document.getElementById('main__title').innerHTML = "Album Selected is " + book; 
 
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").src = JSON.parse(this.responseccText);
            // localStorage.setItem('data', JSON.parse(this.responseText));
            // console.log(this.responseText);
            const images = [];
            const data = JSON.parse(this.responseText);

            data.forEach(element => {
                if(book == element.albumId){

                    images.push(element)
                    const temp = document.createElement('div')
                    const img = document.createElement('img')
                    const title = document.createElement('div')
                    temp.className = "album__card"
                    title.innerHTML = "Image id " + element.id + ": " + element.title;
                    img.className = "card__img"
                    title.className = "title"
                    img.src = element.url
                    temp.appendChild(img)
                    temp.appendChild(title)
                    document.getElementById('grid').appendChild(temp)
                    console.log(element);
                }
            });

            images.forEach(ele => {

            })

            console.log(images);
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send();
}

loadDoc();