import { create } from "zustand";
import { fetchBeers } from "../services/fetchBeers/fetchBeers";
import type { Beer } from "../services/fetchBeers/types";

type BeerStore = {
  beers: Beer[];
  selectedBeers: Set<number>;
  page: number;
  fetchBeers: () => Promise<void>;
  loadMoreBeers: () => Promise<void>;
  toggleBeerSelection: (beerId: number) => void;
  deleteSelectedBeers: () => void;
};

export const useBeerStore = create<BeerStore>((set, get) => ({
  beers: [],
  selectedBeers: new Set<number>(),
  page: 1,
  fetchBeers: async () => {
    const { page } = get();
    const fetchedBeers = await fetchBeers(page);
    set({ beers: fetchedBeers });
  },
  loadMoreBeers: async () => {
    set((state) => ({ page: state.page + 1 }));
    await get().fetchBeers();
  },
  toggleBeerSelection: (beerId: number) => {
    set((state) => {
      const selectedBeers = new Set(state.selectedBeers);
      if (selectedBeers.has(beerId)) {
        selectedBeers.delete(beerId);
      } else {
        selectedBeers.add(beerId);
      }
      return { selectedBeers };
    });
  },

  //decided to fetch new berr portion inside store
  deleteSelectedBeers: () => {
    set((state) => {
      const beers = state.beers.filter((beer) => !state.selectedBeers.has(beer.id));
      const selectedBeers = new Set<number>();
      const shouldLoadNextPage = beers.length === 0;

      if (shouldLoadNextPage) {
        const nextPage = state.page + 1;
        set({ page: nextPage });
        get().fetchBeers();
      }

      return { beers, selectedBeers };
    });
  },
}));
