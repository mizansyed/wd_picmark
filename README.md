WD_PicMark by With Digital (@mizansyed)
======================================
Version: Beta 0.8

Allows photos to be credited or provide attribution information. Originally developed for a private project.

## Installation

Add jquery library to your webpage:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

Add jquery.wd_picmark.min.js:

    <script src="jquery.wd_picmark.min.js"></script>

## Usage

    $(document).ready(function() {
        $('.image_class').wd_picmark();
    });

The following options are available (default shown below) :

	useAlt: true //use alt tag for the marking text 

	dataAttrVar: 'mark' // if data attribute used what is the data-[suffix]

	defaultText: '' // default text to use if alt or data attribute is not set

	useExternalStyle: false //use external stylesheet for design layout

	positionX: 'right' // position text right or 'left'

	positionY: 'bottom' // position text top or 'bottom'

	marginX: '2px' // margin from the left/right position

	marginY: '2px' // margin from the top/bottom position

	font: // 
	{
		fontFamily: 'arial, sans-serif'

		fontSize: '10px'

		color : '#dddddd'

		backgroundColor : 'transparent'

		shadow : '0px 1px 1px #4d4d4d'

		padding: '2px'
	}

See examples/test.html for usage

## Contributing

Sure, but would be better to wait until version 1.0

