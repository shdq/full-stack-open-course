const url = "http://localhost:3001/persons";

const getAll = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error code: ${response.status} ${response.statusText}`)
    }
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};

const create = async (data) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error code: ${response.status} ${response.statusText}`)
    }
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};

const update = async (data) => {
  try {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${url}/${data.id}`, options);
    if (!response.ok) {
      throw new Error(`Error code: ${response.status} ${response.statusText}`)
    }
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};

const remove = async (id) => {
  try {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(`${url}/${id}`, options);
    if (!response.ok) {
      throw new Error(`Error code: ${response.status} ${response.statusText}`)
    }
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};

export default { getAll, create, update, remove };
