declare var bootstrap: any;
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit  {

  ngAfterViewInit(): void {
    const copyEmailBtn = document.getElementById('copyEmailBtn') as HTMLElement | null;

    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        const email = 'pablolopezlujan01@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          const tooltip = new bootstrap.Tooltip(copyEmailBtn, {
            title: '¡Copiado!',
            trigger: 'manual',
            placement: 'right'
          });

          tooltip.show();

          setTimeout(() => {
            tooltip.hide();
          }, 2000);
        }).catch(err => {
          console.error('Error al copiar el correo al portapapeles: ', err);
        });
      });
    }
  }
}
