# Performance
Bekijk hem online!
https://looklive.raymondkorrel.me

## Aanpassingen sinds mondeling
:white_check_mark: Appearance.hbs semantischer
:white_check_mark: Imagemin beter toegepast
  - Ik heb de plugin 'imagemin mozjpeg' gebruikt om de quality op 80% te zetten waardoor er 1.26mb van alle afbeeldingen afgegaan is en het kwaliteits verschil niet veranderd is. <br />
  bron: https://www.npmjs.com/package/imagemin-mozjpeg
:white_check_mark: Minder grote Afbeeldingen (de grootste afbeelding van 464kb naar 115kb!)
:white_check_mark: Transition left vervangen voor transform translate

## Aangepast
- HTML semantisch opgesteld
- CSS aangepast:
  - BEM toegepast (korte CSS selectoren)
  - Flexbox i.p.v. float
- Responsive images
- Single page web-app (ajax requests)
- Delete jQuery
- Service worker
- Gulp - Uglify
- Gulp - images
- Subsetting custom font
- Font face observer


## Tijdsverandering
Alle tijden zijn gemeten met 4G (4mb/s 20ms RTT).

### BEM:
###### Before:
DOM: 489ms <br />
First Paint: 549ms <br />
Load event: 14.95s

###### After:
DOM: 445ms <br />
First Paint: 520ms <br />
Load event: 15.46s

### Responsive images
###### Before:
Size: 1860kb <br />
DOM: 445ms <br />
First Paint: 520ms <br />
Load event: 15.46s

###### After:
Size: 464kb - 45kb <br />
DOM: 504ms <br />
First Paint: 512ms <br />
Load event: 8.09s

### Delete jQuery
###### Before:
DOM: 504ms <br />
First Paint: 512ms <br />
Load event: 8.09s

###### After:
DOM: 386ms <br />
First Paint: 412ms <br />
Load event: 5.4s

### Single page
###### Before:
DOM: 386ms <br />
First Paint: 412ms <br />
Load event: 5.4s

###### After:
DOM: 415ms <br />
First Paint: 509ms <br />
Load event: 6.13s

### Service worker
###### Before:
DOM: 415ms <br />
First Paint: 509ms <br />
Load event: 6.13s

###### After:
DOM: 338ms <br />
First Paint: 409ms <br />
Load event: 498ms

![alt tag](https://github.com/RaymondKorrel/looklive-server/blob/student/raymond/public/images/improvements/improvement-sw.jpg)

Browser support:
![alt tag](https://github.com/RaymondKorrel/looklive-server/blob/student/raymond/public/images/improvements/sw-bs.jpg)

### Gulp - Uglify
Hier heb ik de plugins uglify en uglifycss van Gulp gebruikt om alle javascript en css te optimaliseren.
###### Before:
File size (of all css and js): 15kb <br />
DOM: 338ms <br />
First Paint: 409ms <br />
Load event: 498ms

###### After:
File size (of all css and js): 9kb <br />
DOM: 394ms <br />
First Paint: 431ms <br />
Load event: 484ms

![alt tag](https://github.com/RaymondKorrel/looklive-server/blob/student/raymond/public/images/improvements/improvement-compress.jpg)

### Gulp - Images
De plugin imagemin van Gulp verkleint JPEG, PNG, SVG en GIF afbeeldingen.
###### Before:
File size (of all images): 1575kb <br />
DOM: 394ms <br />
First Paint: 431ms <br />
Load event: 484ms

###### After:
File size (of all images): 1418kb <br />
DOM: 419ms <br />
First Paint: 433ms <br />
Load event: 558ms

![alt tag](https://github.com/RaymondKorrel/looklive-server/blob/student/raymond/public/images/improvements/improvement-img.jpg)

### Subsetting custom font
Een font bevat allerlei karakters die helemaal niet nodig zijn. Declan zegt dan ook dat het 'subsetten' van fonts enorm kan schelen. Daarom heb ik de fonts geoptimaliseerd (via Fontsquirrel) door de onnodige karakters eruit te halen en te exporteren naar woff.
Bron: http://thenewcode.com/878/Slash-Page-Load-Times-With-CSS-Font-Subsetting
###### Before:
File size (of font): 175kb <br />
DOM: 419ms <br />
First Paint: 433ms <br />
Load event: 558ms

###### After:
File size (of all images): 22kb <br />
DOM: 398ms <br />
First Paint: 421ms <br />
Load event: 496ms

![alt tag](https://github.com/RaymondKorrel/looklive-server/blob/student/raymond/public/images/improvements/improvement-font.jpg)

### Font face observer (asynchroon laden van fonts)
Met Font face observer kan je tijdelijk een standaard font zetten, terwijl je custom font aan het laden is.
###### Before:
DOM: 398ms <br />
First Paint: 421ms <br />
Load event: 496ms

###### After:
DOM: 508ms <br />
First Paint: 541ms <br />
Load event: 538ms

![alt tag](https://github.com/RaymondKorrel/looklive-server/blob/student/raymond/public/images/improvements/improvement-fontfaceobserver.jpg)

#Progressive web app
Een Progressive web app is een web app die de nieuwste web features gebruikt om het meer als een native app te laten werken, of er meer op te laten lijken. Deze nieuwe features zorgen ervoor dat de webapp snel is en simpelweg als een native app 'voelt'.

Met een Progressive web app is het mogelijk de web app als een icoontje op je homescherm neer te zetten. Wanneer je erop klikt, opent de browser in fullscreen mode, waardoor alle browser tabs wegvallen en het lijkt alsof het een native app is. Het is zelfs mogelijk om het icoon in te stellen in de head van je html. Bij Apple werkt het zo:

```html
<meta name="apple-mobile-web-app-capable" content="yes">
```

Hierna kan je instellen welke kleur je de status bar wil hebben:

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```

En natuurlijk het icoon:

```html
<link rel="apple-touch-icon" href="/custom_icon.png">
```

Daarnaast is het mogelijk om push notificaties te sturen.

## Progressive web apps zijn:
- Progressive - Werken overal
- Responsive - Zijn op elk formaat geoptimaliseerd
- Connectivity independent - Werken met slecht of geen internet
- App-like - Voelt als een app. Interacties, animaties en vormgeving zijn op dezelfde manier gemaakt als in een app
- Fresh - Zijn altijd up-to-date met behulp van de service worker
- Safe - Via HTTPS om snooping te voorkomen
- Discoverable - Zijn te vinden als apps
- Re-engageable - Maakt betrokkenheid makkelijker door push notificaties
- Installable - Makkelijk te installeren op de homescreen
- Linkable - Makkelijk te delen met URL's

## Hoe progressive web apps er uitzien

Het begint natuurlijk allemaal in de browser, waar de (hier nog) website geladen wordt. Dan heb je de optie om de website aan de homescreen toe te voegen, waarna je de website als een app in het beginscherm te zien krijgt. De app werkt offline, in fullscreen, en zijn geoptimaliseerd met service workers, Manifest, TLS en responsive design. Op dit punt is de web app bijna niet meer te onderscheiden van een native app.

Chrome Dev Summit site (ht: Paul Kinlan):
![alt tag](https://developers.google.com/web/updates/images/2015-03-03/add-to-home-screen.gif)

Bronnen:
https://addyosmani.com/blog/getting-started-with-progressive-web-apps/
https://developers.google.com/web/progressive-web-apps
https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/
https://developer.apple.com/library/iad/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html

# Onderzoek Gulp/Grunt
Gulp is gericht op code terwijl Grunt zich juist richt op configuratie.

Grunt:
```javascript
grunt.initConfig({
clean: {
  src: ['build/app.js', 'build/vendor.js']
},

copy: {
  files: [{
    src: 'build/app.js',
    dest: 'build/dist/app.js'
  }]
}

concat: {
  'build/app.js': ['build/vendors.js', 'build/app.js']
}

// ... other task configurations ...
});
```

Gulp:
```javascript
//import the necessary gulp plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

//declare the task
gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});
```

Naast het feit dat de syntax van Gulp me fijner lijkt werken, heeft het een snellere boot time. Dit komt omdat ze allebei op een andere manier werken. Verder is het bij Gulp niet nodig om temporary files op te slaan op je schijf.

In Grunt moeten de bestanden op de schijf geplaatst worden:
![alt tag](https://github.com/RaymondKorrel/looklive-server/blob/student/raymond/public/images/improvements/grunt.png)

In Gulp gebeurt dat in het geheugen:
![alt tag](https://github.com/RaymondKorrel/looklive-server/blob/student/raymond/public/images/improvements/gulp.png)

Bronnen:
- https://medium.com/@preslavrachev/gulp-vs-grunt-why-one-why-the-other-f5d3b398edc4#.wr34zbmqe
- http://jaysoo.ca/2014/01/27/gruntjs-vs-gulpjs/

## Eindconclusie
De performance van de website is een heel stuk verbeterd sinds de eerste week. De resultaten van de timeline waren vaak afwisselend en klopte soms niet helemaal. Hieronder de het verschil tussen voor en na:

###### Voor de wijzigingen:
DOM: 489ms <br />
First Paint: 549ms <br />
Load event: 14.95s

###### Na de wijzigingen (hoogst gemeten snelheid):
DOM: 338ms <br />
First Paint: 409ms <br />
Load event: 498ms

### Snelheids winst
DOM: 151ms <br />
First Paint: 140ms <br />
Load event: 14.94s
