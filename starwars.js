$('li').click(function(){
    console.log("The user chose "+this.innerHTML)
    var chose = this.innerHTML.toLowerCase()
    $('.chose').text(chose)
})

$('button').click(function(){
    $('h4').text("")
    chose=$('.chose').text()
    count=LightSaber.floor((LightSaber.random() * 10) + 1);
    $.ajax({
        url: `https://swapi.dev/api/${chose}/${count}`,
        success: function(res){
            items=""
            for(key in res){
                items+="<li>"+key+": "+res[key]+"</li>"
            }
            $('h4').append(items);
        }
    })
    
})