document.addEventListener('DOMContentLoaded', function() {
    const api= 'goldapi-10i1gj19lwsz41sv-io'; // کلید API خود را جایگزین کنید
    const url = `https://www.goldapi.io/api/XAU/AED`;

    async function fetchGoldPrice() {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-access-token': api,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            const goldaed= data.price;
            const askaed=data.ask
            const bidaed=data.bid
            document.getElementById('goldaed').innerHTML = `<p> ${goldaed} </p>`;
            document.getElementById('askaed').innerHTML = `<p>  ${askaed} </p>`;
            document.getElementById('bidaed').innerHTML = `<p>  ${bidaed} </p>`;
        } catch (error) {
            document.getElementById('gold-price').innerHTML = `<p>خطا در دریافت قیمت</p>`;
        }
    }

    // Fetch the gold price initially
    fetchGoldPrice();

    // Set an interval to fetch the gold price every 5 minutes (300000 milliseconds)
    setInterval(fetchGoldPrice, 300000); // هر 5 دقیقه یک بار
});