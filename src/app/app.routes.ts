import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersFormComponent } from './components/customers/customers-form/customers-form.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { PacksFormComponent } from './components/packs/packs-form/packs-form.component';
import { PacksListsComponent } from './components/packs/packs-lists/packs-lists.component';
import { CustomersListsComponent } from './components/customers/customers-lists/customers-lists.component';
import { UsersFormComponent } from './components/users/users-form/users-form/users-form.component';
import { UsersListsComponent } from './components/users/users-lists/users-lists/users-lists.component';
import { SupscriptionsFormComponent } from './components/supscriptions/supscriptions-form/supscriptions-form.component';
import { SupscriptionsListsComponent } from './components/supscriptions/supscriptions-lists/supscriptions-lists.component';
import { StatisticsComponent } from './components/statistics/statistics/statistics.component';

// configurer les routes de l'application
export const routes: Routes = [
  // rediriger vers la pge home par défaut
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: HomeComponent },

  // rediriger vers la page login
  { path: 'login', component: LoginFormComponent },

  // rediriger vers le dashboard après la connexion
//   { path: 'app-dashbord', component: DashbordComponent,},

//   // customers

//   // rediriger vers la page d'affichage de customers
//   { path: 'customer-form', component: CustomersFormComponent },

//   // rediriger vers la page d'affichage des customers
//   { path: 'customers-list', component: CustomersListsComponent },

//   // end

//   // packs

//   // rediriger vers la page d'ajout des packs
//   { path: 'packs-form', component: PacksFormComponent },

//   // rediriger vers la page d'affichage des packs
//   { path: 'packs-lists', component: PacksListsComponent },

//   // end

// //   supscriptions
// { path: "supscriptions-form", component:SupscriptionsFormComponent },

// { path: "supscriptions-lists", component: SupscriptionsListsComponent },

// // end

// // users
// // rediriger vers la page d'ajout des utilisateurs
// { path : 'users-form', component:UsersFormComponent },

// // rediriger vers la page d'affichage des utilisateurs
// { path : 'users-lists', component:UsersListsComponent },
// // end

{ path: 'app-dashbord', component: DashbordComponent, children: [
    { path: 'customer-form', component: CustomersFormComponent },
    { path: 'customers-lists', component: CustomersListsComponent },
    { path: 'customer-edit/:customerId', component: CustomersFormComponent },
    { path: 'pack-edit/:packId', component: PacksFormComponent },
    { path: 'packs-form', component: PacksFormComponent },
    { path: 'packs-lists', component: PacksListsComponent },
    { path: 'supscriptions-form', component: SupscriptionsFormComponent },
    { path: 'supscriptions-lists', component: SupscriptionsListsComponent },
    { path: 'users-form', component: UsersFormComponent },
    { path: 'users-lists', component: UsersListsComponent },
    { path: 'app-statistics', component: StatisticsComponent },
  ]},

];
