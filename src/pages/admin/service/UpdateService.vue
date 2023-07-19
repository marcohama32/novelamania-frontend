<template>
    <div>
      <form>
        <div class="intro-y flex items-center mt-8 mb-4">
          <h2 class="text-lg font-medium mr-auto">Update service</h2>
        </div>
        <div>
          <label for="regular-form-1" class="form-label">Service name</label>
          <input
            id="regular-form-1"
            type="text"
            class="form-control"
            placeholder="name"
          />
        </div>
  
        <div class="mt-3">
          <label for="regular-form-3" class="form-label">Service price</label>
          <input
            id="regular-form-3"
            type="number"
            class="form-control"
            placeholder="price"
          />
        </div>
        <div class="mt-3">
          <label for="regular-form-4" class="form-label">Service Description</label>
          <textarea
            rows="5"
            id="regular-form-4"
            class="form-control"
            placeholder="descriprion"
          ></textarea>
          <div class="form-help">
            write a description that characterize this service.
          </div>
          <div class="mt-6">
            <button class="btn btn-primary">Update service</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>
  