import {parseRoutePath} from "./utils/parseRoutePath.js";
export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: ({req, res, database}) => {
      const products = database.select("products");
      return res.end(JSON.stringify(products));
    },
  },

  {
    method: "POST",
    path: "/products",
    controller: ({req, res, database}) => {
      const products = database.insert("products", req.body);
      return res.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: "/products/:id",
    controller: ({req, res}) => {
      return res.end("produto removido com id: " + req.params.id);
    },
  },
].map((route)=>({
    ...route,
    path: parseRoutePath(route.path)
}));
