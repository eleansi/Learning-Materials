const api = "https://my-json-server.typicode.com/eleansi/Insta-clone";

export const fetchData = async () => {
    try {
        const response = await fetch(api + "/users");
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
};
