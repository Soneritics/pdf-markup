var markup = null;
$(function() {
    var markupTools = MarkupTools('.button-bar > div');
    markup = Markup('#pdf-markup', markupTools);

    $(markup).on('update add', function() {
       $('#result').text(JSON.stringify(markup.Serialize()));
    });

    $(markupTools).on('browse', function(e, settings) {
        new Browser(settings);
    });

    $('.button-bar > ul').find('a').each(function() {
        var pluginName = $(this).data('plugin');
        var plugin = window[pluginName];

        markup.AddPlugin(plugin);
        $(this).on('click', function(){ window[$(this).data('plugin')].New(markup); });
    });

    markup.Load([{"type":"text","text":"Invoice","x":94,"y":2,"color":"#00000","size":"20","bold":"1"},{"type":"image","source":"example.png","x":47,"y":50,"width":"129"}]);
});
