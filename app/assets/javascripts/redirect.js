
setTimeout(function() {
  window.location = "https://itunes.apple.com/us/app/la-biblia-reina-valera-estudio/id519625336?mt=8";
}, 25);

// If "custom-uri://" is registered the app will launch immediately and your
// timer won't fire. If it's not set, you'll get an ugly "Cannot Open Page"
// dialogue prior to the App Store application launching

window.location = "rva://store?uuid=" + gon.uuid;
// window.location = "rva://store?uuid=EFBBD9FF-3976-4816-8B77-C1462C99E256";