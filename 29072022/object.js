var student = [
    {   srno:"1",
        fullname: "Aman Jaiswal",
        age: "34",
        course: "full-stack-developer",
        result:"Pass",
        percentage:"80%"
     },
    
     {  srno:"2",
        fullname: "Mayank Agrawal",
        age: "24",
        course: "full-stack-developer",
        result:"Pass",
        percentage:"66%"
     },
    
     {  srno:"3",
        fullname: "Chris Gayle",
        age: "26",
        course: "full-stack-developer",
        result:"Pass",
        percentage:"94%"
     },
    
     {  srno:"4",
        fullname: "Arjun ram Pal",
        age: "21",
        course: "full-stack-developer",
        result:"Pass",
        percentage:"74%"
     },
    
     {  srno:"5",
        fullname: "Aruna Irani",
        age: "20",
        course: "full-stack-developer",
        result:"Pass",
        percentage:"84%"
     }
    
];
var t ="";
for (var g =0; g < student.length; g++){
    t += '<tr><td>'+student[g].srno+'</td><td>'+student[g].fullname+'</td><td>'+student[g].age+'</td><td>'+student[g].course+'</td><td>'+student[g].result+'</td><td>'+student[g].percentage+'</td><br><tr>'
         
};
document.getElementById('dhoom').innerHTML=t;


