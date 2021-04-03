$(document).ready(function () {
    

    $.ajax({
        url: `${BACKEND_URL}restaurants`,
        type: "GET",
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
            $.each(response, function (index, value) {
                console.log(value);
                $('#studentbody').append(`
           <tr>
              <td>${value.restaurantId}</td>
              <td>${value.restaurantName}</td>
              <td><div class="img-container"><img src="${BACKEND_URL}restaurants/${value.restaurantId}/restaurantImage" class="w-100 h-100"></div></td>
             
              <td><a href="detailpage.html?restid=${value.restaurantId}" class="btn btn-primary">Details</a></td>
            </tr>
           `)
            });
        },
        complete:function () {
            
            // $('#students').DataTable({"searching":false});
            $('#students').DataTable({
                // dom: 'lBfrtip',
                dom: "<'row mt-3'<'col-sm-3 col-md-3'l><'col-sm-3 col-md-5'B><'col-sm-3 col-md-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ],
                // paging:true,
            });
            
          }
        });
    })