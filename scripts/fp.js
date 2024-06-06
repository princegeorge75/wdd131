document.addEventListener('DOMContentLoaded', function() {
    // Handle the contact form submission
    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });

    //handle the last modified in the footer
    const lastModified = document.querySelector('#lastModified');
    lastModified.innerHTML = (document.lastModified);

    // Add images with captions to the About Us page
    const imageGallery = document.querySelector('.image-gallery');
    if (imageGallery) {
        const images = [
            { src: 'images/ourcampus.jpg', caption: 'Our Campus' },
            { src: 'images/graduation.jpg', caption: 'Graduation Ceremony' },
            { src: 'images/studentlife.jpg', caption: 'Student Life' }
        ];
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.loading = 'lazy';
            const captionElement = document.createElement('div');
            captionElement.className = 'caption';
            captionElement.textContent = image.caption;
            const container = document.createElement('div');
            container.appendChild(imgElement);
            container.appendChild(captionElement);
            imageGallery.appendChild(container);
        });
    }

    // activate the hamburger button

    const hamButton = document.querySelector("#hamburger");
    const ul = document.querySelector("ul");
    
    hamButton.addEventListener("click", () => {
        ul.classList.toggle("open-ul");
        hamButton.classList.toggle("open");
    });

    // Add course items to the Courses page
    const courseList = document.querySelector('.course-list');
    if (courseList) {
        const courses = [
            { title: 'Tourism & Travel Foundation', description: 'Learn the fundamentals of being a tourism and travel agent.' },
            { title: 'Airport Operations', description: 'Explore the world of airport vicinities. What happens and what do people do at the airport building and in the aeroplane parking yard.' },
            { title: 'Cargo Handling', description: 'Prepare for a career in the Air Cargo handling.' },
        ];
        courses.forEach(course => {
            const titleElement = document.createElement('h3');
            titleElement.textContent = course.title;
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = course.description;
            const container = document.createElement('div');
            container.className = 'course-item';
            container.appendChild(titleElement);
            container.appendChild(descriptionElement);
            courseList.appendChild(container);
        });
    }

    // Add news items to the News page
    const newsList = document.querySelector('.news-list');
    if (newsList) {
        const newsItems = [
            { title: 'New Semester Begins', description: 'Join us for the start of a new academic year.', date: 'June 1, 2024' },
            { title: 'Workshop on AI', description: 'Attend our workshop on artificial intelligence and machine learning.', date: 'June 10, 2024' },
            { title: 'Graduation Ceremony', description: 'Celebrate the achievements of our graduates.', date: 'July 15, 2024' }
        ];
        newsItems.forEach(news => {
            const titleElement = document.createElement('h3');
            titleElement.textContent = news.title;
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = news.description;
            const dateElement = document.createElement('small');
            dateElement.textContent = news.date;
            const container = document.createElement('div');
            container.className = 'news-item';
            container.appendChild(titleElement);
            container.appendChild(descriptionElement);
            container.appendChild(dateElement);
            newsList.appendChild(container);
        });
    }
});
