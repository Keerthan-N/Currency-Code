// Link (https://spectrumstore.com/en/new-balance-990-made-in-usa-tan-id398350)
$pr = jQuery('.prodinfo .price [itemprop="price"]').text().trim();
   if(jQuery('.prodinfo  .pdelivery:contains(% off)').length == 1){
    $cp = jQuery('.prodinfo  .pdelivery.nrml:contains(% off)').text().split('%')[0].replace(/[^0-9]/gi,'').trim();
    $cr = $pr.replace(/[0-9\.]+/g,"").replace(",","");
    $percent = 1.0;
    $price_x = parseFloat(Number($pr.replace(/[^0-9]+/g,"").replace(",",".")));
    $pr = $cr+($price_x * ($percent - ($cp/100))).toFixed(2);
}

$pr;
