import Header from "../components/header";
import Footer from "../components/footer";
const HomePage = {
  async render() {
    const getAllBookHot = await (await fetch("http://localhost:3001/bookHot")).json();
    const getAllBookNew = await (await fetch("http://localhost:3001/bookNew")).json();
    const getAllFinishBook = await (await fetch("http://localhost:3001/bookFinish")).json();
    const getAllCategories = await (await fetch("http://localhost:3001/categories")).json();
    if (!getAllBookHot) return `<div>Not found</div>`;
    return `
        <div class="container">
            ${Header.render()}
             <!-- section-hot-book -->
  <div class="section-hot-book">
      <div class="container mx-auto px-32">
        <div class="mt-4 grid grid-row-1 grid-flow-col gap-4">
          <div class="flex items-center content-center">
            <span class="text-xl mr-3">Truyện Hot</span>
            <ion-icon name="chevron-forward-outline" class="text-xl"></ion-icon>
          </div>
          <div class="album">
            <div class="flex justify-end items-center">
              <label for="currency" class="sr-only">Currency</label>
              <select
                id="currency"
                name="currency"
                class="h-full p-4 rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-800 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Tất cả</option>
                <option>Ngôn tình hay</option>
                <option>Hài hước</option>
                <option>Truyện teen hay</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-32">
        <div class="max-w-2xl sm:py-4 sm:px-6 lg:max-w-7xl lg:px-0">

            <div
              class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-4"
            >
          ${getAllBookHot
            .map(
              (item) =>
                `
              <a href="/product/${item.id}" class="group">
              <div
                class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-sm bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
              >
                <img
                  src="${item.imgUrl}"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-6 text-sm font-medium text-gray-700">
               ${item.title}
              </h3>
              <p class="mt-4 text-sm font-medium text-gray-900">
              <ion-icon name="star" class="text-yellow-300 mr-2"></ion-icon>${item.rate}
              </p>
              </a>
          `
            )
            .join("")}
              </div>
          <div class="load__more">
            <a
              href="#"
              class="btn_viewmore inline-block rounded-md border border-transparent tracking-widest bg-green-300 py-2 px-24 text-center font-medium text-green-900 hover:opacity-90"
              >Xem thêm</a
            >
          </div>
        </div>
      </div>
    </div>
             <!-- section-hot-book -->

           <!-- section-update-book -->
           <div class="section-update-book">
      <div class="container mx-auto px-32 py-6">
        <main class="max-w-7xl">
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 xl:grid-cols-4">
            <!-- Filters -->
            <div class="lg:col-span-3">
              <div class="flex justify-between content-start">
                <div class="flex">
                  <span
                    class="text-md mr-3 text-green-700 font-extralight cursor-pointer hover:opacity-90"
                    >Truyện mới cập nhật</span
                  >
                  <ion-icon name="chevron-forward-outline" class="text-xl"></ion-icon>
                </div>
                <div class="album">
                  <div class="">
                    <label for="currency" class="sr-only">Currency</label>
                    <select
                      id="currency"
                      name="currency"
                      class="h-full p-4 rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-800 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>Tất cả</option>
                      <option>Ngôn tình hay</option>
                      <option>Hài hước</option>
                      <option>Truyện teen hay</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div class="m-auto mt-12">
                  <table class="w-full table-collapse">
                    <tbody class="align-baseline">
                    ${getAllBookNew
                      .map(
                        (item) =>
                          `
                      <tr class="group cursor-pointer hover:bg-gray-100">
                        <td
                          class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                        >
                          ${item.title}
                        </td>
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                          ${item.cat}
                        </td>
                        <td
                          class="text-sm font-medium text-green-600 p-3 border-t border-grey-light whitespace-no-wrap"
                        >
                          ${item.chap}
                        </td>
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                          ${item.time}
                        </td>
                      </tr>
          
                      `
                      )
                      .join("")}
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="hidden lg:block">
              <div>
                <img
                  src="https://iads.staticscdn.net/ads/2021/03/04/images/qRQ82JDi11quzdxFOkdggR0NRdlOJBfEtMZzmkw5.png"
                />
              </div>
              <div class="mt-12">
                <div class="bg-gray-100 p-4 rounded-md">
                  <h3 class="text-xl font-medium">Thể loại truyện</h3>
                  <div class="mt-3 flex gap-2">
                    <ul class="w-6/12">
                    ${getAllCategories
                      .map(
                        (item) =>
                          `
                      <li>
                        <a href="" class="text-sm font-medium hover:text-green-700">${item.nameCat}</a>
                      </li>
                      
                      `
                      )
                      .join("")}
                      
                    </ul>
                    <ul class="w-6/12">
                    ${getAllCategories
                      .map(
                        (item) =>
                          `
                      <li>
                        <a href="" class="text-sm font-medium hover:text-green-700">${item.nameCat}</a>
                      </li>
                      `
                      )
                      .join("")}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product grid -->
          </div>
        </main>
      </div>
    </div>
           <!-- section-update-book -->

           <!-- section-finish-book -->
            <div class="section-finish">
      <div class="container mx-auto px-32">
        <main class="max-w-7xl">
          <div class="mt-8 grid grid-row-1 grid-flow-col gap-4">
            <div class="flex items-center content-center">
              <span
                class="text-md mr-3 text-green-700 font-extralight cursor-pointer hover:opacity-90"
                >Truyện đã hoàn thành</span
              >
              <ion-icon name="chevron-forward-outline" class="text-xl"></ion-icon>
            </div>
            <div class="album">
              <div class="flex justify-end items-center">
                <label for="currency" class="sr-only">Currency</label>
                <select
                  id="currency"
                  name="currency"
                  class="h-full p-4 rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-800 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Tất cả</option>
                  <option>Ngôn tình hay</option>
                  <option>Hài hước</option>
                  <option>Truyện teen hay</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mx-auto max-w-2xl py-8 lg:max-w-7xl lg:px-0">
            <div class="grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
            ${getAllFinishBook
              .map(
                (item) => `
                        <div class="flex justify-between group relative">
                <div
                  class="finish__thumbnail h-4/6 w-4/6 aspect-w-1 aspect-h-1 overflow-hidden rounded-md group-hover:opacity-75 cursor-pointer lg:aspect-none"
                >
                  <img
                    src="${item.imgUrl}"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <div class="ml-4 flex-col justify-end items-end">
                  <a
                    href="#"
                    class="inline-block rounded-md border border-green-700 py-1 px-3 text-left text-xs font-thin text-green-900"
                    >${item.chapter} Chương</a
                  >
                  <h3 class="text-sm text-gray-700 pt-2">
                    <a href="#" class="font-bold"> ${item.title} </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 pt-2">
                    <ion-icon name="star" class="text-yellow-300 mr-2"></ion-icon>${item.rate}
                  </p>
                </div>
              </div>
              <!-- item finish -->
            `
              )
              .join("")}
            </div>
          </div>
        </main>
      </div>
    </div>
           <!-- section-finish-book -->
            ${Footer.render()}
        </div>
        `;
  },
};
export default HomePage;
