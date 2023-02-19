import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store.js"
import Body from "../Body";
import { render, waitFor } from "@testing-library/react";
import { RESTAURANT_DATA } from "../../mocks/APIData"
import "@testing-library/jest-dom"; //for using toBeInTheDocument()

global.fetch = jest.fn(() => { //fetch is a function which returns a promise
    return Promise.resolve({
        json: ()=> { //json is a function which returns a promise, you can compare this code to the code written in body.js file
            return Promise.resolve(RESTAURANT_DATA)
        }
    })
})
test("Shimmer Loading", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=>expect(body.getByTestId("search-btn")))
    const resList=body.getByTestId("res-list");
    expect(resList.children.length).toBe(15);
    //console.log(shimmer)
})