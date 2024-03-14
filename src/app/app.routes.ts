import { Routes } from '@angular/router';
import { PortfolioModule } from './portfolio/portfolio.module';

export const routes: Routes = [
{path:'portfolio', loadChildren:()=>import('./portfolio/portfolio.module').then(m=>m.PortfolioModule)}  //lazy loading of portfolio

];
