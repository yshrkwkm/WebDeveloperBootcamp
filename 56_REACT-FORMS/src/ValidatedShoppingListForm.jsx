import { useState } from "react"

export default function ValidatedShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({product: '', quantity: 0})
    const [productIsValid, setProductIsValid] = useState(false); 

    const validate = (product) => {
        if (product.length === 0) {
            setProductIsValid(false);
        } else {
            setProductIsValid(true);
        }
    }

    const handleChange = (evt) => {
        if (evt.target.name === 'product') {
            validate(evt.target.value);
        }
        setFormData((currData) => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productIsValid) {
            addItem(formData);
            setFormData({product: '', quantity: 0});
            setProductIsValid(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">商品名</label>
            <input 
                type="text"
                placeholder='商品名' 
                name="product"
                id="product"
                onChange={handleChange}
                value={formData.product}
            />
            {!productIsValid && <p style={{color: 'red'}}>商品名を空にすることはできません</p>}
            <label htmlFor="quantity">数量</label>
            <input 
                type="number"
                placeholder='数量' 
                name="quantity"
                id="quantity"
                onChange={handleChange}
                value={formData.quantity}
            />
            <button disabled={!productIsValid}>商品を追加</button>
        </form>
    );
}