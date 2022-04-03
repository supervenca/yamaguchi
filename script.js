
window.addEventListener('DOMContentLoaded', () => {

    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');

    function upTable() {
        console.log('up');
    }
    
    function downTable() {
        console.log('down');
    }

    upButton.addEventListener('click', upTable);
    downButton.addEventListener('click', downTable);
    
});