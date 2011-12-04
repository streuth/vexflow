/**
 * VexFlow - Basic Tests
 * Copyright Mohit Muthanna 2010 <mohit@muthanna.com>
 */

Vex.Flow.Test.Tuple = {}

Vex.Flow.Test.Tuple.Start = function () {
  module("Stave");
  Vex.Flow.Test.runTest("Tuple Test (Canvas)",
    Vex.Flow.Test.Tuple.drawMultipleMeasures);
}

Vex.Flow.Test.Tuple.drawMultipleMeasures = function (options, contextBuilder) {
  // Get the rendering context
  var ctx = contextBuilder(options.canvas_sel, 550, 200);

  // bar 1
//  var staveBar1 = new Vex.Flow.Stave(10, 50, 200);
//  staveBar1.setBegBarType(Vex.Flow.Barline.type.REPEAT_BEGIN);
//  staveBar1.setEndBarType(Vex.Flow.Barline.type.SINGLE);
//  staveBar1.setSection("A", 0);
//  staveBar1.addClef("treble").setContext(ctx).draw();
//  var notesBar1 = [
//    new Vex.Flow.StaveNote({ keys:["c/4"], duration:"q" }),
//    new Vex.Flow.StaveNote({ keys:["d/4"], duration:"q" }),
//    new Vex.Flow.StaveNote({ keys:["b/4"], duration:"qr" }),
//    new Vex.Flow.StaveNote({ keys:["c/4", "e/4", "g/4"], duration:"q" })
//  ];
//
//  // Helper function to justify and draw a 4/4 voice
//  Vex.Flow.Formatter.FormatAndDraw(ctx, staveBar1, notesBar1);


  // bar 2 - juxtaposing second bar next to first bar
//  var staveBar2 = new Vex.Flow.Stave(staveBar1.width + staveBar1.x, staveBar1.y, 300);
  var staveBar2 = new Vex.Flow.Stave(10, 50, 200);
//  staveBar2.setSection("B", 0);
//  staveBar2.setEndBarType(Vex.Flow.Barline.type.END);
  staveBar2.setContext(ctx).draw();

  var notesBar2_part1 = [
//    new Vex.Flow.StaveNote({ keys:["c/4"], duration:"8" }),
//    new Vex.Flow.StaveNote({ keys:["d/4"], duration:"8" }),
//    new Vex.Flow.StaveNote({ keys:["g/4"], duration:"8" }),
//    new Vex.Flow.StaveNote({ keys:["e/4"], duration:"8" })
     new Vex.Flow.StaveNote({ keys:["e/4"], duration:"h" })

  ];

  var notesBar2_part2 = [
    new Vex.Flow.StaveNote({ keys:["c/4"], duration:"8" }),
    new Vex.Flow.StaveNote({ keys:["d/4"], duration:"16" }),
    new Vex.Flow.StaveNote({ keys:["d/4"], duration:"16" }),
//    new Vex.Flow.StaveNote({ keys:["e/4"], duration:"h" })
  ];
  var notesBar2_part3 = [
//    new Vex.Flow.StaveNote({ keys:["c/4"], duration:"8" }),
//    new Vex.Flow.StaveNote({ keys:["d/4"], duration:"8" }),
    new Vex.Flow.StaveNote({ keys:["g/4"], duration:"8t" }),
    new Vex.Flow.StaveNote({ keys:["e/4"], duration:"8t" }),
    new Vex.Flow.StaveNote({ keys:["e/4"], duration:"8t" })
  ];

  // create the beams for 8th notes in 2nd measure
//  var beam1 = new Vex.Flow.Beam(notesBar2_part1);
  var beam2 = new Vex.Flow.Beam(notesBar2_part2);
  var beam3 = new Vex.Flow.Beam(notesBar2_part3);
  var notesBar2 = notesBar2_part1.concat(notesBar2_part2).concat(notesBar2_part3);

  // Helper function to justify and draw a 4/4 voice
  Vex.Flow.Formatter.FormatAndDraw(ctx, staveBar2, notesBar2);

  console.log("8d:" + Vex.Flow.durationToTicks["8d"]);
  console.log("8t:" + Vex.Flow.durationToTicks["8t"]);
  console.log("16d:" + Vex.Flow.durationToTicks["16d"]);
  console.log("32d:" + Vex.Flow.durationToTicks["32d"]);

  // Render beams
//  beam1.setContext(ctx).draw();
  beam2.setContext(ctx).draw();
  beam3.setContext(ctx).draw();
}
