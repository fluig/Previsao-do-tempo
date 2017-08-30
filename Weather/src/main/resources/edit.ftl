<div id="weather_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide edit-mode"
     data-params="weather.instance({editMode:true})">
    
    <div class="panel panel-default">
    	<div class="panel-body">
   			
   			<div id="search_city_result"></div>
   			
   			<div class="form-group">
   				<label for="city">${i18n.getTranslation('edit.city')}</label>
   				<div class="input-group">
   					<input type="text" name="city" id="city" class="form-control" value="${city!}" />
   					<span class="input-group-addon fs-cursor-pointer" data-search-city>
   						<span class="fluigicon fluigicon-search"></span>
   					</span>
   				</div>
 				<p class="help-block">${i18n.getTranslation('edit.city_example')}</p>
   			</div>
   			
   			<div class="form-group">
   				<label for="panel_style">${i18n.getTranslation('edit.style')}</label>
   				<select name="panel_style" id="panel_style" class="form-control">
   					<option <#if '${panel_style!}' == "panel-default">selected="selected"</#if>>panel-default</option>
					<option <#if '${panel_style!}' == "panel-primary">selected="selected"</#if>>panel-primary</option>
					<option <#if '${panel_style!}' == "panel-success">selected="selected"</#if>>panel-success</option>
					<option <#if '${panel_style!}' == "panel-info">selected="selected"</#if>>panel-info</option>
					<option <#if '${panel_style!}' == "panel-warning">selected="selected"</#if>>panel-warning</option>
					<option <#if '${panel_style!}' == "panel-danger">selected="selected"</#if>>panel-danger</option>
   				</select>
   			</div>
   			
   			<div class="form-group">
   				<button type="button" class="btn btn-primary" data-save>${i18n.getTranslation('edit.save')}</button>
   			</div>
    	</div>
    </div>
</div>