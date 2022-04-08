let firstMember = $('img.active').attr('src');

$('#next').click(function(){
    let currentMember = $('img.active');
    let nextMember = $('img.active').html('<img src="' + currentMember.attr('src') + 2 + '">').hide().fadeIn(2000, "linear").slideUp(1000).slideDown(1000);

    currentMember.removeClass('active');
    currentMember.addClass('hidden');
    nextMember.removeClass('hidden');
    nextMember.addClass('active');
})
