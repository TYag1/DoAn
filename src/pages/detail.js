import Header from "../components/header";
import Footer from "../components/footer";
import productAPI from "../api/product";
const ProductDetail = {
  async render(id) {
    // Tìm id trong mảng data
    // const product = data.find((item) => item.id === id);
    const product = await productAPI.getId(id);

    // if (!product) return `<div>Not Found</div>`;
    // nếu không có thì return về string not found
    // ngược lại nếu có trả về dữ liệu

    return /*html*/ `
    <div class="container" > 
    ${Header.render()}
     <div class="section-hot-book">
      <div class="container mx-auto px-32">
        <div class="mt-4 grid grid-row-1 grid-flow-col gap-4 border-b pb-4">
          <div class="flex items-center content-center">
            <a href="/" ><ion-icon name="home-outline" class="text-xl ml-4 mr-3"></ion-icon></a>
            <span class="text-xl mr-3"> <a href="/" >Truyện</a> </span>
            <ion-icon name="chevron-forward-outline" class="text-xl mr-3"></ion-icon>
            <span class="text-lg font-light text-slate-400 cursor-pointer hover:text-gray-500"
              >${product.title}</span
            >
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="section-update-book">
        <div class="container mx-auto px-32 py-12">
          <main class="max-w-7xl">
            <div class="grid grid-cols-1 gap-x-8 gap-y-10 xl:grid-cols-4">
              <!-- Filters -->
              <div class="lg:col-span-3">
                <div class="flex flex-row gap-8 wrap-detail">
                  <div class="w-2/6">
                    <div class="w-full shadow-lg shadow-cyan-500/50">
                      <img
                        src="${product.imgUrl}"
                        class="w-full rounded-sm object-cover object-contain"
                      />
                    </div>
                  </div>
                  <div class="w-4/6">
                    <h3 class="text-2xl font-medium mb-4">${product.title}</h3>
                    <div class="flex items-center justify-start">
                      <p class="flex text-sm font-medium text-gray-700 items-center mr-3">
                        <ion-icon name="star" class="text-yellow-300 md hydrated mr-1"></ion-icon>
                        ${product.rate}
                      </p>
                      <p class="mr-3 flex items-center">
                        <ion-icon name="eye" class="mr-1"></ion-icon>${product.view}
                      </p>
                      <a
                        href="#"
                        class="flex items-center rounded-md border border-transparent bg-green-600 px-3 py-1 text-xs font-thin text-white hover:bg-green-500"
                        >Theo dõi</a
                      >
                    </div>
                    <div class="mt-8 bg-gray-100 rounded-lg">
                      <div class="p-8">
                        <div>
                          <p class="text-sm text-gray-600 font-medium">
                            Tác giả:
                            <a href="" class="ml-1 text-green-700 hover:opacity-75">${
                              product.author
                            }</a>
                          </p>
                          <p class="text-sm text-gray-600 font-medium">
                            Thể loại:
                            <a href="" class="ml-1 text-green-700 hover:opacity-75"
                              >${product.catalogs}</a
                            >
                          </p>
                          <p class="text-sm text-gray-600 font-medium">
                            Nguồn:
                            <a href="" class="ml-1 text-gray-600">Vip Văn Đàn</a>
                          </p>
                          <p class="text-sm text-gray-600 font-medium mt-1">
                            Trạng thái:
                            <a
                              href=""
                              class="ml-1 bg-green-600 px-1 py-1 rounded-md text-white hover:opacity-85"
                              >${product.status}</a
                            >
                          </p>
                        </div>
                        <div class="mt-12">
                          <p class="text-sm">
                           ${product.content}
                          </p>
                          <p class="text-sm mt-8">
                           ${product.shortDes}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-12 border-t border-gray-200">
                  <div class="mt-8">
                    <h3 class="font-medium text-xl">Danh sách chương</h3>
                  </div>
                  <div class="flex flex-row gap-4">
                    <div class="w-3/6">
                      <div class="m-auto mt-12">
                        <table class="w-full table-collapse">
                          <tbody class="align-baseline">
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm text-green-700 font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 1: Thiên Đế chi tử chuyển thế trùng sinh 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 2: Thiên Đế chi tử chuyển thế trùng sinh 2
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 3: Phụ thân bao che khuyết điểm bạn bè nghĩa khí 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 4: Phụ thân bao che khuyết điểm bạn bè nghĩa khí 2
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 5: Đưa mặt đến cửa hung hăng mà đánh
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 6: Cái mặt này vẫn là chính ngươi đánh đi 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 7: Cái mặt này vẫn là chính ngươi đánh đi 2
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 8: Trị không hết ta chết cùng công chúa 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 9: Trị không hết ta chết cùng công chúa 2
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 10: Quản gia Giang Chính buồn rầu 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 11: Quản gia Giang Chính buồn rầu 2
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 12: Giang Chính phát uy! Hãnh diện 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 13: Giang Chính phát uy! Hãnh diện 2
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 14: Khiếp sợ Dược Sư Điện
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 15: Thật sự phát tài 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-b border-grey-light whitespace-no-wrap"
                              >
                                Chương 16: Thật sự phát tài 2
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="w-3/6">
                      <div class="m-auto mt-12">
                        <table class="w-full table-collapse">
                          <tbody class="align-baseline">
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm text-green-700 font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 1: Thiên Đế chi tử chuyển thế trùng sinh 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 2: Thiên Đế chi tử chuyển thế trùng sinh 2
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 3: Phụ thân bao che khuyết điểm bạn bè nghĩa khí 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 4: Phụ thân bao che khuyết điểm bạn bè nghĩa khí 2
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 5: Đưa mặt đến cửa hung hăng mà đánh
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 6: Cái mặt này vẫn là chính ngươi đánh đi 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 7: Cái mặt này vẫn là chính ngươi đánh đi 2
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 8: Trị không hết ta chết cùng công chúa 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 9: Trị không hết ta chết cùng công chúa 2
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 10: Quản gia Giang Chính buồn rầu 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 11: Quản gia Giang Chính buồn rầu 2
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 12: Giang Chính phát uy! Hãnh diện 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 13: Giang Chính phát uy! Hãnh diện 2
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 14: Khiếp sợ Dược Sư Điện
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-grey-light whitespace-no-wrap"
                              >
                                Chương 15: Thật sự phát tài 1
                              </td>
                            </tr>
                            <tr class="group cursor-pointer hover:bg-gray-100">
                              <td
                                class="text-sm font-medium p-3 border-t border-b border-grey-light whitespace-no-wrap"
                              >
                                Chương 16: Thật sự phát tài 2
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pagination__chapter mt-8">
                  <div class="text-center">
                    <nav
                      class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                      aria-label="Pagination"
                    >
                      <a
                        href="#"
                        class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                      >
                        <span class="sr-only">Previous</span>
                        <!-- Heroicon name: mini/chevron-left -->
                        <svg
                          class="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                      <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                      <a
                        href="#"
                        aria-current="page"
                        class="relative z-10 inline-flex items-center border border-green-700 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                        >1</a
                      >
                      <a
                        href="#"
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >2</a
                      >
                      <a
                        href="#"
                        class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                        >3</a
                      >
                      <span
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
                        >...</span
                      >
                      <a
                        href="#"
                        class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                        >8</a
                      >
                      <a
                        href="#"
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >9</a
                      >
                      <a
                        href="#"
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >10</a
                      >
                      <a
                        href="#"
                        class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                      >
                        <span class="sr-only">Next</span>
                        <!-- Heroicon name: mini/chevron-right -->
                        <svg
                          class="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </nav>
                  </div>
                </div>
                <div class="related">
                  <div class=" mt-12 flex flex-row justify-between" >

                    <div class="flex items-center content-center">
                      <span class="text-xl font-medium mr-3">Gợi ý truyện</span>
                      <ion-icon name="chevron-forward-outline" class="text-xl"></ion-icon>
                    </div>
                    <div class="flex items-center content-center" >
                      <a href="" class=" mr-2" ><ion-icon name="chevron-back" class="text-xl"></ion-icon></a>
                      <a href="" class="ml-2" ><ion-icon name="chevron-forward" class="text-xl" ></ion-icon></a>
                    </div>
                  </div>
                  <div class="slide__book" >
                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                    <div class="group relative">
                      <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img src="https://sstruyen.vn/assets/img/story//nhat_the_chi_ton_1.1631292856.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm font-medium ">
                            <a href="#">
                              <span aria-hidden="true" class="absolute inset-0"></span>
                              Kiếm ảnh hoa thu
                            </a>
                          </h3>
                          <p class="mt-2  text-sm flex content-center items-center ">
                            <span class="mr-2" ><ion-icon name="star" class="text-yellow-300 mr-2 md hydrated"></ion-icon>7.4/10</span>
                            <span class="flex items-center" ><ion-icon name="eye" class="mr-1"></ion-icon>10363</span>
                        </div>
                      </div>
                    </div>
                    <div class="group relative">
                      <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img src="https://sstruyen.vn/assets/img/story//tam-thien-luu-hanh.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm font-medium ">
                            <a href="#">
                              <span aria-hidden="true" class="absolute inset-0"></span>
                              Tam Thiên Lưu Hành
                            </a>
                          </h3>
                          <p class="mt-2  text-sm flex content-center items-center ">
                            <span class="mr-2" ><ion-icon name="star" class="text-yellow-300 mr-2 md hydrated"></ion-icon>7.4/10</span>
                            <span class="flex items-center" ><ion-icon name="eye" class="mr-1"></ion-icon>10363</span>
                        </div>
                      </div>
                    </div>
                    <div class="group relative">
                      <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img src="https://sstruyen.vn/assets/img/story//thien_loi_co_the_co_cai_gi_y_xau_dau.1667227572.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm font-medium ">
                            <a href="#">
                              <span aria-hidden="true" class="absolute inset-0"></span>
                              Thiên Lôi Có Thể Có Cái Gì Ý Xấu Đâu 
                            </a>
                          </h3>
                          <p class="mt-2  text-sm flex content-center items-center ">
                            <span class="mr-2" ><ion-icon name="star" class="text-yellow-300 mr-2 md hydrated"></ion-icon>7.4/10</span>
                            <span class="flex items-center" ><ion-icon name="eye" class="mr-1"></ion-icon>10363</span>
                        </div>
                      </div>
                    </div>
                    <div class="group relative">
                      <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img src="https://sstruyen.vn/assets/img/story//dua_vao_mat_an_com.1645069157.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm font-medium ">
                            <a href="#">
                              <span aria-hidden="true" class="absolute inset-0"></span>
                              Dựa Vào Mặt Ăn Cơm
                            </a>
                          </h3>
                          <p class="mt-2  text-sm flex content-center items-center ">
                            <span class="mr-2" ><ion-icon name="star" class="text-yellow-300 mr-2 md hydrated"></ion-icon>7.4/10</span>
                            <span class="flex items-center" ><ion-icon name="eye" class="mr-1"></ion-icon>10363</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              <!-- Product grid -->
            </div>
            <div class="hidden lg:block">
                  <div class="bg-gray-100 p-4 rounded-md">
                    <h3 class="text-xl font-medium">Thể loại truyện</h3>
                    <div class="mt-3 flex gap-2">
                      <ul class="w-6/12">
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Tiêm Hiệp</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Kiếm Hiệp</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Ngôn Tình</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Đô Thị</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700"
                            >Quang Trường</a
                          >
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Võng Du</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700"
                            >Huyền Huyễn</a
                          >
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Dị Giới</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Dị Năng</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Quân Sự</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Lịch Sự</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700"
                            >Xuyên Không</a
                          >
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Trọng Sinh</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Trinh Thám</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Linh Dị</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Truyện Sắc</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700"
                            >Truyện Ngược</a
                          >
                        </li>
                      </ul>
                      <ul class="w-6/12">
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700"
                            >Truyện Súng</a
                          >
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700"
                            >Truyện Cung Đấu</a
                          >
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700"
                            >Truyện Nữ Cường</a
                          >
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700"
                            >Truyện Gia Đấu</a
                          >
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700"
                            >Đông Phương</a
                          >
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Đam Mỹ</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Bách Hợp</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Hài Hước</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Cổ Đại</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Mạt Thế</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700"
                            >Truyện Teen</a
                          >
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Phương Tây</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Nữ Phụ</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700">Đoản Văn</a>
                        </li>
                        <li>
                          <a href="" class="text-sm font-medium hover:text-green-700"
                            >Truyện Khác</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
          </main>
        </div>
      </div>
    </section>
    ${Footer.render()}
    </div>
       `;
  },
};
export default ProductDetail;
