window.onload = function () {
    const connect = document.getElementById("connect");
    const modalContainer = document.getElementById("modalContainer");

    connect.addEventListener('mouseover', ()=> {
        modalContainer.classList.add('show');
    })

    console.log(modalContainer.classList);

    connect.addEventListener('mouseout', () => {
        modalContainer.classList.remove('show');
    })
}