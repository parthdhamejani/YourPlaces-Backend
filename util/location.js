const axios = require('axios');

const HttpError = require('../models/http-error');

async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${process.env.GOOGLE_API_KEY}`
  );

  const data = response.data;

  // 1. Log the status and error message to your terminal for quick debugging
  console.log('Geocoding Status:', data.status);
  if (data.error_message) {
    console.log('Geocoding Error Message:', data.error_message);
  }

  // 2. Safe check before accessing [0].geometry
  if (!data.results || data.results.length === 0) {
    const error = new HttpError(
      'Could not find location for the specified address.',
      422
    );
    throw error;
  }

  const coordinates = data.results[0].geometry.location;
  return coordinates;
}

module.exports = getCoordsForAddress;
