<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Create Partner User</h2>
    </div>
    <form>
      <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-6">
          <!-- BEGIN: Form Layout -->
          <div class="intro-y box p-5">
            <div>
              <label for="crud-form-1" class="form-label">Firt Name</label>
              <input
                id="crud-form-1"
                type="text"
                class="form-control w-full"
                placeholder="name"
                required
              />
            </div>

            <div class="mt-3">
              <label for="crud-form-3" class="form-label">Last Name</label>
              <div class="input-group">
                <input
                  id="crud-form-3"
                  type="text"
                  class="form-control"
                  placeholder="location"
                  aria-describedby="input-group-1"
                  required
                />
              </div>
            </div>
            <div class="mt-3">
              <label class="form-label">ID</label> /
              <label class="form-label">DOB</label>
              <div class="sm:grid grid-cols-3 gap-2">
                <div class="input-group">
                  <select
                  class="form-select mt-2 sm:mr-2"
                  aria-label="Default select example"
                >
                  <option>ID</option>
                  <option>Drice licence</option>
                  <option>Voter card</option>
                </select>
                </div>
                <div class="input-group mt-2 sm:mt-0">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Doc Number"
                    aria-describedby="input-group-4"
                  />
                </div>
                <div class="input-group mt-2 sm:mt-0">
                  <input type="date" class="datepicker form-control w-36 block mx-auto" data-single-mode="true"> 
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
              <label for="crud-form-3" class="form-label">Partner</label>
              <div class="input-group">
                <select
                  class="form-select mt-2 sm:mr-2"
                  aria-label="Default select example"
                >
                  <option>Shiffa Clinic</option>
                  <option>HCM</option>
                  <option>Privada</option>
                </select>
              </div>
            </div>
            <div class="mt-3">
              <label for="crud-form-3" class="form-label">Role</label>
              <div class="input-group">
                <input
                  id="crud-form-3"
                  type="text"
                  class="form-control"
                  placeholder="role name"
                  aria-describedby="input-group-1"
                />
              </div>
            </div>

            <div class="mt-3">
              <label class="form-label">Contacts</label>
              <div class="sm:grid grid-cols-3 gap-2">
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="contact 1"
                    aria-describedby="input-group-3"
                  />
                </div>
                <div class="input-group mt-2 sm:mt-0">
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
