function generateData(){
    $.getJSON("res/data/basic.json", function (data) {
        const socials = data.social;
        const address = data.address;
        const roles = data.roles;
    
        $("#pName").html(data.name);
    
        $("#role_1").html(roles.role_1);
        $("#role_2").html(roles.role_2);
    
        $("#socials").html(`
                <li><a target="_blank" href="${socials.facebook}"><i class="fa fa-facebook"></i></a></li>
                <li><a target="_blank" href="${socials.linkedin}"><i class="fa fa-linkedin"></i></a></li>
                <li><a target="_blank" href="${socials.behance}"><i class="fab fa-behance"></i></a></li>
                <li><a target="_blank" href="${socials.dribble}"><i class="fa fa-dribbble"></i></a></li>
                <li><a target="_blank" href="${socials.github}"><i class="fa fa-github-alt"></i></a></li>
            `);
    
        $("#about").html(`
            <div class="row">
                <div class="three columns">
                    <img class="profile-pic" src='${data.photo}' alt="" />
                </div>
                <div class="nine columns main-col">
                    <h2>About Me</h2>
                    <p>
                        ${data.about}
                    </p>
                    <div class="row">
                        <div class="columns contact-details">
                            <h2>Contact Details</h2>
                            <p class="address">
                                <span>${data.name}</span><br>
                                <span>${address.village}, ${address.PO} - ${address.pcode}, ${address.upojila}<br>
                                ${address.district}, ${address.state}, ${address.country}
                                </span><br>
                                <span>${data.email}</span><br>
                                <span>${data.phone}</span><br>
                            </p>
                        </div>
                        <div class="columns download">
                            <p>
                                <a href="${data.resume}" class="button" download="HadiuzzamanBappy"><i class="fa fa-download"></i>Get a Copy</a>
                            </p>
                        </div>
                    </div> <!-- end row -->
                </div> <!-- end .main-col -->
            </div>
            `);
    
        $("#social_footer").html(`
                <li><a target="_blank" href="${socials.facebook}"><i class="fa fa-facebook"></i></a></li>
                <li><a target="_blank" href="${socials.linkedin}"><i class="fa fa-linkedin"></i></a></li>
                <li><a target="_blank" href="${socials.behance}"><i class="fab fa-behance"></i></a></li>
                <li><a target="_blank" href="${socials.dribble}"><i class="fa fa-dribbble"></i></a></li>
                <li><a target="_blank" href="${socials.github}"><i class="fa fa-github-alt"></i></a></li>
            `);
    
        $("#address_contact").html(`
                <span>${data.name}</span><br>
                <span>${address.village}, ${address.PO} - ${address.pcode}, ${address.upojila}<br>
                ${address.district}, ${address.state}, ${address.country}
                </span><br>
                <span>${data.email}</span><br>
                <span>${data.phone}</span><br>
            `);
    });
    
    // Make an AJAX request to fetch the JSON data
    $.getJSON("res/data/education.json", function (data) {
        // Iterate through the JSON array and append each item to the HTML
        $.each(data.educations, function (index, item) {
            var html = `
            <div class="row item">
                <div class="twelve columns">
                    <h3>${item.type} in ${item.subject}</h3>
                    <p class="info">${item.institution} <span>&bull;</span> <em class="date"> ${item.time}</em></p>
                    <p>
                        ${item.about}
                    </p>
                </div>
            </div>
            `;
            $("#education").append(html);
        });
    });
    
    // Make an AJAX request to fetch the JSON data
    $.getJSON("res/data/experience.json", function (data) {
        // Iterate through the JSON array and append each item to the HTML
        $.each(data, function (index, item) {
            var html = `
            <div class="row item">
                <div class="twelve columns">
                    <h3> <a href="${item.link}" target="_blank"> ${item.organization}</a></h3>
                    <p class="info"> ${item.role} <span>&bull;</span> <em class="date">${item.start} to ${item.end}</em></p>
                    <p>
                        ${item.about}
                    </p>
                </div>
            </div>
            `;
            $("#experience").append(html);
        });
    });
    
    // Make an AJAX request to fetch the JSON data
    $.getJSON("res/data/portfolio.json", function (data) {
        // Iterate through the JSON array and append each item to the HTML
        $.each(data, function (index, item) {
            var html = `
        <div class="columns portfolio-item">
            <div class="item-wrap">
            <a href="#${item.displayid}" title="">
                <img alt="" src="${item.thumbnail}">
                <div class="portfolio-item-meta">
                    <h5>${item.name}</h5>
                    <p>${item.type}</p>
                </div>
                <div class="overlay">
                </div>
                <div class="link-icon"><i class="icon-plus"></i></div>
            </a>
            </div>
        </div> <!-- item end -->
        `;
            $("#portfolio-wrapper").append(html);
    
            var html_modal = `
        <div id="${item.displayid}" class="popup-modal mfp-hide">
           <img class="scale-with-grid" src="${item.coverphoto}" alt="" />
           <div class="description-box">
              <h4>${item.name}</h4>
              <p>${item.details}</p>
              <span class="categories"><i class="fa fa-tag"></i>${item.type}</span>
           </div>
           <div class="link-box">
              <a href="${item.link}" target="_blank">Details</a>
              <a class="popup-modal-dismiss">Close</a>
           </div>
        </div><!-- modal-01 End -->
        `;
            $("#innerPortfolio").append(html_modal);
        });
    });
    
    // Make an AJAX request to fetch the JSON data
    $.getJSON("res/data/testimonial.json", function (data) {
        // Iterate through the JSON array and append each item to the HTML
        $.each(data, function (index, item) {
            var html = `
            <li>
                <blockquote>
                    <p>
                        ${item.comment}
                    </p>
                    <cite>${item.name} (${item.organization})</cite>
                </blockquote>
            </li>
            `;
            $("#testimonial_slide").append(html);
        });
    });
}

generateData();

function callbackFunc(entries)
{
  entries.forEach(entry => {
   //  var txt = entry.target.id + " visibility: " + entry.isIntersecting;
   if(entry.isIntersecting){
      switch(entry.target.id){
         case 'figma':
            $('#figma').addClass('figma-start');
            break;
         case 'adobexd':
            $('#adobexd').addClass('adobexd-start');
            break;
         case 'photoshop':
            $('#photoshop').addClass('photoshop-start');
            break;
         case 'illustrator':
            $('#illustrator').addClass('illustrator-start');
            break;
         case 'css':
            $('#css').addClass('css-start');
            break;
         case 'html5':
            $('#html5').addClass('html5-start');
            break;
         case 'javascript':
            $('#javascript').addClass('javascript-start');
            break;
      }
   }
   else{
      switch(entry.target.id){
         case 'figma':
            $('#figma').removeClass('figma-start');
            break;
         case 'adobexd':
            $('#adobexd').removeClass('adobexd-start');
            break;
         case 'photoshop':
            $('#photoshop').removeClass('photoshop-start');
            break;
         case 'illustrator':
            $('#illustrator').removeClass('illustrator-start');
            break;
         case 'css':
            $('#css').removeClass('css-start');
            break;
         case 'html5':
            $('#html5').removeClass('html5-start');
            break;
         case 'javascript':
            $('#javascript').removeClass('javascript-start');
            break;
      }
   }
    
   //  document.getElementById('log').appendChild(document.createTextNode(txt));
  });
}

let observer = new IntersectionObserver(callbackFunc);

observer.observe(document.getElementById('figma'));
observer.observe(document.getElementById('html5'));
observer.observe(document.getElementById('photoshop'));
observer.observe(document.getElementById('illustrator'));
observer.observe(document.getElementById('css'));
observer.observe(document.getElementById('javascript'));