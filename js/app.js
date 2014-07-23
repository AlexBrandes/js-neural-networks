(function() {
var data = {
	correct: [
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,1,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,1,1,1,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,1,0,0,0,1,0,0,
			0,1,0,0,0,1,0,0,
			0,1,0,0,0,1,0,0,
			0,1,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,1,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,0,0,1,0,
			0,0,1,0,0,0,1,0,
			0,0,1,0,0,0,1,0,
			0,0,1,1,1,1,1,0,
			0,0,0,0,0,0,1,0,
			0,0,0,0,0,0,1,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,1,0,0,0,1,0,
			0,0,1,0,0,0,1,0,
			0,0,1,0,0,0,1,0,
			0,0,1,1,1,1,1,0,
			0,0,0,0,0,0,1,0,
			0,0,0,0,0,0,1,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,1,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,1,1,1,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,1,1,1,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,1
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,1,0,0,0,1,0,0,
			0,1,0,0,0,1,0,0,
			0,1,0,0,0,1,0,0,
			0,1,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,1,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			1,0,0,0,1,0,0,0,
			1,0,0,0,1,0,0,0,
			1,1,1,1,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,1,1,1,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,1,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			1,0,0,1,0,0,0,0,
			1,0,0,1,0,0,0,0,
			1,0,0,1,0,0,0,0,
			1,1,1,1,0,0,0,0,
			0,0,0,1,0,0,0,0,
			0,0,0,1,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,1,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,1,0,1,0,0,0,0,
			0,1,0,1,0,0,0,0,
			0,1,0,1,0,0,0,0,
			0,1,1,1,0,0,0,0,
			0,0,0,1,0,0,0,0,
			0,0,0,1,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			1,0,0,1,0,0,0,0,
			1,0,0,1,0,0,0,0,
			1,0,0,1,0,0,0,0,
			1,1,1,1,0,0,0,0,
			0,0,0,1,0,0,0,0,
			0,0,0,1,0,0,0,0,
			0,0,0,1,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,1,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			1,0,1,0,0,0,0,0,
			1,0,1,0,0,0,0,0,
			1,1,1,0,0,0,0,0,
			0,0,1,0,0,0,0,0,
			0,0,1,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			1,0,0,0,1,0,0,0,
			1,0,0,0,1,0,0,0,
			1,1,1,1,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,1,0,0,0,0,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,1,1,1,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,1,0,0,0,0,0,1,
			0,1,0,0,0,0,0,1,
			0,1,0,0,0,0,0,1,
			0,1,0,0,0,0,0,1,
			0,1,1,1,1,1,1,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,1
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,1,1,1,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,1
		],
		[
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,1,1,1,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,1
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,0,0,0,1,
			0,0,0,1,1,1,1,1,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,1
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		]
	],
	incorrect: [
		[
			0,0,0,0,0,0,0,0,
			0,1,1,1,1,1,1,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,1,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			1,0,0,0,0,0,0,0,
			1,1,1,1,1,1,1,0,
			1,0,1,0,0,1,0,0,
			1,0,1,1,1,1,0,0,
			1,0,1,1,1,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,1,1,1,1,1,1,0,
			0,0,1,0,0,1,0,0,
			0,0,1,0,1,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,1,
			0,1,1,1,1,1,1,1,
			0,0,1,0,0,1,0,1,
			0,0,1,0,1,1,0,0,
			0,0,0,1,0,0,0,0,
			0,0,1,0,0,1,0,0,
			0,0,0,0,0,1,0,1,
			0,1,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,1,
			0,1,1,1,1,1,1,1,
			0,0,1,0,0,1,0,1,
			0,0,1,0,1,1,0,0,
			0,0,0,1,1,0,0,0,
			0,0,1,0,0,1,0,0,
			0,0,0,0,0,1,0,1,
			0,1,0,0,1,0,0,0
		],
		[
			0,0,0,0,0,0,0,1,
			0,1,0,1,1,0,1,1,
			0,0,1,0,0,1,0,1,
			0,0,1,0,1,1,0,0,
			0,1,0,1,0,0,0,0,
			0,0,1,0,0,1,0,0,
			0,0,0,0,0,1,0,1,
			0,1,0,1,0,0,0,0
		],
		[
			0,0,1,0,0,1,0,1,
			0,1,0,1,1,0,1,1,
			1,0,1,0,0,1,0,1,
			0,0,1,0,1,1,0,0,
			0,1,0,1,0,0,0,1,
			0,0,1,0,0,1,0,0,
			0,0,0,0,0,1,0,1,
			1,1,0,1,0,0,0,0
		],
		[
			1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1
		],
		[
			1,0,1,0,1,0,1,0,
			1,0,1,0,1,0,1,0,
			1,0,1,0,1,0,1,0,
			1,0,1,0,1,0,1,0,
			1,0,1,0,1,0,1,0,
			1,0,1,0,1,0,1,0,
			1,0,1,0,1,0,1,0,
			1,0,1,0,1,0,1,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,1,1,0,0,
			0,0,0,0,1,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,0,0,1,
			0,0,0,0,1,1,0,0,
			0,0,0,0,1,1,0,0,
			0,0,1,1,0,1,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,0,0,0,
			1,0,0,0,0,0,0,0
		],
		[
			0,0,1,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			1,0,0,0,1,1,0,0,
			0,0,0,0,1,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,0,0,1,
			0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,1
		],
		[
			0,1,0,1,0,1,0,0,
			0,0,1,0,0,1,0,0,
			0,1,1,1,0,0,1,0,
			0,1,1,1,0,0,0,1,
			0,0,0,1,1,1,1,0,
			0,0,0,1,0,0,1,1,
			1,0,0,1,1,0,1,0,
			0,0,0,0,0,1,0,0
		],
		[
			1,0,1,0,0,0,0,1,
			0,0,0,0,0,0,0,0,
			1,0,0,0,1,1,0,0,
			0,0,0,0,1,1,0,0,
			0,0,1,1,1,1,0,0,
			0,1,0,0,0,0,0,1,
			0,0,0,0,1,0,0,1,
			1,0,0,0,0,0,0,1
		],
		[
			0,0,1,0,1,0,0,0,
			0,0,0,0,1,0,0,1,
			1,0,0,0,1,1,0,1,
			0,0,0,0,1,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,1,0,0,1,
			0,1,0,0,1,0,0,1,
			1,0,0,0,0,0,0,1
		],
		[
			1,0,1,0,0,0,0,1,
			0,0,0,0,0,0,0,0,
			1,0,1,1,1,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,1,1,1,1,0,1,
			0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,1
		],
		[
			1,0,1,0,0,1,0,1,
			0,0,0,0,0,0,0,0,
			1,0,1,1,1,1,0,1,
			0,0,1,1,1,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,1,1,1,1,0,1,
			0,0,0,0,0,0,0,1,
			1,0,0,1,0,0,0,1
		],
		[
			1,0,1,0,0,0,0,1,
			0,0,1,1,1,1,0,0,
			1,0,1,1,1,1,0,1,
			0,0,1,1,1,1,0,0,
			1,0,1,1,1,1,0,0,
			0,0,1,1,1,1,0,1,
			0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,1
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,1,1,1,0,0,
			0,0,1,0,0,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,1,1,1,0,0,0,
			0,0,1,0,0,0,0,0,
			0,0,1,1,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,1,1,1,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,1,0,0,0,0,
			0,0,0,1,0,0,0,0,
			0,0,0,1,0,0,0,0,
			0,0,0,1,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,1,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,1,0,0,
			0,0,1,1,1,1,0,0,
			0,0,1,0,0,0,0,0,
			0,0,1,1,1,1,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,0,0,0,0,
			0,0,1,0,0,0,0,0,
			0,0,1,1,1,0,0,0,
			0,0,1,0,1,0,0,0,
			0,0,1,1,1,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,1,0,1,0,0,
			0,0,0,1,1,1,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
		[
			0,0,0,0,0,0,0,0,
			0,0,1,0,1,1,1,0,
			0,0,1,0,1,0,1,0,
			0,0,1,0,1,0,1,0,
			0,0,1,0,1,0,1,0,
			0,0,1,0,1,1,1,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
		],
	]
};

Lib = function() {};
Lib.randomFromRange = function(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

Display = function() {
	this.init = function(trainer) {
		this.initListeners(trainer);
	};

	this.initListeners = function(trainer) {
		// allow speed changes
		$(document).on('click', '#update-speed', function() {
			trainer.restPeriod = parseInt($('#speed').val());
		});

		$(document).on('click', '#stop', function() {
			// set trainer to stop and rush through remainder of the generation
			var speed = trainer.restPeriod;
			trainer.stopped = true;
			trainer.restPeriod = 1;

			// wait a couple seconds and reset the speed
			// ...creates a race condition but should be good enough
			setTimeout(function() {
				trainer.restPeriod = speed;
			}, 2500);
		});

		$(document).on('click', '#start', function() {
			trainer.stopped = false;
			trainer.train();
		});

		$(document).on('click', '#user-input-canvas .pixel', function() {
			$(this).toggleClass('active');
		});

		$(document).on('click', '#user-input-test', function() {
			// turn the active pixels into an array
			var data = [];
			$('#user-input-canvas .pixel').each(function() {
				var isActive = $(this).hasClass('active') ? 1 : 0;
				data.push(isActive);
			});

			trainer.testInput(new Input(data));
		});
	};

	this.drawChar = function(input) {
		var i = 0;
		$('#canvas .pixel').each(function() {
			var val = input[i];
			
			if (val) {
				$(this).addClass('active');
			}
			else {
				$(this).removeClass('active');
			}
			i++;
		});
	};

	this.drawFeedForwardChar = function(input) {
		var i = 0; 
		$('#feed-forward-canvas .pixel').each(function() {
			var val = input[i];

			// get all the values into a visible range
			var displayVal = 0.5 + (Math.round(val*100)/100);
			if (displayVal > 1) displayVal = 1;
			if (displayVal < 0) displayVal = 0;

			$(this).css({
				'background-color': 'rgba(0,0,0,'+displayVal+')'
			});

			i++;
		});
	};

	this.drawScoreBox = function(population) {
		var scorebox = $('#score-box');
		for (var i=0; i < population; i++) {
			scorebox.append('<li>'+
								'<p class="score"></p>'+
								'<p class="is-number"></p>'+
							'</li>');
		}
	};

	this.showScore = function(score, correct, index) {
		var scorebox = $('#score-box');
		var neurons = scorebox.find('li');

		var neuron = $(neurons[index]);
		neuron.find('.score').html(score);
		neuron.find('.is-number').html(score > 0 ? 'Match' : 'No Match');
		if (correct) {
			neuron.addClass('correct');
			neuron.removeClass('incorrect');
		}
		else {
			neuron.addClass('incorrect');
			neuron.removeClass('correct');
		}
	};

	this.showMatch = function(match) {
		var matchBox = $('#match-box');
		if (match) {
			matchBox.addClass('match');
			matchBox.removeClass('no-match');
			matchBox.html('Match');

		}
		else {
			matchBox.addClass('no-match');
			matchBox.removeClass('match');
			matchBox.html('No Match');
		}
	};

	this.showGeneration = function(generation) {
		$('#generation').html(generation);
	};

	this.showScoreRange = function(low, high) {
		$('#lowscore').html(low);
		$('#highscore').html(high);
	};

	this.showSpeed = function(speed) {
		$('#speed').val(speed);
	};
};

Trainer = function(inputs, display) {
	var self = this;
	this.inputs = inputs;
	this.weights;

	this.population = 64;
	this.mutationRate = 0.1;
	this.step = 0.05;
	this.restPeriod = 50;
	this.swapCount = 4;

	this.generation = 0;
	this.ranks = [];
	this.answers = [];
	this.highestScore = 0;
	this.lowestScore = 0;

	this.stopped = true;

	this.init = function() {
		self.weights = self.getStartingWeights(self.population);
		display.showSpeed(self.restPeriod);
	};

	this.train = function() {
		if (self.stopped) {
			return;
		}

		// increment the generation and display it
		self.generation++;
		display.showGeneration(self.generation);

		// draw the feed forward image
		display.drawFeedForwardChar(self.getAverageWeight());

		// get rid of bad performers and duplicate winners
		self.ranks.length > 0 && self.thinTheHerd();

		// display high/low score in the view
		display.showScoreRange(self.lowestScore, self.highestScore);

		// randomly change weights slightly
		self.mutate();

		// rank numbers back to zero
		self.clearRanks();

		// continue looping
		self.trainLoop();
	};

	this.trainLoop = function(i) {
		var i = i || 0;
		setTimeout(function() {
			var instance = self.inputs[i];
			self.trainSingle(instance);
			i++;

			// continue if there are more inputs to loop through
			if (self.inputs[i]) {
				self.trainLoop(i);
			}
			// otherwise start a new generation
			else {
				self.train();
			}
		}, self.restPeriod);
	};

	this.trainSingle = function(instance, answer) {
		// draw what we're training on
		display.drawChar(instance.vals);

		self.answers = [];
		// create a new neuron for each weight set
		for (var j=0; j < self.weights.length; j++) {
			var neuron = new Neuron(instance, self.weights[j]);
			neuron.score();

			var isCorrect = neuron.isCorrect();

			self.answers.push(neuron.answer);

			// display the score in the appropriate box
			display.showScore(neuron.answer, isCorrect, j);

			// set rank score to zero if uninitialized
			if (! self.ranks[j]) {
				self.ranks[j] = 0;
			}

			self.ranks[j] += isCorrect ? 1 : -1; //1 + (Math.abs(neuron.answer)/1) : 0 - (Math.abs(neuron.answer)/1);
		}

		self.calculateAnswer();
	}

	this.testInput = function(input) {
		// draw what we're training on
		display.drawChar(input.vals);

		self.answers = [];

		// create a new neuron for each weight set
		for (var j=0; j < self.weights.length; j++) {
			var neuron = new Neuron(input, self.weights[j]);
			neuron.score();

			self.answers.push(neuron.answer);

			// display the score in the appropriate box
			display.showScore(neuron.answer, 1, j);
		}

		self.calculateAnswer();
	};

	// pretty basic step function here... works ok
	this.calculateAnswer = function() {
		var answers = self.answers;

		var total = 0;
		for (var i=0; i < answers.length; i++) {
			total += answers[i] > 0 ? 1 : answers[i] == 0 ? 0 : -1;
		}

		var answer = total > 0 ? 1 : 0;

		display.showMatch(answer);
	};

	this.clearRanks = function() {
		for (var i=0; i < self.ranks.length; i++) {
				self.ranks[i] = 0;
		}
	};

	this.thinTheHerd = function() {
		var keyRanks = [];
		for (var i=0; i < self.ranks.length; i++) {
			keyRanks.push([i, self.ranks[i]]);
		}

		// sort from highest to lowest (DESC)
		keyRanks.sort(function(a,b) {
			return a[1] > b[1] ? -1 : b[1] > a[1] ? 1 : 0; 
		});

		self.lowestScore = Math.round((keyRanks[keyRanks.length-1][1] / self.inputs.length)*10000) / 100;
		self.highestScore = Math.round((keyRanks[0][1] / self.inputs.length) * 10000)/100;

		// duplicate the best performers and overwrite the worst 
		// (must use slice(0) to clone not reference the array)
		for (var i=0; i < self.swapCount; i++) {
			self.weights[keyRanks[keyRanks.length-i-1][0]] = self.weights[keyRanks[i][0]].slice(0);
		}

		return self;
	};

	this.mutate = function() {
		var rate = self.mutationRate;

		for(var i=0; i < self.weights.length; i++) {
			self.weights[i] = self.mutateSingle(self.weights[i], rate);
		}
	};

	this.mutateSingle = function(weight, rate) {
		for (var i=0; i < weight.length; i++) {
			var randNum = Math.random();

			if( randNum > rate ) continue;

			var pos_neg = Lib.randomFromRange(1,2) == 2 ? 1 : -1;
			var newWeight = pos_neg > 0 ? weight[i] + self.step : weight[i] - self.step;
			weight[i] = Math.round(newWeight*100)/100;
		}

		return weight;
	};

	this.getStartingWeights = function(number) {
		var weights = [];
		for (var i=0; i < number; i++) {
			weights.push(self.getRandomWeightSet(number));
		}

		return weights;
	};

	this.getRandomWeightSet = function(number) {
		var weightSet = [];
		for (var i=0; i < number; i++) {
			weightSet.push(0);
		}

		return weightSet;
	};

	// Get the mean weight set for feed forward mode
	this.getAverageWeight = function() {
		var weights = self.weights;
		var avgWeightData = [];

		for (var i=0; i < weights.length; i++) {
			var weight = weights[i];
			for (var j=0; j < weight.length; j++) {
				if (typeof avgWeightData[j] === 'undefined') {
					avgWeightData[j] = [];
				}

				avgWeightData[j].push(weight[j]);
			}
		}

		var avgWeights = [];
		for (var i=0; i < avgWeightData.length; i++) {
			var total = 0;
			for (var j=0; j < avgWeightData[i].length; j++) {
				total += avgWeightData[i][j];
			}

			avgWeights[i] = total/avgWeightData[i].length;
		}

		return avgWeights;
	};

	self.init();
};

Input = function(vals, answer) {
	this.vals = vals; // array of 64 1/0s

	this.answer = answer; // correct answer (1/0)
};

Neuron = function(input, weights) {
	// array of 64 weights (which pixels matter)
	this.weights = weights;

	// array of inputs which are 64 pixels each
	this.input = input.vals;
	this.correctAnswer = input.answer;

	this.answer;

	this.score = function() {
		var inputs = this.input;
		var total = 0;
		for (var i=0; i < inputs.length; i++) {
			var input = inputs[i];
			var weight = this.weights[i];

			total += input * weight;
		}

		this.answer = Math.round(total/inputs.length * 100)/100;
	};

	this.isCorrect = function() {
		if (this.answer > 0 && this.correctAnswer == 1) return true;
		if (this.answer <= 0 && this.correctAnswer == 0) return true;
		return  false;
	};

	this.correctPercentage = function() {
		return this.correctAnswer - this.answer;
	};
};

// combine correct and incorrect inputs into an array
var inputs = [];
for (var i=0; i < data.correct.length; i++) {
	inputs.push(new Input(data.correct[i], 1));
}

for (var i=0; i < data.incorrect.length; i++) {
	inputs.push(new Input(data.incorrect[i], 0));
}

// create our two main objects
var display = new Display();
var trainer = new Trainer(inputs, display);

// draw the correct number of neuron displays in the "score box"
display.init(trainer);
display.drawScoreBox(trainer.population);


})();