import ShopActionTypes from './shop.types';

export const updateCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collectionsMap
})