import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component'; 

import { CollectionPreviewContainer, Title, Preview } from './collection-preview.styles'

const CollectionsPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <Title onClick={() => history.push(`${match.path}/${routeName}`)} >
            { title.toUpperCase() }
        </Title>
        <Preview>
            {
                items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </Preview>
    </CollectionPreviewContainer>
)

export default withRouter(CollectionsPreview);