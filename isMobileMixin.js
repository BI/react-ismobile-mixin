var DEFAULT_PIVOT = 740;

function makeMixin(mobilePivot) {
  return {
    isMobile: function() {
      return this.state._mobile.width <= mobilePivot;
    },

    getInitialState: function() {
      return {
        _mobile: {
          width: window.innerWidth
        }
      };
    },

    didMobileUpdate: function(nextProps, nextState) {
      var isMobile = this.state._mobile.width <= mobilePivot;
      var willBeMobile = nextState._mobile.width <= mobilePivot;

      return isMobile !== willBeMobile;
    },

    componentDidMount: function() {
      if(window.addEventListener) {
        window.addEventListener('resize', this._onResize);
      } else if (window.attachEvent) {
        window.attachEvent('onresize', this._onResize);
      } else {
        window.onresize = this._onResize;
      }
    },

    componentWillUnmount: function() {
      clearTimeout(this._updateTimer);
      if(window.addEventListener) {
        window.removeEventListener('resize', this._onResize);
      } else if (window.attachEvent) {
        window.detachEvent('onresize', this._onResize);
      } else {
        window.onresize = function(){};
      }
    },

    _onResize: function() {
      clearTimeout(this._updateTimer);
      this._updateTimer = setTimeout(this._updateSize, 16);
    },

    _updateSize: function() {
      this.setState({
        _mobile: {
          width: window.innerWidth
        }
      });
    }
  };
}

var IsMobileMixin = makeMixin(DEFAULT_PIVOT);
IsMobileMixin.makeCustomMixin = makeMixin;

module.exports = IsMobileMixin;