$(function(){
	$('#theInput').typed({
		strings: ["type a word (e.g. 'website')", "type a word (e.g. 'grammar')", "type a word (e.g. 'paper')"],
		typeSpeed: 50,
		startDelay: 150,
    attr: 'placeholder',
		backSpeed: 100,
		backDelay: 500,
		loop: true,
		showCursor: false,
		contentType: 'html',
	});
});
