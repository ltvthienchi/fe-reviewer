// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

export const rootUrl = 'http://localhost:8080';

export const URL_SERVER = {
  token_unAu:  rootUrl + '/signup/',
  postProduct: rootUrl + '/data/posts/',
  feedbackWebsite: rootUrl + '/data/feedback/',
  infoReviewer: rootUrl + '/data/reviewer/',
  rating: rootUrl + '/data/rating/',
  company: rootUrl + '/data/company/',
  product: rootUrl + '/data/product/',
  admin: rootUrl + '/data/admin/',
  changePass : rootUrl + '/data/user/',
  searchProduct: rootUrl + '/data/main/',
  getInforLogin: rootUrl + '/data/main/',
};
