const apiJsonPlaceholder = "https://my-json-server.typicode.com/eleansi/Insta-clone";
const apiStarWars = "https://swapi.co/api/";

export const fetchData = async (to) => {
    try {
        const response = await fetch(apiStarWars + `${to}`);
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
};
