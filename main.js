student_name=[];

function submit()
{

var name_1 = document.getElementById("name_of_the_student_1").value;

var name_2 = document.getElementById("name_of_the_student_2").value;

var name_3 = document.getElementById("name_of_the_student_3").value;

var name_4 = document.getElementById("name_of_the_student_4").value;


student_name.push (name_1);

student_name.push (name_2);

student_name.push (name_3);

student_name.push (name_4);


console.log(student_name);

document.getElementById("display_name").innerHTML=student_name;

document.getElementById("submit_button").style.display="none";

document.getElementById("sort_button").style.display="inline-block";

}

function sort()
{
student_name.sort();

console.log(student_name);

document.getElementById ("display_name") .innerHTML=student_name;


}