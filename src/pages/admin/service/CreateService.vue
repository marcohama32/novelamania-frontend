<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Create a Service</h2>
    </div>
    <form>
      <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-6">
          <!-- BEGIN: Form Layout -->
          <div class="intro-y box p-5">
            <div>
              <label for="crud-form-1" class="form-label">Service name</label>
              <input
                id="crud-form-1"
                type="text"
                class="form-control w-full"
                placeholder="name"
              />
            </div>
            <div>
              <label for="crud-form-1" class="form-label">Service price</label>
              <input
                id="crud-form-1"
                type="number"
                class="form-control w-full"
                placeholder="price"
              />
            </div>

            <div>
              <label for="crud-form-1" class="form-label"
                >Service description</label
              >
              <textarea
                id="crud-form-1"
                rows="7"
                type="text"
                class="form-control w-full"
                placeholder="description"
              ></textarea>
              <div class="form-help">
                write a description that characterize this service.
              </div>
            </div>
            <div class="mt-3">
              <label>Active Status</label>
              <div class="form-switch mt-2">
                <input type="checkbox" class="form-check-input" />
              </div>
            </div>

            <div class="text-right mt-5">
              <button type="button" class="btn btn-outline-secondary w-24 mr-1">
                Cancel
              </button>
              <button type="button" class="btn btn-primary w-24">Save</button>
            </div>
          </div>
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
