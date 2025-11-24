// This script injects Structured Data (Schema.org) for better SEO visibility
document.addEventListener("DOMContentLoaded", function() {
    const schemaScript = document.getElementById('biznext-schema');
    if (schemaScript) {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BIZNEXT26 AND SON'S",
            "image": "img/bizNextLogo.jpg", 
            "telephone": "+2348101074328",
            "email": "umariliyasusani212@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "245 Badawa Gidan Salati Street",
                "addressLocality": "Kano",
                "addressCountry": "NG"
            },
            "founder": {
                "@type": "Person",
                "name": "Umar Ilyasu Sani"
            },
            "description": "Leading provider of innovative solar solutions, accelerating the adoption of clean, renewable energy across Nigeria.",
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "21:00"
            },
            "priceRange": "$$"
        };
        
        schemaScript.textContent = JSON.stringify(structuredData);
    }
});