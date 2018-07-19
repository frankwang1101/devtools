'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = developerFlow;

var _processHtml = require('./process-html');

var _processHtml2 = _interopRequireDefault(_processHtml);

var _processJs = require('./process-js');

var _processJs2 = _interopRequireDefault(_processJs);

var _processSwan = require('./process-swan');

var _processSwan2 = _interopRequireDefault(_processSwan);

var _processCss = require('./process-css');

var _processCss2 = _interopRequireDefault(_processCss);

var _processJson = require('./process-json');

var _processJson2 = _interopRequireDefault(_processJson);

var _processImage = require('./process-image');

var _processImage2 = _interopRequireDefault(_processImage);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeSpecialFlow(appConfig, basePath, workPath, defaultDeployPath, swanCorePath, options, errorFn, isLoopEnd) {
    (0, _processHtml2.default)(appConfig, basePath, workPath, defaultDeployPath, swanCorePath, options, errorFn, isLoopEnd);
    (0, _processJs2.default)(appConfig, workPath, defaultDeployPath, options, errorFn, isLoopEnd);
    (0, _processSwan2.default)(basePath, workPath, defaultDeployPath, swanCorePath, options, errorFn, isLoopEnd);
    (0, _processCss2.default)(appConfig, basePath, workPath, defaultDeployPath, options, errorFn, isLoopEnd);
    (0, _processJson2.default)(appConfig, basePath, workPath, defaultDeployPath, options, errorFn, isLoopEnd);
    (0, _processImage2.default)(appConfig, basePath, workPath, defaultDeployPath, options, errorFn, isLoopEnd);
} /**
   * @file 编译开发者文件(.swan、.js、.json、css、image)
   * @author zhuxin04
   */
function developerFlow(appConfig, basePath, workPath, defaultDeployPath, swanCorePath, options, errorFn) {
    var allPackagesConfig = (0, _util.getAllPackages)(appConfig, basePath, workPath, defaultDeployPath, swanCorePath, options, errorFn);
    var configLen = allPackagesConfig.length;
    var isEnd = false;
    if (options.subPackage) {
        allPackagesConfig.map(function (packageConfig, index) {
            var deployPath = packageConfig.deployPath;
            var excludePackages = allPackagesConfig.filter(function (checkConfig) {
                return checkConfig.packageName !== packageConfig.packageName;
            });
            options.excludePackages = packageConfig.isMain ? excludePackages : [];
            options.usingPackage = packageConfig;
            isEnd = index === configLen - 1;
            makeSpecialFlow(appConfig, basePath, workPath, deployPath, swanCorePath, options, errorFn, isEnd);
        });
    } else {
        allPackagesConfig.map(function (packageConfig, index) {
            var deployPath = packageConfig.deployPath;
            options.excludePackages = [];
            options.usingPackage = packageConfig;
            isEnd = index === configLen - 1;
            makeSpecialFlow(appConfig, basePath, workPath, deployPath, swanCorePath, options, errorFn, isEnd);
        });
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXZlbG9wZXItZmxvdy5qcyJdLCJuYW1lcyI6WyJkZXZlbG9wZXJGbG93IiwibWFrZVNwZWNpYWxGbG93IiwiYXBwQ29uZmlnIiwiYmFzZVBhdGgiLCJ3b3JrUGF0aCIsImRlZmF1bHREZXBsb3lQYXRoIiwic3dhbkNvcmVQYXRoIiwib3B0aW9ucyIsImVycm9yRm4iLCJpc0xvb3BFbmQiLCJhbGxQYWNrYWdlc0NvbmZpZyIsImNvbmZpZ0xlbiIsImxlbmd0aCIsImlzRW5kIiwic3ViUGFja2FnZSIsIm1hcCIsInBhY2thZ2VDb25maWciLCJpbmRleCIsImRlcGxveVBhdGgiLCJleGNsdWRlUGFja2FnZXMiLCJmaWx0ZXIiLCJjaGVja0NvbmZpZyIsInBhY2thZ2VOYW1lIiwiaXNNYWluIiwidXNpbmdQYWNrYWdlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFxQndCQSxhOztBQWpCeEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxTQUFTQyxlQUFULENBQXlCQyxTQUF6QixFQUFvQ0MsUUFBcEMsRUFBOENDLFFBQTlDLEVBQXdEQyxpQkFBeEQsRUFBMkVDLFlBQTNFLEVBQXlGQyxPQUF6RixFQUFrR0MsT0FBbEcsRUFBMkdDLFNBQTNHLEVBQXNIO0FBQ2xILCtCQUFZUCxTQUFaLEVBQXVCQyxRQUF2QixFQUFpQ0MsUUFBakMsRUFBMkNDLGlCQUEzQyxFQUE4REMsWUFBOUQsRUFBNEVDLE9BQTVFLEVBQXFGQyxPQUFyRixFQUE4RkMsU0FBOUY7QUFDQSw2QkFBVVAsU0FBVixFQUFxQkUsUUFBckIsRUFBK0JDLGlCQUEvQixFQUFrREUsT0FBbEQsRUFBMkRDLE9BQTNELEVBQW9FQyxTQUFwRTtBQUNBLCtCQUFZTixRQUFaLEVBQXNCQyxRQUF0QixFQUFnQ0MsaUJBQWhDLEVBQW1EQyxZQUFuRCxFQUFpRUMsT0FBakUsRUFBMEVDLE9BQTFFLEVBQW1GQyxTQUFuRjtBQUNBLDhCQUFXUCxTQUFYLEVBQXNCQyxRQUF0QixFQUFnQ0MsUUFBaEMsRUFBMENDLGlCQUExQyxFQUE2REUsT0FBN0QsRUFBc0VDLE9BQXRFLEVBQStFQyxTQUEvRTtBQUNBLCtCQUFZUCxTQUFaLEVBQXVCQyxRQUF2QixFQUFpQ0MsUUFBakMsRUFBMkNDLGlCQUEzQyxFQUE4REUsT0FBOUQsRUFBdUVDLE9BQXZFLEVBQWdGQyxTQUFoRjtBQUNBLGdDQUFhUCxTQUFiLEVBQXdCQyxRQUF4QixFQUFrQ0MsUUFBbEMsRUFBNENDLGlCQUE1QyxFQUErREUsT0FBL0QsRUFBd0VDLE9BQXhFLEVBQWlGQyxTQUFqRjtBQUNILEMsQ0FuQkQ7Ozs7QUFxQmUsU0FBU1QsYUFBVCxDQUF1QkUsU0FBdkIsRUFBa0NDLFFBQWxDLEVBQTRDQyxRQUE1QyxFQUFzREMsaUJBQXRELEVBQXlFQyxZQUF6RSxFQUNYQyxPQURXLEVBQ0ZDLE9BREUsRUFDTztBQUNsQixRQUFNRSxvQkFBb0IsMEJBQWVSLFNBQWYsRUFBMEJDLFFBQTFCLEVBQW9DQyxRQUFwQyxFQUE4Q0MsaUJBQTlDLEVBQWlFQyxZQUFqRSxFQUErRUMsT0FBL0UsRUFBd0ZDLE9BQXhGLENBQTFCO0FBQ0EsUUFBTUcsWUFBWUQsa0JBQWtCRSxNQUFwQztBQUNBLFFBQUlDLFFBQVEsS0FBWjtBQUNBLFFBQUlOLFFBQVFPLFVBQVosRUFBd0I7QUFDcEJKLDBCQUFrQkssR0FBbEIsQ0FBc0IsVUFBVUMsYUFBVixFQUF5QkMsS0FBekIsRUFBZ0M7QUFDbEQsZ0JBQU1DLGFBQWFGLGNBQWNFLFVBQWpDO0FBQ0EsZ0JBQU1DLGtCQUFrQlQsa0JBQWtCVSxNQUFsQixDQUF5QixVQUFVQyxXQUFWLEVBQXVCO0FBQ3BFLHVCQUFPQSxZQUFZQyxXQUFaLEtBQTRCTixjQUFjTSxXQUFqRDtBQUNILGFBRnVCLENBQXhCO0FBR0FmLG9CQUFRWSxlQUFSLEdBQTBCSCxjQUFjTyxNQUFkLEdBQXVCSixlQUF2QixHQUF5QyxFQUFuRTtBQUNBWixvQkFBUWlCLFlBQVIsR0FBdUJSLGFBQXZCO0FBQ0FILG9CQUFRSSxVQUFVTixZQUFZLENBQTlCO0FBQ0FWLDRCQUFnQkMsU0FBaEIsRUFBMkJDLFFBQTNCLEVBQXFDQyxRQUFyQyxFQUErQ2MsVUFBL0MsRUFBMkRaLFlBQTNELEVBQXlFQyxPQUF6RSxFQUFrRkMsT0FBbEYsRUFBMkZLLEtBQTNGO0FBQ0gsU0FURDtBQVVILEtBWEQsTUFXTztBQUNISCwwQkFBa0JLLEdBQWxCLENBQXNCLFVBQVVDLGFBQVYsRUFBeUJDLEtBQXpCLEVBQWdDO0FBQ2xELGdCQUFNQyxhQUFhRixjQUFjRSxVQUFqQztBQUNBWCxvQkFBUVksZUFBUixHQUEwQixFQUExQjtBQUNBWixvQkFBUWlCLFlBQVIsR0FBdUJSLGFBQXZCO0FBQ0FILG9CQUFRSSxVQUFVTixZQUFZLENBQTlCO0FBQ0FWLDRCQUFnQkMsU0FBaEIsRUFBMkJDLFFBQTNCLEVBQXFDQyxRQUFyQyxFQUErQ2MsVUFBL0MsRUFBMkRaLFlBQTNELEVBQXlFQyxPQUF6RSxFQUFrRkMsT0FBbEYsRUFBMkZLLEtBQTNGO0FBQ0gsU0FORDtBQU9IO0FBQ0oiLCJmaWxlIjoiZGV2ZWxvcGVyLWZsb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIOe8luivkeW8gOWPkeiAheaWh+S7tiguc3dhbuOAgS5qc+OAgS5qc29u44CBY3Nz44CBaW1hZ2UpXG4gKiBAYXV0aG9yIHpodXhpbjA0XG4gKi9cbmltcG9ydCBwcm9jZXNzSHRtbCBmcm9tICcuL3Byb2Nlc3MtaHRtbCc7XG5pbXBvcnQgcHJvY2Vzc0pzIGZyb20gJy4vcHJvY2Vzcy1qcyc7XG5pbXBvcnQgcHJvY2Vzc1N3YW4gZnJvbSAnLi9wcm9jZXNzLXN3YW4nO1xuaW1wb3J0IHByb2Nlc3NDc3MgZnJvbSAnLi9wcm9jZXNzLWNzcyc7XG5pbXBvcnQgcHJvY2Vzc0pzb24gZnJvbSAnLi9wcm9jZXNzLWpzb24nO1xuaW1wb3J0IHByb2Nlc3NJbWFnZSBmcm9tICcuL3Byb2Nlc3MtaW1hZ2UnO1xuaW1wb3J0IHtnZXRBbGxQYWNrYWdlc30gZnJvbSAnLi91dGlsJztcblxuZnVuY3Rpb24gbWFrZVNwZWNpYWxGbG93KGFwcENvbmZpZywgYmFzZVBhdGgsIHdvcmtQYXRoLCBkZWZhdWx0RGVwbG95UGF0aCwgc3dhbkNvcmVQYXRoLCBvcHRpb25zLCBlcnJvckZuLCBpc0xvb3BFbmQpIHtcbiAgICBwcm9jZXNzSHRtbChhcHBDb25maWcsIGJhc2VQYXRoLCB3b3JrUGF0aCwgZGVmYXVsdERlcGxveVBhdGgsIHN3YW5Db3JlUGF0aCwgb3B0aW9ucywgZXJyb3JGbiwgaXNMb29wRW5kKTtcbiAgICBwcm9jZXNzSnMoYXBwQ29uZmlnLCB3b3JrUGF0aCwgZGVmYXVsdERlcGxveVBhdGgsIG9wdGlvbnMsIGVycm9yRm4sIGlzTG9vcEVuZCk7XG4gICAgcHJvY2Vzc1N3YW4oYmFzZVBhdGgsIHdvcmtQYXRoLCBkZWZhdWx0RGVwbG95UGF0aCwgc3dhbkNvcmVQYXRoLCBvcHRpb25zLCBlcnJvckZuLCBpc0xvb3BFbmQpO1xuICAgIHByb2Nlc3NDc3MoYXBwQ29uZmlnLCBiYXNlUGF0aCwgd29ya1BhdGgsIGRlZmF1bHREZXBsb3lQYXRoLCBvcHRpb25zLCBlcnJvckZuLCBpc0xvb3BFbmQpO1xuICAgIHByb2Nlc3NKc29uKGFwcENvbmZpZywgYmFzZVBhdGgsIHdvcmtQYXRoLCBkZWZhdWx0RGVwbG95UGF0aCwgb3B0aW9ucywgZXJyb3JGbiwgaXNMb29wRW5kKTtcbiAgICBwcm9jZXNzSW1hZ2UoYXBwQ29uZmlnLCBiYXNlUGF0aCwgd29ya1BhdGgsIGRlZmF1bHREZXBsb3lQYXRoLCBvcHRpb25zLCBlcnJvckZuLCBpc0xvb3BFbmQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXZlbG9wZXJGbG93KGFwcENvbmZpZywgYmFzZVBhdGgsIHdvcmtQYXRoLCBkZWZhdWx0RGVwbG95UGF0aCwgc3dhbkNvcmVQYXRoLFxuICAgIG9wdGlvbnMsIGVycm9yRm4pIHtcbiAgICBjb25zdCBhbGxQYWNrYWdlc0NvbmZpZyA9IGdldEFsbFBhY2thZ2VzKGFwcENvbmZpZywgYmFzZVBhdGgsIHdvcmtQYXRoLCBkZWZhdWx0RGVwbG95UGF0aCwgc3dhbkNvcmVQYXRoLCBvcHRpb25zLCBlcnJvckZuKTtcbiAgICBjb25zdCBjb25maWdMZW4gPSBhbGxQYWNrYWdlc0NvbmZpZy5sZW5ndGg7XG4gICAgbGV0IGlzRW5kID0gZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMuc3ViUGFja2FnZSkge1xuICAgICAgICBhbGxQYWNrYWdlc0NvbmZpZy5tYXAoZnVuY3Rpb24gKHBhY2thZ2VDb25maWcsIGluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBkZXBsb3lQYXRoID0gcGFja2FnZUNvbmZpZy5kZXBsb3lQYXRoO1xuICAgICAgICAgICAgY29uc3QgZXhjbHVkZVBhY2thZ2VzID0gYWxsUGFja2FnZXNDb25maWcuZmlsdGVyKGZ1bmN0aW9uIChjaGVja0NvbmZpZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja0NvbmZpZy5wYWNrYWdlTmFtZSAhPT0gcGFja2FnZUNvbmZpZy5wYWNrYWdlTmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgb3B0aW9ucy5leGNsdWRlUGFja2FnZXMgPSBwYWNrYWdlQ29uZmlnLmlzTWFpbiA/IGV4Y2x1ZGVQYWNrYWdlcyA6IFtdO1xuICAgICAgICAgICAgb3B0aW9ucy51c2luZ1BhY2thZ2UgPSBwYWNrYWdlQ29uZmlnO1xuICAgICAgICAgICAgaXNFbmQgPSBpbmRleCA9PT0gY29uZmlnTGVuIC0gMTtcbiAgICAgICAgICAgIG1ha2VTcGVjaWFsRmxvdyhhcHBDb25maWcsIGJhc2VQYXRoLCB3b3JrUGF0aCwgZGVwbG95UGF0aCwgc3dhbkNvcmVQYXRoLCBvcHRpb25zLCBlcnJvckZuLCBpc0VuZCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsbFBhY2thZ2VzQ29uZmlnLm1hcChmdW5jdGlvbiAocGFja2FnZUNvbmZpZywgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlcGxveVBhdGggPSBwYWNrYWdlQ29uZmlnLmRlcGxveVBhdGg7XG4gICAgICAgICAgICBvcHRpb25zLmV4Y2x1ZGVQYWNrYWdlcyA9IFtdO1xuICAgICAgICAgICAgb3B0aW9ucy51c2luZ1BhY2thZ2UgPSBwYWNrYWdlQ29uZmlnO1xuICAgICAgICAgICAgaXNFbmQgPSBpbmRleCA9PT0gY29uZmlnTGVuIC0gMTtcbiAgICAgICAgICAgIG1ha2VTcGVjaWFsRmxvdyhhcHBDb25maWcsIGJhc2VQYXRoLCB3b3JrUGF0aCwgZGVwbG95UGF0aCwgc3dhbkNvcmVQYXRoLCBvcHRpb25zLCBlcnJvckZuLCBpc0VuZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=