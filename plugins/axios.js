export default function ({
  $axios,
  redirect
}, inject) {

  // Create a custom axios instance
  const api = $axios.create({

    headers: {
      common: {
        'Accept': 'text/plain, */*',
      },

    }
  });
  api.onRequest(config => {
    if (localStorage.getItem('qAccessToken') != null) {
      api.setHeader('x-access-token', localStorage.getItem('qAccessToken'));
      api.setHeader(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept");
    }
    console.log('Making request to ' + config.url);
  });

  api.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    }
  });

  // Set baseURL to something different
  const REMOTE_DATA = "https://nbsapi.herokuapp.com/api/";
  const LOCAL_DATA = "http://localhost:8080/api/";
  const LIVENBS_DATA = "http://196.192.78.160:8081/api/";
  console.log(process.env.NODE_ENV === 'production' ? process.env.baseUrl : process.env.localUrl);
  api.setBaseURL(process.env.NODE_ENV === 'production' ? process.env.baseUrl : process.env.localUrl);
  // Inject to context as $api
  inject('api', api);
}
