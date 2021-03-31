


  let restaurantid = getUrlParameter('restid');
  console.log(restaurantid);

$.ajax({
	url: `${BACKEND_URL}restaurants/${restaurantid}`,
	type: "GET",
	dataType: 'json',
	contentType: 'application/json',
	success: function (response) {
    console.log(response);
    // $.each(response, function (index, value) { 
    //   console.log(value);
    $('#restaurant-details').append(`
    <li>
      <span>Restaurant Id: ${response.restaurantId}</span>
      <span class="d-block">Restuarant Name: ${response.restaurantName}</span>
      <div class="img-container">Restuarant Image: <img src="${BACKEND_URL}restaurants/${response.restaurantId}/restaurantImage" class="w-100 h-100"></div>

      <span class="d-block">Restuarant Add: ${response.restaurantAddress}</span>
      <span class="d-block">Restuarant Contact No: ${response.restaurantContactNo}</span>
      <span class="d-block">Active: ${response.active}</span>
      <span class="d-block">Available: ${response.available}</span>
      <span class="d-block">Avg Rating: ${response.avgRating}</span>
      <span class="d-block">Categories : ${categoriesList(response.categories)}</span>
      <span class="d-block">Cost Per Person: ${response.costPerPerson}</span>
      <span class="d-block">Created Date: ${response.createdDate}</span>
      <span class="d-block">Cuisines : ${cuisinesList(response.cuisines)}</span>
      <span class="d-block">Delivery Time: ${response.deliveryTime}</span>
      <span class="d-block">GST Number: ${response.gstNumber}</span>
      <span class="d-block">GST Percent: ${response.gstPercent}</span>
      <span class="d-block">Lat: ${response.lat}</span>
      <span class="d-block">Longitude: ${response.longitude}</span>
      <span class="d-block">Partnership Percentage: ${response.partnershipPercentage}</span>
      <span class="d-block">restaurant Email: ${response.restaurantEmail}</span>
      <span class="d-block">Other Image Count: ${response.otherImageCount}</span>
      <span class="d-block">Alternate Contact No: ${response.alternateContactNo}</span>
      <span class="d-block">Restuarant PanCard No: ${response.restaurantPancardNo}</span>
      <span class="d-block">Restuarant License No: ${response.restaurantLicenseNo}</span>
      <span class="d-block">Total Orders: ${response.totalOrders}</span>
      <span class="d-block">Total Reviews: ${response.totalReviews}</span>
      <span class="d-block">Others Image: ${imageList(response.otherImageNames)}</span>


        
   </li> 
   `
);
function categoriesList(categoriesobj){
  var categoriesnames='';
  console.log("Categories name",categoriesobj);
  $.each(categoriesobj, function (index, value) { 
    categoriesnames += `
              <span class="badge badge-primary mr-1"> Id: ${value.categoryId}</span>
              <span class="d-block">Category Name: ${value.category}</span>
              <span class="d-block">Active: ${value.active}</span>            
              `
  });
  console.log("Name",categoriesnames);
  return categoriesnames;
} 

function cuisinesList(cuisinesobj){
  var cuisinesnames='';
  console.log("Cuisines name",cuisinesobj);
  $.each(cuisinesobj, function (index, value) { 
    cuisinesnames += `
              <span class="badge badge-primary mr-1"> Id: ${value.cuisineId}</span>
              <span class="d-block">Cuisine Name: ${value.cuisineName}</span>
                          
              `
  });
  console.log("Name",cuisinesnames);
  return cuisinesnames;
} 
    
function imageList(imageobj){
  var imagename='';
  console.log("Categories name",imageobj);
  $.each(imageobj, function (index, value) { 
    imagename += `
              <span>${}</span>
                    
              `
  });
  console.log("Name",imagename);
  return imagename;
} 

    
    }
    });
