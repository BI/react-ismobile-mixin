# react-ismobile-mixin

This is a React mixin to determine if your app has been resized into "mobile mode." Just add it as a mixin, and all you need to do to use it is check one of two functions:

* `this.isMobile()`: returns true if the current width is <= the pivot point (default: 740)
* `this.didMobileChange(otherProps, otherState)`: Useful for updates, this will tell you whether the mobile status has changed from the current state to the supplied state.

If you want to change the pivot point, you can call `IsMobileMixin.makeCustomMixin(yourPivotPoint)`.