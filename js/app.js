// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() {
  var feed = new Instafeed({
        get: 'tagged',
        tagName: 'tonjeogharald',
        clientId: 'f9bb415a53324270abe05ca10713aeeb',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>',
        resolution: 'low_resolution'
    });
    feed.run();

});