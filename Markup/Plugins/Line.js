var MarkupLine = {
    HandlesType: function(type) {
        return type == 'line';
    },

    Paint: function(elementObject) {
        $('#' + elementObject.Handle).css({
            width: elementObject.width + 'px',
            heigth: elementObject.heigth + 'px',
            backgroundColor: elementObject.color
        });
    },

    Activate: function(elementObject) {
        
    },

    New: function(markup, text) {
       markup.AddElement({
           type: "line",
           x: 10,
           y: 10,
           width: 500,
           height: 1,
           color: '#00000'
       });
    }
};
