const loadData = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => kanyeUncle(data))
}

const kanyeUncle = users => {
    const mainContainer = document.getElementById('input-data');
    mainContainer.innerText = users.quote;
}

// const kanyeUncle = users => {
//     const mainContainer = document.getElementById('input-data');
//     const div = document.createElement('div');
//     div.innerHTML = `
//         <p>Kanye Information: ${users.quote}</p>
//     `;
//     mainContainer.appendChild(div);
// }
