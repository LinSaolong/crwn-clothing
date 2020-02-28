import React from 'react';
import SHOP_DATA from './/shop.data';
import '../../components/collection-preview/collection-preview.component';
import CollectionsPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return(
            <div className='shop'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionsPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;