
let username;
let phonenumber;
let birth;
let place;
let nation;
let period1;
let highschool;
let period2;
let college;
let languages;
let interests;
let occupation;
let period3;
let description;
let occupation_1;
let period3_1;
let description_1;

document.getElementById("button").onclick = function(){
    
    username = document.getElementById("name").value;
    document.getElementById("name_resume").innerHTML = username;

    phonenumber = document.getElementById("phone").value;
    document.getElementById("phone_resume").innerHTML =  phonenumber;

    birth = document.getElementById("birth").value;
    document.getElementById("birth_resume").innerHTML =  birth;

    place = document.getElementById("place").value;
    document.getElementById("place_resume").innerHTML =  place;

    nation = document.getElementById("nation").value;
    document.getElementById("nation_resume").innerHTML =  nation;

    period1 = document.getElementById("period1").value;
    document.getElementById("period1_resume").innerHTML =  period1;

    highschool = document.getElementById("highschool").value;
    document.getElementById("highschool_resume").innerHTML =  highschool;

    period2 = document.getElementById("period2").value;
    document.getElementById("period2_resume").innerHTML =  period2;

    college = document.getElementById("college").value;
    document.getElementById("college_resume").innerHTML =  college;

    languages = document.getElementById("languages").value;
    document.getElementById("languages_resume").innerHTML =  languages;

    interests = document.getElementById("interests").value;
    document.getElementById("interests_resume").innerHTML =  interests;

    occupation = document.getElementById("occupation").value;
    document.getElementById("occupation_resume").innerHTML =  occupation;

    period3 = document.getElementById("period3").value;
    document.getElementById("period3_resume").innerHTML = period3;

    description = document.getElementById("description").value;
    document.getElementById("description_resume").innerHTML = description;

    occupation_1 = document.getElementById("occupation_1").value;
    document.getElementById("occupation_resume_1").innerHTML =  occupation_1;

    period3_1 = document.getElementById("period3_1").value;
    document.getElementById("period3_resume_1").innerHTML = period3_1;

    description_1 = document.getElementById("description_1").value;
    document.getElementById("description_resume_1").innerHTML = description_1;
}



