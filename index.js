//Import mime types
var mimes = require('./mime.json');

//Get the mime type
function GetMime(ext)
{
	//Check the first dot
	if(ext[0] === '.')
	{
		//Remove the first dot
		ext = ext.replace('.', '');
	}

	//Get the mime type
	if(typeof mimes[ext] === 'undefined')
	{
		//Return the default mime value
		return 'text/plain';
	}
	else
	{
		//Return the mime type for the file
		return mimes[ext];
	}
}

//Exports to node
module.exports = GetMime;
