import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentSection: string = '';
  isDarkTheme: boolean = true; // Por defecto, el tema oscuro (luna) está activado
  isMenuCollapsed: boolean = true;  // Variable para controlar el estado del menú


  ngOnInit(): void {

    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sections = [
      'hero',
      'proyectos',
      'experience',
      'skills',
      'about'
    ];

    let currentSection = '';

    const offset = window.innerHeight / 3;

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top + offset < window.innerHeight && rect.bottom - offset > 0) {
          currentSection = id;
        }
      }
    });

    this.currentSection = currentSection;
  }


  @HostListener('window:resize', [])
  onWindowResize(): void {

  }


  // Desplaza la vista a la sección especificada
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calcula la posición del desplazamiento con un offset
      const offset = 80; // Ajusta este valor para establecer el espacio extra deseado
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

      // Desplazamiento suave con offset
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });

      // Cierra el menú en pantallas pequeñas después de hacer clic
      this.isMenuCollapsed = true;
    }
  }



}
