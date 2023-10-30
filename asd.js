'use strict';

let listar_productos = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/v1/devcamp/bootcamps');
        return response.data.user;
    } catch (error) {
        console.error(error);
        return [];
    }
};
