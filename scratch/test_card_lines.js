const fs = require('fs');

// Card texts
const cards4Lines = [
    {
        title: "Sofia's Enchanted<br>Garden Gala",
        meta: "Rosewood Conservatory · Full-Service Production",
        desc: "Cascading wisteria floral arches, live harpist entrance, a customized eight-couple court waltz, candlelit courtyard seating, and an artisan blush dessert bar."
    },
    {
        title: "Valentina's Royal<br>Heritage Ballroom",
        meta: "Grand Starlight Ballroom · Complete Coordination",
        desc: "A classic royal blue and gold affair honoring traditional Catholic mass coordination, coronation tiara blessing, shoe change ritual, and a bilingual DJ set."
    },
    {
        title: "Camila's Modern<br>Starlight Lounge",
        meta: "Skyline Glasshouse · Design &amp; Timeline Direction",
        desc: "Metropolitan chic aesthetic featuring ambient candlelit lounge seating, an interactive mirror photo booth, curated mocktail bar, and a sparkler send-off finale."
    }
];

const cards3Lines = [
    {
        title: "Sofia's Enchanted<br>Garden Gala",
        meta: "Rosewood Conservatory · Full-Service Production",
        desc: "Cascading wisteria floral arches, live harpist entrance, customized court waltz, and an artisan dessert bar."
    },
    {
        title: "Valentina's Royal<br>Heritage Ballroom",
        meta: "Grand Starlight Ballroom · Complete Coordination",
        desc: "A classic royal blue and gold affair honoring traditional blessing rituals, court dance waltz, and a lively DJ set."
    },
    {
        title: "Camila's Modern<br>Starlight Lounge",
        meta: "Skyline Glasshouse · Design &amp; Timeline Direction",
        desc: "Metropolitan chic aesthetic featuring ambient candlelit lounge seating, mirror photo booth, and a sparkler send-off."
    }
];

console.log("=== 4 LINES OPTION ===");
cards4Lines.forEach((c, idx) => {
    console.log(`Card ${idx+1}:`);
    console.log(`  Title: ${c.title.replace('<br>', ' / ')}`);
    console.log(`  Meta chars: ${c.meta.length}`);
    console.log(`  Desc chars: ${c.desc.length}`);
    console.log(`  Desc text: ${c.desc}`);
});

console.log("\n=== 3 LINES OPTION ===");
cards3Lines.forEach((c, idx) => {
    console.log(`Card ${idx+1}:`);
    console.log(`  Title: ${c.title.replace('<br>', ' / ')}`);
    console.log(`  Meta chars: ${c.meta.length}`);
    console.log(`  Desc chars: ${c.desc.length}`);
    console.log(`  Desc text: ${c.desc}`);
});

