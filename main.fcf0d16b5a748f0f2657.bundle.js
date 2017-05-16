webpackJsonp([0,3],{340:function(t,e,n){"use strict";var r=n(0),o=n(211);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.http=t,this.clientId="2f98992c40b8edf17423d93bda2e04ab"}return t.prototype.get=function(t,e){var n;return n=e?this.prepareUrl(t):t,this.http.get(n)},t.prototype.prepareUrl=function(t){return t+"?client_id="+this.clientId},t=i([n.i(r.Injectable)(),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object])],t);var e}()},341:function(t,e,n){"use strict";var r=n(0),o=n(340),i=n(765),a=(n.n(i),n(763)),c=(n.n(a),n(764));n.n(c);n.d(e,"a",function(){return u});var s=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t){this.apiService=t,this.audio=new Audio}return t.prototype.load=function(t){this.audio.src=this.apiService.prepareUrl(t),this.audio.load()},t.prototype.play=function(t){this.load(t),this.audio.play()},t.prototype.getPlaylistTracks=function(){return this.apiService.get("https://api.soundcloud.com/playlists/209262931",!0).map(function(t){return t.json()}).map(function(t){return t.tracks})},t.prototype.randomTrack=function(t){var e=t.length,n=Math.floor(Math.random()*e+1);return t[n]},t.prototype.formatTime=function(t){var e=Math.floor(t/60);return e=e>=10?e:"0"+e,t=Math.floor(t%60),t=t>=10?t:"0"+t,e+":"+t},t.prototype.findTracks=function(t){return this.apiService.get(this.apiService.prepareUrl("https://api.soundcloud.com/tracks")+"&q="+t,!1).debounceTime(300).distinctUntilChanged().map(function(t){return t.json()})},t.prototype.xlArtwork=function(t){return t.replace(/large/,"t500x500")},t=s([n.i(r.Injectable)(),p("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object])],t);var e}()},402:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=402},403:function(t,e,n){"use strict";var r=n(530),o=(n.n(r),n(491)),i=n(0),a=n(529),c=n(522);a.a.production&&n.i(i.enableProdMode)(),n.i(o.a)().bootstrapModule(c.a)},521:function(t,e,n){"use strict";var r=n(0),o=n(341);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.musicService=t,this.paused=!0,this.tracks=[],this.filteredTracks=[]}return t.prototype.ngOnInit=function(){var t=this;this.musicService.getPlaylistTracks().subscribe(function(e){t.tracks=e,t.handleRandom()}),this.musicService.audio.onended=this.handleEnded.bind(this),this.musicService.audio.ontimeupdate=this.handleTimeUpdate.bind(this)},t.prototype.handleEnded=function(t){this.handleRandom()},t.prototype.handleRandom=function(){var t=this.musicService.randomTrack(this.tracks);this.musicService.play(t.stream_url),this.title=t.title,this.backgroundStyle=this.composeBackgroundStyle(t.artwork_url)},t.prototype.handlePausePlay=function(){this.musicService.audio.paused?(this.paused=!0,this.musicService.audio.play()):(this.paused=!1,this.musicService.audio.pause())},t.prototype.handleStop=function(){this.musicService.audio.pause(),this.musicService.audio.currentTime=0,this.paused=!1},t.prototype.handleBackward=function(){var t=this.musicService.audio.currentTime;console.log(t),t>=5&&(this.musicService.audio.currentTime=t-5)},t.prototype.handleForward=function(){var t=this.musicService.audio.currentTime,e=this.musicService.audio.duration;e-t>=5&&(this.musicService.audio.currentTime=t+5)},t.prototype.handleTimeUpdate=function(t){var e=this.musicService.audio.currentTime,n=this.musicService.audio.duration;this.position=e/n,this.elapsed=this.musicService.formatTime(e),this.duration=this.musicService.formatTime(n)},t.prototype.handleQuery=function(t){var e=this;this.musicService.findTracks(t).subscribe(function(t){e.filteredTracks=t})},t.prototype.handleUpdate=function(t){this.musicService.play(t.stream_url),this.title=t.title,this.backgroundStyle=this.composeBackgroundStyle(t.artwork_url)},t.prototype.composeBackgroundStyle=function(t){return{width:"100%",height:"1000px",backgroundSize:"cover",backgroundImage:"linear-gradient(\n      rgba(0, 0, 0, 0.7),\n      rgba(0, 0, 0, 0.7)\n    ),   url("+this.musicService.xlArtwork(t)+")"}},t=i([n.i(r.Component)({selector:"app-root",template:n(753),styles:[n(747)]}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object])],t);var e}()},522:function(t,e,n){"use strict";var r=n(109),o=n(0),i=n(13),a=n(211),c=n(521),s=n(528);n.d(e,"a",function(){return l});var p=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){}return t=p([n.i(o.NgModule)({declarations:[c.a],imports:[r.BrowserModule,i.FormsModule,a.b,s.a],providers:[],bootstrap:[c.a]}),u("design:paramtypes",[])],t)}()},523:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return o([n.i(r.Input)(),i("design:type",String)],t.prototype,"title",void 0),t=o([n.i(r.Component)({selector:"music-details",template:n(754),styles:[n(748)]}),i("design:paramtypes",[])],t)}()},524:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=o([n.i(r.Component)({selector:"music-footer",template:n(755),styles:[n(749)]}),i("design:paramtypes",[])],t)}()},525:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){this.backward=new r.EventEmitter,this.pauseplay=new r.EventEmitter,this.forward=new r.EventEmitter,this.random=new r.EventEmitter,this.stop=new r.EventEmitter}return o([n.i(r.Input)(),i("design:type",Object)],t.prototype,"paused",void 0),o([n.i(r.Output)(),i("design:type",Object)],t.prototype,"backward",void 0),o([n.i(r.Output)(),i("design:type",Object)],t.prototype,"pauseplay",void 0),o([n.i(r.Output)(),i("design:type",Object)],t.prototype,"forward",void 0),o([n.i(r.Output)(),i("design:type",Object)],t.prototype,"random",void 0),o([n.i(r.Output)(),i("design:type",Object)],t.prototype,"stop",void 0),t=o([n.i(r.Component)({selector:"music-player",template:n(756),styles:[n(750)]}),i("design:paramtypes",[])],t)}()},526:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return o([n.i(r.Input)(),i("design:type",String)],t.prototype,"elapsed",void 0),o([n.i(r.Input)(),i("design:type",String)],t.prototype,"total",void 0),o([n.i(r.Input)(),i("design:type",Number)],t.prototype,"current",void 0),t=o([n.i(r.Component)({selector:"music-progress",template:n(757),styles:[n(751)]}),i("design:paramtypes",[])],t)}()},527:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){this.update=new r.EventEmitter,this.query=new r.EventEmitter}return t.prototype.search=function(t){this.query.emit(t.query)},t.prototype.select=function(t){this.update.emit(t)},o([n.i(r.Input)(),i("design:type",Array)],t.prototype,"tracks",void 0),o([n.i(r.Output)(),i("design:type",Object)],t.prototype,"update",void 0),o([n.i(r.Output)(),i("design:type",Object)],t.prototype,"query",void 0),t=o([n.i(r.Component)({selector:"music-search",template:n(758),styles:[n(752)]}),i("design:paramtypes",[])],t)}()},528:function(t,e,n){"use strict";var r=n(0),o=n(13),i=n(211),a=n(2),c=n(745),s=(n.n(c),n(527)),p=n(525),u=n(523),l=n(526),d=n(524),f=n(341),h=n(340);n.d(e,"a",function(){return g});var y=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},m=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},g=function(){function t(){}return t=y([n.i(r.NgModule)({imports:[o.FormsModule,c.AutoCompleteModule,i.b,a.CommonModule],exports:[s.a,u.a,p.a,l.a,d.a],declarations:[s.a,u.a,p.a,l.a,d.a],providers:[h.a,f.a]}),m("design:paramtypes",[])],t)}()},529:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={production:!0}},530:function(t,e,n){"use strict";var r=n(544),o=(n.n(r),n(537)),i=(n.n(o),n(533)),a=(n.n(i),n(539)),c=(n.n(a),n(538)),s=(n.n(c),n(536)),p=(n.n(s),n(535)),u=(n.n(p),n(543)),l=(n.n(u),n(532)),d=(n.n(l),n(531)),f=(n.n(d),n(541)),h=(n.n(f),n(534)),y=(n.n(h),n(542)),m=(n.n(y),n(540)),g=(n.n(m),n(545)),v=(n.n(g),n(794));n.n(v)},747:function(t,e){t.exports=""},748:function(t,e){t.exports="\n.details h3{\n  text-align:center;\n  padding:50px 10px;\n  margin:0;\n  color:white;\n}\n"},749:function(t,e){t.exports=".footer{\n  color:white;\n  position:absolute;\n  bottom:0px;\n  width:100%;\n  background:#030C12;\n}\n\n.footer p{\n  text-align:center;\n}\n\n.footer .logo{\n  height:25px;\n  width:auto;\n}\n.footer .soundcloud{\n  height:25px;\n  width:auto;\n}\n"},750:function(t,e){t.exports=".player{\n  text-align:center;\n  margin-top:60px;\n}\n\n.player div{\n  display:inline-block;\n  margin-left:10px;\n  margin-right:10px;\n}\n\n\n.player .player__backward button, .player .player__forward button{\n  background:transparent;\n  border:1px solid rgb(21,96,150);\n  color:rgb(24,107,160);\n  width:75px;\n  height:75px;\n  border-radius:100%;\n  font-size:35px;\n  outline:none;\n}\n\n.player .player__backward button{\n  border-left:none;\n}\n\n.player .player__forward button{\n  border-right:none;\n}\n\n.player .player__main button:hover, .player .player__backward button:hover, .player .player__forward button:hover{\n  color:rgba(24,107,160,0.7);\n  border:1px solid rgba(21,96,150,0.7);\n}\n\n.player .player__main{\n  border:1px solid rgb(21,96,150);\n}\n\n.player .player__main button{\n  color:rgb(21,96,150);\n  background:transparent;\n  width:75px;\n  height:75px;\n  border:none;\n  font-size:35px;\n  outline:none;\n}\n"},751:function(t,e){t.exports=".progress{\n  text-align:center;\n  margin-top:100px;\n  color:white;\n}\n\n.progress progress[value]{\n  -webkit-appearance:none;\n  -moz-appearance:none;\n       appearance:none;\n\n  width:390px;\n  height:20px;\n  margin-left:4px;\n  margin-right:4px;\n}\n\n.progress progress[value]::-webkit-progress-bar{\n  background-color:#eee;\n  border-radius:2px;\n  box-shadow:0 2px 5px rgba(0, 0, 0, 0.25) inset;\n}\n\n.progress progress[value]::-webkit-progress-value{\n  background-color:rgb(24,107,160);\n  border-radius:2px;\n  background-size:35px 20px, 100% 100%, 100% 100%;\n}\n"},752:function(t,e){t.exports=".truncate{\n  width:400px;\n  white-space:nowrap;\n  overflow:hidden;\n  text-overflow:ellipsis;\n}\n\n.artwork{\n  width:32px;\n  display:inline-block;\n  margin:5px 0 2px 5px;\n}\n\n.text{\n  font-size:18px;\n  float:right;\n  margin:10px 10px 0 0;\n}\n"},753:function(t,e){t.exports='<div [ngStyle]="backgroundStyle">\n  <music-search\n    (query)="handleQuery($event)"\n    (update)="handleUpdate($event)"\n    [tracks]="filteredTracks"\n  ></music-search>\n\n  <music-details\n    [title]="title"\n  ></music-details>\n\n  <music-player\n    (random)="handleRandom($event)"\n    (backward)="handleBackward()"\n    (forward)="handleForward()"\n    (pauseplay)="handlePausePlay()"\n    (stop)="handleStop()"\n    [paused]="paused"\n  ></music-player>\n\n  <music-progress\n    [current]="position"\n    [elapsed]="elapsed"\n    [total]="duration"\n  ></music-progress>\n\n  <music-footer></music-footer>\n\n</div>\n'},754:function(t,e){t.exports='<div class="details">\n  <h3>{{title}}</h3>\n</div>\n'},755:function(t,e){t.exports='<div class="footer">\n  <p>Love from <img src="/assets/img/logo.png" class="logo"/>\n    & <img src="/assets/img/soundcloud.png" class="soundcloud"/></p>\n</div>\n'},756:function(t,e){t.exports='<div class="player">\n  <div class="player__backward">\n    <button (click)="backward.emit()"><i class="fa fa-backward"></i></button>\n  </div>\n\n  <div class="player__main">\n    <button *ngIf="paused" (click)="pauseplay.emit()"><i class="fa fa-pause"></i></button>\n    <button *ngIf="!paused" (click)="pauseplay.emit()"><i class="fa fa-play"></i></button>\n    <button (click)="stop.emit()"><i class="fa fa-stop"></i></button>\n    <button (click)="random.emit()"><i class="fa fa-random"></i></button>\n  </div>\n\n  <div class="player__forward">\n    <button (click)="forward.emit()"><i class="fa fa-forward"></i></button>\n  </div>\n</div>\n'},757:function(t,e){t.exports='<div class="progress">\n  <span class="player__time-elapsed">{{elapsed}}</span>\n  <progress\n    value="{current}"\n    max="1"></progress>\n  <span class="player__time-total">{{total}}</span>\n</div>\n'},758:function(t,e){t.exports='<p-autoComplete\n  [ngModel]="track"\n  [suggestions]="tracks"\n  (completeMethod)="search($event)"\n  (onSelect)="select($event)"\n  field="title"\n>\n  <template let-track>\n    <div class="ui-helper-clearfix" style="border-bottom:1px solid #D5D5D5">\n      <img src="{{track.artwork_url}}" class="artwork"/>\n      <div class="text truncate">{{track.title}}</div>\n    </div>\n  </template>\n</p-autoComplete>\n'},795:function(t,e,n){t.exports=n(403)}},[795]);
//# sourceMappingURL=main.fcf0d16b5a748f0f2657.bundle.map