var MarkupImage = {
    HandlesType: function(type) {
        return type == 'image';
    },

    Paint: function(elementObject) {
        var fullyPainted = false;

        if (elementObject.source == null) {
            $('#' + elementObject.Handle).text('Please provide a source for the image');
        } else {
            $('#' + elementObject.Handle).html('<img>');
            var img = $('#' + elementObject.Handle).children('img')

            if (elementObject.width == null) {
                $(img).on('load', function() {
                    elementObject.width = Math.round(SizeCalculator.ToMM($(this).width()));
                    MarkupImage.Paint(elementObject);
                    $(this).trigger('painted', elementObject);
                });
            } else {
                $(img).css('width', SizeCalculator.ToPixels(elementObject.width));
                fullyPainted = true;
            }

            $(img).attr('src', elementObject.source)
        }

        $('#' + elementObject.Handle).css({
            left: SizeCalculator.ToPixels(elementObject.x) + 'px',
            top: SizeCalculator.ToPixels(elementObject.y) + 'px'
        });

        if (fullyPainted) {
            $(this).trigger('painted', elementObject);
        }
    },

    Update: function(elementObject) {
        this.Paint(elementObject);
    },

    New: function(markup, image) {
       markup.AddElement({
           type: "image",
           source: image,
           x: 10,
           y: 10,
           width: null,
           properties: {
               source: {
                   label: 'Source',
                   component: 'browse'
               },
               x: {
                   label: 'Left (mm)',
                   component: 'number'
               },
               y: {
                   label: 'Top (mm)',
                   component: 'number'
               },
               width: {
                   label: 'Width (mm)',
                   component: 'range',
                   range: {
                       from: 1,
                       to: formats[settings.format][0]
                   }
               }
           }
       });
    }
};
