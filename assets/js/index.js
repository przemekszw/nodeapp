
$("#add_user").submit((event)=>(alert("User updated successfully!")))

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array,function(n,i){
        data[n['name']] = n['value']
    })
    
    
    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert('Data Updated Successfully!')
        console.log(data)
    })

})

if(window.location.pathname =='/home'){
    $ondelete = $('.table tbody td a.delete')
    $ondelete.click(function(){
        var id = $(this).attr('data-id')
        var request = {
            'url':`http://localhost:3000/api/users/${id}`,
            'method': 'DELETE'
        }

        if(confirm('Delete this record?')){
            $.ajax(request).done((response)=>{
                alert('Data Deleted Successfully!')
                location.reload()
            })

        }
    })
}