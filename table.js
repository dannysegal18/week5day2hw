
    $(document).ready(function() {
        // Sample JSON data
        var jsonData = {
            "title": "Calories Comparison of Popular Burgers",
            "heading": "Type",
            "head1": "BigMac",
            "head2": "Whopper",
            "head3": "Dave's Double",
            "head4": "Whataburger",
            "subheadcal": "Calories",
            "cal1": "563",
            "cal2": "677",
            "cal3": "870",
            "cal4": "590",
            "subheadfat": "Fat",
            "fat1": "30g",
            "fat2": "40g",
            "fat3": "51g",
            "fat4": "25g",
            "subheadven": "Vendor",
            "ven1": "MacD",
            "ven2": "Burger King",
            "ven3": "Wendys",
            "ven4": "Whataburger"
        };

        // Populate the table with JSON data
        $("#burgerTable caption").text(jsonData.title);
        $("#head1").text(jsonData.head1);
        $("#head2").text(jsonData.head2);
        $("#head3").text(jsonData.head3);
        $("#head4").text(jsonData.head4);
        $("#cal1").text(jsonData.cal1);
        $("#cal2").text(jsonData.cal2);
        $("#cal3").text(jsonData.cal3);
        $("#cal4").text(jsonData.cal4);
        $("#fat1").text(jsonData.fat1);
        $("#fat2").text(jsonData.fat2);
        $("#fat3").text(jsonData.fat3);
        $("#fat4").text(jsonData.fat4);
        $("#ven1").text(jsonData.ven1);
        $("#ven2").text(jsonData.ven2);
        $("#ven3").text(jsonData.ven3);
        $("#ven4").text(jsonData.ven4);
    });
