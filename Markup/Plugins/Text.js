var MarkupText = {
    HandlesType: function(type) {
        return type == 'text';
    },

    Paint: function(elementObject) {
        $('#' + elementObject.Handle)
            .text(elementObject.text)
            .css({
                whiteSpace: 'pre-wrap',
                left: SizeCalculator.ToPixels(elementObject.x) + 'px',
                top: SizeCalculator.ToPixels(elementObject.y) + 'px',
                color: elementObject.color,
                fontSize: elementObject.size + 'px',
                fontWeight: elementObject.bold ? 'bold' : 'normal'
            });
    },

    Activate: function(elementObject) {

    },

    Update: function(elementObject) {
        this.Paint(elementObject);
    },

    New: function(markup, text) {
       markup.AddElement({
           type: "text",
           text: text ? text : "New textfield",
           x: 10,
           y: 10,
           color: '#00000',
           size: 12,
           bold: false,
           properties: {
               text: {
                   label: 'Text',
                   component: 'textarea'
               },
               x: {
                   label: 'Left (mm)',
                   component: 'number'
               },
               y: {
                   label: 'Top (mm)',
                   component: 'number'
               },
               color: {
                   label: 'Color',
                   component: 'select',
                   items: {
                       'Black': '#00000',
                       'Silver': '#C0C0C0',
                   }
               },
               size: {
                   label: 'Size',
                   component: 'select',
                   items: {
                       '8': '8',
                       '9': '9',
                       '10': '10',
                       '11': '11',
                       '12': '12',
                       '13': '13',
                       '14': '14',
                       '15': '15',
                       '16': '16',
                       '17': '17',
                       '18': '18',
                       '19': '19',
                       '20': '20'
                   }
               },
               bold: {
                   'label': 'Bold',
                   component: 'boolean'
               }
           }
       });
    }
};
