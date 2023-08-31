// Sample product data array
const products = [
    {
        id: 1,
        name: "Bussiness Card",
        description: "Design: Choose from classic to creative templates.",
        image: "./images/Assets/BussinessCard.jpeg",
        fullDescription: [
            "Design: Choose from classic to creative templates.",
            "Customization: Personalize with logos, colors, and fonts.",
            "Quality: High-grade materials and professional printing.",
            "Size: Standard 3.5 x 2 inches, with optional shapes.",
            "Paper: Matte, glossy, textured, or specialty finishes."
        ]
    },
    {
        id: 2,
        name: "Letterhead",
        description: "Acid-free paper for durability",
        image: "./images/Assets/letterhead.png",
        fullDescription: [
            " Size: 21.3 x 30 cm",
            "Full colour printing",
            "Available in 120 gsm smooth finish matte paper and 100 gsm Excel Bond paper",
            "Acid-free paper for durability",
           
        ]
    },
    {
        id: 3,
        name: "Envelopes",
        description: "Acid-free smooth, matte, uncoated, bright white paper",
        image: "./images/Assets/Envelope.jpeg",
        fullDescription: [
            " Acid-free smooth, matte, uncoated, bright white paper",
            " Available in 90 gsm and 110 gsm paper stock options",
            "Standard sizes from 14.6 x 11 cm to 22.9 x 16.2 cm",
            " Pre-printed address / return address option",          
        ]
    },
    {
        id: 4,
        name: "Folder & Docker",
        description: "Give printed notes or handouts a polished, professional look.",
        image: "./images/Assets/folder.jpeg",
        fullDescription: [
            " 3 sizes options ",
            " Available in 250 gsm, & 280 gsm paper with glossy finish",
            "Vivid, full-colour printing",
            "Customisable Pockets"         
        ]
    },
    {
        id: 5,
        name: "Flyer",
        description: "Material: 60 GSM White invoice, with pink and yellow color copies",
        image: "./images/Assets/Flyer.jpeg",
        fullDescription: [
            "No Fold Flyers available in 8 sizes in 148 gsm glossy paper",
            "Bi-fold, Tri-fold and Z-Fold available in 148 gsm glossy paper",
            "2-sided full-colour pamphlet printing available",
            "Share product & general information of your business"         
        ]
    },
    {
        id: 6,
        name: "Poster",
        description: " Perfect on walls, doors, windows, notice boards and more",
        image: "./images/Assets/Poster.jpeg",
        fullDescription: [
            "3 poster sizes.",
            "Glossy, Matte, Magnetic, Premium glossy and Glossy Card stock available",
            " Perfect on walls, doors, windows, notice boards and more"         
        ]
    },
    {
        id: 7,
        name: "Banner",
        description: "Promote your brand with durable, lightweight banners",
        image: "./images/Assets/Banner.jpeg",
        fullDescription: [
            "Select your own custom size from the size drop down and design your banner or choose one of the 9 standard sizes available!",
            "Pre-designed Banner templates available for occasions like Birthday, Promotional Events etc.",
            "Vertical or horizontal designed banner layouts available (both Indoor & outdoor options)",
            "Sharp, full-colour printing",   
            "Durable material (Vinyl Flex)",
            "Hang your banners easily with optional metal eyelets (strongly recommended – they make it a lot easier!)"       
        ]
    }
    // Add more product objects as needed
];

// Function to display product details in the modal
function showProductDetails(productId) {
    const modal = document.getElementById("productDetailsModal");
    modal.style.display = "flex";
    
    // Find the selected product in the products array
    const selectedProduct = products.find(product => product.id === productId);
    
    // Update modal content with product details
    document.getElementById("modalProductImage").src = selectedProduct.image;
    document.getElementById("modalProductName").textContent = selectedProduct.name;
    document.getElementById("modalProductDescription").innerHTML = formatProductDescription(selectedProduct.fullDescription);
    document.getElementById("modalProductPrice").textContent = selectedProduct.price;
}

// Format product description as a list of points
function formatProductDescription(descriptionArray) {
    const descriptionList = descriptionArray.map(point => `<li>${point}</li>`).join("");
    return `<ul>${descriptionList}</ul>`;
}

// Rest of the code remains unchanged


// Function to close the product details modal
function closeProductDetails() {
    const modal = document.getElementById("productDetailsModal");
    modal.style.display = "none";
}

// Function to populate the product list dynamically
function populateProductList() {
    const productContainer = document.querySelector(".product-list");
    
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.onclick = () => showProductDetails(product.id);
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        
        productContainer.appendChild(productCard);
    });
}

// Call the populateProductList function to load products

