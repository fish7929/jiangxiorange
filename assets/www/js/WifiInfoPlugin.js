var WifiInfo= function() {
};

WifiInfo.prototype.get = function(success, fail) {
		//alert('inner');
		Cordova.exec(success, success, 'WifiInfoPlugin', 'getInfo', [] );
		//alert('inner end');
};
WifiInfo.prototype.refresh = function(success, fail) {
		//alert('inner');
		Cordova.exec(success, success, 'WifiInfoPlugin', 'refresh', [] );
		//alert('inner end');
};

cordova.addConstructor(function() {

	if (!window.plugins) {
		window.plugins = {};
	}
	window.plugins.WifiInfo = new WifiInfo();
});