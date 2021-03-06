{
   "formtabs":[
   {
      "MIGX_id":4,
      "caption":"Карта",
      "print_before_tabs":"0",
      "fields":[
      {
         "MIGX_id":10,
         "field":"coord_x",
         "caption":"Координата x",
         "description":"",
         "description_is_code":"0",
         "inputTV":"x_center",
         "inputTVtype":"",
         "validation":"",
         "configs":"",
         "restrictive_condition":"",
         "display":"",
         "sourceFrom":"config",
         "sources":"",
         "inputOptionValues":"",
         "default":"",
         "useDefaultIfEmpty":"0",
         "pos":1
      },
      {
         "MIGX_id":11,
         "field":"coord_y",
         "caption":"Координата y",
         "description":"",
         "description_is_code":"0",
         "inputTV":"y_center",
         "inputTVtype":"",
         "validation":"",
         "configs":"",
         "restrictive_condition":"",
         "display":"",
         "sourceFrom":"config",
         "sources":"",
         "inputOptionValues":"",
         "default":"",
         "useDefaultIfEmpty":"0",
         "pos":2
      },
      {
         "MIGX_id":13,
         "field":"hint_content",
         "caption":"Надпись при наведении",
         "description":"",
         "description_is_code":"0",
         "inputTV":"",
         "inputTVtype":"",
         "validation":"",
         "configs":"",
         "restrictive_condition":"",
         "display":"",
         "sourceFrom":"config",
         "sources":"",
         "inputOptionValues":"",
         "default":"",
         "pos":3
      },
      {
         "MIGX_id":14,
         "field":"balloon_content",
         "caption":"Надпись при нажатии",
         "description":"",
         "description_is_code":"0",
         "inputTV":"",
         "inputTVtype":"",
         "validation":"",
         "configs":"",
         "restrictive_condition":"",
         "display":"",
         "sourceFrom":"config",
         "sources":"",
         "inputOptionValues":"",
         "default":"",
         "pos":4
      },
      {
         "MIGX_id":15,
         "field":"active",
         "caption":"Активный",
         "description":"",
         "description_is_code":"0",
         "inputTV":"",
         "inputTVtype":"listbox",
         "configs":"",
         "sourceFrom":"config",
         "sources":"[]",
         "inputOptionValues":"Активный==1||Скрытый==0",
         "default":1,
         "pos":5
      }
      ],
      "pos":1
   }
   ],
   "contextmenus":"",
   "actionbuttons":"",
   "columnbuttons":"",
   "filters":"",
   "extended":{
      "migx_add":"",
      "disable_add_item":"",
      "add_items_directly":"",
      "formcaption":"",
      "update_win_title":"",
      "win_id":"",
      "maxRecords":"",
      "addNewItemAt":"bottom",
      "multiple_formtabs":"",
      "multiple_formtabs_label":"",
      "multiple_formtabs_field":"",
      "multiple_formtabs_optionstext":"",
      "multiple_formtabs_optionsvalue":"",
      "actionbuttonsperrow":4,
      "winbuttonslist":"",
      "extrahandlers":"this.handleColumnSwitch",
      "filtersperrow":4,
      "packageName":"",
      "classname":"",
      "task":"",
      "getlistsort":"",
      "getlistsortdir":"",
      "sortconfig":"",
      "gridpagesize":"",
      "use_custom_prefix":"0",
      "prefix":"",
      "grid":"",
      "gridload_mode":1,
      "check_resid":1,
      "check_resid_TV":"",
      "join_alias":"",
      "has_jointable":"yes",
      "getlistwhere":"",
      "joins":"",
      "cmpmaincaption":"",
      "cmptabcaption":"",
      "cmptabdescription":"",
      "cmptabcontroller":"",
      "winbuttons":"",
      "onsubmitsuccess":"",
      "submitparams":""
   },
   "columns":[
   {
      "MIGX_id":1,
      "header":"id",
      "dataIndex":"MIGX_id",
      "show_in_grid":"no"
   },
   {
      "MIGX_id":5,
      "header":"x",
      "dataIndex":"coord_x",
      "width":40,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"",
      "editor":"this.textEditor"
   },
   {
      "MIGX_id":6,
      "header":"y",
      "dataIndex":"coord_y",
      "width":40,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"",
      "editor":"this.textEditor"
   },
   {
      "MIGX_id":7,
      "header":"Нажатие",
      "dataIndex":"balloon_content",
      "width":"",
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"",
      "editor":"this.textEditor"
   },
   {
      "MIGX_id":8,
      "header":"Наведение",
      "dataIndex":"balloon_content",
      "width":"",
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"",
      "editor":"this.textEditor"
   },
   {
      "MIGX_id":4,
      "header":"Активный",
      "dataIndex":"active",
      "width":50,
      "sortable":1,
      "show_in_grid":1,
      "renderer":"this.renderSwitchStatusOptions",
      "clickaction":"switchOption",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":[
      {
         "MIGX_id":1,
         "name":"Активный",
         "value":1,
         "clickaction":"",
         "handler":"",
         "image":"assets/img/tick.png"
      },
      {
         "MIGX_id":2,
         "name":"Скрытый",
         "value":"0",
         "clickaction":"",
         "handler":"",
         "image":"assets/img/empty-tick.png"
      }
      ],
      "editor":""
   }
   ]
}
