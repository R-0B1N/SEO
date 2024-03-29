// Fetch the JSON file
window.onload = function() {
    fetch('../data.json')
    .then(response => response.json())
    .then(data => {

        // Access the data in the JSON file
        let meta = data.meta;
        let banner = data.banner;
        let about = data.about;
        let blog = data.blogs;
        let gallery = data.gallery;
        let faq = data.faq;
        // ... and so on for all sections of your JSON ...

        // Update the HTML elements
        let metaTag = document.querySelector('meta[name="description"]');

        // If the meta tag doesn't exist yet, create it
        if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.name = "description";
            document.head.appendChild(metaTag);
        }
        metaTag.content = meta.description;

        document.title = `${meta.title}`

        document.getElementById('banner').innerHTML = `
        <h1>
            ${banner.h1}
        </h1>
        <a href="#about2" class="">
            ${banner.button[0]}
        </a>
        `;

        document.getElementById('bannerimage').innerHTML = `
        <div class="carousel-item active">
            <img src="data:image/jpg;base64,${banner.image}" alt="" />
        </div>
        <div class="carousel-item active">
            <img src="data:image/jpg;base64,${banner.image}" alt="" />
        </div>
        <div class="carousel-item active">
            <img src="data:image/jpg;base64,${banner.image}" alt="" />
        </div>
        `;

        document.getElementById("aboutimage").innerHTML = `
        <img src="data:image/jpeg;base64,${about.image}" alt="" />      
        `;
        
        document.getElementById('about1').innerHTML = `
        <div class="heading_container heading_center">
            <h2>
              About Us
            </h2>
        </div>
        <p>
            ${about.p}
        </p>
        <a href="about.html">
            Read More
        </a>
        `;
        
        document.getElementById('galleryheader').innerHTML = `${gallery.h2}`;

        document.getElementById('gallery').innerHTML = `
        <div class="box-1">
          <div class="img-box b-1">
          <img src="data:image/jpeg;base64,${gallery.image[0]}" alt="image.alt"/>
            <div class="btn-box">
              <a href="" class="btn-1">
                <i class="fa fa-share-alt" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div class="img-box b-2">
          <img src="data:image/jpeg;base64,${gallery.image[1]}" alt="image.alt"/>
            <div class="btn-box">
              <a href="" class="btn-1">
                <i class="fa fa-share-alt" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="box-2">
          <div class="box-2-top">
            <div class="img-box b-3">
            <img src="data:image/jpeg;base64,${gallery.image[2]}" alt="image.alt"/>
              <div class="btn-box">
                <a href="" class="btn-1">
                  <i class="fa fa-share-alt" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="img-box b-2">
            <img src="data:image/jpeg;base64,${gallery.image[3]}" alt="image.alt"/>
            <div class="btn-box">
              <a href="" class="btn-1">
                <i class="fa fa-share-alt" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          </div>
        </div>
        <div class="box-3">
          <div class="img-box b-1">
          <img src="data:image/jpeg;base64,${gallery.image[4]}" alt="image.alt"/>
            <div class="btn-box">
              <a href="" class="btn-1">
                <i class="fa fa-share-alt" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div class="img-box b-2">
          <img src="data:image/jpeg;base64,${gallery.image[5]}" alt="image.alt"/>
            <div class="btn-box">
              <a href="" class="btn-1">
                <i class="fa fa-share-alt" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        `;



        // document.getElementById('about').innerHTML = `<h2>${about.h2}</h2><p>${about.p}</p>`;
        // ... and so on for all sections of your JSON ...

        document.getElementById('blogtitle').innerHTML = `${blog.h2}`;
        document.getElementById('blogt').innerHTML = `${blog.h2}`;
        document.getElementById('blogt2').innerHTML = `${blog.h2}`;

        blog.post.forEach(post => {
            document.getElementById('blogpost').innerHTML += `     
            <div class="col-sm-6 mx-auto">
              <div class="team_box">
                <div class="header-box">
                  <h3>${post.h3}</h3>
                </div>
                <div class="detail-box ">
                    <p>
                        ${post.p}
                    </p>
                </div>
              </div>
            </div>
            `;
            
        });

        document.getElementById('faqtitle').innerHTML = `${faq.h2}`;

        faq.question.forEach(q => {
            document.getElementById('faq').innerHTML += `            
            <div class="faq_item">
              <h3 class="faq_question" onclick="toggleAnswer('faq${q.id}')">
                ${q.h3}
              </h3>
              <p class="faq_answer" id="faq${q.id}" style="display:none;">
                ${q.p}
              </p>
            `;
        });

    }).catch((error) => {
        console.error('Error:', error);
    });
}