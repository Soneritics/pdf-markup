var MarkupText = {
    HandlesType: function(type) {
        return type == 'text';
    },

    Paint: function(elementObject) {
        $('#' + elementObject.Handle).text(elementObject.text);
    },

    Activate: function(elementObject) {
        
    },

    Update: function(elementObject) {
        
    },

    New: function(markup, text) {
       markup.AddElement({
           type: "text",
           text: text ? text : "New textfield",
           x: 10,
           y: 10
       });
    }
};
