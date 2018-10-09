$(function () {

    var countHolder = 2;//liczba wyświeltanych wpisów po załadowaniu

    function getData(n) { //n = nr id  pojedynczego obiektu JSON
       
        
        $.getJSON('https://jsonplaceholder.typicode.com/photos/' + n, function (data) {

            var figure = $("<figure></figure>", {
                class: "list-item"
            });

            var img = $("<img>", {
                src: data.url
            });

            $(figure).append(img);

            var figcaption = $("<figcaption></figcaption>", {
                class: "list-txt"
            }).text(data.id + ' - ' + data.title);

            $(figure).append(figcaption);

            $('#post-list').append(figure);
            
           
            
            //rekurencja 
            if (n < countHolder) {
                getData(++n); 
            }
           
        }); //.getJSON
    }//.function getData

    getData(1);
    
    // button load more 
    $('button').on('click', function () {
        console.log($('.list-item').length)
        countHolder = $('.list-item').length + 2 // dynamiczna aktualizacja countHolder
        getData($('.list-item').length + 1) //dynamiczna aktualizacja getData

    }); //.click
});

