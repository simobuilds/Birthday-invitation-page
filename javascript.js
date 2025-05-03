        $(document).ready(function(){
            $(".card").fadeIn(1000);

            $("#rsvpButton").click(function(){
                var guestName = prompt("You are invited to Jasmine's birthday party! What is your name?");
                if (guestName && guestName.trim() !== "") {
                    $("#guestList").append(`<li class="list-group-item">${guestName.trim()}</li>`);
                }
            });
        });
