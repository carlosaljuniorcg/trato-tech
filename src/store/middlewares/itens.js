import { createListenerMiddleware } from '@reduxjs/toolkit';
import { carregarUmaCategoria } from 'store/reducers/categorias';
import criarTarefa from './utils/criarTarefa';
import { adicionarItens } from 'store/reducers/itens';
import itensService from 'services/itens';


export const itensListener = createListenerMiddleware();

itensListener.startListening({
    actionCreator: carregarUmaCategoria,
    effect: async (action, { fork, dispatch, unsubscribe, getState }) => {
        const { itens } = getState();

        if(itens.length === 25) return unsubscribe();

        const nomeCategoria = action.payload;

        const itensCarregados = itens.some(item => item.categoria === nomeCategoria);

        if(itensCarregados) return;       

        await criarTarefa({
            fork,
            dispatch,
            action: adicionarItens,
            busca: () => itensService.buscarDeCategorias(nomeCategoria),
            textoCarregando: `Tá carregando itens da categoria ${nomeCategoria} abestado!!!`,
            textoSucesso: `Itens da categoria ${nomeCategoria} carregados com sucesso!`,
            textoErro: `Deu bronca na busca de itens da categoria ${nomeCategoria}`,
        });
    }
})