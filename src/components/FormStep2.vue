<template >
  <form class="part">
    <div class="form-row">
      <div class="form-group col-md-8">
        <label for="owner-name">持卡人姓名</label>
        <input
          type="text"
          class="form-control"
          id="owner-name"
          placeholder="John Doe"
        />
      </div>
      <div class="form-group col-md-8">
        <label for="card-number">卡號</label>
        <input
          type="text"
          class="form-control"
          id="card-number"
          placeholder="1111-2222-3333-4444"
        />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="expiration-date">有效期限</label>
        <input
          type="password"
          class="form-control"
          id="expiration-date"
          placeholder="MM/YY"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="card-code">CVC / CCV</label>
        <input
          type="text"
          class="form-control"
          id="card-code"
          placeholder="123"
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