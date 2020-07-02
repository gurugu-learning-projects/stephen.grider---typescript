// import { User } from "./User";
// import { Company } from "./Company";
import { GOOGLE_MAPS_API_KEY } from "./keys";

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
script.defer = true;
script.async = true;

new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
