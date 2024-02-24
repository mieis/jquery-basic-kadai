$(window).on('load scroll', (e) => {
    // HTMLドキュメントが読み込み完了したとき
    if(e.type === 'load' ){
        console.log('loadイベントが発生しました');
    }
    // 画面をスクロールしたとき
    if(e.type === 'scroll'){
        console.log('scrollイベントが発生しました');
    }
});
