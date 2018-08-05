/**
 * 
 */
function deleteRendering() {

  var doc = document,
      elem = doc.body.innerHTML=""; 

  
   setTimeout(function() {
    elem.parentNode.removeChild(elem);
  }, 1000);

 
	wr = doc.createElement('div') ;
	wr.className='wrapper';
	
	
	for(var i=1; i<2; i++){
		//отрисовка класса row
		var rw =doc.createElement('div');			
					rw.className="row";					
		for(var i=1; i<3; i++){
			//отрисовка класса row1 и row2
			var rwitem =doc.createElement('div');			
					rwitem.className="row"+i;						
			if(i<=1){//отрисовка класса item в row1			
				for(var j=1; j<4; j++){	
					var item =doc.createElement('div');			
					item.className="item"+j;					
					rwitem.appendChild(item);				
					 }				
				rw.appendChild(rwitem);
			}
			else{	//отрисовка класса item в row2				
				for(var j=4; j<7; j++){
				var item =doc.createElement('div');			
					item.className="item"+j;
					/*rw2.appendChild(item);*/
					rwitem.appendChild(item);				
				}			
				rwitem.appendChild(item);
			}
			rw.appendChild(rwitem);
		}
		wr.appendChild(rw);
	}	
		
	doc.body.appendChild(wr);  

}
   
/*<div class="wrapper">
        <div class="row">
            <div class="row1">
                <div class="item1">1</div>
                <div class="item2">2</div>
                <div class="item3">3</div>
            </div>
            <div class="row2">
                <div class="item4">4</div>
                <div class="item5">5</div>
                <div class="item6">6</div>
            </div>
        </div>
    </div>	*/	