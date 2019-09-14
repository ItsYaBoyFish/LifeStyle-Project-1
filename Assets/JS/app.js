console.log('Hello');
$('body').on('click', '.modal', function() {
    console.log($('form').get(0));
    $('form')[0].reset()
})