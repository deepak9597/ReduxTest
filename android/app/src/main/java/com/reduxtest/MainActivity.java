package com.reduxtest;

import com.facebook.react.ReactActivity;
import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void loadApp(String appKey) {
      RNBootSplash.init(getPlainActivity()); // <- initialize the splash screen
      super.loadApp(appKey);
    }
  protected String getMainComponentName() {
    return "ReduxTest";
  }
}
