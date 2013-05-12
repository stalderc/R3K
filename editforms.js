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
document.getElementById('EMAIL_IN').setAttribute("value", EMAIL);
document.getElementById('COMPANY_IN').setAttribute("value", COMPANY);
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


function populate_academic_fields(){

var refID 				= 	document.getElementById('COURSE_ID_IN'			   	   ).value;
var COURSE_TITLE 		= 	document.getElementById('COURSE_TITLE_' 		+ refID).value;
var COURSE_NUMBER 		= 	document.getElementById('COURSE_NUMBER_' 		+ refID).value;
var COURSE_DESCRIPTION 	= 	document.getElementById('COURSE_DESCRIPTION_' 	+ refID).value;
var DISPLAY_RANK_ID 	=	document.getElementById('DISPLAY_RANK_ID_'  	+ refID).value;

document.getElementById('COURSE_TITLE').setAttribute("value", 		COURSE_TITLE);
document.getElementById('COURSE_NUMBER').setAttribute("value", 		COURSE_NUMBER);
document.getElementById('COURSE_DESC').setAttribute("value", 		COURSE_DESCRIPTION);
document.getElementById('DISPLAY_IN').setAttribute("value", 		DISPLAY_RANK_ID);

}


function populate_certification_fields(){
var refID 				= 	document.getElementById('CERT_ID_IN'			      ).value;
var CERTIFICATION_TITLE = 	document.getElementById('CERTIFICATION_TITLE_' + refID).value;
var CERTIFICATION_DATE	= 	document.getElementById('CERTIFICATION_DATE_'  + refID).value;
var DISPLAY_RANK_ID 	=	document.getElementById('DISPLAY_RANK_ID_'     + refID).value;

document.getElementById('CERTIFICATION_TITLE_IN').setAttribute("value",CERTIFICATION_TITLE);
document.getElementById('CERTIFICATION_DATE_IN').setAttribute("value", CERTIFICATION_DATE);
document.getElementById('DISPLAY_IN').setAttribute("value", 		DISPLAY_RANK_ID);

}
























