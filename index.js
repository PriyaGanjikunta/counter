let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let hd2 = document.querySelector(".hd2");
let num=0;

b2.addEventListener("click",() => {
    num=0;
    hd2.innerText=0;
});

b1.addEventListener("click",() => {
    num--;
    hd2.innerText=num;
});

b3.addEventListener("click",() => {
    num++;
    hd2.innerText=num;
});

