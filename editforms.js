function populate_ref_Fields(){

var refID 			=	document.getElementById('REFERENCE_ID_IN'          ).value;
var F_NAME 			=	document.getElementById('F_NAME_' 			+ refID).value;
var L_NAME 			=	document.getElementById('L_NAME_' 			+ refID).value;
var TITLE 			=	document.getElementById('TITLE_' 			+ refID).value;
var COMPANY 		=	document.getElementById('COMPANY_' 			+ refID).value;
var ADDRESS 		=	document.getElementById('ADDRESS_' 			+ refID).value;
var EMAIL 			=	document.getElementById('EMAIL_' 			+ refID).value;
var PHONE_NUMBER 	=	document.getElementById('PHONE_NUMBER_' 	+ refID).value;
var DISPLAY_RANK_ID =	document.getElementById('DISPLAY_RANK_ID_'  + refID).value;

document.getElementById('F_NAME_IN').setAttribute("value", F_NAME);
document.getElementById('L_NAME_IN').setAttribute("value", L_NAME);
document.getElementById('PHONE_NUMBER_IN').setAttribute("value", PHONE_NUMBER);
document.getElementById('ADDRESS_IN').setAttribute("value", ADDRESS);
document.getElementById('EMAIL_IN').setAttribute("value", EMAIL_IN);
document.getElementById('COMPANY_IN').setAttribute("value", COMPANY_IN);
document.getElementById('TITLE_IN').setAttribute("value", TITLE_IN);
document.getElementById('DISPLAY_IN').setAttribute("value", DISPLAY_RANK_ID);
}

function populate_ex_curr_Fields () {
var refID 			=	document.getElementById('EX_CURR_ID_IN'            ).value;
var ORGANIZATION	=	document.getElementById('ORGANIZATION_'		+ refID).value;
var TITLE 			=	document.getElementById('TITLE_' 			+ refID).value;
var YEAR 			=	document.getElementById('YEAR_' 			+ refID).value;
var DISPLAY_RANK_ID =	document.getElementById('DISPLAY_RANK_ID_'  + refID).value;
var SEMESTER_IN 	=	document.getElementById('SEMESTER_'  		+ refID).value;

document.getElementById('ORGANIZATION_IN').setAttribute("value", ORGANIZATION);
document.getElementById('TITLE_IN').setAttribute("value", TITLE);
document.getElementById('SEMESTER_IN').setAttribute("value", SEMESTER_IN);
document.getElementById('YEAR_IN').setAttribute("value", YEAR);
document.getElementById('DISPLAY_IN').setAttribute("value", DISPLAY_RANK_ID);
}

