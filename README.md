<img src="images/Priority versions.png" alt="Priority Banking Versions" style="width: 100%; object-fit: contain; margin-bottom: 100px;" />

<h1 class="text-center">Priority Banking Responsive Landing Page</h1>

<h2>Visit the website:</h2>
<a href="https://www.prioritybb.com.br">https://www.prioritybb.com.br</a>

<h2>Project Overview</h2>

<p>This project is a responsive landing page created for Priority Banking Limitada, a financial solutions company. It was my first solo project, designed and developed from scratch without external assistance. The landing page is optimized for mobile, tablet, and desktop devices.</p>

<p>The client's initial request involved a slideshow to showcase their services and attract new leads. I proposed a comprehensive website that would introduce the company, explain their services, capture leads, and provide a user-friendly experience across all devices. As the experts says,
the costumer had a problem so i solved it using my habilities and learned from it.</p>

<h2>Technologies Used</h2>

<ul>
  <li>
    HTML
    <br>
    CSS
    <br>
    JavaScript
    <br>
    jQuery
    <br>
    Canva
  </li>
</ul>

<h2>Key Learnings</h2>

<ul>
  <li>
    <h3>Layout and Design</h3>
    <p>
      To create a modern layout, I incorporated images, slides, and color palettes provided by the client. The landing page is divided into four sections: About, Services, Values, and Contact. The footer features a QR code for the company's professional WhatsApp contact and additional contact methods.
    </p>
  </li>
  <li>
    <h3>Flexbox and Grid</h3>
    <p>
      Flexbox and Grid properties were used to organize and position elements on the screen. Flexbox properties like "display," "justify-content," "flex-direction," and "align-items" were used to control element positioning. Grid properties like "display: grid," "grid-template-columns," "gap," and "grid-columns" were employed for specific layouts. 
      This project helped me understand the appropriate use cases for each approach and how to effectively combine them for optimal content positioning.
    </p>
  </li>
  <li>
    <h3>Accordion FAQ (Previously Implemented Feature)</h3>
    <p>
      To address frequently asked questions about the company's services, I implemented an accordion-style FAQ section. This involved creating question and answer elements in HTML, styling them with CSS (including display properties to control visibility), and using JavaScript (jQuery) to ensure only one answer is visible at a time. The script utilizes basic logic to show/hide content based on user interaction.
    </p>
    <h3>JavaScript</h3>
    
    function mostrarResposta(elementoResposta) {
      if (elementoResposta.is(':visible')) {
        elementoResposta.slideUp();
        elementoResposta.prev('.accordion-title').removeClass('active');
      } else {
        $('.accordion-content').slideUp();
        $('.accordion-title').removeClass('active');
        elementoResposta.slideDown();
        elementoResposta.prev('.accordion-title').addClass('active');
      }
    }

    $(document).ready(function () {
      $('.accordion-title').click(function () {
        const elementoResposta = $(this).next('.accordion-content');
        mostrarResposta(elementoResposta);
      });
    });
    
  </li>
  <li>
    <h3>Form Submission</h3>
    <p>
      A core objective of the landing page was to generate leads for the company. To achieve this, I created a form that captures user information such as name, email, phone number, and preferred service. Upon successful form submission with all required fields filled, the data is sent to the website owner's email address. 
      HTML input elements utilize the "name" property for data identification. The form itself includes "action" and "method" attributes (the latter always set to "POST" for sending data to the server). Additionally, a hidden input field with the "name" "_redirect" and the website address as the "value" ensures users are redirected back to the homepage after successful submission.
    </p>
    <h3>HTML</h3>

    <div class="form">
      <form action="https://submit-form.com/EXAMPLE" method="POST">
        <input type="hidden" name="_redirect" value="http://www.prioritybb.com.br" />
          <div class="input-container ic1">
            <label class="iLabel">EXAMPLE</label>
        <input type="text" class="input" name="EXAMPLE" required>
          </div>
      </form>
    </div>


    
  </li>
</ul>
<ul>
  <li> <h3>Mobile first and responsivity:</h3>
    <p>When researching responsive design in CSS, I discovered the "mobile-first" approach. This involves initially designing for smaller screens and then adapting the layout for larger devices. This method simplifies the 
process of adjusting media queries. To enhance user experience across different devices, I created four responsive versions of the website based on screen width.</p>

```
@media screen and (max-width: 640px)
@media screen and (min-width: 641px) and (max-width: 1023px)
@media screen and (min-width: 1024px)
@media screen and (orientation: landscape) and (max-width: 1024px)
```
  </li>
</ul>
<ul>
  <li>
    <h3>Clean code and code patterns:</h3>
    <p>As a beginner at this themes i used some trys of it. Names of divs, consts and functions are ever direct to the point, "always leave the campsite in a better condition than the state which you found it in" and only the necessary comments in each section  and part of the code.</p>
  </li>
</ul>

          
          
    
