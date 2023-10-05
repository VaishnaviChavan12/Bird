 // Get the input element and table
 var input = document.getElementById('searchInput');
 var table = document.getElementById('myTable');
 const tb_frame = document.getElementById("table_frame");

 // Attach an input event listener to the input field
 input.addEventListener('input', function (event) {
     var filter = input.value.toLowerCase();
     var cells = table.getElementsByTagName('td');

     event.preventDefault();

     // Remove previous highlighting
     for (var i = 0; i < cells.length; i++) {
         cells[i].classList.remove('highlighted-cell');
     }

     // Loop through cells and highlight matching ones
     for (var i = 0; i < cells.length; i++) {
         var cell = cells[i];
         var cellText = cell.innerHTML.toLowerCase();
         if (cellText.indexOf(filter) > -1) {
             cell.classList.add('highlighted-cell');
             cell.scrollIntoView({ behavior: 'smooth', block: "center" });
             break;
         }
     }
 });