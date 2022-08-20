
//function for displaying values
function dis(val)
{
document.getElementById("ola").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("ola").value
let y = eval(x)
document.getElementById("ola").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("ola").value = ""
}