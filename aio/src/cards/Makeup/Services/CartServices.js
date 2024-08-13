import axios from 'axios'
export const addToCart = (item, token, dispatch) => {

    try {
        fetch("/api/user/cart", {
            method: "POST",
            body: JSON.stringify({ product: item }),
            headers: {
                authorization: token,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => dispatch({ type: 'SET_CART', payload: data.cart }))

    } catch (error) {
        console.log(error)
    }

}

export const updateProductQty = async (id, token, dispatch, actionType) => {
    try {
        const {
            data: { cart },
        } = await axios.post(
            `api/user/cart/${id}`,
            {
                action: {
                    type: actionType,
                },
            },
            {
                headers: {
                    authorization: token,
                },
            }
        );
        dispatch({ type: 'SET_CART', payload: cart })
    } catch (error) {
        console.log("Error in updateQtyFromCart service", error);
    }
}

export const removeFromCart = async (id, token, dispatch) => {
    try {
        const {
            data: { cart },
        } = await axios.delete(`api/user/cart/${id}`, {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: 'SET_CART', payload: cart })

    } catch (error) {
        console.log("Error in cart service", error);
    }
}


export const findPriceOfAllItems = (cart) => {

    const totalPrice = cart.reduce((acc, curr) => {
        acc = acc + curr.price * curr.qty
        return acc

    }, 0)
    return totalPrice;

}

export const findTotalDiscount = (cart) => {

    const totalDiscount = cart.reduce((acc, curr) => {
        acc = acc + ((curr.discount / 100) * curr.price) * curr.qty
        return acc

    }, 0)

    return totalDiscount.toFixed(2);

}

export const calculateFinalCartPrice = (totalPrice, totalDiscount, DeliveryCharges) => {
    return totalPrice - totalDiscount + DeliveryCharges
}

