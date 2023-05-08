import instance from "common/config/api";

const categoriaService = {
    buscar: async () => {
        const resposta = await instance.get('/categorias');

        return resposta.data;
    }
}

export default categoriaService;