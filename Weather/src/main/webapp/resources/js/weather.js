var weather = SuperWidget.extend({
    city: null,
	instanceId: null,
    
    editMode: false,
    viewMode: false,

    bindings: {
        local: {
        	'save': ['click_save'],
            'search-city': ['click_searchCity']
        }
    },
    
    configView: function() {
    	var $this = this;
    	
    	$this.searchWeather($this.city, function(data) {
    		var prefix = 'wi wi-';
    		var code = data.weather[0].id;
    		var icon = weatherIcons[code].icon;

    		// If we are not in the ranges mentioned above, add a day/night prefix.
    		if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
				icon = 'day-' + icon;
    		}

    		// Finally tack on the prefix.
    		icon = prefix + icon;
    		$("#icon", $this.getContext()).addClass(icon);
    		
    		$("#description", $this.getContext()).text(data.weather[0].description);
    		
    		$("#temp", $this.getContext()).text(parseInt(data.main.temp - 273) + "º C");
    		$("#temp_min", $this.getContext()).text(parseInt(data.main.temp_min - 273) + "º C");
    		$("#temp_max", $this.getContext()).text(parseInt(data.main.temp_max - 273) + "º C");
    		$("#humidity", $this.getContext()).text(data.main.humidity + "%");
    		$("#wind", $this.getContext()).text(parseInt(data.wind.speed * 3.6) + " km/h");
    	}, 
    	function() {
    		$this.fluigcToast("", "${i18n.getTranslation('js.error.loadwidget')}", "danger");
    	});
    },
    
    /**
     * Build an alert element
     * @message Message to user
     * @type Success, info, warning or danger
     */
    fluigcAlert: function(message, type) {
    	return $("<div>", {
    		"class": "alert alert-" + type,
    		"role": "alert",
    		"html": message
    	});
    },
    
    /**
     * Show a toast message
     * @title Title of message
     * @message Message
     * @type Succes, info, warning or danger
     */
    fluigcToast: function(title, message, type) {
    	FLUIGC.toast({
    		title: title,
    		message: message,
    		type: type
    	});
    },
    
    getContext: function() {
    	if (!this.context) {
    		this.context = $("#weather_" + this.instanceId);
    	}
    	return this.context;
    },
    
    init: function () {
        if (this.viewMode) {
        	this.configView();
        }
    },
    
    save: function() {
    	var $this = this;
    	var result = WCMSpaceAPI.PageService.UPDATEPREFERENCES({async: false}, this.instanceId, {
    		'city': $("#city", $this.getContext()).val(),
    		'panel_style': $('#panel_style', $this.getContext()).val()
    	});
		
		if (result) {
			$this.fluigcToast('', "${i18n.getTranslation('js.toast.save.message')}", 'success');
		}
		else {
			$this.fluigcToast("${i18n.getTranslation('js.toast.error.title')}", "${i18n.getTranslation('js.toast.error.message')}", 'danger');
		}
    },
    
    searchCity: function() {
    	var $this = this;
    	var city = $("#city", $this.getContext()).val();
    	var $searchCityResult = $("#search_city_result", $this.getContext());
    	
    	$searchCityResult.empty();
    	
    	$this.searchWeather(city, function(data) {
    		var $alert = $this.fluigcAlert("${i18n.getTranslation('js.cityfounded')}", "success");
    		$searchCityResult.append($alert);
    	}, 
    	function() {
    		var $alert = $this.fluigcAlert("${i18n.getTranslation('js.citynotfounded')}", "warning");
    		$searchCityResult.append($alert);
    	});
    },
    
    searchWeather: function(city, callbackSuccess, callbackError) { 
    	$.ajax({
    		error: function() {
    			if (typeof callback != "undefined") {
    				callbackError();
    			}
    		},
    		success: function(data) {
    			if (data.cod == 404) {
    				callbackError();
    			} 
    			else {
    				callbackSuccess(data);
    			}
    		},
    		url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=02a28381f4d4d767fc39773a37b777c4"
    	});
    },
});