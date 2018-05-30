<script>
	jQuery(document).ready(function() {
		
		if ( ! navigator.cookieEnabled ){
		  jQuery(".cookie-notif").show();
		}
		
		if ( navigator.cookieEnabled ){
		  // code for newsletter modal popup, when it doesn't have yet the cookie the pop-up will show
		  if ( Cookies.get('newsletter') == undefined ) {
			setTimeout(function() {
			  //  show the modal after 5 seconds
			  jQuery("body").css("overflow-y" , "hidden");
			  jQuery("#popup-wrapper").delay(100).fadeIn();
			}, 1000);
			  //when you close the pop-up it will create the cookie
			jQuery(".close").click(function(){
				//the 0.001 is equivalent to 2mins, 1 = 1day
				Cookies.set('newsletter', 'default', { expires: 0.001 });
				jQuery("#popup-wrapper").hide();
			});
			  
		  }
		}
		


});

</script>
