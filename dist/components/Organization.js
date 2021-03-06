(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Requestable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Requestable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Requestable);
    global.Organization = mod.exports;
  }
})(this, function (module, _Requestable2) {
  'use strict';

  var _Requestable3 = _interopRequireDefault(_Requestable2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Organization = function (_Requestable) {
    _inherits(Organization, _Requestable);

    /**
     * Create a new Organization
     * @param {string} organization - the name of the organization
     * @param {Requestable.auth} [auth] - information required to authenticate to Github
     * @param {string} [apiBase=https://api.github.com] - the base Github API URL
     */
    function Organization(organization, auth, apiBase) {
      _classCallCheck(this, Organization);

      var _this = _possibleConstructorReturn(this, (Organization.__proto__ || Object.getPrototypeOf(Organization)).call(this, auth, apiBase));

      _this.__name = organization;
      return _this;
    }

    /**
     * Create a repository in an organization
     * @see https://developer.github.com/v3/repos/#create
     * @param {Object} options - the repository definition
     * @param {Requestable.callback} [cb] - will receive the created repository
     * @return {Promise} - the promise for the http request
     */


    _createClass(Organization, [{
      key: 'createRepo',
      value: function createRepo(options, cb) {
        return this._request('POST', '/orgs/' + this.__name + '/repos', options, cb);
      }
    }, {
      key: 'getRepos',
      value: function getRepos(cb) {
        var requestOptions = this._getOptionsWithDefaults({ direction: 'desc' });

        return this._requestAllPages('/orgs/' + this.__name + '/repos', requestOptions, cb);
      }
    }, {
      key: 'isMember',
      value: function isMember(username, cb) {
        return this._request204or404('/orgs/' + this.__name + '/members/' + username, null, cb);
      }
    }, {
      key: 'listMembers',
      value: function listMembers(options, cb) {
        return this._request('GET', '/orgs/' + this.__name + '/members', options, cb);
      }
    }, {
      key: 'getTeams',
      value: function getTeams(cb) {
        return this._requestAllPages('/orgs/' + this.__name + '/teams', undefined, cb);
      }
    }, {
      key: 'createTeam',
      value: function createTeam(options, cb) {
        return this._request('POST', '/orgs/' + this.__name + '/teams', options, cb);
      }
    }]);

    return Organization;
  }(_Requestable3.default);

  module.exports = Organization;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9yZ2FuaXphdGlvbi5qcyJdLCJuYW1lcyI6WyJPcmdhbml6YXRpb24iLCJvcmdhbml6YXRpb24iLCJhdXRoIiwiYXBpQmFzZSIsIl9fbmFtZSIsIm9wdGlvbnMiLCJjYiIsIl9yZXF1ZXN0IiwicmVxdWVzdE9wdGlvbnMiLCJfZ2V0T3B0aW9uc1dpdGhEZWZhdWx0cyIsImRpcmVjdGlvbiIsIl9yZXF1ZXN0QWxsUGFnZXMiLCJ1c2VybmFtZSIsIl9yZXF1ZXN0MjA0b3I0MDQiLCJ1bmRlZmluZWQiLCJSZXF1ZXN0YWJsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BWU1BLFk7OztBQUNIOzs7Ozs7QUFNQSwwQkFBWUMsWUFBWixFQUEwQkMsSUFBMUIsRUFBZ0NDLE9BQWhDLEVBQXlDO0FBQUE7O0FBQUEsOEhBQ2hDRCxJQURnQyxFQUMxQkMsT0FEMEI7O0FBRXRDLFlBQUtDLE1BQUwsR0FBY0gsWUFBZDtBQUZzQztBQUd4Qzs7QUFFRDs7Ozs7Ozs7Ozs7aUNBT1dJLE8sRUFBU0MsRSxFQUFJO0FBQ3JCLGVBQU8sS0FBS0MsUUFBTCxDQUFjLE1BQWQsYUFBK0IsS0FBS0gsTUFBcEMsYUFBb0RDLE9BQXBELEVBQTZEQyxFQUE3RCxDQUFQO0FBQ0Y7OzsrQkFRUUEsRSxFQUFJO0FBQ1YsWUFBSUUsaUJBQWlCLEtBQUtDLHVCQUFMLENBQTZCLEVBQUNDLFdBQVcsTUFBWixFQUE3QixDQUFyQjs7QUFFQSxlQUFPLEtBQUtDLGdCQUFMLFlBQStCLEtBQUtQLE1BQXBDLGFBQW9ESSxjQUFwRCxFQUFvRUYsRUFBcEUsQ0FBUDtBQUNGOzs7K0JBUVFNLFEsRUFBVU4sRSxFQUFJO0FBQ3BCLGVBQU8sS0FBS08sZ0JBQUwsWUFBK0IsS0FBS1QsTUFBcEMsaUJBQXNEUSxRQUF0RCxFQUFrRSxJQUFsRSxFQUF3RU4sRUFBeEUsQ0FBUDtBQUNGOzs7a0NBV1dELE8sRUFBU0MsRSxFQUFJO0FBQ3RCLGVBQU8sS0FBS0MsUUFBTCxDQUFjLEtBQWQsYUFBOEIsS0FBS0gsTUFBbkMsZUFBcURDLE9BQXJELEVBQThEQyxFQUE5RCxDQUFQO0FBQ0Y7OzsrQkFRUUEsRSxFQUFJO0FBQ1YsZUFBTyxLQUFLSyxnQkFBTCxZQUErQixLQUFLUCxNQUFwQyxhQUFvRFUsU0FBcEQsRUFBK0RSLEVBQS9ELENBQVA7QUFDRjs7O2lDQWNVRCxPLEVBQVNDLEUsRUFBSTtBQUNyQixlQUFPLEtBQUtDLFFBQUwsQ0FBYyxNQUFkLGFBQStCLEtBQUtILE1BQXBDLGFBQW9EQyxPQUFwRCxFQUE2REMsRUFBN0QsQ0FBUDtBQUNGOzs7O0lBbEZ1QlMscUI7O0FBcUYzQkMsU0FBT0MsT0FBUCxHQUFpQmpCLFlBQWpCIiwiZmlsZSI6Ik9yZ2FuaXphdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTMgTWljaGFlbCBBdWZyZWl0ZXIgKERldmVsb3BtZW50IFNlZWQpIGFuZCAyMDE2IFlhaG9vIEluYy5cbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIHtAbGluayBodHRwczovL3NwZHgub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZS1DbGVhci5odG1sIEJTRC0zLUNsYXVzZS1DbGVhcn0uXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cblxuaW1wb3J0IFJlcXVlc3RhYmxlIGZyb20gJy4vUmVxdWVzdGFibGUnO1xuXG4vKipcbiAqIE9yZ2FuaXphdGlvbiBlbmNhcHN1bGF0ZXMgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gY3JlYXRlIHJlcG9zaXRvcmllcyBpbiBvcmdhbml6YXRpb25zXG4gKi9cbmNsYXNzIE9yZ2FuaXphdGlvbiBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IE9yZ2FuaXphdGlvblxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9yZ2FuaXphdGlvbiAtIHRoZSBuYW1lIG9mIHRoZSBvcmdhbml6YXRpb25cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuYXV0aH0gW2F1dGhdIC0gaW5mb3JtYXRpb24gcmVxdWlyZWQgdG8gYXV0aGVudGljYXRlIHRvIEdpdGh1YlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFthcGlCYXNlPWh0dHBzOi8vYXBpLmdpdGh1Yi5jb21dIC0gdGhlIGJhc2UgR2l0aHViIEFQSSBVUkxcbiAgICAqL1xuICAgY29uc3RydWN0b3Iob3JnYW5pemF0aW9uLCBhdXRoLCBhcGlCYXNlKSB7XG4gICAgICBzdXBlcihhdXRoLCBhcGlCYXNlKTtcbiAgICAgIHRoaXMuX19uYW1lID0gb3JnYW5pemF0aW9uO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIHJlcG9zaXRvcnkgaW4gYW4gb3JnYW5pemF0aW9uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvI2NyZWF0ZVxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgcmVwb3NpdG9yeSBkZWZpbml0aW9uXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBjcmVhdGVkIHJlcG9zaXRvcnlcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlUmVwbyhvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL29yZ3MvJHt0aGlzLl9fbmFtZX0vcmVwb3NgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgcmVwb3NpdG9yaWVzIGluIGFuIG9yZ2FuaXphdGlvblxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNsaXN0LW9yZ2FuaXphdGlvbi1yZXBvc2l0b3JpZXNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgcmVwb3NpdG9yaWVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFJlcG9zKGNiKSB7XG4gICAgICBsZXQgcmVxdWVzdE9wdGlvbnMgPSB0aGlzLl9nZXRPcHRpb25zV2l0aERlZmF1bHRzKHtkaXJlY3Rpb246ICdkZXNjJ30pO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKGAvb3Jncy8ke3RoaXMuX19uYW1lfS9yZXBvc2AsIHJlcXVlc3RPcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogUXVlcnkgaWYgdGhlIHVzZXIgaXMgYSBtZW1iZXIgb3Igbm90XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgLSB0aGUgdXNlciBpbiBxdWVzdGlvblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSB1c2VyIGlzIGEgbWVtYmVyXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGlzTWVtYmVyKHVzZXJuYW1lLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QyMDRvcjQwNChgL29yZ3MvJHt0aGlzLl9fbmFtZX0vbWVtYmVycy8ke3VzZXJuYW1lfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSB1c2VycyB3aG8gYXJlIG1lbWJlcnMgb2YgdGhlIGNvbXBhbnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL21lbWJlcnMvI21lbWJlcnMtbGlzdFxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBmaWx0ZXJpbmcgb3B0aW9uc1xuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmZpbHRlcj1hbGxdIC0gY2FuIGJlIGVpdGhlciBgMmZhX2Rpc2FibGVkYCBvciBgYWxsYFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnJvbGU9YWxsXSAtIGNhbiBiZSBvbmUgb2Y6IGBhbGxgLCBgYWRtaW5gLCBvciBgbWVtYmVyYFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiB1c2Vyc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0TWVtYmVycyhvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvb3Jncy8ke3RoaXMuX19uYW1lfS9tZW1iZXJzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIFRlYW1zIGluIHRoZSBPcmdhbml6YXRpb25cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL3RlYW1zLyNsaXN0LXRlYW1zXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHRlYW1zXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFRlYW1zKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKGAvb3Jncy8ke3RoaXMuX19uYW1lfS90ZWFtc2AsIHVuZGVmaW5lZCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIHRlYW1cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL3RlYW1zLyNjcmVhdGUtdGVhbVxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUZWFtIGNyZWF0aW9uIHBhcmFtZXRlcnNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgdGVhbVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmRlc2NyaXB0aW9uXSAtIFRlYW0gZGVzY3JpcHRpb25cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5yZXBvX25hbWVzXSAtIFJlcG9zIHRvIGFkZCB0aGUgdGVhbSB0b1xuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnByaXZhY3k9c2VjcmV0XSAtIFRoZSBsZXZlbCBvZiBwcml2YWN5IHRoZSB0ZWFtIHNob3VsZCBoYXZlLiBDYW4gYmUgZWl0aGVyIG9uZVxuICAgICogb2Y6IGBzZWNyZXRgLCBvciBgY2xvc2VkYFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgY3JlYXRlZCB0ZWFtXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZVRlYW0ob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9vcmdzLyR7dGhpcy5fX25hbWV9L3RlYW1zYCwgb3B0aW9ucywgY2IpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9yZ2FuaXphdGlvbjtcbiJdfQ==
//# sourceMappingURL=Organization.js.map
