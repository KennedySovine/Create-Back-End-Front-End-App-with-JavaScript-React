const api_key = "p2Idk5hZhVIQC-Xi8w4gXFOTxyS6Q0Is76_1pSw07pdfU3nOrgAs44PS6HKxYrgeqjC4k2ChdCI5fc5sniuFDdj_oeP8jUbuuV_W61LiffI9MKu-ObbXmkNyciByaHYx";

export const retrieveBusinesses = async (term, location, sortBy) => {
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    const endpoint = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    const response = await fetch(
        corsProxy + endpoint,
        {
            headers: {
                Authorization: `Bearer ${api_key}`,
                'Content-Type': 'application/json'
            }
        }
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.businesses.map(business => ({
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
    }));
}