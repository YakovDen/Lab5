/**
 * 
 */
function changeStyle() {

var div = document.body.children[0];
 
 
 div.style.cssText="display: flex; \
    background-color: yellow; \
    max-width: 100%; \
	height: 600px; \
    min-height: 100%; \
    justify-content: space-around; \
	align-items: center; \
	overflow: hidden; \
  ";

  alert(div.style.cssText);
   
		}