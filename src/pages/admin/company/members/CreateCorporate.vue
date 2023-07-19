<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Create Customer Corporate</h2>
    </div>
    <form>
      <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-6">
          <!-- BEGIN: Form Layout -->
          <div class="intro-y box p-5">
            <div class="grid grid-cols-2 gap-6 mt-3">
              <div>
                <label for="crud-form-3" class="form-label">First name</label>
                <div class="input-group">
                  <input
                    id="crud-form-3"
                    type="text"
                    class="form-control"
                    placeholder="first name"
                    aria-describedby="input-group-1"
                    required
                  />
                </div>
              </div>
              <div>
                <label for="crud-form-4" class="form-label">Last name</label>
                <div class="input-group">
                  <input
                    id="crud-form-4"
                    type="text"
                    class="form-control"
                    placeholder="last name"
                    aria-describedby="input-group-1"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="mt-3">
              <label for="crud-form-3" class="form-label">Email</label>
              <div class="input-group">
                <input
                  id="crud-form-3"
                  type="text"
                  class="form-control"
                  placeholder="email"
                  aria-describedby="input-group-1"
                />
              </div>
            </div>
            <div class="mt-3">
              <label for="crud-form-3" class="form-label">Company</label>
              <div class="input-group">
                <select
                    class="form-select mt-2 sm:mr-2"
                    aria-label="Default select example"
                  >
                    <option>EDM</option>
                    <option>CDM</option>
                    <option>CFM</option>
                  </select>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-6 mt-3">
              <div>
                <label for="crud-form-3" class="form-label">Gender</label>
                <div class="input-group" >
                  <select
                    class="form-select mt-2 sm:mr-2"
                    aria-label="Default select example"
                  >
                    <option>M</option>
                    <option>W</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label for="crud-form-4" class="form-label">Relation</label>
                <div class="input-group">
                  <select
                    class="form-select mt-2 sm:mr-2"
                    aria-label="Default select example"
                  >
                    <option>Main member</option>
                    <option>Wife</option>
                    <option>Daughter</option>
                  </select>
                </div>
              </div>
              <div>
                <label for="crud-form-4" class="form-label">Relation Owner</label>
                <div class="input-group">
                  <select
                    class="form-select mt-2 sm:mr-2"
                    aria-label="Default select example"
                  >
                    <option>Gualter Fone</option>
                    <option>Marco Hama</option>
                    <option>Gino Mussagy</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mt-3">
              <label class="form-label">Contacts</label>
              <div class="grid grid-cols-3 gap-2 sm:grid-cols-1 sm:gap-0">
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="contact 1"
                    aria-describedby="input-group-3"
                  />
                </div>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="contact 2"
                    aria-describedby="input-group-4"
                  />
                </div>
              </div>
            </div>

            <div class="text-right mt-5">
              <button type="button" class="btn btn-outline-secondary w-24 mr-1">
                Cancel
              </button>
              <button type="button" class="btn btn-primary w-24">Save</button>
            </div>
          </div>
          <!-- END: Form Layout -->
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
