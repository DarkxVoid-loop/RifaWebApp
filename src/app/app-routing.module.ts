import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './admin/dashboard/pages/loginPage/loginPage.component';
import { AuthGuard } from './http-services/account/shared/auth.guard';
import { AdminGuardGuard } from './http-services/admin/admin-guard.guard';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { RegulamentoComponent } from './pages/regulamento/regulamento.component';
import { CheckoutComponent } from './pages/rifa/model/pagamentos/checkout/checkout.component';
import { EmprestimoComponent } from './pages/rifa/model/pagamentos/emprestimo/emprestimo.component';
import { RifaComponent } from './pages/rifa/rifa.component';
import { LoginComponent } from './pages/userAcess/login/login.component';
import { RecoveryPasswordComponent } from './pages/userAcess/recoveryPassword/recoveryPassword.component';
import { RegisterComponent } from './pages/userAcess/register/register.component';
import { UserAcessComponent } from './pages/userAcess/userAcess.component';
import { ExtractComponent } from './pages/userMain/extract/extract.component';
import { ProfileComponent } from './pages/userMain/profile/profile.component';
import { UserMainComponent } from './pages/userMain/userMain.component';


const routes: Routes = [
  { path: '', component: DefaultComponent, data: { title: 'Shopping' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Rif4Books' } },
  {
    path: 'regulamento',
    loadChildren: () => import('./admin/dashboard/regulamento-dashboard/regulamento.module').then(m => m.RegulamentoModule)
  },
    {
    path: 'rifas',
    loadChildren: () => import('./admin/dashboard/rifa-dashboard/rifa.module').then(m => m.RifaModule)
  },
  {
    path: 'sorteios',
    loadChildren: () => import('./admin/dashboard/sorteio-dashboard/sorteio.module').then(m => m.SorteioModule)
  },
   {
    path: 'pagamentos',
    loadChildren: () => import('./admin/dashboard/pagamentos-dashboard/pagamentos.module').then(m => m.PagamentosModule)
  },
  {
    path: 'premios',
    loadChildren: () => import('./admin/dashboard/premios-dashboard/premios.module').then(m => m.PremiosModule)
  },{
    path: 'pagamentos',
    loadChildren: () => import('./admin/dashboard/pagamentos-dashboard/pagamentos.module').then(m => m.PagamentosModule)
  },
  {
    path: 'emprestimos',
    loadChildren: () => import('./admin/dashboard/emprestimos-dashboard/emprestimos.module').then(m => m.EmprestimosModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AdminGuardGuard]
  },
/*   {
    path: 'clientes',
    loadChildren: () => import('./admin/dashboard/clientes-dashboard/clientes.module').then(m => m.ClientesModule)
  }, */


  { path: 'termos', component: RegulamentoComponent, data: { title: 'Rif4Books - Regulamento' } },

  { path: 'rifa/:id', component: RifaComponent, data: { title: 'Rif4Books - Cartela de Rifa' }, children:
    [
      {path: 'checkout', component: CheckoutComponent},
      {path: 'emprestimo', component: EmprestimoComponent}
    ]
  },


  { path: 'admin', component: LoginPageComponent, data: { title: "admin" } },

  {
    path: 'userAcess',
    component: UserAcessComponent,
    children:
      [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent, data: { title: 'Rif4Books - Login' } },
        { path: 'register', component: RegisterComponent, data: { title: 'Rif4Books - Registar-se' } },
        { path: 'recoveryPassword', component: RecoveryPasswordComponent, data: { title: 'Rif4Books - Recuperar senha' } },
      ]
  },
  {
    path: 'user',
    component: UserMainComponent,
    children:
      [
        { path: '', redirectTo: 'profile', pathMatch: 'full' },
        { path: 'perfil', component: ProfileComponent, data: { title: 'Rif4Books - Perfil' } },
        { path: 'extrato', component: ExtractComponent, data: { title: 'Rif4Books - extrato' } },
      ],
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
