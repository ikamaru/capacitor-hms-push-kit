package com.ikamaru.capacitor.hms.push.kit;

import android.content.Context;
import android.util.Log;

import com.huawei.hms.push.HmsMessageService;

import java.util.Map;

public class MyPushService extends HmsMessageService {
    private static final String TAG = "CapacitorHMSPushKitLog";
    @Override
    public void onNewToken(String token) {
        Log.i(TAG, "receive token:" + token);
        PushKit.token=token;
        super.onNewToken(token);
    }
}
