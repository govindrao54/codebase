function compare(a,b) {
  if (parseInt(a.price) < parseInt(b.price))
     return -1;
  if (parseInt(a.price) > parseInt(b.price))
    return 1;
  return 0;
}

function reportPurchase(){
  var curURL = window.location.href;
  if(curURL.split('commerce.rediff.com/recommendation').length>1){
    chrome.runtime.sendMessage({processDONE: "Rediff"}, function(response) {
    });
  }
}

reportPurchase();


function sendPairs(){
  arrayToSend = [];
  if($('.bdslidebox').length > 0){
    var slider = $('.bdslidebox');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.bdslidebox:eq('+ i +')').find('a').length > 0){
        link = $('.bdslidebox:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          if(link.split("?").length > 1){
            link = link.split("?");
            PID = link[0]; 
          }
          else{
            PID = link;
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0]; 
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0]; 
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("/").length > 1){
            PID = PID.split("/");
            PID = PID[PID.length - 1];
          }
          
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('.bdslidebox:eq('+ i +')').find('.dealprice').length > 0){
            price = $('.bdslidebox:eq('+  i +')').find('.dealprice').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends
  if($('[itemtype="http://schema.org/Product"]').length > 0){
    var slider = $('[itemtype="http://schema.org/Product"]');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('[itemtype="http://schema.org/Product"]:eq('+ i +')').find('a').length > 0){
        link = $('[itemtype="http://schema.org/Product"]:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          if(link.split("?").length > 1){
            link = link.split("?");
            PID = link[0]; 
          }
          else{
            PID = link;
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0]; 
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0]; 
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("/").length > 1){
            PID = PID.split("/");
            PID = PID[PID.length - 1];
          }
          
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('[itemtype="http://schema.org/Product"]:eq('+ i +')').find('.discoprice').length > 0){
            price = $('[itemtype="http://schema.org/Product"]:eq('+  i +')').find('.discoprice').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('.accesories_product_cat').length > 0){
    var slider = $('.accesories_product_cat');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.accesories_product_cat:eq('+ i +')').find('a').length > 0){
        link = $('.accesories_product_cat:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          if(link.split("?").length > 1){
            link = link.split("?");
            PID = link[0]; 
          }
          else{
            PID = link;
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0]; 
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0]; 
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("/").length > 1){
            PID = PID.split("/");
            PID = PID[PID.length - 1];
          }
          
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('.accesories_product_cat:eq('+ i +')').find('b').length > 0){
            price = $('.accesories_product_cat:eq('+  i +')').find('b').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('.prd_rec_box_new').length > 0){
    var slider = $('.prd_rec_box_new');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.prd_rec_box_new:eq('+ i +')').find('a').length > 0){
        link = $('.prd_rec_box_new:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          if(link.split("?").length > 1){
            link = link.split("?");
            PID = link[0]; 
          }
          else{
            PID = link;
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0]; 
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0]; 
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("/").length > 1){
            PID = PID.split("/");
            PID = PID[PID.length - 1];
          }
          
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('.prd_rec_box_new:eq('+ i +')').find('p').length > 0){
            p_len = $('.prd_rec_box_new:eq('+ i +')').find('p').length - 1;
            price = $('.prd_rec_box_new:eq('+  i +')').find('p:eq('+ p_len +')').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('.div_proddesp_big').length > 0){
    var slider = $('.div_proddesp_big');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.div_proddesp_big:eq('+ i +')').find('a').length > 0){
        link = $('.div_proddesp_big:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          if(link.split("?").length > 1){
            link = link.split("?");
            PID = link[0]; 
          }
          else{
            PID = link;
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0]; 
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0]; 
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("/").length > 1){
            PID = PID.split("/");
            PID = PID[PID.length - 1];
          }
          
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('.div_proddesp_big:eq('+ i +')').find('.div_by a').length > 0){
            
            price = $('.div_proddesp_big:eq('+  i +')').find('.div_by a:eq(0)').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('.rediffpickbox .rediff_picks_left').length > 0){
    var slider = $('.rediffpickbox .rediff_picks_left');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.rediffpickbox:eq('+ i +') .rediff_picks_left').find('a').length > 0){
        link = $('.rediffpickbox:eq('+ i +') .rediff_picks_left').find('a:eq(0)').attr('href');
        if(link != ""){ 
          if(link.split("?").length > 1){
            link = link.split("?");
            PID = link[0]; 
          }
          else{
            PID = link;
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0]; 
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0]; 
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("/").length > 1){
            PID = PID.split("/");
            PID = PID[PID.length - 1];
          }
          
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('.rediffpickbox:eq('+ i +') .rediff_picks_left').find('strong[itemprop="price"]').length > 0){
            
            price = $('.rediffpickbox:eq('+ i +') .rediff_picks_left').find('strong[itemprop="price"]').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends


  if($('.rediffpickbox .rediff_picks_right').length > 0){
    var slider = $('.rediffpickbox .rediff_picks_right');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.rediffpickbox:eq('+ i +') .rediff_picks_right').find('a').length > 0){
        link = $('.rediffpickbox:eq('+ i +') .rediff_picks_right').find('a:eq(0)').attr('href');
        if(link != ""){ 
          if(link.split("?").length > 1){
            link = link.split("?");
            PID = link[0]; 
          }
          else{
            PID = link;
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0]; 
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0]; 
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("/").length > 1){
            PID = PID.split("/");
            PID = PID[PID.length - 1];
          }
          
        }
        else{
          PID = "";
        }
        if(PID != ""){
          if($('.rediffpickbox:eq('+ i +') .rediff_picks_right').find('strong[itemprop="price"]').length > 0){
            
            price = $('.rediffpickbox:eq('+ i +') .rediff_picks_right').find('strong[itemprop="price"]').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('.dealofbox').length > 0){
    var slider = $('.dealofbox');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.dealofbox:eq('+ i +')').find('a').length > 0){
        link = $('.dealofbox:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          if(link.split("?").length > 1){
            link = link.split("?");
            PID = link[0]; 
          }
          else{
            PID = link;
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0]; 
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0]; 
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("/").length > 1){
            PID = PID.split("/");
            PID = PID[PID.length - 1];
          }
          
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('.dealofbox:eq('+ i +')').find('strong[itemprop="price"]').length > 0){
            
            price = $('.dealofbox:eq('+ i +')').find('strong[itemprop="price"]').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('.carousel-list li').length > 0){
    var slider = $('.carousel-list li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.carousel-list li:eq('+ i +')').find('a').length > 0){
        link = $('.carousel-list li:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          if(link.split("?").length > 1){
            link = link.split("?");
            PID = link[0]; 
          }
          else{
            PID = link;
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0]; 
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0]; 
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("/").length > 1){
            PID = PID.split("/");
            PID = PID[PID.length - 1];
          }
          
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('.carousel-list li:eq('+ i +')').find('strong[itemprop="price"]').length > 0){
            
            price = $('.carousel-list li:eq('+ i +')').find('strong[itemprop="price"]').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('.divbooklist').length > 0){
    var slider = $('.divbooklist');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.divbooklist:eq('+ i +')').find('a').length > 0){
        link = $('.divbooklist:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          if(link.split("?").length > 1){
            link = link.split("?");
            PID = link[0]; 
          }
          else{
            PID = link;
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0]; 
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0]; 
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("/").length > 1){
            PID = PID.split("/");
            PID = PID[PID.length - 1];
          }
          
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('.divbooklist:eq('+ i +')').find('span[itemprop="price"]').length > 0){
            
            price = $('.divbooklist:eq('+ i +')').find('span[itemprop="price"]').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
          else if($('.divbooklist:eq('+ i +')').find('.bold').length > 0){
            price = $('.divbooklist:eq('+ i +')').find('.bold:eq(0)').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();
          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('#home_page li').length > 0){
    var slider = $('#home_page li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('#home_page li:eq('+ i +')').find('a').length > 0){
        link = $('#home_page li:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          if(link.split("?").length > 1){
            link = link.split("?");
            PID = link[0]; 
          }
          else{
            PID = link;
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0]; 
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0]; 
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("/").length > 1){
            PID = PID.split("/");
            PID = PID[PID.length - 1];
          }
          
        }
        else{
          PID = "";
        }
        if(PID != ""){
          if($('#home_page li:eq('+ i +')').find('span[itemprop="price"]').length > 0){
            
            price = $('#home_page li:eq('+ i +')').find('span[itemprop="price"]').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('.prod-suggestions li').length > 0){
    var slider = $('.prod-suggestions li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.prod-suggestions li:eq('+ i +')').find('a').length > 0){
        link = $('.prod-suggestions li:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          if(link.split("?").length > 1){
            link = link.split("?");
            PID = link[0]; 
          }
          else{
            PID = link;
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0]; 
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0]; 
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("product/").length > 1){
            PID = PID.split("product/");
            PID = PID[1];
          }
          if(PID.split("/").length > 1){
            PID = PID.split("/");
            PID = PID[PID.length - 1];
          }
          
        }
        else{
          PID = "";
        }
        if(PID != ""){
          if($('.prod-suggestions li:eq('+ i +')').find('.prod-actual-price').length > 0){
            
            price = $('.prod-suggestions li:eq('+ i +')').find('.prod-actual-price').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends

// BOOKS REDIFF


if($('[itemtype="http://schema.org/Book"]').length > 0){
  var slider = $('[itemtype="http://schema.org/Book"]');
  var sliderLength = slider.length;
  var link;
  var price;
  var PID;

  for(i=0;i<sliderLength;i++){
    PID = "";
    price = "";
    if($('[itemtype="http://schema.org/Book"]:eq('+ i +')').find('a').length > 0){
      link = $('[itemtype="http://schema.org/Book"]:eq('+ i +')').find('a:eq(0)').attr('href');
      if(link != ""){ 
        if(link.split("?").length > 1){
          link = link.split("?");
          PID = link[0]; 
        }
        else{
          PID = link;
        }
        if(PID.split("#").length > 1){
          PID = PID.split("#");
          PID = PID[0]; 
        }
        if(PID.split("&").length > 1){
          PID = PID.split("&");
          PID = PID[0]; 
        }
        if(PID.split("product/").length > 1){
          PID = PID.split("product/");
          PID = PID[1];
        }
        if(PID.split("product/").length > 1){
          PID = PID.split("product/");
          PID = PID[1];
        }
        if(PID.split("/").length > 1){
          PID = PID.split("/");
          PID = PID[PID.length - 1];
        }
        
      }
      else{
        PID = "";
      }

      if(PID != ""){
        if($('[itemtype="http://schema.org/Book"]:eq('+ i +')').find('[itemprop="price"]').length > 0){
          price = $('[itemtype="http://schema.org/Book"]:eq('+  i +')').find('[itemprop="price"]').text();
          if(price.split("Rs.").length > 1){
            price = price.split("Rs.");
            price = price[1];
          }
          
          price = price.split(",").join("").trim();

        }
      }

      else{
        price = "";
      }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && !isNaN(PID)){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends

  arrayToSend = JSON.stringify(arrayToSend);
  ////console.log(arrayToSend);
  chrome.runtime.sendMessage({pairsRediff: arrayToSend}, function(response) {
    });
}

function sendCurrent(){
  curData = [];
  var prod = "";
  var image = "";
  var myPrice = "";
  var cur_url = "";
  var current_status = 0;
  var PID = "";
  var link = window.location.href;

  prod = $('h1[itemprop="name"] span').text().trim();   

  if(($('.boxcontainer').length > 0) && ($('.boxcontainer').text().toUpperCase().split("OUT OF STOCK").length > 1)){
    current_status = 1;
  }
  else if($('body').text().split("Sorry! We couldn't find").length > 1){
    current_status = 1;
  }
  else if($('body').text().split("not available").length > 1){
    current_status = 1;
  }
  else{
    current_status = 0;
  }
  if(current_status == 0){
    if($('[itemprop="price"]').length > 0){
      if($('[itemprop="price"]').text().split("Rs").length > 1)
      {
        myPrice = $('[itemprop="price"]').text().split("Rs")[1].split(",").join("").trim();
      }
      else
      {
        myPrice = $('[itemprop="price"]').text().split(",").join("").trim();
      }
    }
    else if($('price_bottom').length > 0){
      myPrice = $('price_bottom').text().split(",").join("").trim();
    }
  }
  else{
    myPrice = "0";
  }
  image = $('img[itemprop="image"]').attr('src');

  if(link != ""){ 
    if(link.split("?").length > 1){
      link = link.split("?");
      PID = link[0]; 
    }
    else{
      PID = link;
    }
    if(PID.split("#").length > 1){
      PID = PID.split("#");
      PID = PID[0]; 
    }
    if(PID.split("&").length > 1){
      PID = PID.split("&");
      PID = PID[0]; 
    }
    if(PID.split("product/").length > 1){
      PID = PID.split("product/");
      PID = PID[1];
    }
    if(PID.split("product/").length > 1){
      PID = PID.split("product/");
      PID = PID[1];
    }
    if(PID.split("/").length > 1){
      PID = PID.split("/");
      PID = PID[PID.length - 1];
    }
    
  }
  else{
    PID = "";
  }
  cur_url = window.location.href;
  curData.push([prod, image, myPrice, cur_url, current_status, PID]);
  curData = JSON.stringify(curData);
  ////console.log(curData);
  chrome.runtime.sendMessage({curDataRediff: curData}, function(response) {
    });
}

var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
window.setTimeout(sendPairs, 5000);
window.setTimeout(sendPairs, pollInterval);

function blinker(){
  if (cancel==false) {
  elem1.style.background="linear-gradient(to bottom, #eaefb5 0%,#e1e9a0 100%)";
  elem1.style.borderColor="#6b6";
  setTimeout("elem1.style.background=''", 1200);
  setTimeout("elem1.style.borderColor=''", 1200);
  setTimeout("blinker()",2400);}
  if (cancel==true){elem1.style.backgroundColor="#fbfbfb";elem1.style.borderColor="#ddd";}
}



function addToWatchList() {
var myurl = "http://compare.buyhatke.com/addWatchList.php";
var name = $('h1[itemprop="name"] span').text().trim();   
             if($('[itemprop="price"]').text().split("Rs").length > 1)
             {
              var price = $('[itemprop="price"]').text().split("Rs")[1].split(",").join("").trim();
            }
            else
            {
              var price = $('[itemprop="price"]').text().split(",").join("").trim();
            }
            var image_url = $('img[itemprop="image"]').attr('src');

var prod = name;
var myPrice = price;
var image2 = image_url;
var url = window.location.href;
var filterURL2 = url.split("?ref=")[0];
   filterURL2 = filterURL2.split("ref=")[0];
   filterURL2 = filterURL2.split("?")[0];
url = filterURL2;
var imgURL2 = chrome.extension.getURL("watch-price1.png");

var parameters =  encodeURIComponent(prod) + "~*~*" + myPrice + "~*~*" + encodeURIComponent(image2) + "~*~*" + encodeURIComponent(url) + "~*~*291" ;

chrome.runtime.sendMessage({data: parameters}, function(response) {
  ////console.log(response.farewell);
});

chrome.runtime.sendMessage({email: "haiKya"}, function(response) {
  ////console.log(response.farewell)
  if(response.farewell=="No"){
    var msg = '<div id="addEmailBH"><input id="BhEmail" type="text" value="" style="min-height: 20px;margin-right: 6px;"><input id="BhButton" type="button" value="Enter Email" style="padding: 3px;padding-left: 8px;padding-right: 8px;"><br><div class="line fk-font-12" style="margin-bottom: 4px;">Enter your email if you wanna get a mail when the price drops</div></div>';
    $('#addWatchList').after(msg);
    var button = document.getElementById("BhButton");
button.addEventListener("click", function(){
  addEmailID(document.getElementById('BhEmail').value);
  document.getElementById('addEmailBH').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! An email has been sent to ' + document.getElementById('BhEmail').value + '. Please verify to start receiving price drop notifications. Do check your <b>SPAM</b> folder !</div>'
}, false);
  }
  else {
    var msg = '<div id="addEmailBH"><div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! A mail will be sent to ' + response.farewell + ' as soon as price drops. <a href="javascript:void();" id="changeEmail" style="color:blue;">Change Email-ID</a></div></div>';
    $('#addWatchList').after(msg);
        var button = document.getElementById("changeEmail");
button.addEventListener("click", function(){
  document.getElementById('addEmailBH').innerHTML = '<div id="addEmailBH"><input id="BhEmail" type="text" value="" style="min-height: 20px;margin-right: 6px;"><input id="BhButton" type="button" value="Enter Email" style="padding: 3px;padding-left: 8px;padding-right: 8px;"><br><div class="line fk-font-12" style="margin-bottom: 4px;">Enter your email if you wanna get a mail when the price drops</div></div>';
  var button = document.getElementById("BhButton");
button.addEventListener("click", function(){
  addEmailID(document.getElementById('BhEmail').value);
  document.getElementById('addEmailBH').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! An email has been sent to ' + document.getElementById('BhEmail').value + '. Please verify to start receiving price drop notifications. Do check your <b>SPAM</b> folder !</div>'
  
}, false);
}, false);
  }
});

document.getElementById('bhWidget').innerHTML = '<div class="pricealert_hatke"><div class="price_hatke-wrap"><div class="price_hatke-initiated"><span class="price_hatke-type">Set Price:</span><span class="price_hatke-price"><img style="width:5%;height:11%;" src="http://compare.buyhatke.com/images/rupeeK.png">' + myPrice + '</span></div><div class="price_hatke-difference"><span class="price_hatke-type">Price Change:</span><span class="price_hatke-price dec-hatke"><img class="dec_rupee-hatke" style="width:5%;height:11%;" src="http://compare.buyhatke.com/images/rupeeG.png"><img class="inc_rupee-hatke" style="width:5%;height:11%;" src="http://compare.buyhatke.com/images/rupeeR.png">0<div class="inc_dec-hatke-wrap"><img class="inc_dec-hatke" src="http://compare.buyhatke.com/images/price_change1.png"></div></span></div><a href="javascript:void();" id="removeMe2">Remove</a></div></div><div id="addWatchList"></div>';
var button = document.getElementById("removeMe2");
button.addEventListener("click", function(){
  removeAlert();
  document.getElementById('bhWidget').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! We appreciate your motive to save energy :)</div>';
}, false);

}


flagToDisp = 0; strToDisp = ""; clsToUse = ""; diff = 0;
chrome.runtime.sendMessage({detailArray: "haiKya"}, function(response) {
   arrayRes = response.farewell;
   var currentURL = window.location.href;
   var filterURL = currentURL.split("?ref=")[0];
   filterURL = filterURL.split("ref=")[0];
   filterURL = filterURL.split("?")[0];  
             if($('[itemprop="price"]').text().split("Rs").length > 1)
             {
              var price = $('[itemprop="price"]').text().split("Rs")[1].split(",").join("").trim();
            }
            else
            {
              var price = $('[itemprop="price"]').text().split(",").join("").trim();
            }
myPrice = price;
myPrice = parseFloat(myPrice);
  for(i=0;i<response.farewell.length;i++){
    var currentURL2 = response.farewell[i].link;
   var filterURL2 = currentURL2.split("?ref=")[0];
   filterURL2 = filterURL2.split("ref=")[0];
   filterURL2 = filterURL2.split("?")[0];
   ////console.log(filterURL , filterURL2);
   if(filterURL2==filterURL || filterURL2 == filterURL + "?" || filterURL2 + "?" == filterURL){
    ////console.log("match found");
    if(myPrice!=0){
      response.farewell[i].cur_price = myPrice;
    }
    if(response.farewell[i].price_added >= response.farewell[i].cur_price){
       clsToUse = "dec-hatke";
       diff = response.farewell[i].price_added - response.farewell[i].cur_price;
    }
    else {
       clsToUse = "inc-hatke";
       diff = response.farewell[i].cur_price - response.farewell[i].price_added;
    }
     strToDisp = '<div class="pricealert_hatke"><div class="price_hatke-wrap"><div class="price_hatke-initiated"><span class="price_hatke-type">Set Price:</span><span class="price_hatke-price"><img style="width:5%;height:11%;" src="http://compare.buyhatke.com/images/rupeeK.png">' + response.farewell[i].price_added + '</span></div><div class="price_hatke-difference"><span class="price_hatke-type">Price Change:</span><span class="price_hatke-price ' + clsToUse + '"><img class="dec_rupee-hatke" style="width:5%;height:11%;" src="http://compare.buyhatke.com/images/rupeeG.png"><img class="inc_rupee-hatke" style="width:5%;height:11%;" src="http://compare.buyhatke.com/images/rupeeR.png">' + diff + '<div class="inc_dec-hatke-wrap"><img class="inc_dec-hatke" src="http://compare.buyhatke.com/images/price_change1.png"></div></span></div><a href="javascript:void();" id="removeMe2">Remove</a></div></div><div id="addWatchList"></div>';
    flagToDisp = 1;
    ////console.log("Flag " + flagToDisp);
    if(flagToDisp==1){
    if($('#bhWidget').length>0){
    document.getElementById('bhWidget').innerHTML  = strToDisp;
    var button = document.getElementById("removeMe2");
button.addEventListener("click", function(){
  removeAlert();
  document.getElementById('bhWidget').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! We appreciate your motive to save energy :)</div>';
}, false);
     }
     else {
      if($('.font_gray11').length>0){
      $('.font_gray11').before(strToDisp);
      }
      else if($('.price-box').length>0 && $('.price-box').length == 1){
        $('.price-box').after(strToDisp);
      }
      var button = document.getElementById("removeMe2");
button.addEventListener("click", function(){
  removeAlert();
  document.getElementById('bhWidget').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! We appreciate your motive to save energy :)</div>';
}, false);
     }
    }
   }
  }
  ////console.log(response.farewell);
});

if(flagToDisp==0){
  var imgURL2 = chrome.extension.getURL("watch-price1.png");
if($('.font_gray11').length>0){
$('.font_gray11').before('<div id="bhWidget"><a id="addWatchList" style="margin-top: 4px;" alt="Add to Watch List" title="Add to BuyHatke Watch List and get notifications on price drop" href="javascript:void();" class="fk-inline-block buy-btn fksk-buy-btn"><img style="margin-left:-12px;" src=' + imgURL2 +'></a></div>');
 }
 else if($('.price-box').length>0 && $('.price-box').length == 1){
  $('.price-box').after('<div id="bhWidget"><a id="addWatchList" style="margin-top: 4px;" alt="Add to Watch List" title="Add to BuyHatke Watch List and get notifications on price drop" href="javascript:void();" class="fk-inline-block buy-btn fksk-buy-btn"><img style="margin-left:-12px;" src=' + imgURL2 +'></a></div>');
 }

var button = document.getElementById("addWatchList");
if(button != undefined){
button.addEventListener("click", function(){
  addToWatchList();
}, false);
 }
}
else if($('.font_gray11').length>0){
  $('.font_gray11').before(strToDisp);
}
else if($('.price-box').length>0 && $('.price-box').length == 1){
  $('.price-box').after(strToDisp);
}

function removeAlert(){
  var currentURL = window.location.href;
  var filterURL = currentURL.split("?ref=")[0];
  filterURL = filterURL.split("ref=")[0];
  filterURL = filterURL.split("?")[0];
  ////console.log("Filtered URL " + filterURL);
  chrome.runtime.sendMessage({detailArray: "haiKya"}, function(response) {
  for(m=0;m<response.farewell.length;m++){
    var url2 = response.farewell[m].link;
    url2 = url2.split("?ref=")[0];
    url2 = url2.split("ref=")[0];
    url2 = url2.split("?")[0];
    if(url2==filterURL){
      sendId = response.farewell[m].link_id;
      chrome.runtime.sendMessage({removeURL: sendId}, function(response) {
  ////console.log("Removal request sent");
    });
    }
  }
}); 
}


var name = $('h1[itemprop="name"] span').text().trim();   
             if($('[itemprop="price"]').text().split("Rs").length > 1)
             {
              var price = $('[itemprop="price"]').text().split("Rs")[1].split(",").join("").trim();
            }
            else
            {
              var price = $('[itemprop="price"]').text().split(",").join("").trim();
            }


name = name.split("(")[0];
origProd = name;
var nameS = name.split(" ");
if(nameS.length<7){
name = nameS.join("-");
 }
 else {
 	name = nameS[0] + "-" + nameS[1] + "-" + nameS[2] + "-" + nameS[3] + "-" + nameS[4] + "-" + nameS[5] + "-" + nameS[6];
 }
var url = "http://compare.buyhatke.com/products/" + name;
var imgURL = chrome.extension.getURL("indtimes.png");

//$('.buymenow').after('<a target="_blank" href=' + url + ' class="buymenow" title="Compare via Compare Hatke"><img src='+ imgURL +' alt="Compare Now"></a>');

var final2send = url.split("products/");
var msgToSend = final2send[1] + "~*~*" + price;

if($('.div_bread').text().split('Apparels, Accessories').length >= 2 || $('.div_bread').text().split('Watches').length >=2 || $('.div_bread').text().split('Jewellery').length >=2){
  isApparels = true;
  msgToSend = msgToSend + "&moreData=null&isapparel=1";
}
else {
  isApparels = false;
}

chrome.runtime.sendMessage({search: msgToSend}, function(response) {
    });

chrome.runtime.onMessage.addListener(
 function(request, sender) {
  if(isApparels){
      var results = request.results;
  $('body').append(results);
  (function(a){a.tiny=a.tiny||{};a.tiny.carousel={options:{start:1,display:1,axis:"x",controls:true,pager:false,interval:false,intervaltime:3000,rewind:false,animation:true,duration:1000,callback:null}};a.fn.tinycarousel_start=function(){a(this).data("tcl").start()};a.fn.tinycarousel_stop=function(){a(this).data("tcl").stop()};a.fn.tinycarousel_move=function(c){a(this).data("tcl").move(c-1,true)};function b(q,e){var i=this,h=a(".viewport:first",q),g=a(".overview:first",q),k=g.children(),f=a(".ar-next:first",q),d=a(".ar-prev:first",q),l=a(".pager:first",q),w=0,u=0,p=0,j=undefined,o=false,n=true,s=e.axis==="x";function m(){if(e.controls){d.toggleClass("disable",p<=0);f.toggleClass("disable",!(p+1<u))}if(e.pager){var x=a(".pagenum",l);x.removeClass("active");a(x[p]).addClass("active")}}function v(x){if(a(this).hasClass("pagenum")){i.move(parseInt(this.rel,10),true)}return false}function t(){if(e.interval&&!o){clearTimeout(j);j=setTimeout(function(){p=p+1===u?-1:p;n=p+1===u?false:p===0?true:n;i.move(n?1:-1)},e.intervaltime)}}function r(){if(e.controls&&d.length>0&&f.length>0){d.click(function(){i.move(-1);return false});f.click(function(){i.move(1);return false})}if(e.interval){q.hover(i.stop,i.start)}if(e.pager&&l.length>0){a("a",l).click(v)}}this.stop=function(){clearTimeout(j);o=true};this.start=function(){o=false;t()};this.move=function(y,z){p=z?y:p+=y;if(p>-1&&p<u){var x={};x[s?"left":"top"]=-(p*(w*e.display));g.animate(x,{queue:false,duration:e.animation?e.duration:0,complete:function(){if(typeof e.callback==="function"){e.callback.call(this,k[p],p)}}});m();t()}};function c(){w=s?a(k[0]).outerWidth(true):a(k[0]).outerHeight(true);var x=Math.ceil(((s?h.outerWidth():h.outerHeight())/(w*e.display))-1);u=Math.max(1,Math.ceil(k.length/e.display)-x);p=Math.min(u,Math.max(1,e.start))-2;g.css(s?"width":"height",(w*k.length));i.move(1);r();return i}return c()}a.fn.tinycarousel=function(d){var c=a.extend({},a.tiny.carousel.options,d);this.each(function(){a(this).data("tcl",new b(a(this),c))});return this}}(jQuery));


$('#hr-title').click(function(){
 $("#hatke-recommendations").animate({'bottom':0},500);
})

$('#hr-close').click(function(){
 $("#hatke-recommendations").animate({'bottom':-90},500);
})

$(document).ready(function(){

    $('#hatke-reco-cover').tinycarousel({display:4,duration: 700});

});

  }
  else {
  var message = request.results;
  var results = JSON.parse(message);
  results.sort(compare);
  var origPrice = $('#prod_prcs').text().trim().split(",").join("");
  //console.log(origProd);
  var countArray = Array();
  for (var i = 0; i <= results.length - 1; i++) {
  	var current = results[i].prod;
  	countArray[i] = 0;
  	currentArray = origProd.split(" ");
  	var totalLen = currentArray.length;
  	for(var k=0; k< currentArray.length; k++){
  		if(current.toUpperCase().indexOf(currentArray[k].toUpperCase())!=-1){
  			countArray[i] = countArray[i] + 1;
  		}
  	}
  	results[i].score = countArray[i];
  	//console.log(results[i].prod + " " + results[i].price + " " + countArray[i]);
  }
  indexSelected = 0; notFound = 1;
  for(k=0; k< results.length; k++){
    if(results[k].score/totalLen > .5){
    	indexSelected = k;
    	notFound = 0;
    	break;
    }
  }

  //console.log(" Final product " + results[indexSelected].prod + " " + results[indexSelected].price);


if(results[indexSelected].position==1){
class_assigned = "class_ebay";
image_var = "images/ebay2.png";
siteName2 = "Ebay";
if(results[indexSelected].link.split("rover").length==1){
 results[indexSelected]["link"]= "http://rover.ebay.com/rover/1/4686-127726-2357-24/2?&site=Partnership_MSP&mpre=" + encodeURIComponent(results[indexSelected]["link"]);
}
}
else if(results[indexSelected].position==35){
class_assigned = "class_ebay";
image_var = "images/yebhi1.png";
siteName2 = "Yebhi";
}
else if(results[indexSelected].position==63){
class_assigned = "class_ebay";
image_var = "images/amazon.png";
siteName2 = "Amazon";
}
else if(results[indexSelected].position==30){
class_assigned = "class_ebay";
image_var = "images/indiaplaza1.png";
siteName2 = "Indiaplaza";
}
else if(results[indexSelected].position==31){
class_assigned = "class_ebay";
image_var = "images/bookadda1.png";
siteName2 = "Bookadda";
}
else if(results[indexSelected].position==129){
class_assigned = "class_ebay";
image_var = "images/snapdeal.png";
siteName2 = "Snapdeal";
}
else if(results[indexSelected].position==50){
class_assigned = "class_ebay";
image_var = "images/jabong1.png";
siteName2 = "Ebay";
}
else if(results[indexSelected].position==45){
class_assigned = "class_ebay";
image_var = "images/shpstop1.png";
siteName2 = "ShoppersStop";
}
else if(results[indexSelected].position==929){
class_assigned = "class_ebay";
image_var = "images/by.png";
siteName2 = "BabyOye";
}
else if(results[indexSelected].position==911){
class_assigned = "class_ebay";
image_var = "images/strawberrynet.png";
siteName2 = "StrawBerryNet";
}
else if(results[indexSelected].position==939){
class_assigned = "class_ebay";
image_var = "images/hb.png";
siteName2 = "Hushbabies";
}
else if(results[indexSelected].position==921){
class_assigned = "class_ebay";
image_var = "images/hk.png";
siteName2 = "Healthkart";
}
else if(results[indexSelected].position==62){
class_assigned = "class_ebay";
image_var = "images/indiarush.png";
siteName2 = "IndiaRush";
}
else if(results[indexSelected].position==2){
class_assigned = "class_flip";
image_var = "images/flipkart1.png";
siteName2 = "Flipkart";
}
else if(results[indexSelected].position==99){
class_assigned = "class_naap";
image_var = "images/infibeam2.png";
results[indexSelected].prod = (results[indexSelected].prod);
siteName2 = "Infibeam";
}
else if(results[indexSelected].position==4){
class_assigned = "class_naap";
image_var = "images/homeshop181.png";
siteName2 = "HomeShop18";
}
else if(results[indexSelected].position==7){
class_assigned = "class_naap";
image_var = "images/landmark1.png";
siteName2 = "Landmark";
}
else if(results[indexSelected].position==13){
class_assigned = "class_naap";
image_var = "images/tradus2.png";
siteName2 = "Tradus";

}
else if(results[indexSelected].position==22){
class_assigned = "class_naap";
image_var = "images/koovs1.png";
siteName2 = "Koovs";
}
else if(results[indexSelected].position==333){
class_assigned = "class_naap";
image_var = "images/pepperfry1.png";
siteName2 = "Pepperfry";
}
else if(results[indexSelected].position==11){
class_assigned = "class_naap";
image_var = "images/fnp1.png";
siteName2 = "Flowers n Petals";
}
else if(results[indexSelected].position==5){
class_assigned = "class_naap";
image_var = "images/futurebazaar1.png";
siteName2 = "FutureBazaar";
}
else if(results[indexSelected].position==98){
class_assigned = "class_naap";
image_var = "images/fashionara.png";
siteName2 = "Fashionara";
}
else if(results[indexSelected].position==111){
class_assigned = "class_naap";
image_var = "images/myntra2.png";
siteName2 = "Myntra";
}
else if(results[indexSelected].position==411){
class_assigned = "class_naap";
image_var = "images/grabmore.png";
siteName2 = "GrabMore";
}
else if(results[indexSelected].position==421){
class_assigned = "class_naap";
image_var = "images/shopclues.png";
siteName2 = "ShopClues";
}
else if(results[indexSelected].position==441){
class_assigned = "class_naap";
image_var = "images/naaptol.png";
siteName2 = "Naaptol";
}
else if(results[indexSelected].position==471){
class_assigned = "class_naap";
image_var = "images/crossword.png";
siteName2 = "Crossword";
}
else if(results[indexSelected].position==461){
class_assigned = "class_naap";
image_var = "images/magmall.png";
siteName2 = "Magazine Mall";
}
else if(results[indexSelected].position==91){
class_assigned = "class_naap";
image_var = "images/floralis.png";
siteName2 = "Ebay";
}
else if(results[indexSelected].position==401){
class_assigned = "class_naap";
image_var = "images/indtimesshopping.png";
siteName2 = "IndiaTimes Shopping";
}
else if(results[indexSelected].position==393){
class_assigned = "class_naap";
image_var = "images/adexmart.png";
siteName2 = "Adexmart";
}
else if(results[indexSelected].position==373){
class_assigned = "class_naap";
image_var = "images/phoolwala.png";
siteName2 = "PhoolWala";
}
else if(results[indexSelected].position==73){
class_assigned = "class_naap";
image_var = "images/goodlife.png";
siteName2 = "GoodLife";
}
else if(results[indexSelected].position==37){
class_assigned = "class_naap";
image_var = "images/jewelkart.jpg";
siteName2 = "JewelsKart";
}
else if(results[indexSelected].position==57){
class_assigned = "class_naap";
image_var = "images/lenskart.jpg";
siteName2 = "LensKart";
}
else if(results[indexSelected].position==47){
class_assigned = "class_naap";
image_var = "images/bagskart.jpg";
siteName2 = "BagsKart";
}
else if(results[indexSelected].position==67){
class_assigned = "class_naap";
image_var = "images/watch.jpeg";
siteName2 = "WatchKart";
}
else if(results[indexSelected].position==69){
class_assigned = "class_naap";
image_var = "images/next.png";
siteName2 = "Next.co.in";
}
else if(results[indexSelected].position==71){
class_assigned = "class_naap";
image_var = "images/croma.png";
siteName2 = "CromaRetail";
}
else if(results[indexSelected].position==412){
class_assigned = "class_naap";
image_var = "images/craftsvilla.png";
siteName2 = "Craftsvilla";
}
else if(results[indexSelected].position==469){
class_assigned = "class_naap";
image_var = "images/cilory.png";
siteName2 = "Cilory";
}
else if(results[indexSelected].position==429){
class_assigned = "class_naap";
image_var = "images/zivame.png";
siteName2 = "Zivame";
}
else if(results[indexSelected].position==151){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/uread.png";
siteName2 = "Uread";
}
else if(results[indexSelected].position==291){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/rediffbooks.png";
siteName2 = "Rediff";
}
else if(results[indexSelected].position==331){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/acadzone.png";
siteName2 = "AcadZone";
}

string = '<div id="dd_menu_list"><ul>';

for(i=0;i<results.length;i++){

if(results[i].position==1){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/ebay2.png";
siteName = "Ebay";
if(results[i].link.split("rover").length==1){
 results[i]["link"]= "http://rover.ebay.com/rover/1/4686-127726-2357-24/2?&site=Partnership_MSP&mpre=" + encodeURIComponent(results[i]["link"]);
}
}
else if(results[i].position==35){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/yebhi1.png";
siteName = "Yebhi";
}
else if(results[i].position==63){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/amazon.png";
siteName = "Amazon";
}
else if(results[i].position==30){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/indiaplaza1.png";
siteName = "Indiaplaza";
}
else if(results[i].position==31){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/bookadda1.png";
siteName = "Bookadda";
}
else if(results[i].position==129){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/snapdeal.png";
siteName = "Snapdeal";
}
else if(results[i].position==50){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/jabong1.png";
siteName = "Ebay";
}
else if(results[i].position==45){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/shpstop1.png";
siteName = "ShoppersStop";
}
else if(results[i].position==929){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/by.png";
siteName = "BabyOye";
}
else if(results[i].position==911){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/strawberrynet.png";
siteName = "StrawBerryNet";
}
else if(results[i].position==939){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/hb.png";
siteName = "Hushbabies";
}
else if(results[i].position==921){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/hk.png";
siteName = "Healthkart";
}
else if(results[i].position==62){
class_assigned = "class_ebay";
image_name = "http://compare.buyhatke.com/images/indiarush.png";
siteName = "IndiaRush";
}
else if(results[i].position==2){
class_assigned = "class_flip";
image_name = "http://compare.buyhatke.com/images/flipkart1.png";
siteName = "Flipkart";
}
else if(results[i].position==99){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/infibeam2.png";
results[i].prod = (results[i].prod);
siteName = "Infibeam";
}
else if(results[i].position==4){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/homeshop181.png";
siteName = "HomeShop18";
}
else if(results[i].position==7){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/landmark1.png";
siteName = "Landmark";
}
else if(results[i].position==13){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/tradus2.png";
siteName = "Tradus";

}
else if(results[i].position==22){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/koovs1.png";
siteName = "Koovs";
}
else if(results[i].position==333){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/pepperfry1.png";
siteName = "Pepperfry";
}
else if(results[i].position==11){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/fnp1.png";
siteName = "Flowers n Petals";
}
else if(results[i].position==5){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/futurebazaar1.png";
siteName = "FutureBazaar";
}
else if(results[i].position==98){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/fashionara.png";
siteName = "Fashionara";
}
else if(results[i].position==111){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/myntra2.png";
siteName = "Myntra";
}
else if(results[i].position==411){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/grabmore.png";
siteName = "GrabMore";
}
else if(results[i].position==421){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/shopclues.png";
siteName = "ShopClues";
}
else if(results[i].position==441){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/naaptol.png";
siteName = "Naaptol";
}
else if(results[i].position==471){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/crossword.png";
siteName = "Crossword";
}
else if(results[i].position==461){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/magmall.png";
siteName = "Magazine Mall";
}
else if(results[i].position==91){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/floralis.png";
siteName = "Ebay";
}
else if(results[i].position==401){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/indtimesshopping.png";
siteName = "IndiaTimes Shopping";
}
else if(results[i].position==393){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/adexmart.png";
siteName = "Adexmart";
}
else if(results[i].position==373){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/phoolwala.png";
siteName = "PhoolWala";
}
else if(results[i].position==73){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/goodlife.png";
siteName = "GoodLife";
}
else if(results[i].position==37){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/jewelkart.jpg";
siteName = "JewelsKart";
}
else if(results[i].position==57){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/lenskart.jpg";
siteName = "LensKart";
}
else if(results[i].position==47){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/bagskart.jpg";
siteName = "BagsKart";
}
else if(results[i].position==67){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/watch.jpeg";
siteName = "WatchKart";
}
else if(results[i].position==69){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/next.png";
siteName = "Next.co.in";
}
else if(results[i].position==71){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/croma.png";
siteName = "CromaRetail";
}
else if(results[i].position==412){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/craftsvilla.png";
siteName = "Craftsvilla";
}
else if(results[i].position==469){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/cilory.png";
siteName = "Cilory";
}
else if(results[i].position==429){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/zivame.png";
siteName = "Zivame";
}
else if(results[i].position==151){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/uread.png";
siteName = "Uread";
}
else if(results[i].position==291){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/rediffbooks.png";
siteName = "Rediff";
}
else if(results[i].position==331){
class_assigned = "class_naap";
image_name = "http://compare.buyhatke.com/images/acadzone.png";
siteName = "AcadZone";
}

  string = string + '<li><a target="_blank" href="' + results[i].link + '"><div class="itemWrap"><div class="imageDiv_wrap"><div class="imageDiv"><img src="' + results[i].image + '"></div></div><div class="prod_right"><div class="prodName">' + results[i].prod + '</div><div class="storeRow"><div class="prodPrice"><img src="http://compare.buyhatke.com/images/rupeeK.png">' + results[i].price + '</div><div class="prodStore"><img src="' + image_name + '"></div></div></div></div></a></li>';
}

string = string + '</ul></div>';

string2 = '<footer><div id="dd_menu_footer"><iframe src="http://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FBuyHatke&width=450&height=35&colorscheme=light&layout=standard&action=like&show_faces=false&send=false&appId=205177396285577" scrolling="no" frameborder="0" style="border: none;overflow: hidden;width: 230px;height: 30px;float: left;" allowTransparency="true"></iframe> <a href="mailto:wecare@buyhatke.com">Send Feedback</a></div></footer></div></div><div id="share_buttons">Share: <a class="dd_share_buttons" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fextension.buyhatke.com" target="_blank"><img src="http://compare.buyhatke.com/images/fbs.png"></a><a class="dd_share_buttons" href="https://plus.google.com/share?url=http%3A%2F%2Fextension.buyhatke.com" target="_blank"><img src="https://www.gstatic.com/images/icons/gplus-32.png" alt="Share on Google+"/></a><a class="dd_share_buttons" href="http://twitter.com/home?status=Try the amazing CompareHatke Chrome Extension!+http%3A%2F%2Fextension.buyhatke.com" target="_blank"><img src="http://compare.buyhatke.com/images/tweet.png"></a></div></div><a href="#" id="detailClose" onclick="removeAll();return false;">x</a></div></div>';

if(parseInt(results[indexSelected].price)<=parseInt(origPrice)&&notFound==0&&document.getElementById('detailOutWrap') == null) {

   $('body').before('<div id="detailOutWrap"><div id="detailInWrap"><a target="_blank" href="http://compare.buyhatke.com" title="Visit Buyhatke"><img id="details_logo" src="http://compare.buyhatke.com/images/logo_small.png"></a><div id="details">Hurray !  Massive savings found. This product is available for <span id="detail_cost"><img src="http://compare.buyhatke.com/images/rupeeK.png"> ' + results[indexSelected].price + '</span> at <span id="detail_store">' + siteName2 + '</span><a style="display:inline!important;" href="' + results[indexSelected].link + '" target="_blank"><input type="button" value=" BUY IT NOW" ></a>or<div class="drop_down" id="compare_now" onmouseover="cancel=true;">COMPARE PRICES<div class="drop_down_symbol"></div><div id="dd_menu"><head><div id="dd_menu_header">Showing <span>' + results.length + '</span> results</div></head>' + string + string2);
   $('body').css("margin-top", "45px");
  $("#dd_menu_list").hover(
  function() {
    msg2 = "Results Viewed";
  var port = chrome.runtime.connect({name: "knockknock"});
  port.postMessage({joke: "Knock knock"});
  port.onMessage.addListener(function(msg) {
  if (msg.question == "Product-name")
    port.postMessage({answer: msgToSend});
   });
  }, function() {
  }
);


var button = document.getElementById("detailClose");
button.addEventListener("click", function() {
  document.getElementById('detailOutWrap').style.display = "none";
  $('body').css("margin-top", "0px");
}, false);

cancel=false;
elem1=document.getElementById("compare_now");
blinker();

 }

  else if(results.length>0&&document.getElementById('detailOutWrap') == null){

   $('body').before('<div id="detailOutWrap"><div id="detailInWrap"><a target="_blank" href="http://compare.buyhatke.com" title="Visit Buyhatke"><img id="details_logo" src="http://compare.buyhatke.com/images/logo_small.png"></a><div id="details">Hurray !  Other variants for this product is available for <span id="detail_cost"><img src="http://compare.buyhatke.com/images/rupeeK.png"> ' + results[indexSelected].price + '</span> at <span id="detail_store">' + siteName2 + '</span><a style="display:inline!important;" href="' + results[indexSelected].link + '" target="_blank"><input type="button" value=" BUY IT NOW" ></a>or<div class="drop_down" id="compare_now" onmouseover="cancel=true;">COMPARE PRICES<div class="drop_down_symbol"></div><div id="dd_menu"><head><div id="dd_menu_header">Showing <span>' + results.length + '</span> results</div></head>' + string + string2);
   $('body').css("margin-top", "45px");
$("#dd_menu_list").hover(
  function() {
    msg2 = "Results Viewed";
  var port = chrome.runtime.connect({name: "knockknock"});
  port.postMessage({joke: "Knock knock"});
  port.onMessage.addListener(function(msg) {
  if (msg.question == "Product-name")
    port.postMessage({answer: msgToSend});
   });
  }, function() {
  }
);
var button = document.getElementById("detailClose");
button.addEventListener("click", function() {
  document.getElementById('detailOutWrap').style.display = "none";
  $('body').css("margin-top", "0px");
}, false);

cancel=false;
elem1=document.getElementById("compare_now");
blinker()

 }

 else if(document.getElementById('detailOutWrap') == null){

 	 $('body').before('<div id="detailOutWrap"><div id="detailInWrap"><div id="details">Hurray !  Massive savings found. Click to know more <a href="' + url + '" target="_blank"><input type="button" value=" COMPARE PRICES"></a><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fextension.buyhatke.com" id="notify_fshare"></a></div><a href="#" id="detailClose" >x</a></div></div>');
   $('body').css("margin-top", "45px");
  


var button = document.getElementById("detailClose");
button.addEventListener("click", function() {
  document.getElementById('detailOutWrap').style.display = "none";
  $('body').css("margin-top", "0px");
}, false);

 }

}

  });