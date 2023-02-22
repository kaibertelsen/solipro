
  input.oninput = function() {
  document.getElementById("areal").value = input.value;
  
    var m2= input.value;
    //paneler
    let paneler = m2*fantallpaneler;
    paneler = Math.floor(paneler);
    document.getElementById("paneler").innerHTML = paneler;
    document.getElementById("panel").value = paneler;
    
   //effekt
   let effekt = paneler*feffektpanel;
      effekt = round(effekt, 2);
   document.getElementById("effekt").innerHTML = effekt;
   document.getElementById("effekt-2").value = effekt;
 
   //Årsproduksjon
   let arseffekt = paneler*arseffektpanel;
       arseffekt = round(arseffekt, 0);
       arseffekt = arseffekt.toLocaleString('en-US');
       arseffekt=arseffekt.replace(",", " ");
   document.getElementById("produksjon").innerHTML = arseffekt;
   document.getElementById("arsproduksjon").value = arseffekt;
   
    //Enovastøtte
      let estotten = enovastotte(paneler, effekt);
      let estotte = estotten.toLocaleString('en-US');
       estotte=estotte.replace(",", " ");
   document.getElementById("stotte").innerHTML = estotte+",-";
   document.getElementById("stotte-2").value = estotte+",-";
	  
   //Pris
    let pris = rabattvolum(paneler)-estotten;
       pris = round(pris, 0);
       pris = pris.toLocaleString('en-US');
       pris=pris.replace(",", " ");
       
   document.getElementById("pris").innerHTML = pris+",-";
   document.getElementById("pris-2").value = pris+",-";
  
 
  };


function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function rabattvolum(paneler){

	if(paneler<=segment2antstart){
  //segment 1
  var rpanel = paneler-segment1antstart;
  var sumprpanel = segment1prisstart-(segment1prisstart*(segment1rabpanel*rpanel));
  var sum = sumprpanel*paneler;
  return (sum);
	}else if(paneler> segment1antstopp && paneler < segment3prisstart){
   //segment 2
  var rpanel = paneler-segment2antstart;
  var sumprpanel = segment2prisstart-(segment2prisstart*(segment2rabpanel*rpanel));
  var sum = sumprpanel*paneler;
  return (sum);
   
	}else if(paneler> segment2antstopp){
   //segment 3
  var rpanel = paneler-segment3antstart;
  var sumprpanel = segment3prisstart-(segment3prisstart*(segment3rabpanel*rpanel));
  var sum = sumprpanel*paneler;
  return (sum);
   
	}



}


function enovastotte(paneler,kw) {
if (paneler ==1){
return (3795);
}else if (paneler ==2){
return (7590);
}else{

    var multiplier = (kw*stotteprkw)+stottepranlegg;
    
    if(multiplier>maxstotte){
    multiplier=maxstotte;
    }
    
    return (multiplier);
    }
}

