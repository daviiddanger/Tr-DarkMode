$("input[type='checkbox']").change(
    function(){
        if($(this).is(":checked")){
            $(this).parent().addClass("lightUI");
        }else{
            $(this).parent().removeClass("lightUI");
        }
    });