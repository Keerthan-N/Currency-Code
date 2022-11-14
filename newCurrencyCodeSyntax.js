// Syntax
$pr = '';
$syml = $pr.replace(/[\d\., ]/g,'').trim();
switch($syml){
    case '$' : $cr = jQuery('[itemprop="priceCurrency"]').length > 0 ? 
                     jQuery('[itemprop="priceCurrency"]').attr('content').trim() : '';
               if($cr.length > 0 && $cr == 'USD'){
                    $pr;
               }else if($cr.length > 0 && $cr != 'USD'){
                    $pr = $pr.slice(1,$pr.length).trim();
                    $pr = $pr.indexOf($cr) == -1 ? $cr+$pr : $pr;
               }
               else $pr;
               break;
    case '₹' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
               $pr.replace('₹' ,'INR').trim();
               break;
    case '€' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
               $pr.replace('€' ,'EUR').trim();
               break;
    case '£' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
               $pr.replace('£' ,'GBP').trim();
               break;
    case '¥' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
               $pr.replace('¥' ,'JPY').trim();
               break;
    case '₽' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
               $pr.replace('₽' ,'RUB').trim();
               break;
    case 'Kr.' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
               $pr.replace('Kr.' ,'DKK').trim();
               break;
    case 'kr' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
                $pr.replace('kr' ,'SEK').trim();
                break;
    case 'ƒ' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
               $pr.replace('ƒ' ,'NLG').trim();
               break;
    case '₪' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
               $pr.replace('₪' ,'ILS').trim();
               break;
    case 'R$' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
                $pr.replace('R$' ,'BRL').trim();
                break;
    case 'R' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
               $pr.replace('R' ,'ZAR').trim();
               break;
    case 'د.إ' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
               $pr.replace('د.إ' ,'AED').trim();
               break;
    case 'Dh' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
                 $pr.replace('Dh','AED').trim();
                 break;
    case 'Dhs' : $pr = $pr.indexOf($syml) == $pr.length-1 ? $syml + $pr.substring(0,$pr.length-1) : $pr;
                 $pr.replace('Dhs','AED').trim();
                 break;
    default : $pr;
}