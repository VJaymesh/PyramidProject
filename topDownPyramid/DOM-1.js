$(function() {
    //    let master = function(base, char) {

    let topDownPyramid = function() {

        let base_num = $('#baseValue').val();
        //alert(  $('#baseValue').val());
        //alert( $('#char').val() );
        let hsMaster = 1, bMaster = base_num/2;

        if ((base_num % 2) === 0) {
            $('#ansSection').empty("Empty");
            for (r = 0; r <= bMaster; r++) {
alert(hsMaster);
              //$('#ansSection').append(base_num);//\u00A0
                for (h = hsMaster; h < base_num ; h*=2) {  //4-1=3{1} //4-1=3{3}
                    $('#ansSection').append("\u00A0");
                }

                  for (let s = 1; s <= hsMaster ; s++) {
                      $('#ansSection').append($('#char').val());
                  }
                //if (star === 0) $('#ansSection').append($('#char').val()); // document.write("*");
                $('#ansSection').append('<br>');
                hsMaster*=2;
            }
        } else {
            $('#ansSection').html("Please, enter even number");

        }
    }; // end of function

    //  $('#baseValue').change(topDownPyramid);
    //  $('#char').change(topDownPyramid);

    $('input').change(topDownPyramid);

}); // end of onLoad function









// $(function() {
//     let topDownPyramid = function() {
//         let base = 8;
//         let base_num = Math.round(base / 2);
//         //console.log(base_num);
//         for (r = 0; r <= base_num; r++) {
//             for (c = 0; c <= base_num - (r + 1); c++) {
//                 document.write("\u00A0");
//             }
//             let star = 0;
//             for (; star < (r * 2); star++) {
//                 document.write("*");
//             }
//             if (star == 0) document.write("*");
//             document.write("<br>");
//         }
//     }
// });
