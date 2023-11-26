<template>
    <div>
        <!--**********************************
            Content body start
        ***********************************-->

				<div class="page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="javascript:void(0)">Cobrança</a></li>
						
					</ol>
                </div>
                <!-- row -->
               <div class="row">
					
							
				
					<div class="col-xl-4 col-lg-12 col-xxl-4 col-sm-12">
						<div class="card">
                            <div class="card-body text-center ai-icon  text-primary">
								<!-- <svg id="rocket-icon" class="my-2" viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
									<line x1="3" y1="6" x2="21" y2="6"></line>
									<path d="M16 10a4 4 0 0 1-8 0"></path>
								</svg> -->
                                 <img src="../../common/images/OIP.jpeg" class="feather feather-user"  style="max-width: 50%" alt="">
								<h5 class="my-2">Selecionar M-pesa como método de pagamento</h5>
								<router-link to="/cobrancampesa" class="btn my-2 btn-primary btn-lg px-4 mt-4"><i class="fa fa-usd"></i> M-pesa</router-link>
							</div>
						</div>
					</div>
					<div class="col-xl-4 col-lg-12 col-xxl-4 col-sm-12">
						<div class="card">
                            <div class="card-body text-center ai-icon  text-primary">
								<!-- <svg id="rocket-icon" class="my-2" viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
									<line x1="3" y1="6" x2="21" y2="6"></line>
									<path d="M16 10a4 4 0 0 1-8 0"></path>
								</svg> -->
                                 <img src="../../common/images/dinheiro.jpg" class="feather feather-user"  style="max-width: 50%" alt="">
								<h5 class="my-2">Selecionar dinheiro em espécie como método de pagamento</h5>
								<router-link to="/cobrancadinheiro" class="btn my-2 btn-primary btn-lg px-4 mt-4"><i class="fa fa-usd"></i> Dinheiro</router-link>
							</div>
						</div>
					</div>
					
                </div>
      
        <!--**********************************
            Content body end
        ***********************************-->
    </div>
</template>