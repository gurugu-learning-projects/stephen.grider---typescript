import { User } from "./User";
// import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { GOOGLE_MAPS_API_KEY } from "./keys";

const script = document.createElement("script");

script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
script.defer = true;
script.async = true;

window.initMap = function () {
  // JS API is loaded and available
  const user = new User();
  const customMap = new CustomMap("map");

  customMap.addUserMarker(user);
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
