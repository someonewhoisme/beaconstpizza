(function($, window, document) {
	'use strict';
	$(function() {
		var Navbar = {
			settings: {
				main: $('#main-content'),
				container: $('.navbar-gg'),
				headerAttribute: 'main-header',
				links: $('.navbar-gg .navbar-nav > li > a')
			},

			findHeaderColor: function() {
				return this.settings.main.find('[data-name="' + this.settings.headerAttribute + '"]').css('background-color');
			},

			replaceNavbarColor: function() {
				if(this.findHeaderColor() === undefined) {
					$("body").find('#header').removeClass('navbar-gg').addClass('navbar-gg-invert');
					//console.log('undefined property');
				} else {
					this.settings.container.css({
						'background-color' : this.findHeaderColor()
					});	
				}
			},

			init: function() {
				Navbar.replaceNavbarColor();
			}
		};
		Navbar.init();
	});
	$(function() {
		var keys = {
			test: "pk_test_EnkB8EQ6vRawTKuKVQc86o8t",
			live: "pk_live_zmsGtqWaasg8d7IE581qWhkn"
		};

		Stripe.setPublishableKey(keys.test);

		var payments = {
			userForm: $("#user_form"),
			creditCardForm: $("#credit-card")
		};

		payments.userForm.submit(function() {
			if(payments.creditCardForm.is(":visible")) {
				var form = this;
				$("#credit-card").prop("disabled", true);
				$("#credit-card").val("working...");
				var card = {
					number:   $("#credit_card_number").val(),
					expMonth: $("#expiry_month").val(),
					expYear:  $("#expiry_year").val(),
					cvc:      $("#cvv").val(),
				};
				Stripe.createToken(card, function(status, response) {
					if (status === 200) {
						console.log(status, response);
						$("#credit-card-errors").hide();
						$("#last_4_digits").val(response.card.last4);
						$("#stripe_token").val(response.id);
						form.submit();
					} else {
						$("#stripe-error-message").text(response.error.message);
						$("#credit-card-errors").show();
						$("#credit-card").prop("disabled", false);
						$("#credit-card").val("try again");
					}
				});
				return false;
			}
			return true;
		});

		$("#change-card a").click(function() {
			$("#change-card").hide();
			$("#credit-card").show();
			$("#credit_card_number").focus();
			return false;
		});
	});

	$(function() { 
		var elements = {
			doc: $(document),
			home: $("#landing-main .header"),
			headerContent: $("#landing-main .signup-app"),
			science: $("#science .header"),
		};

		elements.headerOffset = function(a, b) {
			return (parseInt((a / 2)) - parseInt(b / 2)) - 60 + "px";
		};

		function sizeContent() {
			if($(window).width() > 767 && $(window).height() > 500) {
				
				elements.home.css({
					"height" : $(window).height() + "px"
				});
				if($(window).height() + 100 > elements.home.height()) {
					elements.headerContent.css({
						"margin-top" : elements.headerOffset(elements.home.height(), elements.headerContent.height())
					});	
				}
 				
				
			} else {
				elements.home.css({
					"height" : "auto"
				});
			}
		}
		$(document).ready(sizeContent());
	});
}(window.jQuery, window, document));




