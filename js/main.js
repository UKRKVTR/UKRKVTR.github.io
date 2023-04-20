var app = new Vue({
    el:"article",
    data:({
        products:[{id:1,title:"TAG:4312",short_text:"Eggplant is a vegetable with a smooth, glossy, purple skin and a meaty, creamy flesh that is often used in Mediterranean and Asian cuisine.", image:"backlag.jpg",desc:"Full Desc"},
        {id:2,title:"TAG:4311",short_text:"Eggplant is a vegetable with a smooth, glossy, purple skin and a meaty, creamy flesh that is often used in Mediterranean and Asian cuisine.", image:"backlag1.jpg",desc:"Full Desc"},
        {id:3,title:"TAG:4313",short_text:"Eggplant is a vegetable with a smooth, glossy, purple skin and a meaty, creamy flesh that is often used in Mediterranean and Asian cuisine.", image:"backlag2.jpg",desc:"Full Desc"},
        {id:4,title:"TAG:4315",short_text:"Eggplant is a vegetable with a smooth, glossy, purple skin and a meaty, creamy flesh that is often used in Mediterranean and Asian cuisine.", image:"backlag3.jpg",desc:"Full Desc"},
        {id:5,title:"TAG:4319",short_text:"Eggplant is a vegetable with a smooth, glossy, purple skin and a meaty, creamy flesh that is often used in Mediterranean and Asian cuisine.", image:"backlag4.jpg",desc:"Full Desc"},
    ],
    product: [],
    btnVisible: 0}
    ),
    methods:{
        getProduct:function(){
            if(window.local.hash){
                var id=window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i]&&this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        }
    },
    mounted:function(){
        this.getProduct();
    },
    mounted:function(){
        console.log(window.localStorage.getItem('prod'));
    },
    methods:{
        addItem:function(id){
            window.localStorage.setItem('prod',id)
        }
    }
})