!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(t,r,a){for(var i,c,s=0,l=[];s<t.length;s++)c=t[s],o[c]&&l.push(o[c][0]),o[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);for(n&&n(t,r,a);l.length;)l.shift()()};var r={},o={5:0};return t.e=function(e){function n(){a.onerror=a.onload=null,clearTimeout(i);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}if(0===o[e])return Promise.resolve();if(o[e])return o[e][2];var r=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,t.nc&&a.setAttribute("nonce",t.nc),a.src=t.p+""+e+"."+{0:"5b5e5da61b7aefdacd54",1:"69421dc7d6cc11f096ef",2:"0029eaa4d63ab9ec9169",3:"17dcae40fd2a839b83fe",4:"efb489e4f200a24de338"}[e]+".chunk.js";var i=setTimeout(n,12e4);a.onerror=a.onload=n,r.appendChild(a);var c=new Promise(function(t,n){o[e]=[t,n]});return o[e][2]=c},t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t.oe=function(e){throw console.error(e),e},t(t.s=57)}([function(e,t,n){e.exports=n(1)(0)},function(e,t){e.exports=vendor_60e34ae1ecc85a858e7e},function(e,t,n){e.exports=n(1)(400)},function(e,t,n){e.exports=n(1)(231)},function(e,t,n){e.exports=n(1)(36)},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(10),c=function(){function e(e){this.http=e}return e.prototype.get=function(e,t){return this.http.get(e,void 0)},e.prototype.post=function(e,t,n){return this.http.post(e,t,n)},e}();c=r([a.Injectable(),o("design:paramtypes",[i.ApiGatewayService])],c),t.DataService=c},function(e,t,n){"use strict";var r=function(){function e(){}return e.getValidatorErrorMessage=function(e,t){var n={required:"This is a required field",minlength:"Minimum length is "+t,maxlength:"Maximum length is "+t,invalidCreditCard:"Invalid credit card number",invalidEmailAddress:"Invalid email address",invalidPassword:"Password must be at least 6 characters long, and contain a number and special character."};return n[e]},e.creditCardValidator=function(e){return e.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)?void 0:{invalidCreditCard:!0}},e.emailValidator=function(e){return e.value.match(/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)?void 0:{invalidEmailAddress:!0}},e.passwordValidator=function(e){return e.value.match(/^(?=.*[0-9])[a-zA-Z0-9!"@#$%^&*]{6,100}$/)?void 0:{invalidPassword:!0}},e}();t.ValidationService=r},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(2),c=n(35),s=function(){function e(e){this.router=e}return e.prototype.logout=function(){sessionStorage.clear(),this.router.navigate(["/login"])},e.prototype.isLoggedIn=function(){return void 0!==this.user(void 0)},e.prototype.user=function(e){e&&sessionStorage.setItem("user",JSON.stringify(e));var t=JSON.parse(sessionStorage.getItem("user"));return t&&(e=new c.User(t.displayName,t.roles)),e?e:void 0},e.prototype.setAuth=function(e){e&&e.user&&sessionStorage.setItem("user",JSON.stringify(e.user))},e}();s=r([a.Injectable(),o("design:paramtypes",[i.Router])],s),t.AuthService=s},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=function(){function e(){}return e.prototype.ngOnInit=function(){console.log("home component loaded")},e}();i=r([a.Component({selector:"appc-home",styles:[n(47)],template:n(40)}),o("design:paramtypes",[])],i),t.HomeComponent=i},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(4),c=n(6),s=function(){function e(){}return e.prototype.toControlGroup=function(e){var t={};return e.forEach(function(e){var n=[];e.required&&n.push(i.Validators.required),e.minlength&&n.push(i.Validators.minLength(e.minlength)),e.maxlength&&n.push(i.Validators.minLength(e.maxlength)),"email"===e.type&&n.push(c.ValidationService.emailValidator),"password"===e.type&&n.push(c.ValidationService.passwordValidator),t[e.key]=new i.FormControl(e.value||"",n)}),new i.FormGroup(t)},e}();s=r([a.Injectable(),o("design:paramtypes",[])],s),t.FormControlService=s},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};n(14),n(50),n(54),n(55),n(53);var a=n(0),i=n(3),c=n(14),s=n(56),l=n(12),f=function(){function e(){this.headers={},this.params={},this.data={}}return e}();t.ApiGatewayOptions=f;var u=function(){function e(e,t){this.http=e,this.httpErrorHandler=t,this.pendingCommandsSubject=new s.Subject,this.pendingCommandCount=0,this.pendingCommands$=this.pendingCommandsSubject.asObservable()}return e.prototype.get=function(e,t){var n=new f;return n.method=i.RequestMethod.Get,n.url=e,n.params=t,this.request(n)},e.prototype.post=function(e,t,n){t||(t=n,n={});var r=new f;return r.method=i.RequestMethod.Post,r.url=e,r.params=n,r.data=t,this.request(r)},e.prototype.request=function(e){var t=this;e.method=e.method||i.RequestMethod.Get,e.url=e.url||"",e.headers=e.headers||{},e.params=e.params||{},e.data=e.data||{},this.interpolateUrl(e),this.addXsrfToken(e),this.addContentType(e);var n=new i.RequestOptions;n.method=e.method,n.url=e.url,n.headers=e.headers,n.search=this.buildUrlSearchParams(e.params),n.body=JSON.stringify(e.data);var r=e.method!==i.RequestMethod.Get;r&&this.pendingCommandsSubject.next(++this.pendingCommandCount);var o=this.http.request(e.url,n).catch(function(e){return t.httpErrorHandler.handle(e),c.Observable.throw(e)}).map(this.unwrapHttpValue).catch(function(e){return c.Observable.throw(t.unwrapHttpError(e))}).finally(function(){r&&t.pendingCommandsSubject.next(--t.pendingCommandCount)});return o},e.prototype.addContentType=function(e){return e.method!==i.RequestMethod.Get&&(e.headers["Content-Type"]="application/json; charset=UTF-8"),e},e.prototype.addAuthToken=function(e){return e.headers.Authorization="Bearer "+JSON.parse(sessionStorage.getItem("accessToken")),e},e.prototype.extractValue=function(e,t){var n=e[t];return delete e[t],n},e.prototype.addXsrfToken=function(e){var t=this.getXsrfCookie();return t&&(e.headers["X-XSRF-TOKEN"]=t),e},e.prototype.getXsrfCookie=function(){var e=document.cookie.match(/\bXSRF-TOKEN=([^\s;]+)/);try{return e&&decodeURIComponent(e[1])}catch(e){return""}},e.prototype.addCors=function(e){return e.headers["Access-Control-Allow-Origin"]="*",e},e.prototype.buildUrlSearchParams=function(e){var t=new i.URLSearchParams;for(var n in e)e.hasOwnProperty(n)&&t.append(n,e[n]);return t},e.prototype.interpolateUrl=function(e){var t=this;return e.url=e.url.replace(/:([a-zA-Z]+[\w-]*)/g,function(n,r){return e.params.hasOwnProperty(r)?t.extractValue(e.params,r):e.data.hasOwnProperty(r)?t.extractValue(e.data,r):""}),e.url=e.url.replace(/\/{2,}/g,"/"),e.url=e.url.replace(/\/+$/g,""),e},e.prototype.unwrapHttpError=function(e){try{return e.json()}catch(e){return{code:-1,message:"An unexpected error occurred."}}},e.prototype.unwrapHttpValue=function(e){return e.json()},e}();u=r([a.Injectable(),o("design:paramtypes",[i.Http,l.HttpErrorHandlerService])],u),t.ApiGatewayService=u},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(5),c=function(){function e(e){this.dataService=e}return e.prototype.get=function(e){return this.dataService.get("api/content?lang="+(e||"en"))},e}();c=r([a.Injectable(),o("design:paramtypes",[i.DataService])],c),t.ContentService=c},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(2),c=function(){function e(e){this._router=e}return e.prototype.handle=function(e){401===e.status&&(sessionStorage.clear(),this._router.navigate(["Login"]))},e}();c=r([a.Injectable(),o("design:paramtypes",[i.Router])],c),t.HttpErrorHandlerService=c},function(e,t,n){"use strict";var r=n(52);Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"translateLoaderFactory",function(){return r.translateLoaderFactory}),n.d(t,"TranslateModule",function(){return r.TranslateModule}),n.d(t,"TranslatePipe",function(){return r.TranslatePipe}),n.d(t,"MissingTranslationHandler",function(){return r.MissingTranslationHandler}),n.d(t,"TranslateLoader",function(){return r.TranslateLoader}),n.d(t,"TranslateStaticLoader",function(){return r.TranslateStaticLoader}),n.d(t,"TranslateService",function(){return r.TranslateService}),n.d(t,"TranslateParser",function(){return r.TranslateParser}),n.d(t,"DefaultTranslateParser",function(){return r.DefaultTranslateParser}),n.d(t,"TranslateDirective",function(){return r.TranslateDirective})},function(e,t,n){e.exports=n(1)(1)},function(e,t,n){e.exports=n(1)(100)},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(15),c=n(3),s=n(24),l=n(25),f=n(23),u=n(20),p=n(26),d=function(){function e(){}return e}();d=r([a.NgModule({declarations:[f.AppComponent],imports:[i.BrowserModule,s.routing,c.HttpModule,u.SharedModule.forRoot(),p.HomeModule],providers:[l.AppService],bootstrap:[f.AppComponent]}),o("design:paramtypes",[])],d),t.AppModule=d},function(e,t,n){e.exports=n(1)(399)},function(e,t,n){e.exports=n(1)(406)},function(e,t,n){e.exports=n(1)(408)},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(22),c=n(4),s=n(2),l=n(3),f=n(51),u=n(13),p=n(28),d=n(30),h=n(29),m=n(31),v=n(32),g=n(9),y=n(34),b=n(33),R=n(5),j=n(10),_=n(7),C=n(12),O=n(37),w=n(11),S=n(38),P=n(36),x=k=function(){function e(){}return e.forRoot=function(){return{ngModule:k,providers:[C.HttpErrorHandlerService,j.ApiGatewayService,_.AuthService,R.DataService,w.ContentService,g.FormControlService,S.UtilityService]}},e}();x=k=r([a.NgModule({imports:[i.CommonModule,c.FormsModule,c.ReactiveFormsModule,s.RouterModule,f.NgbModule.forRoot(),l.HttpModule,l.JsonpModule,u.TranslateModule.forRoot({provide:u.TranslateLoader,useClass:O.ApiTranslationLoader})],declarations:[d.DynamicFormComponent,h.DynamicFormControlComponent,m.ErrorMessageComponent,v.ErrorSummaryComponent,b.FooterComponent,y.HeaderComponent,p.PageHeadingComponent,P.UppercasePipe],exports:[i.CommonModule,c.FormsModule,c.ReactiveFormsModule,s.RouterModule,f.NgbModule,u.TranslateModule,d.DynamicFormComponent,h.DynamicFormControlComponent,v.ErrorSummaryComponent,m.ErrorMessageComponent,b.FooterComponent,y.HeaderComponent,p.PageHeadingComponent,P.UppercasePipe]}),o("design:paramtypes",[])],x),t.SharedModule=x;var k},function(e,t,n){"use strict";var r=function(){function e(e){void 0===e&&(e={}),this.value=e.value,this.key=e.key||"",this.label=e.label||"",this.placeholder=e.placeholder||"",this.required=!!e.required,this.minlength=e.minlength,this.maxlength=e.maxlength,this.order=void 0===e.order?1:e.order,this.type=e.type||"",this.class=e.class||""}return e}();t.ControlBase=r},function(e,t,n){e.exports=n(1)(17)},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(15),i=n(0),c=n(13),s=function(){function e(e,t){this.translate=e,this.titleService=t,e.setDefaultLang("en"),e.use("en")}return e.prototype.ngOnInit=function(){var e=this;this.translate.get("TITLE").subscribe(function(t){return e.setTitle(t)})},e.prototype.setTitle=function(e){this.titleService.setTitle(e)},e}();s=r([i.Component({selector:"appc-app",styles:[n(46)],template:n(39)}),o("design:paramtypes",[c.TranslateService,a.Title])],s),t.AppComponent=s},function(e,t,n){"use strict";var r=n(2),o=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"login",loadChildren:function(){return new Promise(function(e){n.e(1).then(function(t){e(n(60).LoginModule)}.bind(null,n)).catch(n.oe)})}},{path:"register",loadChildren:function(){return new Promise(function(e){n.e(3).then(function(t){e(n(62).RegisterModule)}.bind(null,n)).catch(n.oe)})}},{path:"profile",loadChildren:function(){return new Promise(function(e){n.e(2).then(function(t){e(n(61).ProfileModule)}.bind(null,n)).catch(n.oe)})}},{path:"admin",loadChildren:function(){return new Promise(function(e){n.e(4).then(function(t){e(n(58).AdminModule)}.bind(null,n)).catch(n.oe)})}},{path:"examples",loadChildren:function(){return new Promise(function(e){n.e(0).then(function(t){e(n(59).ExamplesModule)}.bind(null,n)).catch(n.oe)})}}];t.routing=r.RouterModule.forRoot(o)},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=function(){function e(){}return e}();i=r([a.Injectable(),o("design:paramtypes",[])],i),t.AppService=i},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(8),c=n(27),s=function(){function e(){}return e}();s=r([a.NgModule({imports:[c.routing],declarations:[i.HomeComponent]}),o("design:paramtypes",[])],s),t.HomeModule=s},function(e,t,n){"use strict";var r=n(2),o=n(8),a=[{path:"home",component:o.HomeComponent}];t.routing=r.RouterModule.forChild(a)},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=function(){function e(){}return e}();r([a.Input(),o("design:type",String)],i.prototype,"text",void 0),i=r([a.Component({selector:"appc-page-heading",template:"<h4>{{text}}</h4>"}),o("design:paramtypes",[])],i),t.PageHeadingComponent=i},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=function(){function e(){this.control=void 0,this.form=void 0}return Object.defineProperty(e.prototype,"valid",{get:function(){return this.form.controls[this.control.key].valid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"invalid",{get:function(){return!this.form.controls[this.control.key].valid&&this.form.controls[this.control.key].touched},enumerable:!0,configurable:!0}),e}();r([a.Input(),o("design:type",Object)],i.prototype,"control",void 0),r([a.Input(),o("design:type",Object)],i.prototype,"form",void 0),i=r([a.Component({selector:"appc-dynamic-control",template:n(41)}),o("design:paramtypes",[])],i),t.DynamicFormControlComponent=i},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(9),c=function(){function e(e){this._controlService=e,this.controls=[],this.btnText="Submit",this.formClass="form-horizontal",this.formsubmit=new a.EventEmitter}return e.prototype.ngOnInit=function(){var e=this.controls.sort(function(e,t){return e.order-t.order});this.form=this._controlService.toControlGroup(e)},e.prototype.onSubmit=function(){this.formsubmit.emit(this.form.value)},e}();r([a.Input(),o("design:type",Array)],c.prototype,"controls",void 0),r([a.Input(),o("design:type",String)],c.prototype,"btnText",void 0),r([a.Input(),o("design:type",String)],c.prototype,"formClass",void 0),r([a.Output(),o("design:type",a.EventEmitter)],c.prototype,"formsubmit",void 0),c=r([a.Component({selector:"appc-dynamic-form",template:n(42)}),o("design:paramtypes",[i.FormControlService])],c),t.DynamicFormComponent=c},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(4),c=n(21),s=n(6),l=function(){function e(){}return Object.defineProperty(e.prototype,"errorMessage",{get:function(){var e=this.form.form.get(this.control.key);for(var t in e.errors)if(e.errors.hasOwnProperty(t)&&e.touched)return s.ValidationService.getValidatorErrorMessage(t,this.control.minlength||this.control.maxlength)},enumerable:!0,configurable:!0}),e}();r([a.Input(),o("design:type",c.ControlBase)],l.prototype,"control",void 0),r([a.Input(),o("design:type",i.FormGroupDirective)],l.prototype,"form",void 0),l=r([a.Component({selector:"appc-control-error-message",template:'<div *ngIf="errorMessage" class="form-control-feedback"> {{errorMessage}} </div>'}),o("design:paramtypes",[])],l),t.ErrorMessageComponent=l},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=function(){function e(){}return e}();r([a.Input(),o("design:type",Object)],i.prototype,"errors",void 0),i=r([a.Component({selector:"appc-error-summary",template:n(43)}),o("design:paramtypes",[])],i),t.ErrorSummaryComponent=i},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=function(){function e(){}return e}();i=r([a.Component({selector:"appc-footer",styles:[n(48)],template:n(44)}),o("design:paramtypes",[])],i),t.FooterComponent=i},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(2),c=n(7),s=function(){function e(e,t){this.router=e,this.authService=t,this.isCollapsed=!0}return e.prototype.toggleNav=function(){this.isCollapsed=!this.isCollapsed},e}();s=r([a.Component({selector:"appc-header",styles:[n(49)],template:n(45)}),o("design:paramtypes",[i.Router,c.AuthService])],s),t.HeaderComponent=s},function(e,t,n){"use strict";var r=function(){function e(e,t){this.displayName=e,this.roles=t}return e}();t.User=r},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=function(){function e(){}return e.prototype.transform=function(e){return e.toUpperCase()},e}();i=r([a.Pipe({name:"appfUppercase"}),o("design:paramtypes",[])],i),t.UppercasePipe=i},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(11),c=function(){function e(e){this.cs=e}return e.prototype.getTranslation=function(e){return this.cs.get(e)},e}();c=r([a.Injectable(),o("design:paramtypes",[i.ContentService])],c),t.ApiTranslationLoader=c;var s=function(){function e(){}return e.prototype.handle=function(e){return e.key},e}();s=r([a.Injectable(),o("design:paramtypes",[])],s),t.CustomMissingTranslationHandler=s},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(0),i=n(2),c=function(){function e(e){this._router=e}return e.prototype.convertDateTime=function(e){var t=new Date(e.toString());return t.toDateString()},e.prototype.navigate=function(e){this._router.navigate([e])},e.prototype.navigateToSignIn=function(){this.navigate("/login")},e}();c=r([a.Injectable(),o("design:paramtypes",[i.Router])],c),t.UtilityService=c},function(e,t){e.exports='<!-- header component -->\r\n<appc-header></appc-header>\r\n\r\n<div class="container">\r\n    <!-- component routing placeholder -->\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n<div class="container">\r\n    <!-- footer component -->\r\n    <appc-footer></appc-footer>\r\n\r\n</div>'},function(e,t){e.exports='<div class="jumbotron">\r\n    <div class="container">\r\n        <h2>Asp.Net Core &hearts; Angular 2 &hearts; Bootstrap 4 &hearts; Webpack</h2>\r\n    </div>\r\n</div>\r\n\r\n<div class="row">\r\n    <div class="col-md-4">\r\n        <h4>\r\n            Asp.Net Core\r\n        </h4>\r\n        <p>\r\n            ASP.NET is an open source web framework for building modern web applications and services.\r\n        </p>\r\n        <p>\r\n            <a class="btn btn-outline-info" target="_blank" href="http://www.asp.net/">More info »</a>\r\n        </p>\r\n    </div>\r\n    <div class="col-md-4">\r\n        <h4>\r\n            Angular 2\r\n        </h4>\r\n        <p>\r\n            One Framework Mobile and desktop\r\n        </p>\r\n        <p>\r\n            <a class="btn btn-outline-info" target="_blank" href="https://angular.io/">More info »</a>\r\n        </p>\r\n    </div>\r\n\r\n    <div class="col-md-4">\r\n        <h4>\r\n            ng-bootstrap\r\n        </h4>\r\n        <p>\r\n            Angular 2, powered by Bootstrap 4 written by the angular-ui Team.\r\n        </p>\r\n        <p>\r\n            <a class="btn btn-outline-info" target="_blank" href="https://ng-bootstrap.github.io/#/home">More info »</a>\r\n        </p>\r\n    </div>\r\n    <div class="col-md-4">\r\n        <h4>\r\n            Bootstrap 4\r\n        </h4>\r\n        <p>\r\n            Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.\r\n        </p>\r\n        <p>\r\n            <a class="btn btn-outline-info" target="_blank" href="http://v4-alpha.getbootstrap.com/">More info »</a>\r\n        </p>\r\n    </div>\r\n    <div class="col-md-4">\r\n        <h4>\r\n            Webpack 2\r\n        </h4>\r\n        <p>\r\n            Module bundler\r\n        </p>\r\n        <p>\r\n            <a class="btn btn-outline-info" target="_blank" href="https://webpack.js.org/">More info »</a>\r\n        </p>\r\n    </div>\r\n    <div class="col-md-4">\r\n        <h4>\r\n            ng2-translate\r\n        </h4>\r\n        <p>\r\n            An implementation of angular translate for Angular 2.\r\n        </p>\r\n        <p>\r\n            <a class="btn btn-outline-info" target="_blank" href="https://github.com/ocombe/ng2-translate">More info »</a>\r\n        </p>\r\n    </div>\r\n</div>'},function(e,t){e.exports='<!--{{f.controls[control.key]  | json}}-->\r\n<div #f="ngForm" [formGroup]="form" [ngSwitch]="control.type" class="form-group {{control.class}}" [class.has-danger]="invalid"\r\n    [class.has-success]="valid" [class.form-check]="control.type === \'checkbox\'">\r\n\r\n    <label *ngSwitchCase="\'dropdown\'" [attr.for]="control.key" class="col-form-label">{{control.label}}</label>\r\n    <select *ngSwitchCase="\'dropdown\'" [id]="control.key" [formControlName]="control.key" [class.form-control-success]="valid"\r\n        [class.form-control-danger]="invalid" class="form-control">\r\n            <option *ngFor="let opt of control.options" [value]="opt.key">{{opt.value}}</option>\r\n    </select>\r\n\r\n    <label *ngSwitchCase="\'checkbox\'" [attr.for]="control.key" class="form-check-label">\r\n    <input #ck *ngSwitchCase="\'checkbox\'" (change)="control.value = ck.checked" [id]="control.key" [formControlName]="control.key"\r\n        [type]="control.type" class="form-check-input">\r\n        {{control.label}}\r\n    </label>\r\n\r\n    <!--This is not the switch case because of multiple control types-->\r\n    <label *ngIf="control.type === \'textbox\' || control.type === \'email\' || control.type === \'password\'" [attr.for]="control.key" class="col-form-label">{{control.label}}</label>\r\n    <input *ngIf="control.type === \'textbox\' || control.type === \'email\' || control.type === \'password\'" [id]="control.key" [formControlName]="control.key" [type]="control.type"\r\n        [placeholder]="control.placeholder" [class.form-control-success]="valid" [class.form-control-danger]="invalid" class="form-control">\r\n\r\n\r\n\r\n    <appc-control-error-message [form]="f" [control]="control"></appc-control-error-message>\r\n\r\n</div>';
},function(e,t){e.exports='<form class="{{formClass}}" (ngSubmit)="onSubmit()" [formGroup]="form" novalidate role="form">\r\n    <appc-dynamic-control *ngFor="let ctrl of controls" [control]="ctrl" [form]="form"></appc-dynamic-control>\r\n\r\n    <button type="submit" class="btn btn-primary pull-right" [disabled]="!form.valid">{{btnText}}</button>\r\n</form>'},function(e,t){e.exports='<div class="alert alert-danger" *ngIf="errors?.length > 0">\r\n    <div *ngFor="let error of errors">\r\n        {{error}}\r\n    </div>\r\n</div>'},function(e,t){e.exports='<footer class="text-muted">\r\n  <div class="container">\r\n      <hr>\r\n    <p class="text-muted">\r\n        &copy; 2015-2016 {{\'title\' | translate}} Company\r\n    </p>\r\n  </div>\r\n</footer>\r\n'},function(e,t){e.exports='<header class="navbar navbar-light navbar-static-top">\r\n    <div class="container">\r\n        <nav>\r\n            <div class="clearfix">\r\n                <button class="navbar-toggler float-xs-right hidden-sm-up collapsed" type="button" data-toggle="collapse" data-target="#bd-main-nav"\r\n                    aria-controls="bd-main-nav" aria-expanded="false" aria-label="Toggle navigation" (click)="toggleNav()">\r\n                    ☰\r\n                </button>\r\n                <a class="navbar-brand hidden-sm-up" routerLink="home">\r\n                    Ng2fbBootstrap\r\n                </a>\r\n            </div>\r\n            <div class="navbar-toggleable-xs collapse" [class.in]="!isCollapsed" id="bd-main-nav" aria-expanded="false" style="height: 0px;">\r\n                <ul class="nav navbar-nav">\r\n                    <li class="nav-item">\r\n                        <a class="nav-item nav-link" routerLinkActive="active" routerLink="home">Home</a>\r\n                    </li>\r\n                    <li class="nav-item">\r\n                        <a class="nav-item nav-link" routerLinkActive="active" routerLink="examples">Examples</a>\r\n                    </li>\r\n                    <li>\r\n                        <ul class="nav float-xs-left float-md-right">\r\n\r\n                            <li class="nav-item" *ngIf="authService.isLoggedIn() && authService.user()">\r\n                                <a class="nav-item nav-link" routerLinkActive="active" routerLink="profile">\r\n                                    <i class="fa fa-user"></i> {{authService.user().displayName}}\r\n                                </a>\r\n                            </li>\r\n\r\n                            <li class="nav-item" *ngIf="!authService.isLoggedIn()">\r\n                                <a class="nav-item nav-link" routerLinkActive="active" routerLink="register">\r\n                                    <i class="fa fa-user"></i> Register\r\n                                </a>\r\n                            </li>\r\n\r\n                            <li class="nav-item" *ngIf="!authService.isLoggedIn()">\r\n                                <a class="nav-item nav-link" routerLinkActive="active" routerLink="login">\r\n                                    <i class="fa fa-sign-in"></i>Login\r\n                                </a>\r\n                            </li>\r\n                            <li class="nav-item" *ngIf="authService.isLoggedIn() && authService.user()?.roles?.indexOf(\'Admin\') > -1">\r\n                                <a class="nav-item nav-link" routerLinkActive="active" routerLink="admin">\r\n                                    <i class="fa fa-gear"></i> Admin\r\n                                </a>\r\n                            </li>\r\n                            <li class="nav-item" *ngIf="authService.isLoggedIn()">\r\n                                <a class="nav-item nav-link" (click)="authService.logout()" routerLinkActive="active" href="javascript:void(null);">\r\n                                    <i class="fa fa-sign-out"></i> Logout\r\n                                </a>\r\n                            </li>\r\n\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</header>'},function(e,t){e.exports=""},function(e,t){e.exports="\r\n"},function(e,t){e.exports=".footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-top: 40px;\n  border-top: 1px solid #eee; }\n"},function(e,t){e.exports=""},function(e,t,n){e.exports=n(1)(370)},function(e,t,n){e.exports=n(1)(401)},function(e,t,n){e.exports=n(1)(405)},function(e,t,n){e.exports=n(1)(545)},function(e,t,n){e.exports=n(1)(556)},function(e,t,n){e.exports=n(1)(579)},function(e,t,n){e.exports=n(1)(8)},function(e,t,n){"use strict";n(18),n(19);var r=n(17),o=n(0),a=n(16);o.enableProdMode(),r.platformBrowserDynamic().bootstrapModule(a.AppModule)}]);
//# sourceMappingURL=main.9ac6607f559edfb947c0.bundle.map