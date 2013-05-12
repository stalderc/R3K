function populateFields(){

var refID = document.getElementById('REFERENCE_ID_IN').value;
var F_NAME = document.getElementById('F_NAME_' + refID).value;
var L_NAME =  document.getElementById('L_NAME_' + refID).value;
var TITLE =  document.getElementById('TITLE_' + refID).value;
var COMPANY =  document.getElementById('COMPANY_' + refID).value;
var ADDRESS =  	document.getElementById('ADDRESS_' + refID).value;
var EMAIL =  document.getElementById('EMAIL_' + refID).value;
var PHONE_NUMBER =  document.getElementById('PHONE_NUMBER_' + refID).value;
var DISPLAY_RANK_ID =  document.getElementById('DISPLAY_RANK_ID_' + refID).value;

document.getElementById('F_NAME_IN').setAttribute("value", F_NAME);
document.getElementById('L_NAME_IN').setAttribute("value", L_NAME);
document.getElementById('PHONE_NUMBER_IN').setAttribute("value", PHONE_NUMBER);
document.getElementById('ADDRESS_IN').setAttribute("value", ADDRESS);
document.getElementById('EMAIL_IN').setAttribute("value", EMAIL_IN);
document.getElementById('COMPANY_IN').setAttribute("value", COMPANY_IN);
document.getElementById('TITLE_IN').setAttribute("value", TITLE_IN);
document.getElementById('DISPLAY_IN').setAttribute("value", DISPLAY_RANK_ID);
}




/*function populateForm(refID,formID,editFormId){
		
	var formData = document.getElementById(formID);
	var formSize = document.getElementById(formID);
	var position = formData.indexOf(refID);


	for(i= position - formSize; i < position; i++ ){
		document.getElementById(refIDs[i]).setAttribute("value", formData[i]);
	}
*/
	
		

