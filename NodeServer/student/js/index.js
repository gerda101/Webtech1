$(document).ready(function () { //ha a document betöltődik, fusson le ez a fv

    $("#content").load("lorem.html");

    $.each($(".menuButton"), function (mbIndex, mbValue) {
        $(mbValue).click(function (event) {
            event.preventDefault(); //ahelyett h megnyitná, nem csinál semmit
            if (!($(this).find('a').attr("href") == "index.html")) {
                $("#content").load($(this).find('a').attr("href"));
            } else {
                open("index.html", "_self");

            }

        })
        /*   $("#contacts").click(function () {
               $("#content").load($("#contacts").attr("href")); */
    })
});

function openBooks(author) {
    document.cookie = "name = " + author;
    $.getJSON(url: "car", data function (data) {
        var table = $('<table id=carTable></table>');
        $(table).append('<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Available</th><th>Year</th><th>Horsepower</th></tr>')
        $('#content').append(table);
        $.each(data, function (key,value) {
            var row = $('<tr></tr>');
            var nameCell = $('<td>' + value.name + '</td>');
            var consumptionCell = $('<td>' + value.consumption + '</td>');
            var colorCell = $('<td>' + value.color + '</td>');
            var manufacturerCell = $('<td>' + value.manufacturer + '</td>');
            var availableCell = $('<td>' + value.available + '</td>');
            var yearCell = $('<td>' + value.year + '</td>');
            var horsepowerCell = $('<td>' + value.horsepower + '</td>');

            $(row).append(nameCell);
            $(row).append(consumptionCell);
            $(row).append(colorCell);
            $(row).append(manufacturerCell);
            $(row).append(availableCell);
            $(row).append(yearCell);
            $(row).append(horsepowerCell);
            $(table).append(row);
        });
        $('#content').append(table);
    }).error(function(data) {
        console.log(data);
    })

    })

}

//    $("button").click(function () {

        //   $("#banner").empty();
      // $("#banner").remove();
     //   $("#content").append("<p> Hozzáadott tartalom: ")
       //     $("#home").attr("href", "https://www.hvg.hu"); // nem működik
       // alert($("#home").attr("href"))
        //alert($("#banner").text());
  //      alert(document.getElementById("banner").inn......

  //  });

  /*  $("button").click(function () {
        $("#content").css( "color", "red").slideUp(2000).slideDown(2000);

    });
*/

 /*   $("button").click(function () {
        $("p").hide("slow", function () {
            alert("Eltűnt a paragrafus");
        });

    })
*/
  /*  $("button").click(function () {
        $("p").toggle();
    })*/
  /*  $("p").dblclick(function() {
        $(this).hide(1000);
    });
    */

  /*  $("p").click(function () { //paragrafusra kattintáskor ez a fv fusson le
        $(this).hide() // a html elem (itt a paragrafus, amire kattintottunk) tűnjön el
    })*/
//});