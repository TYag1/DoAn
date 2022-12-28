const Header = {
  render() {
    return `
        <div class="container mx-auto px-32">
      <div class="header border-b pb-8 grid grid-cols-2 grid-flow-col gap-8">
        <div class="header__left flex flex-row items-center">
          <div class="header__logo flex-1">

          <img
            src="https://res.cloudinary.com/phucdev/image/upload/v1667039756/d4aecd2fbf5049ed833cb7c073ea19bb_louhck.png"
          />
          </div>
          <div class="header__left--item flex-1 text-right">
            <ion-icon name="heart-outline"></ion-icon>
            <span class="pl-2">Danh sách</span>
            <ion-icon name="chevron-down-outline" class="pl-2"></ion-icon>
          </div>
          <div class="header__left--item flex-1 text-right">
            <ion-icon name="list-outline"></ion-icon>
            <span class="pl-2"> Thể loại</span>
            <ion-icon name="chevron-down-outline" class="pl-2"></ion-icon>
          </div>
        </div>
        <div class="header__right flex flex-row items-center justify-items-end">
          <div class="header__right--btn basis-2/5 w-full flex flex-row justify-end mr-8">
            <p
              class="px-3 py-2 bg-slate-500 rounded-lg border-2 w-2/4 text-center border-gray-400 hover:text-green-600 cursor-pointer"
            >
              Lọc Truyện
            </p>
          </div>
          <div class="header__right--search basis-3/5 w-full">
            <input
              id="email-address"
              name="search"
              type="text"
              autocomplete="email"
              required
              class="block w-full appearance-none bg-slate-200 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Nhập tên Truyện hoặc Tác giả..."
            />
          </div>
        </div>
      </div>
    </div>`;
  },
};
export default Header;
