/**
 * Created by JetBrains RubyMine.
 * User: streuth
 * Date: 9/24/11
 * Time: 12:18 PM
 * To change this template use File | Settings | File Templates.
 */

function drawMyVexFlowStave() {
    var canvas = document.getElementById("myCanvas");



     var renderer = new Vex.Flow.Renderer(canvas,
             Vex.Flow.Renderer.Backends.CANVAS);

     var ctx = renderer.getContext();
     var stave = new Vex.Flow.Stave(10, 0, 500);
     stave.addClef("treble").setContext(ctx).draw();

     canvas.onmousedown = function(e) {
         var x = e.clientX;
         var y = e.clientY;
         Vex.drawDot(ctx, x, y);
     }

     // Create the notes
     var notes = [
         // A quarter-note C.
         new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "q" }),

         // A quarter-note D.
         new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),

         // A quarter-note rest. Note that the key (b/4) specifies the vertical
         // position of the rest.
         new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),

         // A C-Major chord.
         new Vex.Flow.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
     ];

     // Create a second voice, with just one whole note
     var notes2 = [
         new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "w" })
     ];


     function create_4_4_voice() {
     // Create a voice in 4/4
         return new Vex.Flow.Voice({
             num_beats: 4,
             beat_value: 4,
             resolution: Vex.Flow.RESOLUTION
         });
     }

     // Add notes to voices
     var voice = create_4_4_voice().addTickables(notes);
     var voice2 = create_4_4_voice().addTickables(notes2);

     // Format and justify the notes to 500 pixels
     var formatter = new Vex.Flow.Formatter().
             joinVoices([voice, voice2]).format([voice, voice2], 500);

     // Render voice
     voice.draw(ctx, stave);
     voice2.draw(ctx, stave);

}