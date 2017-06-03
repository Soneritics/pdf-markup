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
});
