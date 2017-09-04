export default {
	entry: '../graphtax-core-build/index.js',
	dest: '../graphtax-core-build/bundles/graphtax-core.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'ng.graphtax-core',
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common',
		'@angular/router': 'ng.router',
		'@angular/material': 'ng.material',
		'rxjs/Observable': 'Rx',
		'rxjs/ReplaySubject': 'Rx',
		'rxjs/add/operator/map': 'Rx.Observable.prototype',
		'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
		'rxjs/add/observable/fromEvent': 'Rx.Observable',
		'rxjs/add/observable/of': 'Rx.Observable'
	}
}
