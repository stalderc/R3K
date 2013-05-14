function populate_user_fields(){
var F_NAME    =	document.getElementById('F_NAME').value;
var M_NAME		=	document.getElementById('M_NAME').value;
var L_NAME		=	document.getElementById('L_NAME').value;
var STREET		=	document.getElementById('STREET').value;
var CITY		=	document.getElementById('CITY').value;
var STATE		=	document.getElementById('STATE').value;
var ZIPCODE		=	document.getElementById('ZIPCODE').value;
var SURNAME		=	document.getElementById('SURNAME').value;

document.getElementById('F_NAME_IN').setAttribute("value", F_NAME);
document.getElementById('M_NAME_IN').setAttribute("value", M_NAME);
document.getElementById('L_NAME_IN').setAttribute("value", L_NAME);
document.getElementById('SURNAME_IN').setAttribute("value", SURNAME);
document.getElementById('USER_STREET_ADDRESS_IN').setAttribute("value", STREET);
document.getElementById('USER_CITY_IN').setAttribute("value", CITY);
document.getElementById('USER_STATE_IN').setAttribute("value", STATE);
document.getElementById('USER_ZIPCODE_IN').setAttribute("value", ZIPCODE);
}


function populate_ref_Fields(){

var refID 			=	escape(document.getElementById('REFERENCE_ID_IN'           ).value);
var F_NAME 			=	escape(document.getElementById('F_NAME_' 			+ refID).value);
var L_NAME 			=	escape(document.getElementById('L_NAME_' 			+ refID).value);
var TITLE 			=	escape(document.getElementById('TITLE_' 			+ refID).value);
var COMPANY 		=	escape(document.getElementById('COMPANY_' 			+ refID).value);
var ADDRESS 		=	escape(document.getElementById('ADDRESS_' 			+ refID).value);
var EMAIL 			=	escape(document.getElementById('EMAIL_' 			+ refID).value);
var PHONE_NUMBER 	=	escape(document.getElementById('PHONE_NUMBER_' 	    + refID).value);
var DISPLAY_RANK_ID =	escape(document.getElementById('DISPLAY_RANK_ID_'   + refID).value);

document.getElementById('F_NAME_IN').setAttribute("value", 			unescape(F_NAME));
document.getElementById('L_NAME_IN').setAttribute("value", 			unescape(L_NAME));
document.getElementById('PHONE_NUMBER_IN').setAttribute("value", 	unescape(PHONE_NUMBER));
document.getElementById('ADDRESS_IN').setAttribute("value", 		unescape(ADDRESS));
document.getElementById('EMAIL_IN').setAttribute("value", 			unescape(EMAIL));
document.getElementById('COMPANY_IN').setAttribute("value", 		unescape(COMPANY));
document.getElementById('TITLE_IN').setAttribute("value", 			unescape(TITLE));
document.getElementById('REF_DISPLAY_RANK_IN').setAttribute("value", 	unescape(DISPLAY_RANK_ID));
}

function populate_ex_curr_Fields () {
var refID 			=	escape(document.getElementById('EX_CURR_ID_IN'             ).value);
var ORGANIZATION	=	escape(document.getElementById('ORGANIZATION_'		+ refID).value);
var TITLE 			=	escape(document.getElementById('TITLE_' 			+ refID).value);
var YEAR 			=	escape(document.getElementById('YEAR_' 			    + refID).value);
var DISPLAY_RANK_ID =	escape(document.getElementById('DISPLAY_RANK_ID_'   + refID).value);
var SEMESTER_IN 	=	escape(document.getElementById('SEMESTER_'  		+ refID).value);

document.getElementById('TITLE_IN').setAttribute("value",               unescape(TITLE));
document.getElementById('SEMESTER_IN').setAttribute("value",            unescape(SEMESTER_IN));
document.getElementById('YEAR_IN').setAttribute("value",                unescape(YEAR));
document.getElementById('EX_CUR_DISPLAY_RANK_IN').setAttribute("value", unescape(DISPLAY_RANK_ID));
document.getElementById('ORGANIZATION_IN').setAttribute("value",        unescape( ORGANIZATION));
}


function populate_academic_fields(){

var refID 				= 	escape(document.getElementById('COURSE_ID_IN'			   	   ).value);
var COURSE_TITLE 		= 	escape(document.getElementById('COURSE_TITLE_' 			+ refID).value);
var COURSE_NUMBER 		= 	escape(document.getElementById('COURSE_NUMBER_' 		+ refID).value);
var COURSE_DESCRIPTION 	= 	escape(document.getElementById('COURSE_DESCRIPTION_' 	+ refID).value);
var DISPLAY_RANK_ID 	=	escape(document.getElementById('DISPLAY_RANK_ID_'  		+ refID).value);

unescape(document.getElementById('COURSE_TITLE_IN').setAttribute("value", 		  COURSE_TITLE));
unescape(document.getElementById('COURSE_NUMBER_IN').setAttribute("value", 		  COURSE_NUMBER));
unescape(document.getElementById('COURSE_DESCRIPTION_IN').setAttribute("value", 	  COURSE_DESCRIPTION));
unescape(document.getElementById('ACADEMIC_DISPLAY_RANK_IN').setAttribute("value", DISPLAY_RANK_ID));

}

function populate_certification_fields(){
var refID 				= 	escape(document.getElementById('CERT_ID_IN'			         ).value);
var CERTIFICATION_TITLE = 	escape(document.getElementById('CERTIFICATION_TITLE_' + refID).value);
var CERTIFICATION_DATE	= 	escape(document.getElementById('CERTIFICATION_DATE_'  + refID).value);
var DISPLAY_RANK_ID 	=	escape(document.getElementById('DISPLAY_RANK_ID_'     + refID).value);

document.getElementById('CERTIFICATION_TITLE_IN').setAttribute("value",		unescape(CERTIFICATION_TITLE));
document.getElementById('DATE_RECORDED_IN').setAttribute("value", 			unescape(CERTIFICATION_DATE));
document.getElementById('CERT_DISPLAY_RANK_IN').setAttribute("value", 		unescape(DISPLAY_RANK_ID));

}

function populate_award_fields() {
var refID 				= 	escape(document.getElementById('HONOR_ID_IN'			      ).value);
var AWARD_NAME 			= 	escape(document.getElementById('AWARD_NAME_'          +  refID).value);
var SEMESTER			= 	escape(document.getElementById('SEMESTER_'            +  refID).value);
var YEAR				= 	escape(document.getElementById('YEAR_'                +  refID).value);
var DISPLAY_RANK_ID 	=	escape(document.getElementById('DISPLAY_RANK_ID_'     +  refID).value);

document.getElementById('AWARD_NAME_IN').setAttribute("value",				 unescape(AWARD_NAME));
document.getElementById('YEAR_RECEIVED_IN').setAttribute("value", 			 unescape(YEAR));
document.getElementById('SEMESTER_RECEIVED_IN').setAttribute("value", 		 unescape(SEMESTER));
document.getElementById('AWARD_DISPLAY_RANK_IN').setAttribute("value",		 unescape(DISPLAY_RANK_ID));
}

function populate_education_fields() {
var refID 				= 	escape(document.getElementById('EDUCATION_ID_IN'			     ).value);
var SCHOOL_ID 			= 	escape(document.getElementById('SCHOOL_ID_'          + 		refID).value);
var DEGREE				= 	escape(document.getElementById('DEGREE_'             + 		refID).value);
var MAJOR				= 	escape(document.getElementById('MAJOR_'              + 		refID).value);
var GRAD_DATE 			=	escape(document.getElementById('GRAD_DATE_'          + 		refID).value);
var GPA					= 	escape(document.getElementById('GPA_'                + 		refID).value);
var MINOR				= 	escape(document.getElementById('MINOR_'              + 		refID).value);
var CERTIFICATIONS 		=	escape(document.getElementById('CERTIFICATIONS_'     +		refID).value);
var DISPLAY_RANK_ID 	=	escape(document.getElementById('DISPLAY_RANK_ID_'    + 		refID).value);

document.getElementById('DEGREE_NAME_IN').setAttribute("value", 		unescape(DEGREE));
document.getElementById('DEGREE_MAJOR_IN').setAttribute("value", 		unescape(MAJOR));
document.getElementById('DEGREE_MINOR_IN').setAttribute("value", 		unescape(MINOR));
document.getElementById('CERTIFICATION_IN').setAttribute("value", 		unescape(CERTIFICATIONS));
document.getElementById('GRADE_POINTS_IN').setAttribute("value", 		unescape(GPA));
document.getElementById('GRADUATION_DATE_IN').setAttribute("value", 	unescape(GRAD_DATE));
document.getElementById('EDU_DISPLAY_RANK_IN').setAttribute("value", 	unescape(DISPLAY_RANK_ID));

}

function populate_publication_fields() {
var refID 				= 	escape(document.getElementById('RESEARCH_PUB_ID_IN'			     ).value);
var TITLE 				= 	escape(document.getElementById('TITLE_' 			  + 	refID).value);
var TYPE				= 	escape(document.getElementById('TYPE_'                + 	refID).value);
var LOCATION			= 	escape(document.getElementById('LOCATION_'            + 	refID).value);
var DATE_PRESENTED		= 	escape(document.getElementById('DATE_PRESENTED_'      + 	refID).value);
var DISPLAY_RANK 		=	escape(document.getElementById('DISPLAY_RANK_ID_'     +		refID).value);

document.getElementById('RESEARCH_TITLE_IN').setAttribute("value",				unescape(TITLE));
document.getElementById('RESEARCH_TYPE_IN').setAttribute("value", 				unescape(TYPE));
document.getElementById('RESEARCH_LOCATION_IN').setAttribute("value", 			unescape(LOCATION));
document.getElementById('RESEARCH_DATE_PRESENTED_IN').setAttribute("value", 	unescape(DATE_PRESENTED));
document.getElementById('PUB_DISPLAY_RANK_IN').setAttribute("value", 			unescape(DISPLAY_RANK));
}

function populate_projects_fields(){
var refID 				= 	escape(document.getElementById('PROJECT_ID_IN'			     ).value);
var PROJECT_NAME 		= 	escape(document.getElementById('NAME_' 				+ 	refID).value);
var DESCRIPTION			= 	escape(document.getElementById('DESCRIPTION_'  		+	refID).value);
var DISPLAY_RANK 		=	escape(document.getElementById('DISPLAY_RANK_ID_'   +   refID).value);

document.getElementById('PROJECT_NAME_IN').setAttribute("value",			unescape(PROJECT_NAME));
document.getElementById('PROJECT_DESCRIPTION_IN').setAttribute("value", 	unescape(DESCRIPTION));
document.getElementById('PROJ_DISPLAY_RANK_IN').setAttribute("value", 		unescape(DISPLAY_RANK));

}

function populate_standard_skill_fields(){
var refID 				= 	escape(document.getElementById('STANDARD_SKILL_ID_IN'			     ).value);
var SKILL_NAME 			= 	escape(document.getElementById('STANDARD_SKILL_NAME_'       +   refID).value);
var DISPLAY_RANK		= 	escape(document.getElementById('STANDARD_DISPLAY_RANK_ID_'  + 	refID).value);
var SKILL_TYPE			= 	escape(document.getElementById('STANDARD_SKILL_TYPE_'       + 	refID).value);


document.getElementById('STANDARD_SKILL_TYPE_IN').setAttribute("value",		unescape(SKILL_TYPE));
document.getElementById('STANDARD_SKILL_NAME_IN').setAttribute("value", 	unescape(SKILL_NAME));
document.getElementById('STANDARD_DISPLAY_RANK_IN').setAttribute("value", 	unescape(DISPLAY_RANK));
}

function populate_technical_skill_fields(){
var refID 				= 	escape(document.getElementById('TECHNICAL_SKILL_ID_IN'			     ).value);
var SKILL_NAME 			= 	escape(document.getElementById('TECHNICAL_SKILL_NAME_' 		 +	refID).value);
var DISPLAY_RANK		= 	escape(document.getElementById('TECHNICAL_DISPLAY_RANK_ID_'  + 	refID).value);
var SKILL_TYPE			= 	escape(document.getElementById('TECHNICAL_SKILL_TYPE_'       + 	refID).value);


document.getElementById('TECHNICAL_SKILL_TYPE_IN').setAttribute("value",		unescape(SKILL_TYPE));
document.getElementById('TECHNICAL_SKILL_NAME_IN').setAttribute("value", 		unescape(SKILL_NAME));
document.getElementById('TECHNICAL_DISPLAY_RANK_IN').setAttribute("value", 		unescape(DISPLAY_RANK));
}

function populate_design_skill_fields(){
var refID 				= 	escape(document.getElementById('DESIGN_SKILL_ID_IN'			         ).value);
var SKILL_NAME 			= 	escape(document.getElementById('DESIGN_SKILL_NAME_' 		+ 	refID).value);
var DISPLAY_RANK		= 	escape(document.getElementById('DESIGN_DISPLAY_RANK_ID_'    +   refID).value);
var SKILL_TYPE			= 	escape(document.getElementById('DESIGN_SKILL_TYPE_'  		+ 	refID).value);


document.getElementById('DESIGN_SKILL_TYPE_IN').setAttribute("value",		unescape(SKILL_TYPE));
document.getElementById('DESIGN_SKILL_NAME_IN').setAttribute("value", 		unescape(SKILL_NAME));
document.getElementById('DESIGN_DISPLAY_RANK_IN').setAttribute("value", 	unescape(DISPLAY_RANK));
}

function populate_work_history_fields(){

var refID 				=	escape(document.getElementById('WORK_ID_IN'          			 ).value);
var POSITION_TITLE		=	escape(document.getElementById('POSITION_TITLE_' 	+ 		refID).value);
var START_DATE			=	escape(document.getElementById('START_DATE_' 		+ 		refID).value);
var END_DATE			=	escape(document.getElementById('END_DATE_' 			+ 		refID).value);
var EMPLOYER			=	escape(document.getElementById('EMPLOYER_' 			+ 		refID).value);
var CITY				=	escape(document.getElementById('CITY_' 			    + 		refID).value);
var STATE				=	escape(document.getElementById('STATE_' 			+ 		refID).value);
var DISPLAY_RANK_ID		=	escape(document.getElementById('DISPLAY_RANK_ID_'   + 		refID).value);
var DESCRIPTION			=	escape(document.getElementById('DESCRIPTION_1_' 	+ 		refID).value);

document.getElementById('WORK_POSITION_IN').setAttribute("value", 		unescape(POSITION_TITLE));
document.getElementById('WORK_START_DATE_IN').setAttribute("value", 	unescape(START_DATE));
document.getElementById('WORK_END_DATE_IN').setAttribute("value", 		unescape(END_DATE));
document.getElementById('WORK_EMPLOYER_IN').setAttribute("value", 		unescape(EMPLOYER));
document.getElementById('WORK_CITY_IN').setAttribute("value", 			unescape(CITY));
document.getElementById('WORK_STATE_IN').setAttribute("value", 			unescape(STATE));
document.getElementById('WORK_DESCRIPTION_IN').setAttribute("value", 	unescape(DESCRIPTION));
document.getElementById('WORK_DISPLAY_RANK_IN').setAttribute("value", 	unescape(DISPLAY_RANK_ID));
}
