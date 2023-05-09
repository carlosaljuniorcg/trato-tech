import instance from "common/config/api";

const categoriaService = {
    buscar: async () => {
        const resposta = await instance.get('/categorias');

        return resposta.data;
    },
    buscarUmaCategoria: async (nomeCategoria) => {
        const resposta = await instance.get(`/categorias/${nomeCategoria}`);

        return resposta.data;
    }
}

export default categoriaService;