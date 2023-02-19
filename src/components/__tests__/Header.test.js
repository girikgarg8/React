import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering header", () => {
    //Load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    //console.log(header); //the header printed is actually a virtual DOM node
    //Check if logo is loaded

    const logo = header.getAllByTestId("logo");
    // console.log(logo)

    //console.log(logo[0])
    expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Cart should have 0 items initially", () => {
    //Load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    //console.log(header); //the header printed is actually a virtual DOM node
    //Check if logo is loaded

    const cart = header.getAllByTestId("cart");
    // console.log(logo)

    //console.log(cart[0])
    expect(cart[0].innerHTML).toBe(" Cart - 0  ");
});