import Navigo from "navigo"; // When using ES modules.
const router = new Navigo("/");
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductDetail from "./pages/detail";
document.addEventListener("DOMContentLoaded", function () {
  async function print(page, id) {
    // page ~ HomePage.render()
    const app = document.getElementById("app");
    if (app) {
      // chờ page.render() chạy xong thì mới show ra ngoài
      app.innerHTML = await page.render(id); // [object promise]
    }
    if (page.afterRender) page.afterRender(id);
  }

  router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/product/:id": (data) => {
      const id = +data.data.id;
      print(ProductDetail, id);
    },
  });
  router.resolve();
});
