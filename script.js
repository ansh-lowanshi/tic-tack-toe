let btn = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winner = document.querySelector(".winner");

let turnO = true;

const winp = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

reset.addEventListener("click", () => {
    winner.innerText = "";
    btn.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })

})

btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        check();
    })
});

const check = () => {
    for (let i of winp) {
        // console.log(i[0],i[1],i[2]);
        // console.log(btn[i[0]].innerText,btn[i[1]].innerText,btn[i[2]].innerText);

        let v1 = btn[i[0]].innerText;
        let v2 = btn[i[1]].innerText;
        let v3 = btn[i[2]].innerText;

        if (v1 != "" && v2 != "" && v3 != "") {
            if (v1 === v2 && v2 === v3) {
                winner.innerText = "Player '" + v1 + "' has won the match.";
                btn.forEach((box) => {
                    box.disabled = true;
                })
            }
        }

    }
}