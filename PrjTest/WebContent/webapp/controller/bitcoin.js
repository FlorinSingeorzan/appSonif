baseUrl = "https://widgets.cryptocompare.com/";
var scripts = document.getElementsByTagName("script");
var embedder = scripts[scripts.length - 1];
var cccTheme = {
	"General" : {
		"background" : "rgba(101,134,162,0.9)",
		"borderColor" : "#fff",
		"borderRadius" : "0px"
	},
	"Header" : {
		"background" : "#2c4a65",
		"displayFollowers" : false
	},
	"Followers" : {
		"background" : "#2c4a65",
		"color" : "#2c4a65",
		"borderColor" : "#2c4a65",
		"counterBorderColor" : "#2c4a65",
		"counterColor" : "#2c4a65"
	},
	"Chart" : {
		"fillColor" : "#9abddb"
	}
};
function bitcoin() {
	var appName = encodeURIComponent(window.location.hostname);
	if (appName == "") {
		appName = "local";
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=BTC&tsym=USD';
	s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
	embedder.parentNode.appendChild(s);

};

function ethereum() {
	var appName = encodeURIComponent(window.location.hostname);
	if (appName == "") {
		appName = "local";
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=ETH&tsym=USD';
	s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
	embedder.parentNode.appendChild(s);
};

function ripple() {
	var appName = encodeURIComponent(window.location.hostname);
	if (appName == "") {
		appName = "local";
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=XRP&tsym=USD';
	s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
	embedder.parentNode.appendChild(s);
};

function eos() {
	var appName = encodeURIComponent(window.location.hostname);
	if (appName == "") {
		appName = "local";
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=EOS&tsym=USD';
	s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
	embedder.parentNode.appendChild(s);
};

function iota() {
	var appName = encodeURIComponent(window.location.hostname);
	if (appName == "") {
		appName = "local";
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=IOT&tsym=USD';
	s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
	embedder.parentNode.appendChild(s);
};

function neo() {
	var appName = encodeURIComponent(window.location.hostname);
	if (appName == "") {
		appName = "local";
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=NEO&tsym=USD';
	s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
	embedder.parentNode.appendChild(s);
};

function monero() {
	var appName = encodeURIComponent(window.location.hostname);
	if (appName == "") {
		appName = "local";
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=XMR&tsym=USD';
	s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
	embedder.parentNode.appendChild(s);
};

function dash() {
	var appName = encodeURIComponent(window.location.hostname);
	if (appName == "") {
		appName = "local";
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=DSH&tsym=USD';
	s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
	embedder.parentNode.appendChild(s);
};

function tron() {
	var appName = encodeURIComponent(window.location.hostname);
	if (appName == "") {
		appName = "local";
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=TRX&tsym=USD';
	s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
	embedder.parentNode.appendChild(s);
};

function litecoin() {
	var appName = encodeURIComponent(window.location.hostname);
	if (appName == "") {
		appName = "local";
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=LTC&tsym=USD';
	s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
	embedder.parentNode.appendChild(s);
};

function zcash() {
	var appName = encodeURIComponent(window.location.hostname);
	if (appName == "") {
		appName = "local";
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=ZEC&tsym=USD';
	s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
	embedder.parentNode.appendChild(s);
};

function bcash() {
	var appName = encodeURIComponent(window.location.hostname);
	if (appName == "") {
		appName = "local";
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=BCH&tsym=USD';
	s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
	embedder.parentNode.appendChild(s);
};

