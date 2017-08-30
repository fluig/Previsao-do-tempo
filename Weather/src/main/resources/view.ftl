<div id="weather_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide view-mode"
     data-params="weather.instance({city: '${city!}',viewMode:true})">

    <div class="panel ${panel_style!'panel-default'}">
    	<div class="panel-heading">
    		<h3 class="panel-title">${city!}</h3>
    	</div>
    	
    	<div class="panel-body">
    		<div class="row">
    			<div class="col-xs-4">
    				<!-- weather icon -->
    				<span id="icon"></span>
    			</div>
    			
    			<div class="col-xs-8">
    				<p id="description"></p>
    				<p id="temp"></p>    				
    			</div>
    		</div>
    	</div>
    	
    	<table class="table">
    		<tbody>
    			<tr>
    				<th class="text-right">${i18n.getTranslation('view.temp_min')}</th>
    				<td id="temp_min"></td>
    				<th class="text-right">${i18n.getTranslation('view.huminity')}</th>
    				<td id="humidity"></td>
    			</tr>
    			<tr>
    				<th class="text-right">${i18n.getTranslation('view.temp_max')}</th>
    				<td id="temp_max"></td>
    				<th class="text-right">${i18n.getTranslation('view.wind')}</th>
    				<td id="wind"></td>
    			</tr>
    		</tbody>
    	</table>
    </div>
</div>