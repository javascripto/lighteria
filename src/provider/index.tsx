import React from 'react';
import { createContext, useContext, useState } from 'react';

import { Item } from '../utils/data';

export type TItem = Item & { quantidade?: number };

interface ProviderValue {
  quantidade: number;
  valorTotal: number;
  itemsCheckout: TItem[];
  adicionarItem(item: Item): void;
}

const DataContext = createContext<ProviderValue>({} as ProviderValue);

export const useDataContext = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [itemsCheckout, setItemsCheckout] = useState<TItem[]>([]);
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);
  return (
    <DataContext.Provider
      value={{
        itemsCheckout,
        quantidade,
        valorTotal,
        adicionarItem(item: TItem) {
          const itemExists = itemsCheckout.find((i) => i.id == item.id);
          let novaLista = [];
          if (itemExists) {
            itemExists.quantidade++;
            novaLista = [...itemsCheckout];
          } else {
            novaLista = [...itemsCheckout, { ...item, quantidade: 1 }];
          }
          setItemsCheckout(novaLista);
          setQuantidade(
            novaLista.reduce((total, item) => total + item.quantidade, 0)
          );
          setValorTotal(
            novaLista.reduce(
              (total, item) => total + item.quantidade * item.preco,
              0
            )
          );
        },
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
