export const callDataService = async (endpoint, api, request_payload) => {
  try {
    const service_url = process.env.REACT_APP_CAP_CITATION_SERVICE_URL;

    const request_body = JSON.stringify({
      api: api,
      payload: request_payload
    });

    const svc_req = await fetch(
      service_url + api,
      {
        method: "POST",
        "headers": {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: request_body
      }
    );
    const resp = await svc_req.json();

    // TODO

    return resp;

  } catch(err) {
    // TODO
    console.log(err);
  }
}
