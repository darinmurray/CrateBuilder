cleat_width = 45
cleat_thickness = 7 //Thickness of the wood

border_width = 1
border_allowance = 2 

default_height = 12*12
default_width = 24*12
default_depth = 24*12
//skids
default_skid_height = 45
default_skid_width = 45
default_skid_depth = default_depth
skid_color = "burlywood"
// handles
handle_depth = 20
handle_height = 50

// colors.   tan, burlywood, wheat
handle_border_color = "black"
handle_color = "tan"
border_color = "black"
plywood_color = "wheat" 
diminsional_wood_color = "tan"

opacity = 0.5   
// layout
gap_tween_drawings = 20


/* ============================================== */
/* =============== Generate SKIDS =============== */
/* ============================================== */
// general fill and stroke of skids
     $('#front_left_skid, #front_right_skid, #side_right_skid').css({
         background: skid_color,
         "border-color": border_color,
         "border-width": border_width,
         "border-style": "solid"   
     })
     // color of angled stroke on skids
     $('.cutCorner_1, .cutCorner_3').css({
         "border-bottom-color": border_color,
     })
     // Default HEIGHT and WIDTH on all skids
     $('#front_left_skid, #front_right_skid').css({
         height: default_skid_height,
         width: default_skid_width,
     })
     $('#side_right_skid').css({
         height: ((parseInt(default_skid_height)) +'px'), 
     })
 


// MAKE A FUNCTION TO CALCULATE RENDERING_CONTAINER BASED ON ALL INPUTS DEFAULT OR USER




/* ============================================== */
/* ================= hide CLEATS ================ */
/* ============================================== */
 //$('#front .cleat').toggle()
$('#front_top_cleat, #front_bottom_cleat').hide()

/* ============================================== */
/* ================= make basic crate CLEATS ================ */
/* ============================================== */
$('#side_top_cleat').hide()







/* ============================================== */
/* ========= CONTAINTERS and GENERAL ============ */
/* ============================================== */
$('#side_container').css('padding-left', gap_tween_drawings  )

$('.edge_h, .edge_v').css('border-color', border_color )

$('.handle').css('background-color', handle_color )
$('.handle').css('border-color', handle_border_color ) 

// $('.handle').css('display','none') 
$('.cleat').css('border-color', border_color ) 
$('.cleat').css('opacity', opacity ) 

$('.cleat').css('background-color', diminsional_wood_color ) 






/* ============================================== */
/* =============== default - T O P  ============== */
/* ============================================== */
//        // for WIDTH
//        $('#top_container').css('width', default_width+handle_depth*2+border_allowance) //==========
//        $('#top_container').css('height', default_depth+(cleat_thickness*2)+border_allowance*2) 
//        $('#top_container').css('margin-bottom', gap_tween_drawings  ) // this '*3' is just for extra room for adding top view cleets
//
//        $('#top').css('width', default_width-border_allowance)
//        // for DEPTH
//        $('#top').css('height', default_depth )
//        $('#top_left_handle, #top_right_handle').css('height', default_depth )
//
//            $('#top_back_left_cleat, #top_back_right_cleat, #top_front_left_cleat, #top_front_right_cleat').css({
//                'width': cleat_width,
//                'height': cleat_thickness,
//            })
//            $('#top_back_left_cleat, #top_back_right_cleat').css({
//                'margin-bottom': -border_width
//            })
//            $('#top_front_left_cleat, #top_front_right_cleat').css({
//                'margin-top': -border_width
//            })
//            
//            $('#top_back_left_cleat, #top_front_left_cleat').css({
//                'margin-left': handle_depth+border_width-cleat_thickness,
//            })
//            $('#top_back_right_cleat, #top_front_right_cleat').css({
//                'margin-right': handle_depth+border_width-cleat_thickness,
//            })
            


    // overall top HEIGHT is controlled by #top / Height
    $('#top_wrapper').css({
     width: default_width,
     });
    // overall top WIDTH is controlled by #top_wrapper / width
    $('#top').css({
     height: default_height,
     });

    $('.top_back_cleat_container').css({
    height: cleat_thickness,
    "margin-left": handle_depth-cleat_thickness,
    "margin-right": handle_depth-cleat_thickness,
    });
 
    $('.top_back_left_cleat, .top_back_right_cleat').css({
    width: cleat_width,
    });
 
    $('#top_left_handle, #top_right_handle').css({
    width: handle_depth,
    });
     $('.handle').css({
    "background-color": handle_color,
    });
    
    
    



// NOT DYNAMIC TO SIZE
        // handles - front
        $('#top_left_handle, #top_right_handle').css('width', handle_depth )
 //       $('#top').css('left',(handle_depth+border_width))
//        $('#top').css('border-color', border_color ) 
//        $('#top').css('background-color', plywood_color ) 





//            // CLEATS
//                $('#front_top_cleat').css('width',default_width) //hidden for basic crate
//                $('#front_top_cleat').css('height',cleat_width) //hidden for basic crate
//                $('#front_bottom_cleat').css('width',default_width)  //hidden for basic crate
//                $('#front_bottom_cleat').css('height',cleat_width)  //hidden for basic crate
//            // Use these for all four cleats
//            //$('#front_left_cleat').css('height',(default_height-(cleat_width*2) - border_allowance))
//            //$('#front_right_cleat').css('height',(default_height-(cleat_width*2) - border_allowance))
// 
//            // Use these for SIDE ONLY, basic crate cleats
//            $('#front_left_cleat, #front_right_cleat').css('height', default_height )
//            $('#front_left_cleat, #front_right_cleat').css('top', -border_width  )
//            $('#front_left_cleat').css('left',"-5px")
//            $('#front_right_cleat').css('right',"-5px")
//            $('#front_right_cleat, #front_left_cleat').css('z-index', 9999 )
//
//            $('#front_left_cleat').css('width', cleat_width)
//            $('#front_right_cleat').css('width', cleat_width)














/* ============================================== */
/* =============== default - FRONT ============== */
/* ============================================== */
$('#front_container').css('width',default_width+handle_depth+handle_depth+border_allowance) //==========
    // handles - front
    $('#front_left_handle, #front_right_handle').css('width', handle_depth )
    $('#front_left_handle, #front_right_handle').css('height', handle_height )
        // size
        $('#front').css('width',default_width-border_allowance)
        $('#front').css('height',default_height)
        $('#front').css('left',(handle_depth+border_width))
        $('#front').css('border-color', border_color ) 
            // CLEATS
                $('#front_top_cleat').css('width',default_width) //hidden for basic crate
                $('#front_top_cleat').css('height',cleat_width) //hidden for basic crate
                $('#front_bottom_cleat').css('width',default_width)  //hidden for basic crate
                $('#front_bottom_cleat').css('height',cleat_width)  //hidden for basic crate
            // Use these for all four cleats
            //$('#front_left_cleat').css('height',(default_height-(cleat_width*2) - border_allowance))
            //$('#front_right_cleat').css('height',(default_height-(cleat_width*2) - border_allowance))
 
            // Use these for SIDE ONLY, basic crate cleats
            $('#front_left_cleat, #front_right_cleat').css('height', default_height )
            $('#front_left_cleat, #front_right_cleat').css('top', -border_width  )
            $('#front_left_cleat').css('left',"-5px")
            $('#front_right_cleat').css('right',"-5px")
            $('#front_right_cleat, #front_left_cleat').css('z-index', 9999 )

            $('#front_left_cleat').css('width', cleat_width)
            $('#front_right_cleat').css('width', cleat_width)




/* ============================================== */
/* =============== default - SIDE ============== */
/* ============================================== */
$('#side').css('height',default_height)
$('#side').css('width',default_depth)
    // handles
    $('#side_handle').css('height', handle_height )
    // set position of handle relative to covering the underlying crate size
    $('#side_handle').css('width', default_depth )
    $('#side_handle').css('top', -border_width )
    $('#side_handle').css('left', -border_width )

        // CLEATS
        $('#side_top_cleat, #side_bottom_cleat').css('width',default_depth)
        $('#side_top_cleat, #side_bottom_cleat').css('height',cleat_width)
        // $('#side_bottom_cleat').css('width',default_depth)
        // $('#side_bottom_cleat').css('height',cleat_width)
            // hide bottom cleat for BASIC CRATE
            $('#side_bottom_cleat').hide() 
        $('#side_left_cleat, #side_right_cleat').css('width',cleat_width)
            // USE handle_height if Basic crate
        $('#side_left_cleat, #side_right_cleat').css('height',(default_height-handle_height) - border_width)
        $('#side_left_cleat, #side_right_cleat').css('top',handle_height)
 























/* user_height = parseInt(user_height)*12
user_width = parseInt(user_width)*12
user_depth = parseInt(user_depth)*12
 */
/* ============================================== */
/* ============ U S E R   I N P U T S =========== */
/* ============================================== */

/* ---------------------------------------------- */ 
/* ================= H E I G H T ================ */
/* ---------------------------------------------- */ 
$('#height').on('input',function(e){
    user_height = ( $('#height').val()*12 ) 
    $('#front, #side').css('height',user_height)
    // for all four cleats on front
    // MUSEUM CRATE - TOUR CRATE - SLAT CRATE
    // cleat_height = (user_height-(cleat_width*2) - border_allowance)
    // $('#front_left_cleat, #side_left_cleat').css('height', cleat_height)
    // $('#front_right_cleat, #side_right_cleat').css('height',cleat_height)
    
    // for two cleats and a handle on front
    // BASIC CRATE
    cleat_height = (user_height - border_allowance)   
        $('#front_left_cleat, #front_right_cleat').css('height', user_height )
        $('#front_left_cleat, #front_right_cleat').css('top', -border_width  )
    
        $('#side_left_cleat, #side_right_cleat').css('height',(user_height-handle_height) - border_width)
        // $('#front_right_skid, #front_left_skid, #side_right_skid').css('top',user_height+'px')
        $('#side_handle').css('top', "1-0px" )
    
//    expand_container( $('#height').val(), $('#length').val(), $('#depth').val() );
});




/* ---------------------------------------------- */ 
/* ================= L E N G T H ================ */
/* ---------------------------------------------- */ 
$('#length').on('input',function(e){
 user_width = parseInt( $('#length').val() )*12
    $('#front_container').css('width',user_width+handle_depth+handle_depth+border_allowance)
    $('#front').css('width',user_width-border_allowance)
    $('#front').css('left',handle_depth+border_width)
    $('#front_top_cleat').css('width',user_width)
    $('#front_top_cleat').css('height',cleat_width)
    $('#front_bottom_cleat').css('width',user_width)
    
        // for TOP drawing
        $('#top_container').css('width', user_width+handle_depth*2+border_allowance) //==========
        $('#top').css('width', user_width-border_allowance)


});



/* ---------------------------------------------- */ 
/* ================== D E P T H ================= */
/* ---------------------------------------------- */ 
$('#depth').on('input',function(e){
    // alert('Changed!')
    user_depth = $('#depth').val()*12
    $('#side').css('height',user_height)
    $('#side').css('width',user_depth)
    $('#side_top_cleat').css('width',user_depth)
    $('#side_top_cleat').css('height',cleat_width)
    $('#side_bottom_cleat').css('width',user_depth)
    $('#side_bottom_cleat').css('height',cleat_width)
    //handle
    $('#side_handle').css('width', user_depth )
    // makes skids based on radio button checked at the time of 'depth' change
    make_skids( $('input[name="skids"]:checked').val() ); 
 //   $('#side_right_skid').css("top", user_height ) // I don't know why this has to be reitterated here.
 
 
    // for DEPTH
    $('#top_container').css('height', user_depth+gap_tween_drawings+cleat_thickness*2+border_allowance*2) 


    $('#top').css('height', user_depth )
    $('#top_left_handle, #top_right_handle').css('height', user_depth )
 
       
});// end of DEPTH input change





// ======== CRATE TYPE input
// $('select[name="crate_type"]').change(function(){
//     switch ( $(this).val() ) {
//     case "basic_flat_ride":
//         $('input[type=radio][name="skids"][value="4x4"]').attr('checked', true);
//             //$('.skid_container').show()
//                 $('#showme').text( $(this).val() + $('input[name="skids"]:checked').val() )
//         //make_skids( $('input[name="skids"]:checked').val() );// passes radio button value to the function
//     break;
//     
// case "basic_edge_ride":
//         $('input[type=radio][name="skids"][value="2x4"]').attr('checked', true);
//                 //$('.skid_container').show()
//                 $('#showme').text( $(this).val() + $('input[name="skids"]:checked').val() )
//         //make_skids( $('input[name="skids"]:checked').val() );// passes radio button value to the function
//     break;
//     
// case "travel_frame":
//         $('input[type=radio][name="skids"][value="none"]').attr('checked', true);
//             //$('.skid_container').hide()
//                 $('#showme').text( $(this).val() + $('input[name="skids"]:checked').val() )
//     break;
//     
// case "slat_crate":
//         $('input[type=radio][name="skids"][value="4x4"]').attr('checked', true); // not working
//                 //$('.skid_container').show()
//                     $('#showme').text( $(this).val() + $('input[name="skids"]:checked').val() )
//         //make_skids( $('input[name="skids"]:checked').val() );// passes radio button value to the function
//                     //$('#showme').append( " Showing 4x4? " )
//     break;
// }
// });








/* ============================================== */
/* =============== USER NPUT S K I D S ============== */
/* ============================================== */


// ======== SKID TYPE input
$('input[type=radio][name="skids"]').change(function() {
    // alert( $('input[name="skids"]:checked').val() ); // only works before the function call
    $('#showme').text( $('input[name="skids"]:checked').val() )
    skid_selection = $('input[name="skids"]:checked').val();
    make_skids( skid_selection );
    // nothign works after the 'make skids' function call. Look into 'e.preventDefault();' for this
    // meanwhile, put other actions before the function
});




// ======== Generate appropriate skids based on user input as it changes
// ======== "someParam" is the skid size choice from the radio buttons 
function make_skids(someParam) {    
    //alert( $('input[name=skids]:checked').val() +" is selected")      
    if (someParam == '2x4') {
        $('.skid_container').show() 
        $('#front_left_skid, #front_right_skid, #side_right_skid').css( 'height', default_skid_height/2 )
        $('#front_left_skid, #front_right_skid').css( 'width', default_skid_width*2 )
            $('#showme_2').text( $('input[name="skids"]:checked').val() )      
    }
    else if (someParam == '4x4') {
        // alert("Big Skids");
        $('.skid_container').show()
        $('#front_left_skid, #front_right_skid, #side_right_skid').css( 'height', default_skid_height )
        $('#front_left_skid, #front_right_skid').css( 'width', default_skid_width)
            $('#showme_2').text( $('input[name="skids"]:checked').val() ) 
    }
    else if (someParam == 'none') {
        $('.skid_container').hide()
            $('#showme_2').text( $('input[name="skids"]:checked').val() )
    };
    
} // END of FUNCTION














/* ============================================== */
/* ============= SAMPLE / TEST CODE ============= */
/* ============================================== */


// simple function sample code based upon crate type drop down menu
function doSomething(someParam) {
    alert("Result: " + someParam);
}

$('select[name="crate_type"]').change(function() {
    // doSomething( $(this).val() );// the value passed to the doSomething function 'someParam'
});











// NO LONGER NEEDED. 
//     function expand_container(height,width,depth) {
//      //alert("first " + height, width, depth);
//         if ( height == ""){
//             // alert( "width= "+width )
//             current_height = default_height
//         } else {
//             // alert( $('#depth').val() );
//             current_height = height*12
//         }    
//             if ( width == ""){
//                 // alert( "width= "+width )
//                 current_width = default_width
//             } else {
//                 // alert( $('#depth').val() );
//                 current_width = width*12
//             } 
//                 if ( depth == ""){
//                     // alert( "width= "+width )
//                     current_depth = default_depth
//                 } else {
//                     // alert( $('#depth').val() );
//                     current_depth = depth*12
//                 } 
//      
//                 // if outside cleats on top view {
//                 //     cleat_thickness = cleat_thickness
//                 //     } else {
//                 //         cleat_thickness = 0
//                 //     }
//         
//     // $('#front_container').css('width',default_width+handle_depth+handle_depth) //==========
//         new_height = parseInt(current_height)+parseInt(default_skid_height)+parseInt(border_allowance)+parseInt(current_depth)+parseInt(gap_tween_drawings)+(parseInt(cleat_thickness)*2)    
//         $('#rendering_container').css('height', new_height) 
//         new_width = parseInt(current_width)+parseInt(current_depth)+parseInt(handle_depth)+parseInt(gap_tween_drawings)+parseInt(handle_depth)+(parseInt(border_allowance)*2)
//         $('#rendering_container').css('width', new_width) 
//         $('#rendering_container').css('border-color', 'gray') 
//         
//     } // end of function


