var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
// /*if the user clicks anywhere outside the select box,
// then close all select boxes:*/
// document.addEventListener("click", closeAllSelect);


// let select1 = document.querySelector(".select1").value
// let gender = document.querySelector(".select2").value
// let citizen = document.querySelector(".select3").value
// alert(select1);
// mainf(select11, gender1, citizen1);

let btn = document.getElementById("btn");

btn.addEventListener('click', function() {

    let select1 = document.getElementById("select1").value
    let gender = document.getElementById("select2").value
    let citizen = document.getElementById("select3").value
        // alert(select1);
    mainf(select1, gender, citizen)

    function mainf(select1, gender, citizen) {
        // alert(select1);
        if (select1 == "0_7") {
            document.getElementById('res').innerText = "Siz uchun bilet tekin"

            // select1 >= 7 select1 < 30

        } else if (select1 == "7_30" && gender == "ayol" && citizen == "uzbek") {
            document.getElementById('res').innerText = "Siz uchun bilet 20$"
        } else if (select1 == "7_30" && gender == "ayol" && citizen == "rus") {
            document.getElementById('res').innerText = "Siz uchun bilet 25$"
        } else if (select1 == "7_30" && gender == "ayol" && citizen == "other") {
            document.getElementById('res').innerText = "Siz uchun bilet 30$"
        } else if (select1 == "7_30" && gender == "erkak" && citizen == "uzbek") {
            document.getElementById('res').innerText = "Siz uchun bilet 35$"
        } else if (select1 == "7_30" && gender == "erkak" && citizen == "rus") {
            document.getElementById('res').innerText = "Siz uchun bilet 40$"
        } else if (select1 == "7_30" && gender == "erkak" && citizen == "other") {
            document.getElementById('res').innerText = "Siz uchun bilet 45$"
        }

        // select1 >= 30 select1 < 60
        else if (select1 == "30_60" && gender == "ayol" && citizen == "uzbek") {
            document.getElementById('res').innerText = "Siz uchun bilet 65$"
        } else if (select1 == "30_60" && gender == "ayol" && citizen == "rus") {
            document.getElementById('res').innerText = "Siz uchun bilet 70$"
        } else if (select1 == "30_60" && gender == "ayol" && citizen == "other") {
            document.getElementById('res').innerText = "Siz uchun bilet 75$"
        } else if (select1 == "30_60" && gender == "erkak" && citizen == "uzbek") {
            document.getElementById('res').innerText = "Siz uchun bilet 50$"
        } else if (select1 == "30_60" && gender == "erkak" && citizen == "rus") {
            document.getElementById('res').innerText = "Siz uchun bilet 55$"
        } else if (select1 == "30_60" && gender == "erkak" && citizen == "other") {
            document.getElementById('res').innerText = "Siz uchun bilet 60$"
        }

        // select1 =="60" 
        else if (select1 == "60" && gender == "ayol" && citizen == "uzbek") {
            document.getElementById('res').innerText = "Siz uchun bilet 75$"
        } else if (select1 == "60" && gender == "ayol" && citizen == "rus") {
            document.getElementById('res').innerText = "Siz uchun bilet 80$"
        } else if (select1 == "60" && gender == "ayol" && citizen == "other") {
            document.getElementById('res').innerText = "Siz uchun bilet 85$"
        } else if (select1 == "60" && gender == "erkak" && citizen == "uzbek") {
            document.getElementById('res').innerText = "Siz uchun bilet 90$"
        } else if (select1 == "60" && gender == "erkak" && citizen == "rus") {
            document.getElementById('res').innerText = "Siz uchun bilet 95$"
        } else if (select1 == "60" && gender == "erkak" && citizen == "other") {
            document.getElementById('res').innerText = "Siz uchun bilet 100$"
        }
    }

})