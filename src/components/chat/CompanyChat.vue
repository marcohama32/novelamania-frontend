<template>
  <div>
    <div class="pr-1">
      <div class="box p-5 mt-5">
        <div class="relative text-slate-500">
          <input
            type="text"
            class="form-control py-3 px-4 border-transparent bg-slate-100 pr-10"
            placeholder="Search for messages or users..."
          />
          <i
            class="w-4 h-4 hidden sm:absolute my-auto inset-y-0 mr-3 right-0"
            data-lucide="search"
          ></i>
        </div>
        <button type="button" class="btn btn-primary w-full mt-3">
          Invite Friends
        </button>
      </div>
    </div>
    <div class="chat__user-list overflow-y-auto scrollbar-hidden pr-1 pt-1">
      <div class="mt-4 text-slate-500">A</div>
      <div class="cursor-pointer box relative flex items-center p-5 mt-5">
        <div class="w-12 h-12 flex-none image-fit mr-1">
          <img
            alt="Midone - HTML Admin Template"
            class="rounded-full"
            src="dist/images/profile-13.jpg"
          />
          <div
            class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"
          ></div>
        </div>
        <div class="ml-2 overflow-hidden">
          <div class="flex items-center">
            <a href="#" class="font-medium">Charlize Theron</a>
          </div>
          <div class="w-full truncate text-slate-500 mt-0.5">
            Last seen 2 hours ago
          </div>
        </div>
        <div class="dropdown ml-auto">
          <a
            class="dropdown-toggle w-5 h-5 block"
            href="javascript:;"
            aria-expanded="false"
            data-tw-toggle="dropdown"
          >
            <i data-lucide="more-horizontal" class="w-5 h-5 text-slate-500"></i>
          </a>
          <div class="dropdown-menu w-40">
            <ul class="dropdown-content">
              <li>
                <a href="#" class="dropdown-item">
                  <i data-lucide="share-2" class="w-4 h-4 mr-2"></i> Share
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  <i data-lucide="copy" class="w-4 h-4 mr-2"></i> Copy Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cursor-pointer box relative flex items-center p-5 mt-5">
        <div class="w-12 h-12 flex-none image-fit mr-1">
          <img
            alt="Midone - HTML Admin Template"
            class="rounded-full"
            src="dist/images/profile-6.jpg"
          />
          <div
            class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"
          ></div>
        </div>
        <div class="ml-2 overflow-hidden">
          <div class="flex items-center">
            <a href="#" class="font-medium">Denzel Washington</a>
          </div>
          <div class="w-full truncate text-slate-500 mt-0.5">
            Last seen 2 hours ago
          </div>
        </div>
        <div class="dropdown ml-auto">
          <a
            class="dropdown-toggle w-5 h-5 block"
            href="javascript:;"
            aria-expanded="false"
            data-tw-toggle="dropdown"
          >
            <i data-lucide="more-horizontal" class="w-5 h-5 text-slate-500"></i>
          </a>
          <div class="dropdown-menu w-40">
            <ul class="dropdown-content">
              <li>
                <a href="#" class="dropdown-item">
                  <i data-lucide="share-2" class="w-4 h-4 mr-2"></i> Share
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  <i data-lucide="copy" class="w-4 h-4 mr-2"></i> Copy Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 text-slate-500">B</div>
      <div class="cursor-pointer box relative flex items-center p-5 mt-5">
        <div class="w-12 h-12 flex-none image-fit mr-1">
          <img
            alt="Midone - HTML Admin Template"
            class="rounded-full"
            src="dist/images/profile-7.jpg"
          />
          <div
            class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"
          ></div>
        </div>
        <div class="ml-2 overflow-hidden">
          <div class="flex items-center">
            <a href="#" class="font-medium">Arnold Schwarzenegger</a>
          </div>
          <div class="w-full truncate text-slate-500 mt-0.5">
            Last seen 2 hours ago
          </div>
        </div>
        <div class="dropdown ml-auto">
          <a
            class="dropdown-toggle w-5 h-5 block"
            href="javascript:;"
            aria-expanded="false"
            data-tw-toggle="dropdown"
          >
            <i data-lucide="more-horizontal" class="w-5 h-5 text-slate-500"></i>
          </a>
          <div class="dropdown-menu w-40">
            <ul class="dropdown-content">
              <li>
                <a href="#" class="dropdown-item">
                  <i data-lucide="share-2" class="w-4 h-4 mr-2"></i> Share
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  <i data-lucide="copy" class="w-4 h-4 mr-2"></i> Copy Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cursor-pointer box relative flex items-center p-5 mt-5">
        <div class="w-12 h-12 flex-none image-fit mr-1">
          <img
            alt="Midone - HTML Admin Template"
            class="rounded-full"
            src="dist/images/profile-6.jpg"
          />
          <div
            class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"
          ></div>
        </div>
        <div class="ml-2 overflow-hidden">
          <div class="flex items-center">
            <a href="#" class="font-medium">Hugh Jackman</a>
          </div>
          <div class="w-full truncate text-slate-500 mt-0.5">
            Last seen 2 hours ago
          </div>
        </div>
        <div class="dropdown ml-auto">
          <a
            class="dropdown-toggle w-5 h-5 block"
            href="javascript:;"
            aria-expanded="false"
            data-tw-toggle="dropdown"
          >
            <i data-lucide="more-horizontal" class="w-5 h-5 text-slate-500"></i>
          </a>
          <div class="dropdown-menu w-40">
            <ul class="dropdown-content">
              <li>
                <a href="#" class="dropdown-item">
                  <i data-lucide="share-2" class="w-4 h-4 mr-2"></i> Share
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  <i data-lucide="copy" class="w-4 h-4 mr-2"></i> Copy Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cursor-pointer box relative flex items-center p-5 mt-5">
        <div class="w-12 h-12 flex-none image-fit mr-1">
          <img
            alt="Midone - HTML Admin Template"
            class="rounded-full"
            src="dist/images/profile-13.jpg"
          />
          <div
            class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"
          ></div>
        </div>
        <div class="ml-2 overflow-hidden">
          <div class="flex items-center">
            <a href="#" class="font-medium">Al Pacino</a>
          </div>
          <div class="w-full truncate text-slate-500 mt-0.5">
            Last seen 2 hours ago
          </div>
        </div>
        <div class="dropdown ml-auto">
          <a
            class="dropdown-toggle w-5 h-5 block"
            href="javascript:;"
            aria-expanded="false"
            data-tw-toggle="dropdown"
          >
            <i data-lucide="more-horizontal" class="w-5 h-5 text-slate-500"></i>
          </a>
          <div class="dropdown-menu w-40">
            <ul class="dropdown-content">
              <li>
                <a href="#" class="dropdown-item">
                  <i data-lucide="share-2" class="w-4 h-4 mr-2"></i> Share
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class="dropdown-item">
                  <i data-lucide="copy" class="w-4 h-4 mr-2"></i> Copy Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
};
</script>
