var MarkupInvoice = {
    HandlesType: function(type) {
        return type == 'invoice';
    },

    Paint: function(elementObject) {
        $('#' + elementObject.Handle).text('invoice');
    },

    Activate: function(elementObject) {
        
    },

    Update: function(elementObject) {
        
    },

    New: function(markup, text) {
       markup.AddElement({
           type: "invoice",
           x: 10,
           y: 10
       });
    }
};
