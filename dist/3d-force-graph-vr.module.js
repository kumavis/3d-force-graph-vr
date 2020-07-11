import 'aframe';
import 'aframe-extras';
import 'aframe-forcegraph-component';
import Kapsule from 'kapsule';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".graph-nav-info {\n  position: absolute;\n  bottom: 5px;\n  width: 100%;\n  text-align: center;\n  color: slategrey;\n  opacity: 0.7;\n  font-size: 10px;\n  font-family: Sans-serif;\n  z-index: 1000;\n}";
styleInject(css_248z);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _3dForceGraphVr = Kapsule({
  props: {
    width: {
      "default": window.innerWidth,
      triggerUpdate: false,
      onChange: function onChange(width, state) {
        if (state.container) state.container.style.width = width;
      }
    },
    height: {
      "default": window.innerHeight,
      triggerUpdate: false,
      onChange: function onChange(height, state) {
        if (state.container) state.container.style.height = height;
      }
    },
    jsonUrl: {},
    graphData: {
      "default": {
        nodes: [],
        links: []
      }
    },
    numDimensions: {
      "default": 3
    },
    dagMode: {},
    dagLevelDistance: {},
    dagNodeFilter: {
      "default": function _default() {
        return true;
      }
    },
    onDagError: {
      "default": undefined
    },
    backgroundColor: {
      "default": '#002'
    },
    showNavInfo: {
      "default": true
    },
    nodeRelSize: {
      "default": 4
    },
    // volume per val unit
    nodeId: {
      "default": 'id'
    },
    nodeLabel: {
      "default": 'name'
    },
    nodeDesc: {
      "default": 'desc'
    },
    onNodeCenterHover: {},
    nodeVal: {
      "default": 'val'
    },
    nodeResolution: {
      "default": 8
    },
    // how many slice segments in the sphere's circumference
    nodeVisibility: {
      "default": true
    },
    nodeColor: {
      "default": 'color'
    },
    nodeAutoColorBy: {},
    nodeOpacity: {
      "default": 0.75
    },
    nodeThreeObject: {},
    nodeThreeObjectExtend: {
      "default": false
    },
    linkSource: {
      "default": 'source'
    },
    linkTarget: {
      "default": 'target'
    },
    linkLabel: {
      "default": 'name'
    },
    linkDesc: {
      "default": 'desc'
    },
    onLinkCenterHover: {},
    linkHoverPrecision: {
      "default": 2
    },
    linkVisibility: {
      "default": true
    },
    linkColor: {
      "default": 'color'
    },
    linkAutoColorBy: {},
    linkOpacity: {
      "default": 0.2
    },
    linkWidth: {
      "default": 0
    },
    linkResolution: {
      "default": 6
    },
    // how many radial segments in each line cylinder's geometry
    linkCurvature: {
      "default": 0
    },
    linkCurveRotation: {
      "default": 0
    },
    linkMaterial: {},
    linkThreeObject: {},
    linkThreeObjectExtend: {
      "default": false
    },
    linkPositionUpdate: {},
    linkDirectionalArrowLength: {
      "default": 0
    },
    linkDirectionalArrowColor: {},
    linkDirectionalArrowRelPos: {
      "default": 0.5
    },
    // value between 0<>1 indicating the relative pos along the (exposed) line
    linkDirectionalArrowResolution: {
      "default": 8
    },
    // how many slice segments in the arrow's conic circumference
    linkDirectionalParticles: {
      "default": 0
    },
    // animate photons travelling in the link direction
    linkDirectionalParticleSpeed: {
      "default": 0.01
    },
    // in link length ratio per frame
    linkDirectionalParticleWidth: {
      "default": 0.5
    },
    linkDirectionalParticleColor: {},
    linkDirectionalParticleResolution: {
      "default": 4
    },
    // how many slice segments in the particle sphere's circumference
    forceEngine: {
      "default": 'd3'
    },
    // d3 or ngraph
    d3AlphaMin: {
      "default": 0
    },
    d3AlphaDecay: {
      "default": 0.0228
    },
    d3VelocityDecay: {
      "default": 0.4
    },
    ngraphPhysics: {},
    warmupTicks: {
      "default": 0
    },
    // how many times to tick the force engine at init before starting to render
    cooldownTicks: {},
    cooldownTime: {
      "default": 15000
    },
    // ms
    onEngineTick: {},
    onEngineStop: {}
  },
  methods: _objectSpread2(_objectSpread2({}, Object.assign.apply(Object, [{}].concat(_toConsumableArray(['getGraphBbox', 'emitParticle', 'd3Force', 'd3ReheatSimulation', 'refresh'].map(function (method) {
    return _defineProperty({}, method, function (state) {
      var aframeComp = state.forcegraph.components.forcegraph;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var returnVal = aframeComp[method].apply(aframeComp, args);
      return returnVal === aframeComp ? this // chain based on this object, not the inner aframe component
      : returnVal;
    });
  }))))), {}, {
    _destructor: function _destructor() {
      this.graphData({
        nodes: [],
        links: []
      });
    }
  }),
  init: function init(domNode, state) {
    var scale = 0.001; // Wipe DOM

    domNode.innerHTML = '';
    state.container = document.createElement('div');
    domNode.appendChild(state.container);
    state.container.style.position = 'relative';
    state.container.style.width = state.width;
    state.container.style.height = state.height; // Add nav info section

    state.container.appendChild(state.navInfo = document.createElement('div'));
    state.navInfo.className = 'graph-nav-info';
    state.navInfo.textContent = 'Mouse drag: look, gamepad/arrow/wasd keys: move'; // Create scene

    var scene = document.createElement('a-scene');
    scene.setAttribute('embedded', ''); //scene.setAttribute('stats', null);

    scene.appendChild(state.sky = document.createElement('a-sky'));
    state.sky.setAttribute('radius', 5000); // Add camera and cursor

    var cameraG;
    scene.appendChild(cameraG = document.createElement('a-entity'));
    cameraG.setAttribute('position', "0 0 ".concat(300 * scale));
    cameraG.setAttribute('movement-controls', "fly: true; speed: ".concat(50 * scale));
    var camera;
    cameraG.appendChild(camera = document.createElement('a-entity'));
    camera.setAttribute('camera', '');
    camera.setAttribute('position', '0 0.001 0');
    camera.setAttribute('look-controls', 'reverseMouseDrag: false; pointerLockEnabled: true');
    var cursor;
    camera.appendChild(cursor = document.createElement('a-cursor'));
    cursor.setAttribute('color', 'lavender');
    cursor.setAttribute('opacity', 0.5);
    cursor.setAttribute('raycaster', 'objects: ----none----'); // disable cursor raycaster
    // Add forcegraph entity

    scene.appendChild(state.forcegraph = document.createElement('a-entity'));
    state.forcegraph.setAttribute('forcegraph', null);
    state.forcegraph.setAttribute('position', '0 1.5 0');
    state.forcegraph.object3D.scale.multiplyScalar(scale); // attach scene

    state.container.appendChild(scene);
  },
  update: function update(state, changedProps) {
    changedProps.hasOwnProperty('backgroundColor') && state.sky.setAttribute('color', state.backgroundColor);
    changedProps.hasOwnProperty('showNavInfo') && (state.navInfo.style.display = state.showNavInfo ? null : 'none');
    var passThroughProps = ['jsonUrl', 'numDimensions', 'dagMode', 'dagLevelDistance', 'dagNodeFilter', 'onDagError', 'nodeRelSize', 'nodeId', 'nodeLabel', 'nodeDesc', 'onNodeCenterHover', 'nodeVal', 'nodeResolution', 'nodeVisibility', 'nodeColor', 'nodeAutoColorBy', 'nodeOpacity', 'nodeThreeObject', 'nodeThreeObjectExtend', 'linkSource', 'linkTarget', 'linkLabel', 'linkDesc', 'onLinkCenterHover', 'linkHoverPrecision', 'linkVisibility', 'linkColor', 'linkAutoColorBy', 'linkOpacity', 'linkWidth', 'linkResolution', 'linkCurvature', 'linkCurveRotation', 'linkMaterial', 'linkThreeObject', 'linkThreeObjectExtend', 'linkPositionUpdate', 'linkDirectionalArrowLength', 'linkDirectionalArrowColor', 'linkDirectionalArrowRelPos', 'linkDirectionalArrowResolution', 'linkDirectionalParticles', 'linkDirectionalParticleSpeed', 'linkDirectionalParticleWidth', 'linkDirectionalParticleColor', 'linkDirectionalParticleResolution', 'forceEngine', 'd3AlphaMin', 'd3AlphaDecay', 'd3VelocityDecay', 'ngraphPhysics', 'warmupTicks', 'cooldownTicks', 'cooldownTime', 'onEngineTick', 'onEngineStop'];
    var newProps = Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.entries(state).filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          prop = _ref3[0],
          val = _ref3[1];

      return changedProps.hasOwnProperty(prop) && passThroughProps.indexOf(prop) != -1 && val !== undefined && val !== null;
    }).map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          key = _ref5[0],
          val = _ref5[1];

      return _defineProperty({}, key, val);
    })), _toConsumableArray(Object.entries(state.graphData).map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
          key = _ref8[0],
          val = _ref8[1];

      return _defineProperty({}, key, val);
    }))));
    state.forcegraph.setAttribute('forcegraph', newProps);
  }
});

export default _3dForceGraphVr;
