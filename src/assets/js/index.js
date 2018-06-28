import $ from 'jquery';
import * as fullpage from 'fullpage.js';

$(document).ready(function () {

	$('.splitscreen').fullpage({
		verticalCentered: false,
	});

	setTimeout( () => {
		$('.loader').addClass('hidden');
	}, 1000);

	setTimeout( () => {
		$('.splitscreen').removeClass('hidden');
	}, 1000);

    setTimeout( () => {
		$('.arrow-down').removeClass('hidden');
	}, 3200);
});