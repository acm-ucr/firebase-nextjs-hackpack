type Body = {
  name: string;
  email: string;
};

type Api = {
  url: string;
  method: string;
  body: Body;
};

export const api = async ({ url, method, body }: Api) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
};
