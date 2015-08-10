/**
 * Created by 啟成 on 2015/8/3.
 */



    // cart
    var cart = document.querySelector('.cart'),
        cartItems = cart.querySelector('.cart__count'),
    // grid element
        grid = document.querySelector('.grid');


    function initEvents() {

        // add to cart 加入购物车
        [].slice.call(grid.querySelectorAll('.grid__item')).forEach(function (item) {
            item.querySelector('.action--buy').addEventListener('click', function(){
                item;
                addToCart(item);
            });
        });
    }

    function addToCart(item) {
        cartItems.innerHTML = Number(cartItems.innerHTML) + 1;
        alert("item:"+item.innerHTML);
    }



    //$('.action--buy').on('click', function () {
    //    alert("233333333");
    //    cart;
    //    addToCart();
    //});
    initEvents();
