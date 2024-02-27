$(function() {
    //  文字色を変える
    $('#change-color').on('click', function(){
        $('#target').css('color', 'green');
    });

    //  文字を変える
    $('#change-text').on('click', function(){
        $('#target').text('うどん！');
    });

    //  フェードアウトで文字が消える
    $('#fade-out').on('click', function(){
        $('#target').fadeOut(2000);
    });

    //  フェードインで文字が現れる
    $('#fade-in').on('click', function(){
        $('#target').fadeIn(2000);
    });
});