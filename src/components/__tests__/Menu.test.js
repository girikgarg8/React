import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store.js"
import Header from "../Header";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { RESTAURANT_MENU } from "../../mocks/APIData"
import "@testing-library/jest-dom"; //for using toBeInTheDocument()
import RestaurantDetail from "../RestuarantDetail.js";

global.fetch = jest.fn(() => { //fetch is a function which returns a promise
    return Promise.resolve({
        json: () => { //json is a function which returns a promise, you can compare this code to the code written in body.js file
            return Promise.resolve(RESTAURANT_MENU)
        }
    })
})


test("Add Items to cart",async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantDetail/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=>expect(body.getByTestId("menu")));

    const addBtn=body.getAllByTestId("addBtn")
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

    const cart=body.getByTestId("cart")

    expect(cart.innerHTML).toBe(" Cart -2 items ")
})
