let textTitle = $('#textTitle').val();
let writerName = $('#name').val();
let content = $('#text').val();


$(document).on('click', '#textSubmit', function (e) {

    let formData = new FormData();
    formData.apeend("textTiltle", textTitle);
    formData.append("textName", textName);
    formData.append("text", text);
   
    $.ajax({
        url: 'contentData.jsp',
        data: formData,
        type: "POST",
        success: function (res) {
            alert('작성 완료')
            location.href='./main.html';
        }
    })
});

// function getJSON() {
//     $.ajax({
//         type: "get",
//         url: "data.json",
//         dataType: "json",
//         success: function (data) {
//             str = '<TR>';
//             $.each(data, function(i){
//                 str += '<TD>' + data[i].no + '</TD><TD>' + data[i].name +
//                 '</TD><TD>' + data[i].title + '</TD><TD>' + data[i].date + '</TD>';
//                 str += '</TR>'
//                 });
//             $('.table_body').append(str);
//         },
//         errror:function(){
//             console.log('통신에러');
//         }
//     })
// }

// function getData() {
    
// }