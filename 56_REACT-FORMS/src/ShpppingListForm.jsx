import { useState } from "react"

export default function ShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({product: '', quantity: 0})

    const handleChange = (evt) => {
        setFormData((currData) => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({product: '', quantity: 0});
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
            <label htmlFor="quantity">数量</label>
            <input 
                type="number"
                placeholder='数量' 
                name="quantity"
                id="quantity"
                onChange={handleChange}
                value={formData.quantity}
            />
            <button>商品を追加</button>
        </form>
    );
}