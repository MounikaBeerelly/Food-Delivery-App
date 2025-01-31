import { useDispatch, useSelector } from "react-redux";
import ItemListComponent from "./ItemListComponent";
import { clearCart } from "../utils/redux/cartSlice";

const CartComponent = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="m-4 p-4 text-center">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button 
                   className="p-2 m-2 bg-black text-white rounded-lg"
                   onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems?.length === 0 && <h1>Your Cart is empty. Please Add items to the Cart!</h1>}
                <ItemListComponent items={cartItems} />
            </div>
        </div>
    );
};

export default CartComponent;