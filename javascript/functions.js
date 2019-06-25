$(document).ready(function () {

	$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

	function textLooper(number){
		if (number == 0)
		{
			 typeText("Welkom op de website van Linda Baars",0);
		}  
		 else {
			typeText("Registerplein geregistreerd Maatschappelijk Werker uit Utrecht",-1);
		}
		
		/*else if (number == 1)
		{
			typeText("Registerplein geregistreerd Maatschappelijk Werker uit Utrecht",1);
		} else {
			//typeText("Contact is mogelijk via lindabaars@gmail.com of via het contactformulier op lindabaars.nl",-1);
		}*/
   }

	textLooper(0);

	function typeText(text,number) {
		var i = 0;
		var consoleTyper = setInterval(function () {
			if (i != text.length) {
				i += 1;
				$(".subText").html(text.substr(0, i)+'<span class="blinker">|</span>');
				
			}
			else
			{
			 
				 clearInterval(consoleTyper);  
				 
				 setTimeout(function(){
					removeText(number);

				 },5000);
			}
			
		}, 80);
	}

	function removeText(number){
		var i = $(".subText").text().length;
		var text = $(".subText").text();

		var consoleTyper = setInterval(function () {
			if (i > 1 ) {
				i -= 1;
				$(".subText").html(text.substr(0, i)+'<span class="blinker">|</span>');
			}
			else
			{
			 clearInterval(consoleTyper);
				number++;
				textLooper(number)
			 
			}
			
		}, 30);
	}
	
	if($(window).scrollTop() > 0){
		$('.ribbon').addClass('activeRibbon');
	} else {
		$('.ribbon').removeClass('activeRibbon');
	}

	window.onscroll = function (event) {
	
		if ($(window).scrollTop() < $('.page:nth-child(2)').position().top-100)
		{
			$('.nav li').removeClass('active');
			$('.nav li:nth-child(1)').addClass('active');
		} else if ($(window).scrollTop() > $('.page:nth-child(2)').position().top-100 && $(window).scrollTop() < $('.page:nth-child(3)').position().top)
		{
			$('.nav li').removeClass('active');
			$('.nav li:nth-child(2)').addClass('active');
		} else if ($(window).scrollTop() > $('.page:nth-child(3)').position().top && $(window).scrollTop() < $('.page:nth-child(4)').position().top)
		{
			$('.nav li').removeClass('active');
			$('.nav li:nth-child(3)').addClass('active');
		} else if ($(window).scrollTop() > $('.page:nth-child(4)').position().top && $(window).scrollTop() < $('.page:nth-child(5)').position().top-200)
		{
			$('.nav li').removeClass('active');
			$('.nav li:nth-child(4)').addClass('active');
		} else 
		{
			$('.nav li').removeClass('active');
			$('.nav li:nth-child(5)').addClass('active');
		}

		if($(window).scrollTop() > 0){
			$('.ribbon').addClass('activeRibbon');
		} else {
			$('.ribbon').removeClass('activeRibbon');
		}
		if($(window).scrollTop() > 200){
			//$('.jumbotron').css({'opacity':'0.5'});
		}
	}

	$(document).on('click', '.carrousselLeft', function(event){
		$('.ball').removeClass('active');
		if($('.expandableContainer').hasClass('step1')){
			
		}
		if($('.expandableContainer').hasClass('step2')){
			$('.expandableContainer').removeClass('step2');
			$('.expandableContainer').addClass('step1');
			$('.ball:nth-child(1)').addClass('active');
		}
		if($('.expandableContainer').hasClass('step3')){
			$('.expandableContainer').removeClass('step3');
			$('.expandableContainer').addClass('step2');
			$('.ball:nth-child(2)').addClass('active');
		}
		if($('.expandableContainer').hasClass('step4')){
			$('.expandableContainer').removeClass('step4');
			$('.expandableContainer').addClass('step3');
			$('.ball:nth-child(3)').addClass('active');
		}
	});
	$(document).on('click', '.carrousselRight', function(event){
		$('.ball').removeClass('active');

		if($('.expandableContainer').hasClass('step4')){
			$('.ball:nth-child(4)').addClass('active');
		}

		if($('.expandableContainer').hasClass('step3')){
			$('.expandableContainer').removeClass('step3');
			$('.expandableContainer').addClass('step4');
			$('.ball:nth-child(4)').addClass('active');
		}

		if($('.expandableContainer').hasClass('step2')){
			$('.expandableContainer').removeClass('step2');
			$('.expandableContainer').addClass('step3');
			$('.ball:nth-child(3)').addClass('active');
		}

		if($('.expandableContainer').hasClass('step1')){
			$('.expandableContainer').removeClass('step1');
			$('.expandableContainer').addClass('step2');
			$('.ball:nth-child(2)').addClass('active');
		}
	});



	$(document).on('click', '.ball:nth-child(1)', function(event){
		$('.ball').removeClass('active');
		$(this).addClass('active');
		$('.expandableContainer').removeClass('step2');
		$('.expandableContainer').removeClass('step3');
		$('.expandableContainer').removeClass('step4');

		$('.expandableContainer').addClass('step1');
	});
	$(document).on('click', '.ball:nth-child(2)', function(event){
		$('.ball').removeClass('active');
		$(this).addClass('active');
		$('.expandableContainer').removeClass('step1');
		$('.expandableContainer').removeClass('step3');
		$('.expandableContainer').removeClass('step4');
		$('.expandableContainer').addClass('step2');
	});
	$(document).on('click', '.ball:nth-child(3)', function(event){
		$('.ball').removeClass('active');
		$(this).addClass('active');
		$('.expandableContainer').removeClass('step1');
		$('.expandableContainer').removeClass('step2');
		$('.expandableContainer').removeClass('step4');
		$('.expandableContainer').addClass('step3');
	});
	$(document).on('click', '.ball:nth-child(4)', function(event){
		$('.ball').removeClass('active');
		$(this).addClass('active');
		$('.expandableContainer').removeClass('step1');
		$('.expandableContainer').removeClass('step2');
		$('.expandableContainer').removeClass('step3');
		$('.expandableContainer').addClass('step4');
	});

	$(document).on('mouseleave', '#myNavbar', function(event){
		$('#myNavbar').removeClass('in');
	});
	
	$(document).on('click', '.navbar-toggle', function(event){
		$('.ribbon').addClass('activeRibbon');
	});
	
	

	$(document).on('click', 'nav a', function(event){
		event.preventDefault();
		if(navigator.userAgent.indexOf("Safari") != -1 ) {
			
			bodyelem = $("body")
		}
		else {
			
			bodyelem = $("html,body")
		}


		$('.nav li').removeClass('active');
		
		$(this).parent().addClass('active');

		$(bodyelem).animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 65
		}, 500);
	});

	$('.submitbutton').click(function() {
		sendData();
	});

	$('.contact input').keyup(function() {
		validateInput($(this));
	});
	$('.contact textarea').keyup(function() {
		validateInput($(this));
	});

	$( '.emailofuser' ).keyup(function() {
		validateEmail();
	});
});
	


function validateInput(elem) {
	if (elem.val() == "")
	{
		elem.addClass('badInput');
		validated++;
	} else {
		elem.removeClass('badInput');
	}
}

function validateEmail() {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test($('.emailofuser').val()))
  {
	$('.emailofuser').addClass('badInput');
	validated++;
  } else {
	$('.emailofuser').removeClass('badInput');
  }
}
var validated = 0;

function sendData(){
	validated = 0;
	$("input").each(function() {
		validateInput($(this));
	});
	$("textarea").each(function() {
		validateInput($(this));
	});
	validateEmail();

	if(validated == 0) {
		var subject = $('.subjectofuser').val();
		var message = $('.messageofuser').val();
		var emailofuser = $('.emailofuser').val();
		var nameofuser = $('.nameofuser').val();
		window.location.href = "mailto:lindabaars@gmail.com?subject="+subject+"&cc="+emailofuser+"&body="+message;
		
		$('.subjectofuser').val("");
		$('.messageofuser').val("");
		$('.emailofuser').val("");
		$('.nameofuser').val("");
		// This function sends the info to an email address
		/*var email = "renswiebenga@gmail.com"; // get email field value
		var name = 'Mail from lindabaars.nl'; // get name field value
		var subject = $('.subjectofuser').val();
		
		var useremail = $('.emailofuser').val();
		var toemail = "";
		//var budget = $('#budget').val();
		var message = $('.messageofuser').val();
		var msg = '';
		msg += 'boodschap/vraag: ' +message + '<br/>';
		//msg += 'budget: ' + budget + '<br/>';
		msg += 'email: ' + useremail + '<br/>';
		if (toemail == '' || toemail.indexOf('@') !== -1)
		{
			if (toemail == '')
			{
				toemail = 'nonexistant@nothing.nl';
			}
			msg += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
			msg += '	<html xmlns="http://www.w3.org/1999/xhtml">';
			msg += '	<body>';
			
			
			msg += '</body></html>';
			$.ajax(
			{
				type: "POST",
				url: "https://mandrillapp.com/api/1.0/messages/send.json",
				data: {
					'key': 'mVIYqoHhRDebIjnSLF8YJA',
					'message': {
						'from_email': useremail,
						'from_name': name,
						'headers': {
						'Reply-To': useremail
						},
						'subject': subject + ' - LindaBaars.nl',
						'html': msg,
						'to': [
						{
							'email': email,
							'name': 'Rens Wiebenga',
							'type': 'to'
						}]
					}
				}
			})
			.done(function(response) {
				alert('Contactformulier verstuurd! Dank u'); // show success message
				
			})
			.fail(function(response) {
				alert('Er is iets fout gegaan!'); // show success message
			});
		} else {
			alert ('Dit is geen geldig e-mailadres');		
		}*/
	}

	
};


