$(".video-play").on('click', function(e) {
    e.preventDefault(); 
    var vidWrap = $(this).parent();
    console.log(this);
    console.log(vidWrap.children('.video-thumbnail > img'));
    var iframe = vidWrap.find('.video iframe');
    var iframeSrc = iframe.attr('src');
    var iframePlay = iframeSrc += "?autoplay=1";
    vidWrap.children('.video-thumbnail').hide("slow");
    vidWrap.children('.video-play').hide("slow");
    vidWrap.find('.video iframe').attr('src', iframePlay);
});
