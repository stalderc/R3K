function populateForm(refID,formID,editFormId){
		
	var formData = document.getElementById(formID);
	var formSize = document.getElementById(formID);
	var position = formData.indexof(refID);
	var inputIDs = document.getElementsByTagName('editFormID').innerHTML.formids.getAttribute('ID');

	for(i= position - formSize; i < position; i++ ){
		document.getElementById(inputIDs[i]).setAttribute("value", formData[i])
	}

	
		

}