import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CadastroClienteComponent} from './components/cadastro-cliente/cadastro-cliente.component';
import {ContentIconsComponent} from './components/template/content-icons/content-icons.component';
import { CadastroVeiculoComponent } from './components/cadastro-veiculo/cadastro-veiculo.component';
import { ManutencaoPrenventComponent } from './components/manutencao-prenvent/manutencao-prenvent.component';
import { OrdemServicoComponent } from './components/ordem-servico/ordem-servico.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import {ClienteCrudComponent} from './components/cliente-crud/cliente-crud.component';
import {ListaClienteComponent} from './components/lista-cliente/lista-cliente.component';
import { VeiculoCrudComponent} from './components/veiculo-crud/veiculo-crud.component';
import { ListaVeiculoComponent} from './components/lista-veiculo/lista-veiculo.component';
import { OrdemServicoCrudComponent } from './components/ordem-servico-crud/ordem-servico-crud.component';
import { ListaOrdemServicoComponent } from './components/lista-ordem-servico/lista-ordem-servico.component';

//array com rotas da aplicação
const routes: Routes = [{
  path: "",
  component: ContentIconsComponent
},{
  path: "clientes",
  component: CadastroClienteComponent
},{
  path: "veiculos",
  component: CadastroVeiculoComponent
},{
  path: "manutencaopreventiva",
  component: ManutencaoPrenventComponent
},{   
  path: "ordemservico",
  component: OrdemServicoComponent
},{
  path: "relatorios",
  component: RelatorioComponent
},{
  path: "painel/cliente",
  component: ClienteCrudComponent
},{
  path: "lista/cliente",
  component: ListaClienteComponent
},{
  path: "painel/veiculo",
  component: VeiculoCrudComponent
},{
  path: "lista/veiculo",
  component: ListaVeiculoComponent
},{
  path: "painel/ordemServico",
  component: OrdemServicoCrudComponent
},{
  path: "lista/ordemServico",
  component: ListaOrdemServicoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
