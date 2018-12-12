// https://poemas.yavendras.com/generacion-del-27.php
$items = $('div.search-result-item-body div.col-lg-8.col1')

text = "";

$items.each(_item => {
    let $eval = $($items[_item]);
    let title = $eval.find('h4')[0].innerText;
    let body = $eval.find('.description')[0].innerText;
    text += `\n${title}\n${body}\n`;
})

copy(text);