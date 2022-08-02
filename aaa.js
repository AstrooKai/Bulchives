jQuery(document).ready(function($){
	// HTML markup implementation, overlap mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#page' )],
		direction: 'ltr',
		fullCollapse: true,
    mode : 'cover',
    collapsed: true,

		// Just for fun also changing the look of the menu
		wrapperClass: 'mlpm_w',
		//menuInactiveClass: 'mlpm_inactive'
	});

	// Full collapse
	$( '#fullcollapse' ).click(function(){
		$( '#menu' ).multilevelpushmenu( 'collapse' );
	});

	// Base expand
	$( '#toggle-button' ).click(function(){
		$( '#menu' ).css( 'visibility', 'visible' ).multilevelpushmenu( 'expand' );
	});

});



//Multilevel Push Menu Code Modified

