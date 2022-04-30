
window.addEventListener('DOMContentLoaded', () => {

    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');

    const tableTop = document.getElementById('table-top');
    const tableBottom = document.getElementById('table-bottom');

    function upTable() {
        console.log('up');
        tableBottom.style.marginTop = '10%';
        tableTop.style.marginTop = '-10%';
    }
    
    function downTable() {
        console.log('down');
        tableBottom.style.marginTop = '';
        tableTop.style.marginTop = '';
    }

    upButton.addEventListener('click', upTable);
    downButton.addEventListener('click', downTable);
    
});