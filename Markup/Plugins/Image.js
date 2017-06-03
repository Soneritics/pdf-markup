var MarkupImage = {
    HandlesType: function(type) {
        return type == 'image';
    },

    Paint: function(elementObject) {
        $('#' + elementObject.Handle).text('image');
    },

    Update: function(elementObject) {
        this.Paint(elementObject);
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
