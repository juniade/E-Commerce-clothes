<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"
    style="width:100%" @click="$emit('addItem')">
    Order now
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class=" modal-content mx-auto" style="width:100%">
        <div class="mx-auto">
          <img src="../../assets/checkout.gif">
        </div>
        <div class="mx-auto text-center px-5">
          <h3> Order # placed successfully</h3>
          <p style="color:#747264">{{ data }} Thank you for do online shipping ata vintage. you can track and see your order on transaction history menu</p>
        </div>
        <hr>
        <div class=" px-5 py-3 d-grid gap-2">
            <button type="submit" class="btn btn-outline-success mx-5" data-bs-dismiss="modal" @click="$emit('push','shooping')">Go Shooping</button>
            <button type="submit" class="btn btn-success mx-5" data-bs-dismiss="modal" @click="$emit('push','history')">Cek history</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    data:String
}
)

</script>