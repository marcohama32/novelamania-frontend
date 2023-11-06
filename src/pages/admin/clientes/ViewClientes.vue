<template>
  <div>
    <div class="page-titles">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="javascript:void(0)">Adicionar Clientes</a>
        </li>
      </ol>
    </div>
    <div class="col-xl-6 col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="basic-form">
            <form>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label class="form-label">Nome</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Apelido</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Tipo documento</label>
                  <select
                    id="inputState"
                    class="default-select form-control wide"
                  >
                    <option selected>Selecionar...</option>
                    <option>BI</option>
                    <option>Passaport</option>
                    <option>Cartao de Eleitor</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Numero</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label class="form-label">Actividade</label>
                  <select
                    id="inputState"
                    class="default-select form-control wide"
                  >
                    <option selected>Choose...</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">Codigo</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="mb-3">
              
              </div>
              <button type="button" class="btn btn-primary me-2">Gravar</button>
           
               <button type="button" class="btn btn-light ml-6">Cancelar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
