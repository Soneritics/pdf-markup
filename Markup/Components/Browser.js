// This is an example browser class.
var Browser = function(settings) {
    if (settings.markupElement[settings.property] != null) {
        $(settings.container).html('<label></label>');
        $(settings.container).children('label')
            .text(settings.markupElement[settings.property])
            .attr('title', settings.markupElement[settings.property])
            .css({
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            });
    } else {
        $(settings.container).html('<button>Browse..</button>');
        $(settings.container).children('button').on('click', function() {
            // Initialize a browser or something
            setTimeout(function() {
                settings.markupElement[settings.property] = 'example.png';

                $(settings.plugin).on('painted', function(e, markupElement) {
                    $(settings.plugin).off('painted');
                    MarkupTools.Activate(markupElement, settings.plugin);
                });

                settings.plugin.Update(settings.markupElement);
            }, 2500);
        });
    }
};
