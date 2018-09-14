$(document).ready(function() {
    let show = (count) => {
        $.getJSON("https://github.com/katebarz/task.io/blob/master/example.json", function(json) {
            console.log("JSON Data received ");

            let product, basket_img, availability, price_promo, price_final, price_base, name, producer_name;
            document.getElementById('all-products').innerHTML = '';
            for (let i = 0; i < count; i++) {

                product = document.createElement('div');
                product.id = 'product' + i;

                basket_img = document.createElement('div');
                basket_img.id = "basket-img";
                product.appendChild(basket_img);

                availability = document.createElement('div');
                availability.id = "availability" + i;
                availability.innerHTML = json.list[i]["availability"]["name"];
                product.appendChild(availability);

                price_promo = document.createElement('div');
                price_promo.id = "price-promo" + i;
                price_promo.innerHTML = json.list[i]["price"]["gross"]["base_float"] - json.list[i]["price"]["gross"]["final_float"] + "zł";
                product.appendChild(price_promo);

                image = document.createElement('div');
                image.id = "image" + i;
                product.appendChild(image);


                price_final = document.createElement('div');
                price_final.id = "price-final" + i;
                price_final.innerHTML = json.list[i]["price"]["gross"]["base_float"] + " zł";
                product.appendChild(price_final);

                price_base = document.createElement('div');
                price_base.id = "price-base" + i;
                price_base.innerHTML = json.list[i]["price"]["gross"]["final_float"] + " zł"
                product.appendChild(price_base);

                name = document.createElement('div');
                name.id = "name" + i;
                name.innerHTML = json.list[i]["name"];
                product.appendChild(name);

                producer_name = document.createElement('div');
                producer_name.id = "producer-name" + i;
                producer_name.innerHTML = json.list[i]["producer"]["name"];
                product.appendChild(producer_name);
                document.getElementById('all-products').appendChild(product);
                document.getElementById('image' + i).style.backgroundImage = 'url(https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_' + json.list[i]["main_image"] + ".jpg)";

            }

        });
    }

    $('#two-elements').click(function() {
        show(2);
    });
    $('#four-elements').click(function() {
        show(4);

    });
    $("#four-elements").trigger("click");

    $('#eight-elements').click(function() {
        show(8);
    });
});
