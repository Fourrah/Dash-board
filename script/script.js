// const textTitle = $('.textTitle').val();
// const textName = $('.textName').val();
// const content = $('.text').val();


// function checkContent () {
//     if(textTitle === "") {
//         alert('제목을 입력해주세요');
//     }

//     if(textName==="") {
//         alert('이름을 입력해주세요');
//     }

//     if(content === "") {
//         alert('내용을 입력해주세요')
//     }
// }

// $(document).on('click', '#textSubmit', function (e) {

//     checkContent();

//     let formData = new FormData();
//     formData.apeend("textTiltle", textTitle);
//     formData.append("textName", textName);
//     formData.append("text", text);
   
//     $.ajax({
//         url: 'contentData.jsp',
//         data: formData,
//         type: "POST",
//         success: function (res) {
//             alert('작성 완료')
//             location.href='./main.html';
//         }
//     })
// });

function getJSON() {
    $.ajax({
        type: "get",
        url: "data.json",
        dataType: "json",
        success: function (data) {
            str = '<TR>';
            $.each(data, function(i){
                str += '<TD>' + data[i].no + '</TD><TD>' + data[i].name +
                '</TD><TD>' + data[i].title + '</TD><TD>' + data[i].date + '</TD>';
                str += '</TR>'
                });
            $('.table_body').append(str);
        },
        errror:function(){
            console.log('통신에러');
        }
    })
}