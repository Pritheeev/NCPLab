function myFunction()
{
	var genre = document.getElementById('sel1').value;
	alert(genre);
	if(genre == 'Action')
	{
		document.getElementByClassName('row b').style = ""
	}
}