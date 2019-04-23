/*============================== 
	- MAP JS (ICON MARKER)
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */
	
(function($) {

'use strict';		
	
	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});
	
	
	//INITIALIZE MAP
	function initialize() {
		
		// Create an array of styles
		//=======================================================================================

  		var styles = [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#d2b48c"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#d2b48c"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#d2b48c"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#d2b48c"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
		
		// Create a new StyledMapType object, passing it the array of styles,
  		// as well as the name to be displayed on the map type control.
  		var styledMap = new google.maps.StyledMapType(styles,
   			{name: "Styled Map"});
			
		
		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
    		zoom: 15,		
			mapTypeId: google.maps.MapTypeId.ROADMAP,	
    		center: new google.maps.LatLng(41.8860602,-87.6210948),
			panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
  			//scaleControl: false,
  			streetViewControl: true,
  			overviewMapControl: true,
			//rotateControl:true,			
			scrollwheel: false,
			
  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas-3'), mapOptions);
		
		//Associate the styled map with the MapTypeId and set it to display.
 		 map.mapTypes.set('map_style', styledMap);
 		 map.setMapTypeId('map_style');
		
		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';
		
		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});
		
		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(35.441938, -97.432494),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/
		
		
		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		var marker1 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.8860602,-87.6210948),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="wedding-marker" class="main-icon-wrapper"><div class="big-circle scale-animation"></div><div class="main-icon-text">FAIRMONT</br>HOTEL</div></div>',
       		labelAnchor: new google.maps.Point(88, 88),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.8855872,-87.6276455),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="gift-marker" class="de-icon circle medium-size" style="background-color:#d2b48c;"><i class="de-icon-home-1"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker3 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.8902817,-87.6310268),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="bus-marker" class="de-icon circle medium-size" style="background-color:#d2b48c;"><i class="de-icon-beer-1"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker4 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.8798233,-87.6235233),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="food-marker" class="de-icon circle medium-size" style="background-color:#d2b48c;"><i class="de-icon-art-gallery"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker5 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.8921494,-87.6251758),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="train-marker" class="de-icon circle medium-size" style="background-color:#d2b48c;"><i class="de-icon-fast-food"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker6 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.8851642,-87.6238853),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="gio-marker" class="de-icon circle medium-size" style="background-color:#d2b48c;"><i class="de-icon-food"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
			
		var marker7 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.8910652,-87.6318032),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="pizza-marker" class="de-icon circle medium-size" style="background-color:#d2b48c;"><i class="de-icon-food"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker8 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.893786, -87.624323),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="shop-marker" class="de-icon circle medium-size" style="background-color:#d2b48c;"><i class="de-icon-shop"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker9 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.888413,-87.6263175),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="boat-marker" class="de-icon circle medium-size" style="background-color:#d2b48c;"><i class="de-icon-ship"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker10 = new MarkerWithLabel({
       		position: new google.maps.LatLng(41.878858, -87.635947),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="pizza-marker" class="de-icon circle medium-size" style="background-color:#d2b48c;"><i class="de-icon-building-filled"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		//INFO WINDOWS 1
		//=======================================================================================
		var contentString1 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>CEREMONY</h6>'+
			'<div class="info-window-desc">Where the action is happening! Also where we have a reserved hotel block. </div>'+
			'<div class="info-window-link"><a href="http://aliandadam.us/accomodation.html" class="grey-link with-underline">More information here</a></div>'+
      	'</div>';
		
		var marker1_infowindow = new google.maps.InfoWindow({
      		content: contentString1,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//OPEN INFO WINDOWS ON LOAD
  		marker1_infowindow.open(map,marker1);
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker1, 'click', function() {
			marker1_infowindow.open(map,marker1);	
  		});
		
		
		//INFO WINDOWS 2
		//=======================================================================================
		var contentString2 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>HYATT REGENCY HOTEL</h6>'+
			'<div class="info-window-desc">One of our two hotels with a reserved block.</div>'+
			'<div class="info-window-link"><a href="http://aliandadam.us/accomodation.html" class="grey-link with-underline">More information here</a></div>'+
      	'</div>';
		
		var marker2_infowindow = new google.maps.InfoWindow({
      		content: contentString2,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker2, 'click', function() {
			marker2_infowindow.open(map,marker2);	
  		});
		
		
		//INFO WINDOWS 3
		//=======================================================================================
		var contentString3 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>BUB CITY</h6>'+
			'<div class="info-window-desc">Chicago\'s primere BBQ/Country Music spot, one of our favorites!</div>'+
			'<div class="info-window-link"><a href="http://bub-city.com/chicago/" class="grey-link with-underline">More Info</a></div>'+
      	'</div>';
		
		var marker3_infowindow = new google.maps.InfoWindow({
      		content: contentString3,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker3, 'click', function() {
			marker3_infowindow.open(map,marker3);	
  		});	
		
		
		//INFO WINDOWS 4
		//=======================================================================================
		var contentString4 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>ART INSTITUTE</h6>'+
			'<div class="info-window-desc">Houses more than 300000 works of art within its 10 curatorial departments. Very close to our hotels.</div>'+
			'<div class="info-window-link"><a href="http://www.artic.edu/" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker4_infowindow = new google.maps.InfoWindow({
      		content: contentString4,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker4, 'click', function() {
			marker4_infowindow.open(map,marker4);	
  		});
		
		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================	
		google.maps.event.addListener(marker4_infowindow, 'closeclick', function() {   	 	
			window.setTimeout(function() {
      			map.panTo(marker1.getPosition());
    		}, 500);
  		});
		
		
		//INFO WINDOWS 5
		//=======================================================================================
		var contentString5 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>PORTILLO\'S</h6>'+
			'<div class="info-window-desc">If you\'ve never had a Chicago Style Hotdog now\'s your chance - no ketchup though!</div>'+
			'<div class="info-window-link"><a href="http://www.portillos.com/index.html" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker5_infowindow = new google.maps.InfoWindow({
      		content: contentString5,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker5, 'click', function() {
			marker5_infowindow.open(map,marker5);	
  		});
		
		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================	
		google.maps.event.addListener(marker5_infowindow, 'closeclick', function() {   	 	
			window.setTimeout(function() {
      			map.panTo(marker1.getPosition());
    		}, 500);
  		});
		
		
		//INFO WINDOWS 6
		//=======================================================================================
		var contentString6 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>GIORDANO\'S</h6>'+
			'<div class="info-window-desc">Close to the hotel for some great Chicago Deep Dish</div>'+
			'<div class="info-window-link"><a href="https://giordanos.com/locations/prudential-plaza-millenium-park/" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker6_infowindow = new google.maps.InfoWindow({
      		content: contentString6,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker6, 'click', function() {
			marker6_infowindow.open(map,marker6);	
  		});
		

		//INFO WINDOWS 7
		//=======================================================================================
		var contentString7 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>SUNDA</h6>'+
			'<div class="info-window-desc">Asian Fusion, our favorite place in the city! We recommend making a reservation.</div>'+
			'<div class="info-window-link"><a href="http://sundachicago.com/" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker7_infowindow = new google.maps.InfoWindow({
      		content: contentString7,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker7, 'click', function() {
			marker7_infowindow.open(map,marker7);	
  		});
		
		//INFO WINDOWS 8
		//=======================================================================================
		var contentString8 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>MAGNIFICENT MILE</h6>'+
			'<div class="info-window-desc">Asian Fusion, our favorite place in the city! We recommend making a reservation.</div>'+
			'<div class="info-window-link"><a href="http://sundachicago.com/" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker8_infowindow = new google.maps.InfoWindow({
      		content: contentString8,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker8, 'click', function() {
			marker8_infowindow.open(map,marker8);	
  		});

		//INFO WINDOWS 9
		//=======================================================================================
		var contentString9 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>CHICAGO ARCHITECTURE TOUR</h6>'+
			'<div class="info-window-desc">We recommend going by boat either with: Wendella, Shoreline Sightseeing or The Chicago Architecture Foundation.</div>'+
			'<div class="info-window-link"><a href="https://www.architecture.org/experience-caf/tours/detail/chicago-architecture-foundation-river-cruise-aboard-chicagos-first-lady-cruises/" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker9_infowindow = new google.maps.InfoWindow({
      		content: contentString9,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker9, 'click', function() {
			marker9_infowindow.open(map,marker9);	
  		});

		//INFO WINDOWS 10
		//=======================================================================================
		var contentString10 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>WILLIS TOWER SKYDECK</h6>'+
			'<div class="info-window-desc">The best views of the city!</div>'+
			'<div class="info-window-link"><a href="http://theskydeck.com/" class="grey-link with-underline">Click Here</a></div>'+
      	'</div>';
		
		var marker10_infowindow = new google.maps.InfoWindow({
      		content: contentString10,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker10, 'click', function() {
			marker10_infowindow.open(map,marker10);	
  		});

41.8898124,-87.6269639
		
		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {  		
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);
	
	
})(jQuery);