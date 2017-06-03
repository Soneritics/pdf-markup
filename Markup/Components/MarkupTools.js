var MarkupTools = function(selector) {
    var element = $(selector);
    this.Active = {};

    this.Activate = function(markupElement, plugin) {
        this.Active.MarkupElement = markupElement;
        this.Active.Plugin = plugin;
        $(element).html('');

        if (markupElement.properties) {
            $(element).show();

            var toolId = 0;
            for (var i in markupElement.properties) {
                $(element).append('<div class="form-group row" id="markup-property-' + ++toolId + '"><label class="col-3 col-form-label"></label><div class="col-9"></div></div>');
                $(element).find('#markup-property-' + toolId).children('label').text(markupElement.properties[i].label);

                var container = $(element).find('#markup-property-' + toolId).children('div');
                var val = markupElement[i];
                switch (markupElement.properties[i].component) {
                    case 'text':
                        $(container).html('<input class="form-control" type="text" value="">');
                        break;

                    case 'textarea':
                        $(container).html('<textarea class="form-control"></textarea>');
                        break;

                    case 'number':
                        $(container).html('<input class="form-control" type="number" value="">');
                        break;

                    case 'range':
                        $(container).html('<input class="form-control" type="range" value="">');
                        $(container).children('input').attr({
                            min: markupElement.properties[i].range.from,
                            max: markupElement.properties[i].range.to
                        });
                        break;

                    case 'select':
                        $(container).html('<select class="form-control" type="number"></select>');
                        var select = $(container).children('select');
                        for (var optionLabel in markupElement.properties[i].items) {
                            var option = $('<option></option>')
                                .attr('value', markupElement.properties[i].items[optionLabel])
                                .text(optionLabel);

                            $(select).append(option);
                        }
                        break;

                    case 'boolean':
                        $(container).html('<select class="form-control" type="number"><option value="1">Yes</option><option value="0">No</option></select>');
                        val = val ? '1' : '0';
                        break;

                    default:
                        $(this).trigger(markupElement.properties[i].component, {
                            container: container,
                            markupElement: markupElement,
                            property: i,
                            plugin: plugin
                        });
                }

                $(container).children('input,textarea,select')
                    .data('property', i)
                    .val(val)
                    .on('change keyup', function() {
                        Active.MarkupElement[$(this).data('property')] = $(this).val();
                        Active.Plugin.Update(Active.MarkupElement);
                    });
            }
        } else {
            $(element).hide();
        }
    };

    this.Deactivate = function() {
        $(element).hide();
    };

    // Initialisation
    element.hide();

    return this;
};
