import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }   from './login/login.component';
import { ProfileComponent }   from './profile/profile.component';
import { ProfileEditComponent} from './profile-edit/profile-edit.component';
import { RegisterComponent }   from './register/register.component';
import { OfficialCardComponent }   from './official-card/official-card.component';
import { DnasComponent }   from './dnas/dnas.component';
import { ContactListComponent}   from './contact-list/contact-list.component';


const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent  },
  { path: 'profile', component: ProfileComponent  },
  { path: 'profile-edit', component: ProfileEditComponent  },
  { path: 'official-card', component: OfficialCardComponent   },
  { path: 'dnas', component:  DnasComponent    },
  { path: 'contact-list', component:  ContactListComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
