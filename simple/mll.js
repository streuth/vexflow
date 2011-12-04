/**
 * Created by JetBrains RubyMine.
 * User: streuth
 * Date: 11/25/11
 * Time: 4:52 PM
 * To change this template use File | Settings | File Templates.
 */

function mll() {}

/**
 * Draw a tiny marker on the specified canvas. A great debugging aid.
 *
 * @param {!Object} ctx Canvas context.
 * @param {number} x X position for dot.
 * @param {number} y Y position for dot.
 */
mll.drawDot = function(ctx, x, y, color) {
  var c = color || "#f55";
  ctx.save();
  ctx.fillStyle = c;

  //draw a circle
  ctx.beginPath();
  ctx.arc(x-6, y-6, 6, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
