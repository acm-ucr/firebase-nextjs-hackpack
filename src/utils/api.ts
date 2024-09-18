interface body {
  name: string;
  email: string;
}

interface apifunc {
  url: string;
  method: string;
  body: body;
}

export const api = async ({ url, method, body }: apifunc) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
};
