(function($) {
	'use strict';
	$(function() {
		var BuyNow = {
			section: {
				hidden: 'hidden',
				first: {
					container: $('#user-information'),
					nextbtn: $('#first-next'),
					amount: 25,
				},
				second: {
					container: $('#shipping-information'),
					nextbtn: $('#second-next'),
					previousbtn: $('#second-previous'),
					amount: 50,
				},
				third: {
					container: $('#payment-information'),
					previousbtn: $('#third-previous'),
					confirmbtn: $('#third-confirm'),
					amount: 75,
				},
				progressBar: {
					container: $('#progress'),
					bar: $('.progress-bar'),
					amount: 0,
					updateAmount: function(input) {
						this.amount = input;
						this.bar.css({
							'width' : input + '%'
						});
					}
				},
			},

			userValidation: function() {
				
			},
			
			shippingValidation: function() {

			},

			paymentValidation: function() {

			},

			init: function() {
				var that = this;

				if(this.section.second.container.is(':visible')) {
					this.section.second.container.addClass('hidden');
				}
				
				if(this.section.third.container.is(':visible')) {
					this.section.third.container.addClass('hidden');
				}

				this.section.progressBar.updateAmount(this.section.first.amount);

				/*===== FIRST - NEXT BUTTON =====*/
				this.section.first.nextbtn.on('click', function(event) {
					event.preventDefault();
					that.section.first.container.addClass('hidden');
					that.section.second.container.removeClass('hidden');
					that.section.progressBar.updateAmount(that.section.second.amount);
				});

				/*===== SECOND - NEXT BUTTON =====*/
				this.section.second.nextbtn.on('click', function(event) {
					event.preventDefault();
					that.section.second.container.addClass('hidden');
					if(that.section.first.container.is(':visible')) {
						that.section.first.container.addclass('hidden');
					}
					that.section.third.container.removeClass('hidden');
					that.section.progressBar.updateAmount(that.section.third.amount);
				});

				/*===== SECOND - PREVIOUS BUTTON =====*/
				this.section.second.previousbtn.on('click', function(event) {
					event.preventDefault();
					that.section.second.container.addClass('hidden');
					that.section.first.container.removeClass('hidden');
					that.section.progressBar.updateAmount(that.section.first.amount);
				});

				/*===== THIRD - PREVIOUS BUTTON =====*/
				this.section.third.previousbtn.on('click', function(event) {
					event.preventDefault();
					that.section.third.container.addClass('hidden');
					that.section.second.container.removeClass('hidden');
					that.section.progressBar.updateAmount(that.section.second.amount);
				});
			}
		};
		$(document).ready(BuyNow.init());
	});
}(window.jQuery, window, document));