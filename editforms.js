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
document.getElementById('TITLE_IN').setAttribute("value", TITLE);
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

document.getElementById('COURSE_TITLE_IN').setAttribute("value", 		COURSE_TITLE);
document.getElementById('COURSE_NUMBER_IN').setAttribute("value", 		COURSE_NUMBER);
document.getElementById('COURSE_DESCRIPTION_IN').setAttribute("value", 		COURSE_DESCRIPTION);
document.getElementById('DISPLAY_RANK_IN').setAttribute("value", 		DISPLAY_RANK_ID);

}

function populate_certification_fields(){
var refID 				= 	document.getElementById('CERT_ID_IN'			      ).value;
var CERTIFICATION_TITLE = 	document.getElementById('CERTIFICATION_TITLE_' + refID).value;
var CERTIFICATION_DATE	= 	document.getElementById('CERTIFICATION_DATE_'  + refID).value;
var DISPLAY_RANK_ID 	=	document.getElementById('DISPLAY_RANK_ID_'     + refID).value;

document.getElementById('CERTIFICATION_TITLE_IN').setAttribute("value",CERTIFICATION_TITLE);
document.getElementById('DATE_RECORDED_IN').setAttribute("value", CERTIFICATION_DATE);
document.getElementById('DISPLAY_RANK_IN').setAttribute("value", 		DISPLAY_RANK_ID);

}

function populate_award_fields() {
var refID 				= 	document.getElementById('HONOR_ID_IN'			      ).value;
var AWARD_NAME 			= 	document.getElementById('AWARD_NAME_' + refID).value;
var SEMESTER			= 	document.getElementById('SEMESTER_'  + refID).value;
var YEAR				= 	document.getElementById('YEAR_'  + refID).value;
var DISPLAY_RANK_ID 	=	document.getElementById('DISPLAY_RANK_ID_'     + refID).value;

document.getElementById('AWARD_NAME_IN').setAttribute("value",AWARD_NAME);
document.getElementById('YEAR_RECEIVED_IN').setAttribute("value", YEAR);
document.getElementById('SEMESTER_RECEIVED_IN').setAttribute("value", 		SEMESTER);
document.getElementById('DISPLAY_RANK_IN').setAttribute("value", DISPLAY_RANK_ID);
}

function populate_education_fields() {
var refID 				= 	document.getElementById('EDUCATION_ID_IN'			      ).value;
var SCHOOL_ID 			= 	document.getElementById('SCHOOL_ID_' + refID).value;
var DEGREE		= 	document.getElementById('DEGREE_'  + refID).value;
var MAJOR				= 	document.getElementById('MAJOR_'  + refID).value;
var GRAD_DATE 	=	document.getElementById('GRAD_DATE_'     + refID).value;
var GPA			= 	document.getElementById('GPA_'  + refID).value;
var MINOR			= 	document.getElementById('MINOR_'  + refID).value;
var CERTIFICATIONS 	=	document.getElementById('CERTIFICATIONS_'     + refID).value;
var DISPLAY_RANK_ID 	=	document.getElementById('DISPLAY_RANK_ID_'     + refID).value;

document.getElementById('DEGREE_NAME_IN').setAttribute("value", DEGREE);
document.getElementById('DEGREE_MAJOR_IN').setAttribute("value", 		MAJOR);
document.getElementById('DEGREE_MINOR_IN').setAttribute("value", MINOR);
document.getElementById('CERTIFICATION_IN').setAttribute("value", CERTIFICATIONS);
document.getElementById('GRADE_POINTS_IN').setAttribute("value", 		GPA);
document.getElementById('GRADUATION_DATE_IN').setAttribute("value", GRAD_DATE);
document.getElementById('DISPLAY_RANK_IN').setAttribute("value", DISPLAY_RANK_ID);

}

function populate_publication_fields() {
var refID 				= 	document.getElementById('RESEARCH_PUB_ID_IN'			      ).value;
var TITLE 			= 	document.getElementById('TITLE_' + refID).value;
var TYPE			= 	document.getElementById('TYPE_'  + refID).value;
var LOCATION				= 	document.getElementById('LOCATION_'  + refID).value;
var DATE_PRESENTED				= 	document.getElementById('DATE_PRESENTED_'  + refID).value;
var DISPLAY_RANK 	=	document.getElementById('DISPLAY_RANK_ID_'     + refID).value;

document.getElementById('RESEARCH_TITLE_IN').setAttribute("value",TITLE);
document.getElementById('RESEARCH_TYPE_IN').setAttribute("value", TYPE);
document.getElementById('RESEARCH_LOCATION_IN').setAttribute("value", 		LOCATION);
document.getElementById('RESEARCH_DATE_PRESENTED_IN').setAttribute("value", 		DATE_PRESENTED);
document.getElementById('DISPLAY_RANK_IN').setAttribute("value", DISPLAY_RANK);
}