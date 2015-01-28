$(document).ready(function () {
  $('input[type="submit"]').on('click', function (event) {
    event.preventDefault();
    var new_content = $('#todo_content').val();
    $.ajax('/todos',
      {type: 'post',
      data: {
        todo: {
          content: new_content,
          completed: 'false'
        }
      }
    }).done(function(data){
        $('#todo_content').val('');
        var new_todo = '<li data-id="'+data.id+'">'+ data.content +' <span>X</span> </li>';
        $('ul').append(new_todo)
    }).fail(function(data){
      console.log("ERROR!! ")
    });
  });

  $('ul').on('click','span', function() {
    var id = $(this).parent().data('id')
    var url = '/todos/'+id;
    $.ajax(url, {type: 'delete'}).done(function(res){
      var li = $('li[data-id="'+ res.id +'"]');
      li.fadeOut(function(){
        li.remove();
      });
    });
  });
});
