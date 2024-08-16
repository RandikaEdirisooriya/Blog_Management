const submitBtn = $('#addCategoryBtn');
const cancelBtn = $('#cancelBtn');

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
            clear();
        },
        error:function(result){
            console.log(result);
        }
        
    })
}

function clear(){
     $('#categoryName').val('');
     $('#categoryDesc').val('');
}

submitBtn.on('click',function(event) {
    event.preventDefault();
    saveCategory();
});

cancelBtn.on('click',function(event){
    clear();
})