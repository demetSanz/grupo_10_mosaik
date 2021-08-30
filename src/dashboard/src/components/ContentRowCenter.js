import React from 'react';
import LastProduct from './LastProduct';
import Categories from './Categories';
import AllProducts from './AllProducts';
import AllUsers from './AllUsers';
import LastUser from './LastUser';


function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Product -->*/}
            <LastProduct />
            {/*<!-- allProduct Product -->*/}
            <AllProducts />
            {/*<!-- Last User -->*/}
            <LastUser />
            {/*<!-- AllUSers -->*/}
            <AllUsers />
            {/*<!-- Categories -->*/}
            <Categories />

        </div>
    )
}

export default ContentRowCenter;