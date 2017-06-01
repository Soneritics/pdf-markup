var settings = {
    format: 'a4',
    sizeMultiplier: 4,
    activeBorderColor: 'gray'
};

var formats = {
    a4: [210, 297]
};

var Markup = function(markupField) {
    this.MarkupField = markupField;
    this.Elements = [];
    var plugins = [];
    var objectHandleId = 0;
    var activeElement = -1;

    var initMarkupField = function() {
        $(markupField)
            .on('click', function(){ ResetActiveElement(); })
            .css({
                width: (formats[settings.format][0] * settings.sizeMultiplier) + 'px',
                height: (formats[settings.format][1] * settings.sizeMultiplier) + 'px'
            });
    };
    
    var AddObjects = function() {
        for (var i in this.Elements) {
            var elementObject = this.Elements[i];
            
            if (elementObject.Handle) {
                $('#' + elementObject.Handle).remove();
            }

            elementObject.Handle = "PDFMARKUP-" + ++objectHandleId;
            $(this.MarkupField).prepend('<div id="' + elementObject.Handle + '"></div>');
            $('#' + elementObject.Handle)
                .addClass('pdfmarkup-editable')
                .on('click', ActivateElementEvent)
                .css({
                    position: 'absolute',
                    border: '1px solid transparent',
                    top: elementObject.y,
                    left: elementObject.x,
                });

            if (plugins.length > 0) {
                for (var i in plugins) {
                    if (plugins[i].HandlesType(elementObject.type)) {
                        plugins[i].Paint(elementObject);
                    }
                }
            }
        }
    };
    
    var UpdatePositions = function() {
        if (this.Elements.length > 0) {
            for (var i in this.Elements) {
                this.Elements[i].x = $('#' + this.Elements[i].Handle).position().left;
                this.Elements[i].y = $('#' + this.Elements[i].Handle).position().top;
            }
        }
    };
    
    var MakeObjectsDraggable = function() {
        $(this.MarkupField).children().draggable({
            stop: function(event, ui) {
                UpdatePositions();
            }
        });
    };
    
    var ActivateElementByIndex = function(index) {
        if (activeElement != index) {
            ResetActiveElement();
            activeElement = index;
            
            if (this.Elements[activeElement]) {
                $('#' + this.Elements[activeElement].Handle).css({border: '1px solid ' + settings.activeBorderColor});
            }
        }
    };
    
    this.AddPlugin = function(plugin) {
        plugins.push(plugin);
    };
    
    this.Refresh = function() {
        if (this.Elements.length > 0) {
            AddObjects();
            MakeObjectsDraggable();
        }
    };

    this.ActivateElement = function(handle) {
        if (this.Elements.length > 0) {
            for (var i in this.Elements) {
                if (this.Elements[i].Handle == handle) {
                    return ActivateElementByIndex(i);
                }
            }
        }
    };

    this.ActivateElementEvent = function(event) {
        ActivateElement($(this).attr('id'));
        event.stopPropagation();
    };
    
    this.ResetActiveElement = function() {
        if (this.Elements[activeElement]) {
            $('#' + this.Elements[activeElement].Handle).css({border: '1px solid transparent'});
        }

        activeElement = -1;
    };
    
    this.AddElement = function(elementObject) {
        this.Elements.push(elementObject);
        Refresh();
        ActivateElementByIndex(this.Elements.length - 1);
    };

    this.GetActiveElement = function() {
        if (activeElement >= 0) {
            return this.Elements[activeElement];
        }

        return null;
    };
    
    initMarkupField();
    return this;
};

