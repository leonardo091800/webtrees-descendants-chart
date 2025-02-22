/**
 * See LICENSE.md file for further details.
 */

/**
 * Draw the vertical connecting lines between the profile boxes for Top/Bottom and Bottom/Top layout.
 *
 * @param {Object}      datum       D3 data object
 * @param {Orientation} orientation The current orientation
 */
export default function(datum, orientation)
{
    // Top => Bottom, Bottom => Top
    const sourceX = datum.source.x,
          sourceY = datum.source.y + (orientation.direction() * (orientation.boxHeight / 2)),
          targetX = datum.target.x,
          targetY = datum.target.y - (orientation.direction() * (orientation.boxHeight / 2));

    return "M " + sourceX + " " + sourceY +
        " V " + (sourceY + ((targetY - sourceY) / 2)) +
        " H " + targetX +
        " V " + targetY;
}
