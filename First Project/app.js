function fetchImage()
{
    var name = document.getElementById('name').value;
    var image = document.getElementById('image')
    if(name == 'cheetah')
    {
        image.src = "https://i.natgeofe.com/k/66d3a80c-f4c3-4410-845c-3543375eaa85/cheetah-watching_square.jpg";
    }
    else if(name == 'tiger')
    {
        image.src = "https://thumbs.dreamstime.com/b/tiger-10446099.jpg";
    }
    else if(name == 'lion')
    {
        image.src = "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
    }
}