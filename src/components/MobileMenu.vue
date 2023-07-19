<template>
  <div>
    <div class="mobile-menu md:hidden">
      <div class="mobile-menu-bar">
        <a href="#" class="flex mr-auto">
          <img alt="logo" class="w-6" src="../logo.png" />
        </a>
        <a href="javascript:;" class="mobile-menu-toggler">
          <!-- <i
            data-lucide="bar-chart-2"
            class="w-8 h-8 text-white transform -rotate-90"
          ></i> -->

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-bar-chart-2 w-8 h-8 text-white transform -rotate-90"
          >
            <line x1="18" x2="18" y1="20" y2="10" />
            <line x1="12" x2="12" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="14" />
          </svg>
        </a>
      </div>
      <div class="scrollable">
        <a href="javascript:;" class="mobile-menu-toggler">
          <i
            data-lucide="x-circle"
            class="w-8 h-8 text-white transform -rotate-90"
          ></i>
        </a>
        <ul class="scrollable__content py-2">
          <li>
            <a href="javascript:;" class="menu">
              <div class="menu__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-home"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div class="menu__title">Dashboard</div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="menu">
              <div class="menu__icon"><i data-lucide="box"></i></div>
              <div class="menu__title">
                Menu Layout
                <i data-lucide="chevron-down" class="menu__sub-icon"></i>
              </div>
            </a>
            <ul class="">
              <li>
                <a href="javascript:;" class="menu menu--active">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Side Menu</div>
                </a>
              </li>
              <li>
                <a
                  href="simple-menu-light-dashboard-overview-1.html"
                  class="menu menu--active"
                >
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Simple Menu</div>
                </a>
              </li>
              <li>
                <a
                  href="top-menu-light-dashboard-overview-1.html"
                  class="menu menu--active"
                >
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Top Menu</div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" class="menu">
              <div class="menu__icon"><i data-lucide="shopping-bag"></i></div>
              <div class="menu__title">
                E-Commerce
                <i data-lucide="chevron-down" class="menu__sub-icon"></i>
              </div>
            </a>
            <ul class="">
              <li>
                <a href="side-menu-light-categories.html" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Categories</div>
                </a>
              </li>
              <li>
                <a href="side-menu-light-add-product.html" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Add Product</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">
                    Products
                    <i data-lucide="chevron-down" class="menu__sub-icon"></i>
                  </div>
                </a>
                <ul class="">
                  <li>
                    <a href="side-menu-light-product-list.html" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Product List</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-light-product-grid.html" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Product Grid</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">
                    Transactions
                    <i data-lucide="chevron-down" class="menu__sub-icon"></i>
                  </div>
                </a>
                <ul class="">
                  <li>
                    <a
                      href="side-menu-light-transaction-list.html"
                      class="menu"
                    >
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Transaction List</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="side-menu-light-transaction-detail.html"
                      class="menu"
                    >
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Transaction Detail</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">
                    Sellers
                    <i data-lucide="chevron-down" class="menu__sub-icon"></i>
                  </div>
                </a>
                <ul class="">
                  <li>
                    <a href="side-menu-light-seller-list.html" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Seller List</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-light-seller-detail.html" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Seller Detail</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="side-menu-light-reviews.html" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Reviews</div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="side-menu-light-inbox.html" class="menu">
              <div class="menu__icon"><i data-lucide="inbox"></i></div>
              <div class="menu__title">Inbox</div>
            </a>
          </li>
          <li>
            <a href="side-menu-light-file-manager.html" class="menu">
              <div class="menu__icon"><i data-lucide="hard-drive"></i></div>
              <div class="menu__title">File Manager</div>
            </a>
          </li>
          <li>
            <a href="side-menu-light-point-of-sale.html" class="menu">
              <div class="menu__icon"><i data-lucide="credit-card"></i></div>
              <div class="menu__title">Point of Sale</div>
            </a>
          </li>
          <li>
            <a href="side-menu-light-chat.html" class="menu">
              <div class="menu__icon"><i data-lucide="message-square"></i></div>
              <div class="menu__title">Chat</div>
            </a>
          </li>
          <li>
            <a href="side-menu-light-post.html" class="menu">
              <div class="menu__icon"><i data-lucide="file-text"></i></div>
              <div class="menu__title">Post</div>
            </a>
          </li>
          <li>
            <a href="side-menu-light-calendar.html" class="menu">
              <div class="menu__icon"><i data-lucide="calendar"></i></div>
              <div class="menu__title">Calendar</div>
            </a>
          </li>
          <li class="menu__devider my-6"></li>
          <li>
            <a href="javascript:;" class="menu">
              <div class="menu__icon"><i data-lucide="edit"></i></div>
              <div class="menu__title">
                Crud <i data-lucide="chevron-down" class="menu__sub-icon"></i>
              </div>
            </a>
            <ul class="">
              <li>
                <a href="side-menu-light-crud-data-list.html" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Data List</div>
                </a>
              </li>
              <li>
                <a href="side-menu-light-crud-form.html" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Form</div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" class="menu">
              <div class="menu__icon"><i data-lucide="users"></i></div>
              <div class="menu__title">
                Users <i data-lucide="chevron-down" class="menu__sub-icon"></i>
              </div>
            </a>
            <ul class="">
              <li>
                <a href="side-menu-light-users-layout-1.html" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Layout 1</div>
                </a>
              </li>
              <li>
                <a href="side-menu-light-users-layout-2.html" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Layout 2</div>
                </a>
              </li>
              <li>
                <a href="side-menu-light-users-layout-3.html" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Layout 3</div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" class="menu">
              <div class="menu__icon"><i data-lucide="trello"></i></div>
              <div class="menu__title">
                Profile
                <i data-lucide="chevron-down" class="menu__sub-icon"></i>
              </div>
            </a>
            <ul class="">
              <li>
                <a href="side-menu-light-profile-overview-1.html" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Overview 1</div>
                </a>
              </li>
              <li>
                <a href="side-menu-light-profile-overview-2.html" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Overview 2</div>
                </a>
              </li>
              <li>
                <a href="side-menu-light-profile-overview-3.html" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Overview 3</div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" class="menu">
              <div class="menu__icon"><i data-lucide="layout"></i></div>
              <div class="menu__title">
                Pages <i data-lucide="chevron-down" class="menu__sub-icon"></i>
              </div>
            </a>
            <ul class="">
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">
                    Wizards
                    <i data-lucide="chevron-down" class="menu__sub-icon"></i>
                  </div>
                </a>
                <ul class="">
                  <li>
                    <a href="side-menu-light-wizard-layout-1.html" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 1</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-light-wizard-layout-2.html" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 2</div>
                    </a>
                  </li>
                  <li>
                    <a href="side-menu-light-wizard-layout-3.html" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 3</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">
                    Blog
                    <i data-lucide="chevron-down" class="menu__sub-icon"></i>
                  </div>
                </a>
                <ul class="">
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 1</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 2</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 3</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">
                    Pricing
                    <i data-lucide="chevron-down" class="menu__sub-icon"></i>
                  </div>
                </a>
                <ul class="">
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 1</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 2</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">
                    Invoice
                    <i data-lucide="chevron-down" class="menu__sub-icon"></i>
                  </div>
                </a>
                <ul class="">
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 1</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 2</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">
                    FAQ
                    <i data-lucide="chevron-down" class="menu__sub-icon"></i>
                  </div>
                </a>
                <ul class="">
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 1</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 2</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Layout 3</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Login</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Register</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Error Page</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Update profile</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Change Password</div>
                </a>
              </li>
            </ul>
          </li>
          <li class="menu__devider my-6"></li>
          <li>
            <a href="javascript:;" class="menu">
              <div class="menu__icon"><i data-lucide="inbox"></i></div>
              <div class="menu__title">
                Components
                <i data-lucide="chevron-down" class="menu__sub-icon"></i>
              </div>
            </a>
            <ul class="">
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">
                    Table
                    <i data-lucide="chevron-down" class="menu__sub-icon"></i>
                  </div>
                </a>
                <ul class="">
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Regular Table</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Tabulator</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">
                    Overlay
                    <i data-lucide="chevron-down" class="menu__sub-icon"></i>
                  </div>
                </a>
                <ul class="">
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Modal</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Slide Over</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Notification</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Tab</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Accordion</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Button</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Alert</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Progress Bar</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Tooltip</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Dropdown</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Typography</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Icon</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Loading Icon</div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" class="menu">
              <div class="menu__icon"><i data-lucide="sidebar"></i></div>
              <div class="menu__title">
                Forms <i data-lucide="chevron-down" class="menu__sub-icon"></i>
              </div>
            </a>
            <ul class="">
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Regular Form</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Datepicker</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Tom Select</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">File Upload</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">
                    Wysiwyg Editor
                    <i data-lucide="chevron-down" class="menu__sub-icon"></i>
                  </div>
                </a>
                <ul class="">
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Classic</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Inline</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Balloon</div>
                    </a>
                  </li>
                  <li>
                    <a href="sjavascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Balloon Block</div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" class="menu">
                      <div class="menu__icon"><i data-lucide="zap"></i></div>
                      <div class="menu__title">Document</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Validation</div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" class="menu">
              <div class="menu__icon"><i data-lucide="hard-drive"></i></div>
              <div class="menu__title">
                Widgets
                <i data-lucide="chevron-down" class="menu__sub-icon"></i>
              </div>
            </a>
            <ul class="">
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Chart</div>
                </a>
              </li>
              <li>
                <a href="side-menu-light-slider.html" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Slider</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="menu">
                  <div class="menu__icon"><i data-lucide="activity"></i></div>
                  <div class="menu__title">Image Zoom</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
