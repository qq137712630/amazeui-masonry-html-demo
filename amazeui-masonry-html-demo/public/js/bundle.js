$(function () {
    var $c = $('#js-container');
    var tpl = $('#tpl-list').html();
    var compiler = Handlebars.compile(tpl);
    var params = {
        loc: 'beijing',
        type: 'music',
        callback: '?',
        count: 10,
        start: 0
    };

    //var params = {
    //    way: 1,
    //    pagenum: 1,
    //    pagesize: 10,
    //    fstid: 838
    //};

    var getURL = function () {
        var queryStr = $.param(params);
        return 'https://api.douban.com/v2/event/list?' +
        //return 'http://www.eyct.cn/xt-yft-snack/commodity/getsubtypecommoditys?' +
            decodeURIComponent(queryStr);
    };

    var getList = function (url) {
        //$.getJSON(url).then(function (data) {
        //    params.start = params.start + 10;
        //    //params.pagenum = params.pagenum + 1;
        //    var $html = $(compiler(data));
        //    $c.append($html).masonry('appended', $html).masonry('layout');
        //});
        //url="temp.js";
        //url="https://api.douban.com/v2/event/list?loc=beijing&type=music&callback=?&count=10&start=0"

        //url="http://gw.api.tbsandbox.com/router/rest?sign=7F24499A91772F65DB8961134E2C89B2&timestamp=2015-08-05+10%3A17%3A28&v=2.0&app_key=1012129701&method=taobao.baike.druginfo.query&partner_id=top-apitools&format=json"

        $.getJSON(url,function (data) {
            params.start = params.start + 10;
            //params.pagenum = params.pagenum + 1;
            var $html = $(compiler(data));
            $c.append($html).masonry('appended', $html).masonry('layout');

            //$.each(data.events, function (i, item) {
            //    $('.action--buy').on('click', function () {
                    //alert("233333333");
                    //i;
                //    addToCart(item);
                //});
            //});
            //$('.action--buy').on('click', function () {
            //    var grid__item = document.querySelector('.grid__item');
            //    addToCart();
            //});

            //[].slice.call(grid.querySelectorAll('.grid__item')).forEach(function (item) {
            //    item.querySelector('.action--buy').addEventListener('click', function(){
            //        item;
            //        addToCart();
            //    });
            //});

            initEvents();

        })
            //成功后调用
            .done(function() { alert("second done"); })
            //失败后调用
            .fail(function() { alert("fail"); })
            ////不管成功或失败都会调用
            //.always(function() { alert("always"); })
            ;



    };

    $c.masonry({
        itemSelector: '.msry-item'
    });

    getList(getURL());

    $('#load-more').on('click', function () {
        getList(getURL());
    });
    //$('.cart').on('click', function () {
    //    alert("233333333");
    //});

    var totalheight = 0;

    function loadData() {
        totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());

        if ($(document).height() <= totalheight) {
            getList(getURL());
        }
    }

    $(window).scroll(function () {
        console.log("滚动条到顶部的垂直高度: " + $(document).scrollTop());
        console.log("页面的文档高度 ：" + $(document).height());
        console.log('浏览器的高度：' + $(window).height());
        loadData();
    });

    // 如果 Handlebars 渲染出来的 HTML 在 DOM ready 事件之后插入文档，需要手动初始化组件
    $.each(['events'], function(i, m) {
        var module = $.AMUI[m];
        module && module.init && module.init();
    })
});

