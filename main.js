	

jQuery(document).ready( function() {

	jQuery('a.links1').click( function(ev) {

		ev.preventDefault();
		

		var sublist_el = jQuery('#menu > li > ul');

		jQuery('#menu1 > ul:last-child');

		jQuery('#menu1').hide(1000).css('display', 'block');

	});
		
		jQuery('#menu1').css('display', 'none');
});




	jQuery(document).ready( function() {

	jQuery('a.links2').click( function(ev) {

		ev.preventDefault();
		

		var sublist_el = jQuery('#menu2 > li > ul');

		jQuery('#menu2 > ul:first-child');

		jQuery('#menu2').hide(1000).css('display', 'block');

		//jQuery('#menu').css('display', 'none');

	});
		
		jQuery('#menu2').css('display', 'none');
});




	jQuery(document).ready( function() {

	jQuery('a.links3').click( function(ev) {

		ev.preventDefault();
		

		var sublist_el = jQuery('#menu3 > li > ul');

		jQuery('#menu3 > ul:first-child');

		jQuery('#menu3').hide(1000).css('display', 'block');

		//jQuery('#menu').css('display', 'none');

	});
		
		jQuery('#menu3').css('display', 'none');
});