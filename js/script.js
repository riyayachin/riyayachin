/**************************************************
    Preloader-index.html
****************************************************/
$(window).on('load', function () {
    $('#status').delay(1000).fadeOut();
    $('#preloader').delay(1050).fadeOut();
});


/**************************************************
    Preloader-index.html
****************************************************/
$(window).on('load', function () {
    $('#status_2').delay(1000).fadeOut();
    $('#preloader').delay(1050).fadeOut();
});


/**************************************************
    Features Brands
****************************************************/
$(function () {
    $("#brands_list").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        // responsive: {
        //     // breakpoint from 0 up
        //     0: {
        //         items: 2
        //     },
        //     // breakpoint from 480 up
        //     480: {
        //         items: 3
        //     },
        //     // breakpoint from 768 up
        //     768: {
        //         items: 6
        //     }
        // }
    });
});


/**************************************************
    Slideshow
****************************************************/
$(function () {
    $("#slide_list").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/**************************************************
    Google Map
****************************************************/
// $(window).on('load', function() {
//     // // Map Variables
//     // var addressString = '230 Broadway, NY, New York 10007, USA';
//     // var myLatlng = {
//     //     lat: 40.712685,
//     //     lng: -74.005920
//     // };

//     // // 1. Render Map
//     // var map = new google.maps.Map(document.getElementById('map'), {
//     //     zoom: 11,
//     //     center: myLatlng
//     // });

//     var map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });
//       }
// });
// var map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });
//       }
// $(window).on('load', function () {

//     // Map Variables
//     var addressString = '230 Broadway, NY, New York 10007, USA';
//     var myLatlng = {
//         lat: 40.712685,
//         lng: -74.005920
//     };

//     // 1. Render Map
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 11,
//         center: myLatlng
//     });

//     // 2. Add Marker
//     var marker = new google.maps.Marker({
//         position: myLatlng,
//         map: map,
//         title: "Click To See Address"
//     });

//     // 3. Add Info Window
//     var infowindow = new google.maps.InfoWindow({
//         content: addressString
//     });

//     // Show info window when user clicks marker
//     marker.addListener('click', function () {
//         infowindow.open(map, marker);
//     });

//     // 4. Resize Function
//     google.maps.event.addDomListener(window, 'resize', function () {

//         var center = map.getCenter();
//         google.maps.event.trigger(map, 'resize');
//         map.setCenter(center);

//     });

// });