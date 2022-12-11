export async function getAnswer(url) {
  class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = "HttpRequest Error";
      this.response = response;
    }
  }

  let response = await fetch(url);

  if (response.status === 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}
