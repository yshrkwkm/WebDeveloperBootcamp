import { useForm } from "react-hook-form"

export default function RHFForm({addItem}) {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            product: '',
            quantity: 0,
        }
    });
    const onSubmit = (data) => {
        console.log(data);
        addItem(data);
        reset();
    }

    // console.log('watch: product', watch("product")) // watch input value by passing the name of it
    // console.log('watch: quantity', watch("quantity")) // watch input value by passing the name of it

    return (
        
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="product">商品名</label>
                <input
                    id="product"
                    type="text"
                    {...register("product", {required: '商品名は空にできません'})}
                />
                {errors.product && errors.product.message}
            </div>

            <div>
                <label htmlFor="quantity">数量</label>
                <input
                    id="quantity" 
                    {...register("quantity", { 
                        required: '数量を入力してください', 
                        valueAsNumber: true,
                        min: {value: 1, message: '1以上を入力してください'},
                    })}
                />
                {errors.quantity && errors.quantity.message}
            </div>

            <input type="submit" />
        </form>
    )
}