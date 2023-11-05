class ZooToonsNavbar extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
            nav {
                width: 100%;
                background-color: #000;
            }
            
            nav > ul {
                list-style: none;
                display: flex;
                padding: 0;
                justify-content: center;
            }
            
            nav > ul > li {
                margin: 1rem 0.5rem;
            }

            a {
                color: lime;
            }

            a:visited {
                color: green;
            }
        
        </style>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </nav>
      `;
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    // Add methods and properties to define your custom element's behavior
}

customElements.define('zoo-toons-navbar', ZooToonsNavbar);