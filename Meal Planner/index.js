function generateMeal() 
{
    fetch('https://api.spoonacular.com/mealplanner/generate?apiKey=4e0bd0885ba640529271f7d2d0150e0b&timeFrame=day')
      .then(response => response.json())
      .then(data => {
        var result = JSON.parse(JSON.stringify(data));
        document.getElementById('result').innerText = 'Your Ideal Meals for the Day:\n';
        for(let i=0;i<result.meals.length;i++)
        {
            console.log(result.meals[i])
            document.getElementById('result').innerText += '\n'+JSON.stringify(result.meals[i].title).slice(1, -1);+'\n';
        }
      })
      .catch(error => 
        {
        console.log('Error:', error);
        document.getElementById('result').innerText = 'Error occurred while fetching data.';
      });
}