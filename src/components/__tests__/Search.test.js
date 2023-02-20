import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store.js"
import Body from "../Body";
import { render, waitFor,fireEvent } from "@testing-library/react";
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

test("Search for string(food) on homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(body.getByTestId("search-btn")))
    const input = body.getByTestId("search-input");
    fireEvent.change(input,{
            target:{
                value: "food" //this is mocking the synthetic event of React, basically the code will type "food" in the search container
            }
        }
    )

    const searchBtn=body.getByTestId("search-btn")
    fireEvent.click(searchBtn);
    

    //console.log(shimmer)
})