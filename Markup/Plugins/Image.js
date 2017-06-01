var MarkupImage = {
    HandlesType: function(type) {
        return type == 'image';
    },

    Paint: function(elementObject) {
        $('#' + elementObject.Handle).text('image');
    },

    Activate: function(elementObject) {
        
    },

    New: function(markup, image) {
       markup.AddElement({
           type: "image",
           source: null,
           x: 10,
           y: 10
       });
    }
};
