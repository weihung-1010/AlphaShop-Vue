<template >
  <form class="part">
    <div class="form-row">
      <div class="form-group col-md-4">
        <label for="gender">稱謂</label>
        <select id="gender" class="form-control">
          <option selected>先生</option>
          <option>女士</option>
        </select>
      </div>
      <div class="form-group col-md-8">
        <label for="name">姓名</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="請輸入姓名"
        />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="cell-phone">電話</label>
        <input
          type="password"
          class="form-control"
          id="cell-phone"
          placeholder="請輸入行動電話"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="請輸入電子郵件"
        />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-4">
        <label for="city">縣市</label>
        <select id="city" class="form-control">
          <option value="">請選擇縣市</option>
          <option value="male">新北市</option>
          <option value="female">高雄市</option>
        </select>
      </div>

      <div class="form-group col-md-8">
        <label for="address">地址</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="請輸入地址"
        />
      </div>
    </div>
  </form>
</template>

<style scoped>
.part {
  height: 300px;
}
</style>