const country = { name: 'Nigeria', capital: 'Abuja', population: '200M' };






for (const [key, value] of Object.entries(country)) {
  console.log(`${key}: ${value}`);
}

