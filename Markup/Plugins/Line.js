var MarkupLine = {
    HandlesType: function(type) {
        return type == 'line';
    },

    Paint: function(elementObject) {
        $('#' + elementObject.Handle).css({
            left: SizeCalculator.ToPixels(elementObject.x) + 'px',
            top: SizeCalculator.ToPixels(elementObject.y) + 'px',
            width: SizeCalculator.ToPixels(elementObject.width) + 'px',
            height: SizeCalculator.ToPixels(elementObject.height) + 'px',
            backgroundColor: elementObject.color
        });
    },

    Update: function(elementObject) {
        this.Paint(elementObject);
    },

    New: function(markup) {
       markup.AddElement({
           type: "line",
           x: 10,
           y: 10,
           width: 190,
           height: 1,
           color: '#00000',
           properties: {
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
                   component: 'number'
               },
               color: {
                   label: 'Color',
                   component: 'select',
                   items: {
                       'Black': '#00000',
                       'Silver': '#C0C0C0',
                   }
               }
           }
       });
    }
};
