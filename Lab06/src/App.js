import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Categories} from "./components/Categories";
import {Container} from "@mui/material";
import {ProductsGrid} from "./components/ProductsGrid";
import {Header} from "./components/Header";
import {Product} from "./components/Product";
import {NotFound} from "./components/NotFound";

function App() {


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Header/>,
            children: [
                {
                    path: "/",
                    element: <Categories/>,
                },
                {
                    path: "/category/:category/products",
                    element: <ProductsGrid/>,
                },
                {
                    path: "/products/search",
                    element: <ProductsGrid/>,
                },
                {
                    path: "/product/:id",
                    element: <Product/>,
                },
                {
                    path: "*",
                    element: <NotFound/>,
                },
            ],
        },
    ]);

    return (
        <div style={{
            margin: '15px',
            backgroundColor: "#83c993",
        }}>
            <Container maxWidth="xl">
                <RouterProvider router={router}/>
            </Container>
        </div>
    );
}

export default App;
