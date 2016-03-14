# Performance

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

With a Progressive Web App (PWA) you are able to pin a mobile-friendly website to your homescreen. After this, you are able to view the website on fullscreen without seeing the address bar. It kinda looks like a bookmark, but WITH function that were previously only available to native apps. With a PWA you are, as a developer, able to send push notifications, it works offline and you don't have to download it from an app store.

## Progressive Web Apps are:
- Progressive - Work for every user, regardless of browser choice because they’re built with progressive enhancement as a core tenet.
- Responsive - Fit any form factor: desktop, mobile, tablet, or whatever is next.
- Connectivity independent - Enhanced with service workers to work offline or on low quality networks.
- App-like - Feel like an app to the user with app-style interactions and navigation because it's built on the app shell model.
- Fresh - Always up-to-date thanks to the service worker update process.
- Safe - Served via HTTPS to prevent snooping and ensure content hasn’t been tampered with.
- Discoverable - Are identifiable as “applications” thanks to W3C manifests and service worker registration scope allowing search engines to find them.
- Re-engageable - Make re-engagement easy through features like push notifications.
- Installable - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store.
- Linkable - Easily share via URL and not require complex installation.

## WHAT PROGRESSIVE APPS LOOK LIKE

Taking last year’s Chrome Dev Summit site as an example, we can see the whole flow in action (ht: Paul Kinlan):

The site begins life as a regular tab. It doesn’t have super-powers, but it is built using Progressive App features including TLS, Service Workers, Manifests, and Responsive Design.
The second (or third or fourth) time one visits the site — roughly at the point where the browser it sure it’s something you use frequently — a prompt is shown by the browser (populated from the Manifest details)
Users can decide to keep apps to the home screen or app launcher
When launched from the home screen, these apps blend into their environment; they’re top-level, full-screen, and work offline. Of course, they worked offline after step 1, but now the implicit contract of “appyness” makes that clear.

![alt tag](https://developers.google.com/web/updates/images/2015-03-03/add-to-home-screen.gif)

Bronnen:
https://addyosmani.com/blog/getting-started-with-progressive-web-apps/
https://developers.google.com/web/progressive-web-apps
https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/
https://developer.apple.com/library/iad/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
