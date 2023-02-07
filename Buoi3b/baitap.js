let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]
const boxes = document.querySelector(".boxes");

colors.map(e => {
    const divColor = document.createElement('div');
    divColor.classList.add('box')
    const newBox = boxes.insertAdjacentElement("afterbegin", divColor);
    newBox.style.backgroundColor = e;
})

const btn = document.querySelector("#btn")
let allBox = document.querySelectorAll(".box")

const addNewDiv = () => {
    colors.map(e => {
        const divColor = document.createElement('div');
        divColor.classList.add('box')
        const newBox = boxes.insertAdjacentElement("beforeend", divColor);
        newBox.style.backgroundColor = e;
    })
}

btn.addEventListener('click', () => {
    addNewDiv();
    removeBox();
})
const removeBox = () => {
    let allBox = document.querySelectorAll(".box")
    document.querySelector(".points").innerHTML = allBox.length;
    
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].addEventListener('click', () => {
            allBox[i].remove();
            document.querySelector(".points").innerHTML = allBox.length - 1;
        })

    }
}
removeBox()
