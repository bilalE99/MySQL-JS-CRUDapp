document.addEventListener('DOMContentLoaded', function(){
    fetch('http://localhost:5000/getAll')
    .then(reponse => response.json()) //convert response into json
    .then(data => console.log(data)); //json response a returned as data
    loadHTMLTable([]);
});


function loadHTMLTable(data){
    const table = document.querySelector('table tbody');

    if(data.length === 0){
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
}