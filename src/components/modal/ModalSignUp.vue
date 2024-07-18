<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"
    style="width:100%">
    Sign Up
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class=" modal-content mx-auto" style="width:100%">
        <div class="mx-auto">
          <img src="../../assets/signup.gif">
        </div>
        <div class="mx-auto text-center px-5">
          <h3>Successfully Register</h3>
          <p style="color:#747264">Thank you for register at Vintage. Start find to your favorite pre-loved product here</p>
        </div>
        <div class="mx-auto py-3">
            <button type="submit" class="btn btn-success" data-bs-dismiss="modal" @click="$emit('register')">Go to Home Page</button>
          
        </div>
      </div>
    </div>
  </div>
</template>