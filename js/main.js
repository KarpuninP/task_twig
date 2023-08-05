$(document).ready(function() {
    $.getJSON('db/db.json', function (json) {
        // Шаблон таблиці
        $.get('/../template/table_template.twig', function(tableTemplate) {
            // Компіляція шаблону
            var compiledTemplate = Twig.twig({
                data: tableTemplate
            });
            // Виведення таблиці на сторінку
            var tableHtml = compiledTemplate.render({data: json.data});
            document.getElementById('table-container').innerHTML = tableHtml;
        });
    });
});