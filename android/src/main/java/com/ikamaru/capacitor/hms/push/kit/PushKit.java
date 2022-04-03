package com.ikamaru.capacitor.hms.push.kit;

import android.util.Log;

import com.getcapacitor.JSObject;
//import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import com.huawei.hmf.tasks.OnCompleteListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.push.HmsMessaging;

@CapacitorPlugin
public class PushKit extends Plugin {
    private static final String TAG = "CapacitorHMSPushKitLog";
    public static String token=null;
    @PluginMethod
    public void subscribe(PluginCall _call) {
        final PluginCall call=_call;
        if(isEmptyTopic(call)){
            call.reject("subscribe failed : Empty Topic");
            return;
        }
        String topic = call.getString("topic");
        HmsMessaging.getInstance(getContext()).subscribe(topic).addOnCompleteListener(new OnCompleteListener<Void>() {
            @Override
            public void onComplete(Task<Void> task) {
                if (task.isSuccessful()) {
                    Log.d(TAG, "subscribe successful");
                    call.success();
                } else {
                    Log.d(TAG, "subscribe failed "+task.getException().getMessage());
                    call.reject("subscribe failed: "+task.getException().getMessage());
                }
            }
        });
    }

    @PluginMethod
    public void unsubscribe(PluginCall _call) {
        final PluginCall call=_call;
        if(isEmptyTopic(call)){
            call.reject("unsubscribe failed : Empty Topic");
            return;
        }
        String topic = call.getString("topic");
        HmsMessaging.getInstance(getContext()).unsubscribe(topic).addOnCompleteListener(new OnCompleteListener<Void>() {
            @Override
            public void onComplete(Task<Void> task) {
                if (task.isSuccessful()) {
                    Log.d(TAG, "unsubscribe successful");
                    call.success();
                } else {
                    Log.d(TAG, "unsubscribe failed: "+task.getException().getMessage());
                    call.reject("unsubscribe failed: "+task.getException().getMessage());
                }
            }
        });
    }
    @PluginMethod
    public void getToken(PluginCall _call){
        if(token==null){
            _call.reject("token not available yet");
        }else{
            JSObject res = new JSObject();
            res.put("token", token);
            _call.resolve(res);
        }
    }
    private boolean isEmptyTopic(PluginCall _call){
        if(!_call.getData().has("topic") || _call.getString("topic")==null || _call.getString("topic").isEmpty())
            return true;
        return false;
    }
}
