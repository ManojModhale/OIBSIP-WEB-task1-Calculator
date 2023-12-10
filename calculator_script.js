function Solve(val)
{
	var v = document.getElementById('output_screen');
   	v.value += val;
}
function Result() 
{
   var input = document.getElementById('output_screen').value;
   var output = eval(input);
   document.getElementById('output_screen').value = output;
}
function Clear() 
{
   var input = document.getElementById('output_screen');
   input.value = '';
}
function Back() 
{
   var ev = document.getElementById('output_screen');
   ev.value = ev.value.slice(0,-1);
}