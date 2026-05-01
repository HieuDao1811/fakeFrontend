import { useRoutes } from "react-router-dom";
import { routes } from "../../routes"

function AllRoute() {
    let elements = useRoutes(routes);
    return elements;
}

export default AllRoute;