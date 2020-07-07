
//checks off item
$(".list").on("click", ".entry", (function(){
	$(this).toggleClass("completed");
}));

//click on X to delete item
$(".list").on("click", ".delete", (function(event){
	$(this).parent().fadeOut(100, function(){
		$(this).remove();
	});
	//stops it responding to clicks on other parts of it like the li, ul, container, etc.
	event.stopPropagation();
}));

//creates event to listen for when enter pressed in input
$("input[type='text']").keypress(function(event){
		if(event.which === 13){
			//grabbing new todo from input
			let newTodo = $(this).val();
			//create new li and add to ul
			$(this).val("");
			$(".list").prepend("<div class='entry'><div class='delete'><i class='far fa-trash-alt'></i></div><div class='tasktext'>" + newTodo + "</div></div>");
			trash();
		}
});

//toggles add new todo
$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle(50);
})


//makes trash same height as new line
let trash = () => {
	let entryHeight = $(".entry").first().css("height");
	$(".delete").first().css("lineHeight", entryHeight);
} 


//pink theme
$("#pink").click(function(){
	$("h1").css("backgroundColor", "white");
	$("h1").css("color", "#493240");
	$("input[type='text']").focus(function(){
		$(this).css("border", "3px solid #493240")
	});
	$("input[type='text']").css("color", "#493240");
	$("body").css("background", "linear-gradient(to right, #493240, #FF0099)");
	$(this).toggleClass("selectedTheme");
	$("#color-picker .theme.selectedTheme").not(this).removeClass("selectedTheme");
});

//original theme
$("#original").click(function(){
	$("h1").css("backgroundColor", "#2980b9");
	$("h1").css("color", "white");
	$("body").css("background", "linear-gradient(to right, #92FE9D, #00C9FF)");
	$("input[type='text']").focus(function(){
		$(this).css("border", "3px solid #2980b9")
	});
	$("input[type='text']").css("color", "#2980b9");
	$(this).toggleClass("selectedTheme");
	$("#color-picker .theme.selectedTheme").not(this).removeClass("selectedTheme");
});

//sunshine theme
$("#sunshine").click(function(){
	$("h1").css("backgroundColor", "#6e1815");
	$("h1").css("color", "white");
	$("input[type='text']").focus(function(){
		$(this).css("border", "3px solid #6e1815")
	});
	$("input[type='text']").css("color", "#6e1815");
	$("body").css("background", "linear-gradient(to right, #b92b27, #1565c0)");
	$(this).toggleClass("selectedTheme");
	$("#color-picker .theme.selectedTheme").not(this).removeClass("selectedTheme");
});

//orange theme
$("#orange").click(function(){
	$("h1").css("backgroundColor", "white");
	$("h1").css("color", "#FF0080");
	$("input[type='text']").focus(function(){
		$(this).css("border", "3px solid #FF0080")
	});
	$("input[type='text']").css("color", "#FF0080");
	$("body").css("background", "linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)");
	$(this).toggleClass("selectedTheme");
	$("#color-picker .theme.selectedTheme").not(this).removeClass("selectedTheme");
});


//mint theme
$("#mint").click(function(){
	$("h1").css("backgroundColor", "white");
	$("h1").css("color", "#4AC29A");
	$("input[type='text']").focus(function(){
		$(this).css("border", "3px solid #4AC29A")
	});
	$("input[type='text']").css("color", "#4AC29A");
	$("body").css("background", "linear-gradient(to right, #4ac29a, #bdfff3)");
	$(this).toggleClass("selectedTheme");
	$("#color-picker .theme.selectedTheme").not(this).removeClass("selectedTheme");
});

//purple theme
$("#purple").click(function(){
	$("h1").css("backgroundColor", "#49008a");
	$("h1").css("color", "white");
	$("input[type='text']").focus(function(){
		$(this).css("border", "3px solid #49008a")
	});
	$("input[type='text']").css("color", "#49008a");
	$("body").css("background", "linear-gradient(to right, #da22ff, #9733ee)");
	$(this).toggleClass("selectedTheme");
	$("#color-picker .theme.selectedTheme").not(this).removeClass("selectedTheme");
});
