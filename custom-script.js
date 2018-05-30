<script>
	jQuery(document).ready(function() {
		
		if ( ! navigator.cookieEnabled ){
		  jQuery(".cookie-notif").show();
		}
		
		if ( navigator.cookieEnabled ){
		  // code for newsletter modal popup
		  if ( Cookies.get('newsletter') == undefined ) {
			setTimeout(function() {
			  //  show the modal after 5 seconds
			  jQuery("body").css("overflow-y" , "hidden");
			  jQuery("#popup-wrapper").delay(100).fadeIn();
			}, 1000);
			  
			jQuery(".close").click(function(){
				Cookies.set('newsletter', 'default', { expires: 0.001 });
				jQuery("#popup-wrapper").hide();
			});
			  
		  }
		}
		


});

</script>
