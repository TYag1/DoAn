const Footer = {
  render() {
    return `
        <footer>
      <div class="container mx-auto px-32 py-4">
        <div class="mt-4 grid grid-cols-2 grid-flow-col gap-4">
          <div class="footer__left flex items-start justify-between basis-3/5">
            <div class="w-2/6">
              <img
                src="https://res.cloudinary.com/phucdev/image/upload/v1667039756/d4aecd2fbf5049ed833cb7c073ea19bb_louhck.png"
              />
            </div>
            <div class="w-4/6">
              <p class="text-sm font-light text-gray-600">
                sstruyen.vn - Website đọc truyện nhanh nhất, thân thiện nhất, và luôn cập nhật mới
                nhất. Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Hỗ trợ mọi trình
                duyệt và thiết bị di động.
              </p>
              <p class="mt-6 text-sm font-thin text-gray-600">
                Liên hệ:
                <strong class="hover:text-green-600 cursor-pointer">sstruyenvn@gmail.com</strong>
              </p>
            </div>
          </div>
          <div class="footer__right flex flex-row items-center w-full">
            <div class="tags">
              <ul class="flex flex-wrap">
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-bold hover:opacity-90"
                    >Lọc Truyện</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Facebook</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-bold hover:opacity-90"
                    >Nhờ Vả</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Cuộc Sống Sau Khi Bị Hào Môn Mãnh Thú Cưới Về Nhà</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Quậy Tung Hogwarts</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Tam Thốn Nhân Gian</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Uông Xưởng Công</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Ngôn Tình Yêu Đương Vụng Trộm
                  </a>
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Chồng Tôi Là Diêm Vương</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Sau Khi Lão Đại Mất Trí Nhớ Chỉ là Nhớ Mỗi Mình Tôi</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Tương Tư Thành bỆNH</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Hello, Người Thừa Kế</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Sống Lại Thành Đại Ma Đầu</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Vô Vi Nhất Niệm</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Nhà Hàng Dị Giới Của Ông Bố Bỉm Sữa</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Quân Hồn Kéo Dài Cố Thiếu Sủng Thê Vô Độ</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Truyện Teen Hay</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Ngôn Tình Ngược</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Ngôn Tình Hài</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Đam Mỹ Hài</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Truyện Hot</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-bold hover:opacity-90"
                    >Kiếm Hiệp Hay</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Truyện Mới Cập Nhật</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-medium text-green-900 hover:opacity-90"
                    >Truyện Tranh</a
                  >
                </li>
                <li class="mb-3 mr-3">
                  <a
                    href=""
                    class="rounded-md border border-transparent tracking-widest bg-green-300 py-1 px-3 text-xs text-center font-bold text-rose-900 hover:opacity-90"
                    >Tìm Truyện
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>`;
  },
};
export default Footer;
