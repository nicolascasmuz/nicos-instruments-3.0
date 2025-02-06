const BASE_URL = "https://desafio-ecommerce-backend-nc.vercel.app/api";

export async function fetchAPI(input?: RequestInfo, options?) {
  const url = BASE_URL + input;
  let res;

  /* const response = await fetch(url, options);
  res = response; */

  if (input == "/me" && options?.method == "PATCH") {
    const response = await fetch(url, options);
    res = response;
  }
  if (input == "/me/address" && options?.method == "PATCH") {
    const response = await fetch(url, options);
    res = response;
  }
  if (input == "/me") {
    const state = localStorage.getItem("saved-state");
    const parsedState = JSON.parse(state);

    const response = await fetch(url, {
      headers: {
        authorization: `bearer ${parsedState.token}`,
      },
    });
    res = response;
  } else {
    const response = await fetch(url, options);
    res = response;
  }

  if (res.status >= 200 && res.status < 300) {
    const data = await res.json();
    console.log("data api: ", data);
    return data;
  } else {
    throw new Error(`Hubo un error ${res.status}: ${res.statusText}`);
  }
}

export async function SignupSendCode(data: object) {
  if (data) {
    fetchAPI("/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}

export async function LoginSendCode(email: string) {
  if (email) {
    fetchAPI("/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
  }
}

export async function saveToken(email: string, code: number) {
  if (email && code) {
    const token = await fetchAPI("/auth/token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, code }),
    });
    localStorage.setItem("saved-state", JSON.stringify(token));
  }
}

export async function searchProducts(product: string) {
  if (product) {
    const foundProduct = await fetchAPI(
      `/search?q=${product}&limit=6&offset=0`,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    return foundProduct;
  }
}

export async function editData(newData) {
  if (newData) {
    fetchAPI("/me", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  }
}

export async function editAddress(newData) {
  if (newData) {
    fetchAPI("/me/address", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  }
}

export async function createOrder(productID: string) {
  const state = localStorage.getItem("saved-state");
  const parsedState = JSON.parse(state);
  if (productID) {
    const order = await fetchAPI(`/order?productID=${productID}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${parsedState.token}`,
      },
    });
    return order;
  }
}
