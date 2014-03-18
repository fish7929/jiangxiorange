/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var count = 0;
/*
function getInfo(){
	//alert('1');
	var info = new Array();
	window.plugins.WifiInfo.get(function(wifi){
		//alert('1111');
		//alert(JSON.stringify(wifi));
		info = wifi.available.sort(function(a, b){
					var a1= a.BSSID, b1= b.BSSID;
					if(a1== b1) return 0;
					return a1> b1? 1: -1;
				});
	});
	//alert('2222');
	return info;
}

function updateTableData(info){
	//alert('3333');
	$("#available li:not(:eq(0))").remove();
	var element = $('#available li').eq(0);
	if (info.length == 0 || null == info) {
		return false;	
	}
	for (var i = 0; i < info.length; i++){
		if (i == 0){
			element.find('h2').text("SSID: " + info[i].SSID);
			element.find('p:eq(0)').text("BSSID: " + info[i].BSSID);
			element.find('p:eq(1)').text("level: " + info[i].level);
			element.find('p:eq(2)').text("frequency: " + info[i].frequency);
		}else {
			var newRow = element.clone(true);
			newRow.find('h2').text("SSID: " + info[i].SSID);
			newRow.find('p:eq(0)').text("BSSID: " + info[i].BSSID);
			newRow.find('p:eq(1)').text("level: " + info[i].level);
			newRow.find('p:eq(2)').text("frequency: " + info[i].frequency);
			element.after(newRow);
		}
	}
}
$(document).ready(function(){
	//$('#wifiMain').on('pageinit',function(event){
		//alert('show');
		//var info = getInfo();
		//updateTableData(info);
		//initData(getInfo());
	//});
	//alert('123333');
	$('#refresh').click(function(){
		//alert('333333');
		updateTableData(getInfo());
		count++;
		$('#count').text('refresh count: ' + count);
	});
});
*/

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		//setInterval(function () {
		//	window.plugins.WifiInfo.get(function(wifi){ 
				//console.log(wifi[0][0].SSID + "****HELLO*****");
				//直接显示json字符串
				//alert(JSON.stringify(wifi));
		//		app.updateTableData(wifi.available);
		//	});
		//}, 1000);
		
		//alert("wait....");
		window.plugins.WifiInfo.get(function(wifi){ 
			//直接显示json字符串
			//alert(JSON.stringify(wifi));
			//alert('wait....'):
			app.updateTableData(wifi.available.sort(	//按照BSSID排序
				function(a, b){
					var a1= a.BSSID, b1= b.BSSID;
					if(a1== b1) return 0;
					return a1> b1? 1: -1;
				})
			);
		});
    },
	updateTableData: function (info){
		//alert('2');
		$("#available li:not(:eq(0))").remove();
		var element = $('#available li').eq(0);
		if (info.length == 0) {
			return false;	
		}
		for (var i = 0; i < info.length; i++){
			if (i == 0){
				element.find('h2').text("SSID: " + info[i].SSID);
				element.find('p:eq(0)').text("BSSID: " + info[i].BSSID);
				element.find('p:eq(1)').text("level: " + info[i].level);
				element.find('p:eq(2)').text("frequency: " + info[i].frequency);
			}else {
				var newRow = element.clone(true);
				newRow.find('h2').text("SSID: " + info[i].SSID);
				newRow.find('p:eq(0)').text("BSSID: " + info[i].BSSID);
				newRow.find('p:eq(1)').text("level: " + info[i].level);
				newRow.find('p:eq(2)').text("frequency: " + info[i].frequency);
				element.after(newRow);
			}
		}
		//$("#available li").listview("refresh");
	},
	
	refreshData: function(){
		window.plugins.WifiInfo.refresh(function(wifi){ 
			//直接显示json字符串
			//alert(JSON.stringify(wifi));
			app.updateTableData(wifi.available.sort(	//按照BSSID排序
				function(a, b){
					var a1= a.BSSID, b1= b.BSSID;
					if(a1== b1) return 0;
					return a1> b1? 1: -1;
				})
			);
		});
		count++;
		$('#count').text('refresh count: ' + count);
	}
};
