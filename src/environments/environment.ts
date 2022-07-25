// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //api: 'http://localhost:3000/api',
  //api: 'https://vetservice-api.herokuapp.com/api', //semi-prod-api
  api: 'https://vetservice-test.herokuapp.com/api', //testing-api
  mock_all: true,
  api_routes: [
    {path:'auth', mock: true},
    {path: 'collaborateurs', mock: true},
    {path: 'cliniques', mock: true},
    {path: 'veterinaire', mock: true},
    {path: 'abonnement', mock: true},
    {path: 'produits', mock: true},
    {path: 'client', mock: true},
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
