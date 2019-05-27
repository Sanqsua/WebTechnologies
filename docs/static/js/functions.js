document.getElementById('search-bar').onkeyup = function () {
    let input = document.getElementById('search-bar').value
    input = input.toLowerCase();
    let bookTitle = document.getElementsByClassName('book-title');
    let bookBox = document.getElementsByClassName('book-box');

    for (let i = 0; i < bookTitle.length; i++) {
        if (!bookTitle[i].innerHTML.toLowerCase().includes(input)) {
            bookBox[i].style.display = "none";
        } else {
            bookBox[i].style.display = "block";
        }
    }
}

function hideDeletedElement() {
    var bns = document.getElementsByClassName("delete-button");
    for (i = 0; i < bns.length; i++) {
        bns[i].addEventListener("click", function () {
            box = this.closest('.book-box');
            box.classList.add("visuallyhidden");
            setTimeout(function () {
                box.style.display = "none";
            }, 1000)
        });
    }
}

window.addEventListener("load", function () {
    hideDeletedElement();
});