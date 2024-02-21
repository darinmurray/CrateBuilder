$("#two_by_length .tableCell.m").text(side_wall_material + " Ends");
$("#two_by_length .tableCell.q").text("2");
$("#two_by_length .tableCell.l").text(final_width_OD);
$("#two_by_length .tableCell.w").text("--");

$("#two_by_width .tableCell.m").text(side_wall_material + " Sides");
$("#two_by_width .tableCell.q").text("2");
$("#two_by_width .tableCell.l").text(final_width_OD);
$("#two_by_width .tableCell.w").text("--");
// Update materials list based on DEPTH input

// Update plywood size
$("#plwyood_top .tableCell.m").text("1/2 inch Chip Board");
$("#plwyood_top .tableCell.q").text("2");
$("#plwyood_top .tableCell.l").text(final_width_OD);
$("#plwyood_top .tableCell.w").text(final_depth_OD);

$("#sidewall_insulation_length .tableCell.m").text("Side Wall Insulation");
$("#sidewall_insulation_length .tableCell.q").text("1");
let sidewall_insulation_perimiter;
sidewall_insulation_perimiter = (user_depth / 12) * 2 + (user_width / 12) * 2;
$("#sidewall_insulation_length .tableCell.l").text(
  sidewall_insulation_perimiter
);
$("#sidewall_insulation_length .tableCell.w").text(user_height);

// Update final crate dims based on HEIGHT input
$("#final_height_OD").text(final_height_OD);
$("#final_width_OD").text(final_width_OD);
$("#final_depth_OD").text(final_depth_OD);
