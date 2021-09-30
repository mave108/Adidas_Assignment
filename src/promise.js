/**

* We want to request data from several Services and group the outputs together.

* service methods:

*  - Service A: getProduct(id: string):

*             Promise<{ id: string, name: string, active: boolean }>

*  - Service B: getAvailability(id: string):

*             Promise<number>

*  - Service C: getForecast(id: string, productAvailability: number):

*             Promise<{ forecast: Date, risk: string<[ 'low', 'mid', 'high' ]> }>

* 1. Create a function which returns: Promise<{ id, name, active, availability, forecast, risk }>.

* 2. Create a function which returns: Promise<{ id, name, active, availability }> in case

*    'Service C: getForecast()' fails.

* Note: async/await feature not allowed.

*/

const getProduct = (id) => Promise.resolve({ id, name: id, active: true });

const getAvailability = (id) => Promise.resolve(999);

const getForecast = (id, availability) =>
  Promise.resolve({ forecast: new Date(), risk: "low" });

// TODO: function implementation

// execution sample

export default function getProductDetails(id) {
  return Promise.all([
    getProduct(id),
    getAvailability(id)
  ]).then(([prod, aval]) =>
    getForecast(id, aval).then((forcast) => ({ ...prod, ...aval, ...forcast }))
  );
}
