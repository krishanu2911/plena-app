import { create } from "zustand";

export const useShopStore = create((set, get) => ({
  products: [],
  cartItem: {},
  wishlistItem: {},
  setProducts: (productsData) =>
    set((state) => ({
      ...state,
      products: productsData,
    })),
  addToCart: (item) =>
    set((state) => {
      const { cartItem } = get();
      const presentItem = cartItem[item.id];
      const updatedCount = presentItem ? presentItem.count + 1 : 1;
      
      // Checking if item exists and updating existing item.
      if (presentItem) {
        return {
          ...state,
          cartItem: {
            ...state.cartItem,
            [presentItem?.item?.id]: {
              ...presentItem,
              count: updatedCount,
            },
          },
        };
      } else {
        // Adding the new item tot he cart i.e added first time.
        return {
          ...state,
          cartItem: {
            ...state.cartItem,
            [item.id]: {
              // ...item,
              item: item,
              count: updatedCount,
            },
          },
        };
      }
    }),
  removeFromCart: (item) =>
    set((state) => {
      const { cartItem } = get();
      const presentItem = cartItem[item.id];

      // Checking and will only move ahead if itemId exists in the cart already.
      if (!presentItem) {
        return state;
      }

      const updatedCount = presentItem.count - 1;

      // Removing the items from cart.
      if (updatedCount <= 0) {
        const { [item.id]: removedItem, ...leftCartItems } = state.cartItem;
        return {
          ...state,
          cartItem: leftCartItems,
        };
      } else {
        // updating the item with updated decreased count
        return {
          ...state,
          cartItem: {
            ...state.cartItem,
            [presentItem?.item?.id]: {
              ...presentItem,
              count: updatedCount,
            },
          },
        };
      }
    }),
  wishlistHandler: (item) =>
    set((state) => {
      const { wishlistItem } = get();
      const itemInWishlist = wishlistItem[item.id];

      // removing item from wishlist
      if (itemInWishlist) {
        const { [item.id]: persentItem, ...restWishlistItems } = wishlistItem;
        return {
          ...state,
          wishlistItem: restWishlistItems,
        };
      } else {
        // addign the item to the wishlist
        return {
          ...state,
          wishlistItem: {
            ...state.wishlistItem,
            [item.id]: item,
          },
        };
      }
    }),
}));
