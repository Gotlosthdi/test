const packages = {
    prime: { name: "Nanotek Prime", price: "245,000", warranty: "3 Years", desc: "185 Microns • 6 Year Durability" },
    revive: { name: "NanoLink Revive", price: "270,000", warranty: "7 Years", desc: "185 Microns • 10 Year Durability" },
    eclipse: { name: "NanoLink Eclipse", price: "350,000", warranty: "10 Years", desc: "200 Microns • 12 Year Durability" }
};

function updatePrice(pkgKey) {
    // Update Buttons
    document.querySelectorAll('.pkg-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Update Content
    const pkg = packages[pkgKey];
    document.getElementById('film-name').innerText = pkg.name;
    document.getElementById('price-display').innerText = pkg.price;
    document.getElementById('warranty-display').innerText = pkg.warranty;
    document.getElementById('film-desc').innerText = pkg.desc;
}