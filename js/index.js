/* ============================================== */
/* =============== Generate SKIDS =============== */
/* ============================================== */

inch = 10; //enlarges the number to reasonable pixel size
// default size
default_height = 2.5 * inch;
default_width = 15 * inch;
default_depth = 15 * inch;
// cleats
cleat_width = 1.5 * inch; // was 3.5
// the JS does not calculate well if you scale cleat)Thickness
// fix this
cleat_thickness = inch * 1.5; //Thickness of the wood /* SHOUDL BE CREATED/RENAMED AS two_by_thickness */
//skids
default_skid_height = 3.5 * inch;
default_skid_width = 3.5 * inch;
default_skid_depth = default_depth;
skid_color = "burlywood";
skid_angle_color = "tan";
// handles
handle_width = 1.5 * inch;
handle_height = 3.5 * inch;
horizontal_2_x_edge = 1.5 * inch; // is this ever used??????
vertical_2_x_edge = 1.5 * inch; // is this ever used??????
min_handle_height = 20 * inch; // imperative floor height

border_width = 1;
border_allowance = 2;

top_insulation_thickness = 0.5;
bottom_insulation_thickness = parseFloat($("#bottom_insulation").val());
side_wall_insulation_thickness = parseFloat($("#side_wall_insulation").val());
plywood_thickness = parseFloat($("#plywood_thickness").val());
void_insulation_thickness = 0.5;

// ============================================== //
//    set the begining crate to default sizes     //
// ============================================== //

$("#side_wrapper .container_row, #front_wrapper .container_row").css({
  height: default_height,
});
// for front and top (width)
$(
  "#top_wrapper .top_wrapper, #front_wrapper .container_row, .skid_ends_container"
).css({ width: default_width });

// ===== D E F A U L T   F R O N T wrapper ======?
$("#front_wrapper .horizontal_side_wall").css({
  height: (default_height * inch) / 12,
});

$("#front_wrapper .container_column").css({ width: default_width });

$(".plywood_edge_grain").css({
  height: plywood_thickness * inch,
});

// for top and side (depth) !!
$("#top_wrapper .container_row").css({ height: default_depth });
$("#side_wrapper .container_row").css({ width: default_depth });

$(".skid_side").css({
  height: default_skid_height,
  width: default_depth,
});
$(".skid_end").css({
  // "margin-left": handle_width - cleat_thickness,
  // "margin-right": handle_width - cleat_thickness,
  height: default_skid_height,
  width: default_skid_width,
});

$(".horizontal_2_x_edge").css({
  height: horizontal_2_x_edge,
});
$(".vertical_2_x_edge").css({
  width: vertical_2_x_edge,
});
// these make the angles from default values
// calculat and make CSS the same values to work without JS
// DEFAULT SKIDS FOR 4X4
$(".cutCorner_1").css({
  "border-bottom-width": default_skid_height / 2,
  "border-bottom-style": "solid",
  "border-bottom-color": skid_angle_color,
  "border-right-width": default_skid_height / 2,
  "border-right-style": "solid",
  "border-right-color": "transparent",
});
$(".cutCorner_2").css({
  "border-bottom-width": default_skid_height / 2,
  "border-bottom-style": "solid",
  "border-bottom-color": "white",
  "border-right-width": default_skid_height / 2,
  "border-right-style": "solid",
  "border-right-color": "transparent",
});
$(".cutCorner_3").css({
  "border-bottom-width": default_skid_height / 2,
  "border-bottom-style": "solid",
  "border-bottom-color": skid_angle_color,
  "border-left-width": default_skid_height / 2,
  "border-left-styl": "solid",
  "border-left-colo": "transparent",
});

$(".cutCorner_4").css({
  "border-bottom-width": default_skid_height / 2,
  "border-bottom-style": "solid",
  "border-bottom-color": "white",
  "border-left-width": default_skid_height / 2,
  "border-left-style": "solid",
  "border-left-color": "transparent",
});

function updateTable() {
  // ====  P U B L I S H E D  D I M S  ==== //
  // Calculate the final height from floor
  final_height_OD = parseFloat(
    parseInt($("#height").val()) +
      top_insulation_thickness +
      bottom_insulation_thickness +
      plywood_thickness * 2 +
      default_skid_height / inch
  );

  // Update final crate dims based on DEPTH input
  // For final crate OD
  final_depth_OD = parseFloat(
    user_depth / 12 + side_wall_insulation_thickness * 2 + 3 // two by four thickness times 2
  );
  // For 2 x cut length side wall
  final_depth_ID = parseFloat(
    user_depth / 12 + side_wall_insulation_thickness * 2
  );

  // For cinal crate OD
  final_width_OD = parseFloat(
    user_width / 12 + side_wall_insulation_thickness * 2 + 3 // two by four thickness times 2
  );

  // ====  M A T E R I A L S  T A B L E  ==== //
  // Update materials table
  // Length
  $("#two_by_length .tableCell.m").text(side_wall_material + " Ends");
  $("#two_by_length .tableCell.q").text("2");
  $("#two_by_length .tableCell.l").text(final_width_OD);
  // Width
  $("#two_by_width .tableCell.m").text(side_wall_material + " Sides");
  $("#two_by_width .tableCell.q").text("2");
  $("#two_by_width .tableCell.l").text(final_depth_ID);
  // Plywood size
  $("#plwyood_top .tableCell.m").text("1/2 inch Chip Board");
  $("#plwyood_top .tableCell.q").text("2");
  $("#plwyood_top .tableCell.l").text(final_width_OD);
  $("#plwyood_top .tableCell.w").text(final_depth_OD);
  // Sidwall insulation
  $("#sidewall_insulation_length .tableCell.m").text("Side Wall Insulation");
  $("#sidewall_insulation_length .tableCell.q").text("1");
  let sidewall_insulation_perimiter;
  sidewall_insulation_perimiter = (user_depth / 12) * 2 + (user_width / 12) * 2;
  $("#sidewall_insulation_length .tableCell.l").text(
    sidewall_insulation_perimiter
  );
  $("#sidewall_insulation_length .tableCell.w").text(user_height);

  // Update final OD dims
  $("#final_width_OD").text(final_width_OD + " in");
  $("#final_depth_OD").text(final_depth_OD + " in");
}

function updateRednering() {
  // Update the rendering
  $("#front_wrapper .container_column .horizontal_side_wall").css({
    height: user_height * inch,
  });

  $("#front_wrapper .container_column").css({ width: user_width });

  // Update rendering based on WIDTH input
  $("#top_wrapper  .top_wrapper").css({
    width: user_width,
  });

  $("#top_wrapper .container_row").css({ height: user_depth });
  // $("#side_wrapper .container, .skid_side").css({ width: user_depth });
  $("#side_wrapper .side_wrapper .container_row, #side_wrapper .skid_side").css(
    {
      width: user_depth,
    }
  );

  $(".skid_ends_container").css({
    width: user_width,
  });
}

/* ================= select all on focus ================ */
function selectInputContents() {
  // Get the input element
  let heightInput = document.getElementById("height");

  // Select the contents of the input
  heightInput.select();
}

/* ================= HEIGHT input ================ */
// it would be more DRY to make each of these a function
// and call that function in the 'on input' below
// or, rather make a single function that does it all
/* ================= HEIGHT input ================ */
/* ================= HEIGHT input ================ */
/* ================= HEIGHT input ================ */
/* ================= HEIGHT input ================ */
/* ================= HEIGHT input ================ */
/* ================= HEIGHT input ================ */
/* ================= HEIGHT input ================ */
/* ================= HEIGHT input ================ */
/* ================= HEIGHT input ================ */
/* ================= HEIGHT input ================ */
/* ================= HEIGHT input ================ */
// let crate_style = "nothing yet";
// console.log("BEGINNING crate_style = " + crate_style);
let user_height;
let side_wall_material;
let final_height_OD;
$("#height").on("blur", function (e) {
  let maxAllowedHeight = 4.25; // Set the maximum allowed height
  let rawHeightInput = parseFloat($("#height").val());

  // Calculate user_height based on the parsed input
  user_height = Math.min(rawHeightInput, maxAllowedHeight);

  // Check the value and adjust user_height accordingly
  if (rawHeightInput >= 0 && rawHeightInput <= 2.25) {
    user_height = 2.5;
    side_wall_material = "2 x 4";
  } else if (rawHeightInput > 2.25 && rawHeightInput <= 4.25) {
    user_height = 4.5;
    side_wall_material = "2 x 6";
  } else if (rawHeightInput > 4.25) {
    alert('The max product height is 4.25" for a One-Way Shipper.');
    user_height = 4.5;
    side_wall_material = "2 x 6";
  }
  // Update the input field with the calculated user_height
  $("#height").val(user_height.toFixed(2));

  updateRednering();
  updateTable();
});

/* ================= Width input ================ */
/* ================= Width input ================ */
/* ================= Width input ================ */
let user_width;
let final_width_OD;
$("#width").on("blur", function (e) {
  user_width = parseInt($("#width").val()) * 12;
  updateRednering();
  updateTable();
});

/* ================= DEPTH input ================ */
/* ================= DEPTH input ================ */
/* ================= DEPTH input ================ */
let user_depth;
let final_depth_ID;
let final_depth_OD;
$("#depth").on("blur", function (e) {
  user_depth = parseInt($("#depth").val()) * 12;
  if (user_depth > 108) {
    // waiting for second digit, less jumpy
    // alert("Depth greather than 108");
    // $("#top_wrapper .container").css({ height: user_depth });
    // $("#side_wrapper .container, .skid_side").css({ width: user_depth });

    // scall form drawing to hit max width if greater than form width
    // positioning here is shit. Fix this
    scale_to = 600 / user_depth;
    if (user_depth > 264) {
      // alert("Depth greather than 264");
      $("#rendering_container").css({
        transform: "scale(" + scale_to + ")",
        "transform-origin": "top center",
      });
      // experimental only
      $("#rendering_container").css({
        border: "1px solid green",
        //  "max-width": "1200px",
        //  "margin-left" : "20px"
        //    "display" :" block"
      });
      // } else if ( user_depth <= 264 ) {
      //   $('#rendering_container').css({
      //     transform: "scale(1)",
      //     "transform-origin": "top center",
      //     "display" :" inline-block"
      //   });
      //
    }
  } // first if statement

  updateRednering();
  updateTable();
});

// select all contents of Height input box on page load
// Not working, fix later
window.onload = function () {
  selectInputContents();
};

// codepen for scaling to viewport
// https://codepen.io/edwardpayton/pen/pjyogj

// REVISIT THIS LATER *+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+
// // $(window).height();
// // $(window).width();
// $(window).on('resize', function(){
//   // OK, this should be a percentage of window IF crate is x size and viewport is small, etc...
//     var win = $(this); //this = window
//     scale_to = win.width()/800 //0.5 //(win.width);
// //     if (win.height() >= 320) { $('#rendering_container').css({ border: "3px solid blue" });}
// //     if (win.width() >= 400) { $('#rendering_container').css({ transform: "scale("+scale_to+")", "transform-origin": "top center" }); }
// $('#rendering_container').css({ transform: "scale("+scale_to+")", "transform-origin": "top center" });
// });
// REVISIT THIS LATER *+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+
