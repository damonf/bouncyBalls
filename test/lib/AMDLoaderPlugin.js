//https://gist.github.com/acthp/3557646

(function() {
 
	var loadSource = function(file, onSourceLoad) {
		if (!file.fileSrc.match(/test/)) {
			return false;
		}
 
		require([file.fileSrc], function() {
			onSourceLoad({file: file, success: true, message: ''});
		}, function(err) {
			var msg = err.requireType;
			if (err.requireModules) {
				msg += ": " + err.requireModules.join(', ');
			}
			onSourceLoad({file: file, success: false, message: msg});
		});
 
		return true;
	};
 
	jstestdriver.pluginRegistrar.register({
		name: 'AMDLoaderPlugin',
		loadSource: loadSource
	});
 
}());
