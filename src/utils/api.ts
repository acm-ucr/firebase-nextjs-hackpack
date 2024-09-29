interface request {
  url: string;
  method: string;
  body: Object;
}

export const api = async ({ url, method, body }: request) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
};
