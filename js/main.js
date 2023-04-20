var app = new Vue({
    el:"article",
    data:({
        order: 0,
        products:[{id:1,title:"TAG:4312",short_text:"Eggplant is a vegetable with a smooth, glossy, purple skin and a meaty, creamy flesh that is often used in Mediterranean and Asian cuisine.", image:"backlag.jpg",desc:"Full Desc"},
        {id:2,title:"TAG:4311",short_text:"Eggplant is a vegetable with a smooth, glossy, purple skin and a meaty, creamy flesh that is often used in Mediterranean and Asian cuisine.", image:"backlag1.jpg",desc:"Full Desc"},
        {id:3,title:"TAG:4313",short_text:"Eggplant is a vegetable with a smooth, glossy, purple skin and a meaty, creamy flesh that is often used in Mediterranean and Asian cuisine.", image:"backlag2.jpg",desc:"Full Desc"},
        {id:4,title:"TAG:4315",short_text:"Eggplant is a vegetable with a smooth, glossy, purple skin and a meaty, creamy flesh that is often used in Mediterranean and Asian cuisine.", image:"backlag3.jpg",desc:"Full Desc"},
        {id:5,title:"TAG:4319",short_text:"Eggplant is a vegetable with a smooth, glossy, purple skin and a meaty, creamy flesh that is often used in Mediterranean and Asian cuisine.", image:"backlag4.jpg",desc:"Full Desc"},
    ],
    product: [],
    cart: [],
    contactFields: [],
    btnVisible: 0}
    ),
    mounted: function () {
        console.log(window.localStorage.getItem("prod"));
        this.getProduct();
        this.checkInCart();
        this.getCart();
      },
      methods: {
        addItem(id) {
          window.localStorage.setItem("prod", id);
        },
        getProduct() {
          if (window.location.hash) {
            var id = window.location.hash.replace("#", "");
            if (this.products && this.products.length > 0) {
              for (i in this.products) {
                if (
                  this.products[i] &&
                  this.products[i].id &&
                  id == this.products[i].id
                )
                  this.product = this.products[i];
              }
            }
          }
        },
        addToCart(id) {
          var cart = [];
          if (window.localStorage.getItem("cart")) {
            cart = window.localStorage.getItem("cart").split(",");
          }
          if (cart.indexOf(String(id)) == -1) {
            cart.push(id);
            window.localStorage.setItem("cart", cart.join());
            this.btnVisible = 1;
          }
        },
        checkInCart() {
          if (
            this.product &&
            this.product.id &&
            window.localStorage
              .getItem("cart")
              .split(",")
              .indexOf(String(this.product.id)) != -1
          )
            this.btnVisible = 1;
        },
        getCart() {
          if (window.localStorage.getItem("cart") != null) {
            if (this.products != null && this.products.length > 0) {
              for (let i in this.products) {
                if (
                  this.products[i] != null &&
                  this.products[i].id != null &&
                  window.localStorage
                    .getItem("cart")
                    .split(",")
                    .indexOf(String(this.products[i].id)) != -1
                )
                  this.cart.push(this.products[i]);
              }
            }
          }
        },
        removeFromCart(id) {
          let cart = [];
          if (window.localStorage.getItem("cart") != null) {
            cart = window.localStorage.getItem("cart").split(",");
          }
    
          if (cart.indexOf(String(id)) != -1) {
            cart.splice(cart.indexOf(String(id)), 1);
            window.localStorage.setItem("cart", cart.join(","));
            this.cart = [];
            this.getCart();
          }
        },
        makeOrder() {
          this.cart = [];
          window.localStorage.setItem("cart", "");
          this.order = 1;
        },
      },
})