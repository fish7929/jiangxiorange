package com.showingcloud.detectionwifi;

import org.apache.cordova.DroidGap;

import android.os.Bundle;

@SuppressWarnings("deprecation")
public class WifiActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//setContentView(R.layout.activity_wifi);
		//加载 wifiinfo的界面
        super.loadUrl("file:///android_asset/www/index.html");
	}

}
