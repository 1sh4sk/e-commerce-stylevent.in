import Wrapper from "./NewCollectionsWrapper"

import new_collection from '../../assets/Assets/new_collections'
import Item from "../Items/Item"

const NewCollections = () => {
    return (
        <Wrapper className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {
                    new_collection.map((item, i) => {
                        return <Item key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    })
                }
            </div>
        </Wrapper>
    )
}
export default NewCollections