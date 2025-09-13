import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { TrayectoriaComponent } from './components/trayectoria/trayectoria.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { SignatureComponent } from './components/signature/signature.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
];

@NgModule({
  declarations: [
    IndexComponent,
    NavbarComponent,
    HeroComponent,
    ProyectosComponent,
    TrayectoriaComponent,
    SkillsComponent,
    AboutComponent,
    SignatureComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class MainModule { }
