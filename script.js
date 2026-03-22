/* Antony */
// Search box
const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-box');

searchBtn.addEventListener('click', function() {
  
  searchBox.classList.toggle('active');
  
  if (searchBox.classList.contains('active')) {
    searchBox.focus();
  }
});

// User dropdown
let userDropdown = document.getElementById("user-dropdown");
let menuicon = document.getElementById("menuicon");

menuicon.addEventListener("click", function(event) {
    event.stopPropagation();
    userDropdown.classList.toggle("active");
});

document.addEventListener("click", function(event) {
    if (!userDropdown.contains(event.target) && event.target !== menuicon) {
        userDropdown.classList.remove("active");
    }
});





/* Mohith */



/* Imman */
const servicesData = {
  "Bath & Brush": {
    desc: "Our Bath & Brush service includes a complete cleansing routine to keep your pet fresh and healthy.",
    details: [
      "Warm water bath with pet-safe shampoo",
      "Blow drying and gentle brushing",
      "Removal of loose fur and dirt",
      "Light fragrance application"
    ],
    price: "₹250",
    img: "https://images.unsplash.com/photo-1558788353-f76d92427f16"
  },
  "Hair Trimming": {
    desc: "Keep your pet stylish and comfortable with professional hair trimming.",
    details: [
      "Breed-specific haircut styles",
      "Face, paws, and hygiene trimming",
      "Safe scissor and clipper techniques",
      "Finishing touch for a neat look"
    ],
    price: "₹150",
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
  },

  "Nail Clipping": {
    desc: "Regular nail trimming prevents pain and posture issues.",
    details: [
      "Careful nail cutting",
      "Avoiding quick (sensitive area)",
      "Smoothing rough edges",
      "Stress-free handling"
    ],
    price: "₹150",
    img: "https://plus.unsplash.com/premium_photo-1707353402061-c31b6ba8562e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  "Ear Cleaning": {
    desc: "Maintain ear hygiene and prevent infections.",
    details: [
      "Gentle ear cleaning solution",
      "Wax and dirt removal",
      "Inspection for infection signs",
      "Odor control treatment"
    ],
    price: "₹200",
    img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  "Deluxe Bath & Brush": {
    desc: "Premium grooming experience for ultimate cleanliness.",
    details: [
      "Deep cleansing shampoo",
      "Conditioner treatment",
      "Coat shine enhancement",
      "Long-lasting fragrance"
    ],
    price: "₹500",
    img: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },

  "Full Haircut & Style": {
    desc: "Complete grooming makeover tailored to your pet.",
    details: [
      "Custom haircut styling",
      "Face and paw shaping",
      "Full body trim",
      "Finishing and styling"
    ],
    price: "₹400",
    img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987"
  },

  "Nail Trimming": {
    desc: "Safe and professional nail trimming service.",
    details: [
      "Precision trimming",
      "Paw handling care",
      "Quick and painless process",
      "Suitable for all breeds"
    ],
    price: "₹200",
    img: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9"
  },

  "Deep Ear Cleaning": {
    desc: "Advanced ear care for sensitive pets.",
    details: [
      "Deep cleansing solution",
      "Removal of buildup",
      "Anti-bacterial treatment",
      "Prevention of ear infections"
    ],
    price: "₹300",
    img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
  }
};

document.querySelectorAll(".card button").forEach(btn => {
  btn.addEventListener("click", function () {
    const title = this.parentElement.querySelector("h3").innerText;
    const data = servicesData[title];

    document.getElementById("panelTitle").innerText = title;
    document.getElementById("panelDesc").innerText = data.desc;
    document.getElementById("panelPrice").innerText = data.price;
    document.getElementById("panelImg").src = data.img;

    // Add detailed list
    const list = document.getElementById("panelDetails");
    list.innerHTML = "";
    data.details.forEach(item => {
      const li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });

    document.getElementById("servicePanel").classList.add("active");
  });
});

function closePanel() {
  document.getElementById("servicePanel").classList.remove("active");
}

function bookService() {
  openBooking();
}

function openBooking() {
  document.getElementById("bookingModal").classList.add("active");
}

function closeBooking() {
  document.getElementById("bookingModal").classList.remove("active");
}

//booking//
const form = document.getElementById("bookingForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("🎉 Appointment Booked Successfully!");

    form.reset();      
    closeBooking(); 
  });
}





/* Rithu */
// Dog button
document.querySelector(".tab-a").addEventListener("click", function () {
    document.querySelector(".dog").scrollIntoView({
        behavior: "smooth"
    });
});

// Cat button
document.querySelector(".tab-b").addEventListener("click", function () {
    document.querySelector(".cat").scrollIntoView({
        behavior: "smooth"
    });
});

// Bird button
document.querySelector(".tab-c").addEventListener("click", function () {
    document.querySelector(".birds").scrollIntoView({
        behavior: "smooth"
    });
});

// Aquarium  button
document.querySelector(".tab-d").addEventListener("click", function () {
    document.querySelector(".aquarium ").scrollIntoView({
        behavior: "smooth"
    });
});

// Aquarium  button
document.querySelector(".tab-e").addEventListener("click", function () {
    document.querySelector(".pets ").scrollIntoView({
        behavior: "smooth"
    });
}

);




/* Viji */