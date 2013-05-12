function populateFields(){
	
var refID = getElementById(REFERENCE_ID_IN);
var F_NAME = getElementById('F_NAME_' + refID);
var L_NAME =  getElementById('L_NAME_' + refID);
var TITLE =  getElementById('TITLE_' + refID);
var COMPANY =  getElementById('COMPANY_' + refID);
var ADDRESS =  getElementById('ADDRESS_' + refID);
var EMAIL =  getElementById('EMAIL_' + refID);
var PHONE_NUMBER =  getElementById('PHONE_NUMBER_' + refID);
var DISPLAY_RANK_ID =  getElementById('DISPLAY_RANK_ID_' + refID);

document.getElementById('F_NAME_IN').setAttribute("value", F_NAME);
document.getElementById('L_NAME_IN').setAttribute("value", L_NAME);
document.getElementById('PHONE_NUMBER_IN').setAttribute("value", TITLE);
document.getElementById('ADDRESS_IN').setAttribute("value", COMPANY);
document.getElementById('EMAIL_IN').setAttribute("value", ADDRESS);
document.getElementById('COMPANY_IN').setAttribute("value", EMAIL);
document.getElementById('TITLE_IN').setAttribute("value", PHONE_NUMBER);
document.getElementById('DISPLAY_IN').setAttribute("value", DISPLAY_RANK_ID);
}




/*function populateForm(refID,formID,editFormId){
		
	var formData = document.getElementById(formID);
	var formSize = document.getElementById(formID);
	var position = formData.indexOf(refID);
<<<<<<< HEAD
	var inputIDs = document.getElementsByTagName(editFormID).innerHTML.inputIDs.getAttribute('ID');
=======
	var refIDs = document.getElementsByTagName(editFormID);
	document.getElementById(editFormID).innerHTML=refIDs.getAttribute('ID');
>>>>>>> more updates

	for(i= position - formSize; i < position; i++ ){
		document.getElementById(refIDs[i]).setAttribute("value", formData[i]);
	}
*/
	
		

