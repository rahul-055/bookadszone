import React from 'react';

type ProductImgProps = {
    srcUrl: any
}
function ProductImg(props: ProductImgProps) {
    return (
        <div className='product-img'>
            <img src={props.srcUrl} alt="" />
        </div>
    );
}

export default ProductImg;