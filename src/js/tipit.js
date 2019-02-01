/**
 * @zCode 110110011000011011011000101101011101100010110001001000001101100110000101110110011000011000100000110110001010011111011001100001001101100110000100110110011000011100100000110110011000100000100000110110011000000111011000101010101101100010101101001000001101100110000010110110001011000111011011100011001101100010101000
 *
 * @name tipIt
 * @description Easy-to-use tooltip system
 *
 * @author Reiha Hosseini ( @mrReiha )
 * @version v0.0.4
 * @since 01/2019
 *
 * @tags JavaScript, pure, vanilla, no-dependency
 *
 * @license MIT
 */
;!( function( w, d, f ) {

    typeof exports === 'object' && typeof module !== 'undefined' ? factory( w, d ) :
    typeof define === 'function' && define.amd ? define( [ 'exports' ], factory ) :
    ( w = w || self, factory( w, d ) );

}( this, document, function( w, d ) {

	// :D
	'use strict';

	var makeTipit = function( target ) {

			var showTipit = function( e ) {

					var placementIndex = placements.indexOf( target.getAttribute( 'data-tipit-placement' ) ),
						placement = placementIndex >= 0 ? placements[ placementIndex ] : placements[ 0 ],

						content = tipit.innerHTML = target.getAttribute( 'data-tipit-content' ),

						extraClassName = target.getAttribute( 'data-tipit-class' ),

						offset = target.getBoundingClientRect(),

						width = target.offsetWidth,
						height = target.offsetHeight,

						tipitWidth = tipit.offsetWidth,
						tipitHeight = tipit.offsetHeight,

						horiz = [ 'left', 'right' ].indexOf( placement ) >= 0,
						far = [ 'right', 'bottom' ].indexOf( placement ) >= 0,

						offsetTop = offset.top + pageYOffset,

						pos = {

							left: horiz ?
									( far ? offset.left + width + BORDER_WIDTH : offset.left - tipitWidth - BORDER_WIDTH ) :
									( offset.left + ( width / 2 ) - ( tipitWidth / 2 ) ),

							top: horiz ?
									( offsetTop + ( height / 2 ) - ( tipitHeight / 2 ) ) :
									( far ? offsetTop + height + BORDER_WIDTH : offsetTop - tipitHeight - BORDER_WIDTH  )

						};

					if ( tipit.data[ 'timeout.id' ] )
						clearTimeout( tipit.data[ 'timeout.id' ] );

					if ( !content )
						return false;

					tipit.className += ' fx ' + placement + ( extraClassName ? ' ' + extraClassName : '' );

					tipit.style.left = pos.left.toFixed( 2 ) + 'px';
					tipit.style.top = pos.top.toFixed( 2 ) + 'px';

				},

				hideTipit = function( e ) {

					tipit.className = tipit.className.replace( /fx\s?/gi, '' );

				},

				hideTipitFn = function( e ) {

					tipit.data[ 'timeout.id' ] = setTimeout( hideTipit, 150 );

				},

				// We should append it as soon as we can, to make getting 'tipit's width possible
				tipit = d.body.appendChild( d.createElement( 'div' ) ),

				// Also we need to apply styles on it to returns the correct width
				// cn = className
				cn = tipit.className = 'tipit';

			target.addEventListener( 'mouseout', hideTipitFn, false );
			target.addEventListener( 'mouseover', showTipit, false );

			tipit.addEventListener( 'mouseout', hideTipitFn, false );
			tipit.addEventListener( 'mouseover', showTipit, false );

			tipit.data = {};

			target.showTipit = showTipit;
			target.hideTipit = hideTipit;

		},

		placements = [ 'left', 'right', 'top', 'bottom' ],

		// @Const Value of our border's pixels needed
		BORDER_WIDTH = 15;

	d.addEventListener( 'DOMContentLoaded', function( e ) {

		var tipits = d.querySelectorAll( '[data-tipit-content]' ),
			tipitsLength = tipits.length,

			i = 0;

		for ( ; i < tipitsLength; i++ )
			makeTipit( tipits[ i ] );

		w.tipit = makeTipit;

	}, false );

}));
