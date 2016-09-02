var alertPosition = 1972;
pidFlipkart = getPID();
prod = getProd();
var selector = [];
selector.push({selector: '.product-spec-tab:eq(0)', attr: 'none', pos: 'before'});
selector = JSON.stringify(selector);
height = "auto";
var passBack = [{selectors: selector, height: height}];
passBack = JSON.stringify(passBack);
addGraphBase(passBack);
// $('.product-detail-sec').css("z-index", 1001);
// $('.product-detail-sec').css("z-index", 1001);
var passBack1 = [{title: prod, siteName: 'Mebel', price: getPrice()}];
passBack1 = JSON.stringify(passBack1);
prepareGraph(pidFlipkart, passBack1);

var selector2 = [];
selector2.push({selector: '.delivery-info:eq(0)', attr: 'parent', pos: 'before'});
selector2 = JSON.stringify(selector2);
setTimeout("checkAlertStatus(" + selector2 + ")", 4000);
var title = getProd();
var prod = title;
var price = getPrice();
var myPrice = price;
title = title.split("(")[0];
  var titleS = title.split(" ");
  if(titleS.length<5){
    title = titleS.join("-");
  }
  else {
    title = titleS[0] + "-" + titleS[1] + "-" + titleS[2] + "-" + titleS[3] + "-" + titleS[4];
  }
  var url = "http://compare.buyhatke.com/products/" + title;
  var imgURL = returnResource("jabong.png");
  var imgURL2 = returnResource("watch-price1.png");
  if($('.delivery-info').length > 0){
    $('.delivery-info:eq(0)').before('<a title="Compare price via Compare Hatke" target="_blank" class="btn btn-default" href="'+url+'" style="padding: 5px 20px;background-color: #FFC107;color: #fff;margin: 10px 0px;float: right;">COMPARE »</a>');
  }

  var final2send = url.split("products/");
  var msgToSend = final2send[1] + "~*~*" + price;
////console.log(msgToSend);
msgToSend = msgToSend + "moreData=";
sendSearchMessage(msgToSend);

function filterResults(data){
  var results2 = JSON.parse(data);
  var message = results2;
  var results = message;
  results.sort(compare);
  var origPrice = getPrice();
  origProd = getProd();
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

  var posResults = [];
  posResults.push({selector: 'body', attr: 'none', pos: 'before'});
  posResults = JSON.stringify(posResults);
  var posSpecs = [];
  posSpecs.push({selector: 'body', attr: 'none', cssAttr: 'margin-top', preVal: '65px', postVal: '0px'});
  posSpecs.push({selector: '#header_inner', attr: 'none', cssAttr: 'display', preVal: 'none', postVal: 'block'});
  posSpecs = JSON.stringify(posSpecs);
  showResults(results, indexSelected, posSpecs, posResults);
}
