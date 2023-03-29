let arrayList = [
    'Pane',
    'biscotti',
    'pesce',
    'pancakes',
    'latte',
    'formaggio',    
    'farina',
];



while (arrayList.length > 0) {
    console.log(arrayList);
   document.querySelector('.container').innerHTML += `<li>${arrayList}</li>`;
    arrayList++
}