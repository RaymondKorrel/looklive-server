# Performance
Bekijk hem online!
https://looklive.raymondkorrel.me

## Aangepast
- HTML semantisch opgesteld
- BEM toegepast (korte CSS selectoren)
- Responsive images
- Single page web-app (ajax requests)
- Service worker

## Tijdsverandering

### BEM:
##### Before:
  - 630ms

##### After:
  - 620ms

### Responsive images
##### Before:
  - 1860kb
  - 620ms

##### After:
  - 464kb - 45kb
  - 570ms

### Single page
##### Before:
  - 570ms

##### After:
  - 555ms

### Service worker
##### Before:
  - 555ms

##### After:
  - 340ms

![alt tag](https://github.com/RaymondKorrel/looklive-server/blob/student/raymond/public/images/improvements/improvement-sw.jpg)

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
