let firstMember = $('img.active').attr('src');

$('#nextMember button').click(function(){
    let currentMember = $('img.active');
    let nextMember = $('img.active').html('<img src="' + currentMember.attr('src') + 2 + '">').hide().fadeIn(2000, "linear").slideUp(1000).slideDown(1000);
})
