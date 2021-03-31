$.ajax({
	url: `${BACKEND_URL}restaurants`,
	type: "GET",
	dataType: 'json',
	contentType: 'application/json',
	success: function (response) {
    console.log(response);
    $.each(response, function (index, value) { 
       console.log(value);
       $('#restaurant-list').append(`
       <tr>
          <td>${value.restaurantId}</td>
          <td>${value.restaurantName}</td>
          <td><div class="img-container"><img src="${BACKEND_URL}restaurants/${value.restaurantId}/restaurantImage" class="w-100 h-100"></div></td>
          <td>${value.restaurantEmail}</td>
          <td><span class="badge badge-primary mr-1">test</span><span class="badge badge-primary mr-1">test</span></td>
          <td>${categoriesList(value.categories)}</td>
          <td><a href="detailpage.html?restid=${value.restaurantId}" class="btn btn-primary">Details</a></td>
        </tr>
       `)
    });
    
    function categoriesList(categoriesobj){
       var categoriesnames='';
       console.log("Categories name",categoriesobj);
       $.each(categoriesobj, function (index, value) { 
         categoriesnames += `
                   <span class="badge badge-primary mr-1">${value.category}</span>
                   
                   `
       });
       console.log("Name",categoriesnames);
       return categoriesnames;
    }
    
    }
})