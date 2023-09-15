$(".quick a").on("click", function () {
  $(this).parents(".quick").find("a").removeClass("active");
  $(this).addClass("active");
});
$(".index-contents .block:nth-child(even)").addClass("reverse_block");
$(".index-contents .block:nth-child(odd)").addClass("trigger_block");
