const submitBtn = $('#addCategoryBtn');


function saveCategory(){
    let categoryName = $('#categoryName').val();
    let categoryDesc = $('#categoryDesc').val();

    $.ajax({
        url:"http://localhost:8080/blog/saveCategory",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            "categoryName":categoryName,
            "categoryDesc":categoryDesc
        }),
        success:function(result){
            console.log(result);
        },
        error:function(result){
            console.log(result);
        }
        
    })
}

submitBtn.on('click',function(event) {
    event.preventDefault();
    saveCategory();
})