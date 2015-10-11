// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() {
  var feed = new Instafeed({
        get: 'tagged',
        tagName: 'tonjeogharald',
        clientId: 'f9bb415a53324270abe05ca10713aeeb',
        template: '<a href="{{link}}" class="small-12 medium-6 large-4 columns"><img src="{{image}}" /></a>',
        resolution: 'standard_resolution'
    });
    feed.run();

});